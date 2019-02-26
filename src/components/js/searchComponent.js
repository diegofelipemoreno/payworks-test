import {FilterComponent} from './filterComponent.js';
import {ResultsComponent} from './resultsComponent.js';

import {makeRequest} from '../../service.js';
import * as utils from '../../utils.js';

/**
 * Search Component
 */
export class SearchComponent {
  /**
   * Creates a tab content component.
   * @param {Element} element DOM element.
   */
  constructor(element) {
    /**
     * Component selector
     */
    this.element = document.querySelector(element);

    /**
    * Search organization Form Selector
    */
    this.orgForm = this.element.querySelector(Selectors.ORG_FORM);

    /**
     * Form input selectors
     */
    this.formInput = this.element.querySelector(Selectors.FIELD_SELECTOR);

    /**
     * Full data organization request
     */
    this.dataOrg = [];

    /**
     * Data organization filtered to render
     */
    this.dataState = [];

    /**
    * organization`s languages projects
    */
    this.languagesOrg = new Set();

    /**
     * Filter Component
     */
    this.filter = new FilterComponent('[filter-component]');

    /**
     * Results Component
     */
    this.results = new ResultsComponent('[results-component]');
  }

  /**
  * Make request to organization
  * @param {string} orgName organization name query for api github
  * @return {object} requestData
  */
  requestOrg(orgName) {
    const urlQuery = `${Constants.PREFIX_API_GITHUB}${orgName}`,
      querySuffix = `${Constants.SUFFIX_API_REPO}${Constants.SUFFIX_TOKENS}`;


    return makeRequest('GET', `${urlQuery}${querySuffix}`).then(
      (requestData) => {
        return requestData;
      }).catch((err) => {
      console.error('GitHub user does not exist!', err.statusText);
      utils.requestAnimationUtil(() => {
        this.resetApp();
      }, 300);

      return [];
    });
  }

  /**
  * Callback for dataState
  */
  searchCallback() {
    this.filter.setData(this.dataState);
    this.results.render(this.dataState);
    this.assignFiltersControl([
      [FilterAttributes.LANGUAGES, this.languagesOrg],
      [FilterAttributes.FORKS]
    ]);
  }

  /**
  * Sets dataState array from request
  */
  setDataState() {
    this.dataState = [];

    if (this.formInput.value) {
      this.requestOrg(this.formInput.value).then((result) => {
        this.dataOrg = result;

        this.filterData_().then(() => {
          this.filterDataLang_().then(() => {
            this.searchCallback();
          });
        });
      });
    }
  }

  /**
  * Sets array languages on dataState['languages_url']
  * @private
  * @return {object} Promise
  */
  filterDataLang_() {
    const setLangData_ = (projectObj, langObj) => {
      projectObj['languages_url'] =
        Object.keys(langObj).map((index) => {
          this.languagesOrg.add(index);

          return index;
        });
    };

    if (this.dataState.length) {
      return new Promise((resolve) => {
        const arrayUrls = this.dataState.map((elem) => {
          return `${elem.languages_url}${Constants.SUFFIX_TOKENS}`;
        });

        utils.loadAsset(arrayUrls).then((values) => {
          this.dataState.forEach((elem, index) => {
            setLangData_(elem, values[index]);
            resolve();
          });
        });
      });
    }
  }

  /**
  * set array filtered data on dataState
  * @private
  * @return {object} Promise
  */
  filterData_() {
    if (this.dataOrg.length) {
      this.languagesOrg = new Set();

      return new Promise((resolve) => {
        this.dataOrg = JSON.parse(this.dataOrg);
        this.dataState = this.dataOrg.reduce((previous, actual) => {
          let currentProject = {};

          currentProject = {
            forks_count: actual.forks_count,
            full_name: actual.full_name,
            languages_url: actual.languages_url,
            login_html_url: actual.owner.html_url,
            name: actual.name,
            stargazers_count: actual.stargazers_count
          };

          return previous.concat(currentProject);
        }, []).sort((a, b) => b.stargazers_count - a.stargazers_count);
        resolve();
      });
    }
  }

  /**
  * Listen for events
  */
  listenEvents() {
    this.orgForm.addEventListener(Events.SUBMIT, (event) => {
      event.preventDefault();
      this.setDataState();
    });
  }

  /**
  * Resets all App model data / markup
  */
  resetApp() {
    this.dataOrg = [];
    this.dataState = [];
    this.filter.setData([]);
    this.results.render([]);
    this.assignFiltersControl([]);
  }

  /**
  * Set controls filters on filterComponent
  * @param {array} arrayFilter [ controlType, controlData ]
  */
  assignFiltersControl(arrayFilter) {
    if (arrayFilter.length) {
      arrayFilter.forEach((elem) => {
        this.filter.setControlFilter(elem[0], elem[1]);
      });
    } else {
      this.filter.setControlFilter();
    }
  }

  /**
  * Initialize
  */
  init() {
    this.listenEvents();
    this.filter.init();
    this.results.init();
  }
}


/**
 * Attributes enum.
 * @enum {string}
 */
export const FilterAttributes = {
  LANGUAGES: 'languages',
  FORKS: 'forks'
};


/**
 * Tokens
 */
const Tokens = {
  CLIENT_ID: '?client_id=aeecd304f54029b1c06b',
  CLIENT_SECRET: '&client_secret=957d97f8488f9b323952eb55f7c1c1e2dbf2c900'
};


/**
 * Constants
 */
const Constants = {
  PREFIX_API_GITHUB: 'https://api.github.com/users/',
  SUFFIX_API_LANGUAGE: '/languages',
  SUFFIX_API_REPO: '/repos',
  SUFFIX_TOKENS: `${Tokens.CLIENT_ID}${Tokens.CLIENT_SECRET}`
};


/**
 * Events
 */
const Events = {
  SUBMIT: 'submit'
};

/**
 * Selectors
 */
const Selectors = {
  ORG_FORM: '.js-orgForm',
  FIELD_SELECTOR: '.js-formInput',
  PROJECT_LIST_CONTAINER: '.js-listContainer'
};

