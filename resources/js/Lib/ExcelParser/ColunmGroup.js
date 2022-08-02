export default class ColumnGroup {
  fieldNames = [];
  constructor(fieldNames = []) {
    this.fieldNames = fieldNames;
    fieldNames.map(fieldName => {
      this[fieldName] = null;
    });
  }
}
