class Search {
  _parentEl = document.querySelector('.search');

  _clearInput() {
    this._parentEl.querySelector('.search__field').value = '';
  }

  getquery() {
    const query = this._parentEl.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }

  addSearchHandler(handler) {
    this._parentEl.addEventListener('submit', e => {
      e.preventDefault();
      handler();
    });
  }
}

export default new Search();
