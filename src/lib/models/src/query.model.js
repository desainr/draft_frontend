import {Filter} from "@/lib/models"
import {OPERATORS} from "@/lib/constants/constants";

export default class Query {
  constructor() {
    this._filters = [new Filter('year', '=', 2021)]
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

  removeAllFilters() {
    this._filters = [];
  }

  /**
   * @returns {String}
   */
  toQueryString() {
    return this._filters.map(f => f.toQueryString()).join('&');
  }

  static fromQueryString(paramsObject) {
    const query = new Query();

    const groupedQueryObj = {};
    for (const key in paramsObject) {

      // prop=year value=operator
      const [prop, value] = key.split('.');

      if (groupedQueryObj[prop]) {
        groupedQueryObj[prop][value] = paramsObject[key];
      } else {
        groupedQueryObj[prop] = {
          [value]: paramsObject[key],
        }
      }
    }

    for (const field in groupedQueryObj) {
      if (groupedQueryObj[field].operator === OPERATORS.BETWEEN) {
        query.addFilter(new Filter(field, groupedQueryObj[field].operator, groupedQueryObj[field].startValue, groupedQueryObj[field].endValue));
      } else {
        query.addFilter(new Filter(field, groupedQueryObj[field].operator, groupedQueryObj[field].value));
      }
    }

    return query;
  }

  get filters() {
    return this._filters;
  }

  set filters(value) {
    this._filters = value;
  }
}
