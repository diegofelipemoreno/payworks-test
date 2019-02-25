import {FilterComponent} from './filterComponent.js';
import {ResultsComponent} from './resultsComponent.js';

import {makeRequest} from '../../service.js';
import {smokeData} from '../../smoke-data.js';
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
    this.dataToRender = [];

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
    const urlQuery =
      `${Constants.PREFIX_API_GITHUB}${orgName}${Constants.SUFFIX_API_REPO}`;

    return makeRequest('GET', urlQuery).then((requestData) => {
      return requestData;
    }).catch((err) => {
      console.error('Augh, there was an error!', err.statusText);

      return [];
    });
  }

  /**
  * Make request to Get project languagues
  * @param {string} urlQuery 'languages_url' property on this.dataToRender
  * @return {object} requestData
  */
  requestLanguageProject_(urlQuery) {
    return makeRequest('GET', urlQuery).then((requestData) => {
      return requestData;
    }).catch((err) => {
      console.error('Augh, there was an error!', err.statusText);

      return {};
    });
  }

  /**
  * Listen for events
  */
  listenEvents() {
    this.orgForm.addEventListener(Events.SUBMIT, (event) => {
      event.preventDefault();
      /*
      this.requestOrg(this.formInput.value).then((result) => {
        this.dataOrg = result;
      });
      */
      this.dataOrg = smokeData;

      new Promise((resolve) => {
        this.filterDataToRender_();
        resolve();
      }).then(() => {
        utils.requestAnimationUtil(() => {
          this.filter.setData(this.dataToRender);
          this.results.render(this.dataToRender);
          this.assignFiltersControl([
            [FilterAttributes.LANGUAGES, this.languagesOrg],
            [FilterAttributes.FORKS]
          ]);
        }, 400);
      });
    });
  }

  /**
  * filtered data for render view
  * @private
  */
  filterDataToRender_() {
    if (this.dataOrg) {
      this.dataToRender = this.dataOrg.reduce((previous, actual) => {
        let currentProject = {};

        currentProject = {
          forks_count: actual.forks_count,
          full_name: actual.full_name,
          login_html_url: actual.owner.html_url,
          name: actual.name,
          stargazers_count: actual.stargazers_count
        };
/*

        this.requestLanguageProject_(actual.languages_url).then((result) => {
          const stringToObject = JSON.parse(result);

          currentProject['languages_url'] =
            Object.keys(stringToObject).map((index) => {
              this.languagesOrg.add(index);

              return index;
            });
        });
*/

        let result = {
          'JavaScript': 16994,
          'HTML': 10774
        };

        currentProject['languages_url'] =
          Object.keys(result).map((index) => {
            this.languagesOrg.add(index);

            return index;
          });

        return previous.concat(currentProject);
      }, []).sort((a, b) => b.stargazers_count - a.stargazers_count);
    }
  }

  /**
  * Set controls filters on filterComponent
  * @param {array} arrayFilter [ controlType, controlData ]
  */
  assignFiltersControl(arrayFilter) {
    arrayFilter.forEach((elem) => {
      this.filter.setControlFilter(elem[0], elem[1]);
    });
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
 * Constants
 */
const Constants = {
  PREFIX_API_GITHUB: 'https://api.github.com/users/',
  SUFFIX_API_REPO: '/repos',
  SUFFIX_API_LANGUAGE: '/languages'
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

