import {PaginatorComponent} from './paginatorComponent.js';


/**
 * Results Component
 */
export class ResultsComponent {
  /**
   * @param {Element} element DOM element.
   */
  constructor(element) {
    /**
     * Component selector
     */
    this.element = document.querySelector(element);

    /**
     * type data attribute to filter render results
     */
    this.filterBy = [];

    /**
     * paginator component
     */
    this.paginator = new PaginatorComponent('[paginator-component]');
  }

  /**
  * Render results search projects
  * @param {array} dataToRender
  */
  render(dataToRender) {
    this.element.innerHTML = '';

    let listProject = '';

    dataToRender = dataToRender || [];

    if (!dataToRender.length) {
      listProject = '<h3>No Results</h3>';
    } else {
      dataToRender.forEach((elem) => {
        const urlBranch =
          `${elem.login_html_url}/${elem.name}${Constants.SUFFIX_BRANCHES}`;
        let languagesList = '';

        if (elem.languages_url) {
          elem.languages_url.forEach((elem) => {
            languagesList +=
              `<li>
              <span>${elem}</span>
            </li>`;
          });
        }

        listProject +=
          `<li class="js-project">
          <a href="${urlBranch}"
          rel="noopener" target="_blank">
            ${elem.name}
          </a>
          <span>Forks: ${elem.forks_count}</span>
          <span>Stars: ${elem.stargazers_count}</span>
          <br>
          <div>
            <div>Languages:</div>
            <ul>
              ${languagesList}
            </ul>
          </div>
        </li>`;
      });
    }

    this.element.innerHTML += listProject;
    this.paginator.render();
  }

  /**
  * Initialize
  */
  init() {
    this.render();
  }
}

/**
 * Constants
 */
const Constants = {
  SUFFIX_BRANCHES: '/branches'
};

