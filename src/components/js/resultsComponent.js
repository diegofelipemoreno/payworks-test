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
        let languagesList = '';

        if (elem.languages_url) {
          elem.languages_url.forEach((elem) => {
            languagesList +=
              `<li>
              <h3>${elem}</h3>
            </li>`;
          });
        }

        listProject +=
          `<li>
          <a href="${elem.login_html_url}/${elem.name}"
          rel="noopener" target="_blank">
            ${elem.name}
          </a>
          <span>Forks: ${elem.forks_count}</span>
          <span>Stars: ${elem.stargazers_count}</span>
          <ul>
            ${languagesList}
          </ul>
        </li>`;
      });
    }

    this.element.innerHTML += listProject;
  }

  /**
  * Initialize
  */
  init() {
    this.render();
  }
}

