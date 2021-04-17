import {Filter} from "@/lib/models"

export default class Query {
  constructor() {
    this._filters = [new Filter('draft', 'year', '=', 2020)]
  }

  /**
   * @param filter {Filter}
   */
  addFilter(filter) {
    const existingFilterIndex = this._filters.findIndex(f => f.fieldName === filter.fieldName);

    if (existingFilterIndex > -1) {
      this._filters.splice(existingFilterIndex, 1, filter);
    } else {
      this._filters.push(filter);
    }
  }

  /**
   * @param filter {Filter}
   */
  removeFilter(filter) {
    const filterIndex = this._filters.findIndex(f => f.fieldName === filter.fieldName);

    if (filterIndex > -1) {
      this._filters.splice(filterIndex, 1);
    }
  }

  /**
   * @returns {String}
   */
  toQueryString() {
    return this._filters.map(f => f.toQueryString()).join('&');
  }

  get filters() {
    return this._filters;
  }

  set filters(value) {
    this._filters = value;
  }
}
