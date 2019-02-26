/**
 * Paginator Component
 */
export class PaginatorComponent {
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
     * List results
     */
    this.listResults = [];

    /**
     * Paginator CTAs Container
     */
    this.pageCtaContainer =
     this.element.querySelector(Selectors.PAGINATOR_CONTAINER);

    /**
     * Paginator selector
     */
    this.paginatorSelector =
      this.element.querySelector(Selectors.PAGINATOR_CONTAINER);
  }

  /**
  * Sets data-pag attribute on list results
  * @param {HTMLElement} listNode result element
  * @param {number} index listNode
  */
  setDataPageAttr(listNode, index) {
    listNode.setAttribute('data-page', index);

    if ((index % Constants.PAGE_INDEX) === 0) {
      this.setPaginatorCta(index);
    }
  }

  /**
  * Sets paginator CTAs
  * @param {number} index list number
  */
  setPaginatorCta(index) {
    let markupCta = '',
      pageNumber = 0,
      firstCta;

    if (!(pageNumber % Constants.PAGE_INDEX)) {
      pageNumber = index / Constants.PAGE_INDEX + 1;
      markupCta += `<button data-number="${pageNumber}">${pageNumber}</button>`;
    }
    this.pageCtaContainer.innerHTML += markupCta;
    firstCta = this.paginatorSelector.querySelector('[data-number]');
    firstCta.classList.add(Classname.ACTIVE);
  }

  /**
  * Show pages on paginator
  * @param {number} pageNumber page
  */
  showPage(pageNumber) {
    const blockMax = pageNumber * Constants.PAGE_INDEX,
      blockMin = (pageNumber - 1) * Constants.PAGE_INDEX;

    Array.from(this.listResults, (elem, index) => {
      elem.style.display = 'none';
      index = index + 1;

      if (index > blockMin && index <= blockMax) {
        elem.style.display = 'flex';
      }
    });
  }

  /**
  * Render paginator
  */
  render() {
    this.pageCtaContainer.innerHTML = '';
    this.listResults = this.element.querySelectorAll(Selectors.PROJECT_LIST);
    Array.from(this.listResults, (elem, index) => {
      this.setDataPageAttr(elem, index);

      if (index > Constants.PAGE_INDEX) {
        elem.style.display = 'none';
      }
    });
    this.listenEvents();
  }

  /**
  * Listen for events
  */
  listenEvents() {
    const ctaSelector =
      this.paginatorSelector.querySelectorAll('[data-number]');

    this.paginatorSelector.addEventListener(Events.CLICK, (event) => {
      const ctaElement = event.target,
        pageNumber = ctaElement.getAttribute('data-number');

      Array.from(ctaSelector, (elem) => {
        elem.classList.remove(Classname.ACTIVE);
      });

      ctaElement.classList.add(Classname.ACTIVE);
      this.showPage(pageNumber);
    });
  }
}


/**
 * Constants
 */
const Constants = {
  PAGE_INDEX: 5
};

/**
 * Classname
 */
const Classname = {
  ACTIVE: 'active'
};


/**
 * Events
 */
const Events = {
  CLICK: 'click'
};

/**
 * Selectors
 */
const Selectors = {
  PROJECT_LIST: '.js-project',
  PAGINATOR_CONTAINER: '.js-listPaginator',
  PAGINATOR_CTA: '.js-pageNumber'
};

