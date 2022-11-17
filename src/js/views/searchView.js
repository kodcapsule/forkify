class Search {
  #parentEl = document.querySelector('.search');

  #clearInput() {
    this.#parentEl.querySelector('.search__field').value = '';
  }

  getquery() {
    const query = this.#parentEl.querySelector('.search__field').value;
    this.#clearInput();
    return query;
  }

  addSearchHandler(handler) {
    this.#parentEl.addEventListener('submit', e => {
      e.preventDefault();
      handler();
    });
  }
}

export default new Search();
