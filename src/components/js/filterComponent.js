import {FilterAttributes} from './searchComponent.js';
import {ResultsComponent} from './resultsComponent.js';

import * as utils from '../../utils.js';

/**
 * Filter Component
 */
export class FilterComponent {
  /**
   * @param {Element} element DOM element.
   */
  constructor(element) {
    /**
     * Component selector
     */
    this.element = document.querySelector(element);

    /**
    * Filter form Selector
    */
    this.filterForm = this.element.querySelector(Selectors.FILTER_FORM);

    /**
    * Current dataToRender
    */
    this.currentData = [];

    /**
     * Results Component
     */
    this.results =
     new ResultsComponent('[results-component]');
  }

  /**
  * listenEvents
  */
  listenEvents() {
    this.filterForm.addEventListener(Events.SUBMIT, (event) => {
      event.preventDefault();
      this.controller(event.target.id);
    });
  }


  /**
  * Manage data in order to render
  * @param {string} query to filter data
  */
  controller(query) {
    /**
    * Filter current Data by languages
    * @param {string} idForm to filter data
    */
    const filterByLanguages_ = (idForm) => {
      const filterInputs =
        this.filterForm.querySelectorAll(
          `#${idForm} ${Selectors.INPUT_FILTER}`);
      let languagesToFilter = [],
        filteredData = [];

      Array.from(filterInputs, (elem) => {
        if (elem.checked) {
          languagesToFilter.push(elem.value);
        }
      });

      if (this.currentData.length) {
        this.currentData.filter((elem) => {
          elem.languages_url.forEach((langElem) => {
            languagesToFilter.forEach((langFil) => {
              if (langElem === langFil) {
                filteredData.push(elem);
              }
            });
          });
        });
      }

      this.results.render(filteredData);
    };

    /**
    * Filter current Data by forks numbers
    * @private
    * @param {string} idForm to filter data
    */
    const filterByForks_ = (idForm) => {
      const filterInput = this.filterForm.querySelector(
        `#${idForm} ${Selectors.INPUT_FILTER}`);
      let forksNumber = filterInput.value,
        filteredData = [];

      if (forksNumber === '') {
        return;
      }

      forksNumber = parseInt(forksNumber);
      filteredData = this.currentData.filter((elem) => {
        return elem.forks_count === forksNumber;
      });

      this.results.render(filteredData);
    };

    switch (query) {
      case FilterAttributes.LANGUAGES:
        filterByLanguages_(FilterAttributes.LANGUAGES);
        break;
      case FilterAttributes.FORKS:
        filterByForks_(FilterAttributes.FORKS);
        break;
    }
  }

  /**
  * sets current data on this.currentData property
  * @param {array} dataToRender
  */
  setData(dataToRender) {
    this.currentData = dataToRender;
  }

  /**
    * Resets render controls markup
    * @private
    */
  resetControls_() {
    this.filterForm.innerHTML = '';
  }

  /**
  * render form to filter data by:
  * @param {string} filterByAttr Attribute to filter by
  * @param {set} filterByData data to filter
  */
  setControlFilter(filterByAttr, filterByData) {
    if (!filterByAttr && !filterByData) {
      this.resetControls_();

      return;
    }

    new Promise((resolve) => {
      this.resetControls_();
      utils.requestAnimationUtil(() => resolve(), 100);
    }).then(() => {
      let byLanguage =
      `<hr><form id="${filterByAttr}">
          <label for="${filterByAttr}">
            Filter by ${filterByAttr}
          </label>
        <br>`;

      /**
      * render filter for languages:
      * @private
      */
      const renderFormLanguagues_ = () => {
        filterByData.forEach((elem) => {
          byLanguage +=
            `<input class="${Classname.INPUT_FILTER}"
          type="checkbox"
          name="${elem}"
          value="${elem}">${elem}<br>`;
        });

        byLanguage += '<button type="submit">filter</button><form><br>';

        this.filterForm.innerHTML += byLanguage;
      };

      /**
      * render filter for forks by number:
      * @private
      */
      const renderFromForks_ = () => {
        byLanguage += `<input class="${Classname.INPUT_FILTER}" type="number"
                        name="forks"
                        value=""/><br>
        <button type="submit">filter</button><form><br>`;

        this.filterForm.innerHTML += byLanguage;
      };

      switch (filterByAttr) {
        case FilterAttributes.LANGUAGES:
          renderFormLanguagues_();
          break;
        case FilterAttributes.FORKS:
          renderFromForks_();
          break;
      }
    });
  }


  /**
  * Initialize
  */
  init() {
    this.listenEvents();
  }
}


/**
 * Events
 */
const Events = {
  SUBMIT: 'submit'
};

/**
 * Class names
 */
const Classname = {
  INPUT_FILTER: 'js-filterInput'
};

/**
 * Selectors
 */
const Selectors = {
  FILTER_FORM: '.js-filterForm',
  INPUT_FILTER: `.${Classname.INPUT_FILTER}`
};

