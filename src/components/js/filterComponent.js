import {FilterAttributes} from './searchComponent.js';
import {ResultsComponent} from './resultsComponent.js';

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

      filteredData = this.currentData.filter((elem) => {
        let isMatch = false;

        elem.languages_url.forEach((langElem) => {
          languagesToFilter.forEach((langFil) => {
            if (langElem === langFil) {
              isMatch = true;
            }
          });
        });

        if (isMatch) {
          return elem;
        }
      });

      this.results.render(filteredData);
    };

    /**
    * Filter current Data by forks asc
    */
    const filterByForks_ = () => {
      let filteredData =
       this.currentData.sort((a, b) => b.forks_count - a.forks_count);

      this.results.render(filteredData);
    };

    switch (query) {
      case FilterAttributes.LANGUAGES:
        filterByLanguages_(FilterAttributes.LANGUAGES);
        break;
      case FilterAttributes.FORKS:
        filterByForks_();
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
  * render form to filter data by:
  * @param {string} filterByAttr Attribute to filter by
  * @param {set} filterByData data to filter
  */
  setControlFilter(filterByAttr, filterByData) {
    let byLanguage =
      `<form id="${filterByAttr}">
          <label>Filter by ${filterByAttr}</label>
        <br>`;

    /**
    * render filter for languages:
    */
    const renderLanguagues_ = () => {
      filterByData.forEach((elem) => {
        byLanguage +=
          `<input class="${Classname.INPUT_FILTER}" 
        type="checkbox" 
        name="${elem}" 
        value="${elem}">${elem}<br>`;
      });

      byLanguage += '<button type="submit">filter</button><form><br><hr>';

      this.filterForm.innerHTML += byLanguage;
    };

    /**
    * render filter for forks by number:
    */
    const renderForks_ = () => {
      byLanguage += '<button type="submit">filter</button><form><br><hr>';

      this.filterForm.innerHTML += byLanguage;
    };

    switch (filterByAttr) {
      case FilterAttributes.LANGUAGES:
        renderLanguagues_();
        break;
      case FilterAttributes.FORKS:
        renderForks_();
        break;
    }
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

