import {OPERATORS} from "@/lib/constants/constants";

export default class Filter {

  /**f
   * @param filterCategory {String}
   * @param fieldName {String}
   * @param operator {String}
   * @param value {String|Number}
   * @param endValue {Number?} for ranges only
   */
  constructor(filterCategory, fieldName, operator, value, endValue=null) {
    this._filterCategory = filterCategory;
    this._fieldName = fieldName;
    this._operator = operator;
    this._value = value;
    this._endValue = endValue;
  }

  toQueryString() {
    if (this._operator === OPERATORS.BETWEEN) {
      return `${this.fieldName}${encodeURI('>')}${this._value}&${this.fieldName}${encodeURI('<')}${this._endValue}`;
    } else {
      return `${this.fieldName}${this.operatorUrlEncoded}${this._value}`;
    }
  }

  toDisplayString() {
    let str;

    if (this.operator === OPERATORS.BETWEEN) {
      str = `${this._fieldName} between ${this.value} & ${this.endValue}`;
    } else {
      str = `${this.fieldName} ${this.operator} ${this.value}`;
    }
    return str;
  }

  get operatorUrlEncoded () {
    return encodeURI(this._operator);
  }


  get fieldName() {
    return this._fieldName;
  }


  get filterCategory() {
    return this._filterCategory;
  }

  set filterCategory(value) {
    this._filterCategory = value;
  }

  get operator() {
    return this._operator;
  }

  set operator(value) {
    this._operator = value;
  }

  get value() {
    return this._value;
  }

  set value(value) {
    this._value = value;
  }


  get endValue() {
    return this._endValue;
  }

  set endValue(value) {
    this._endValue = value;
  }
}
