import XLSX from 'xlsx';
import { ColArray, Cell } from '.';

export default class Sheet {
  colIndex = new ColArray();
  sheetName = null;
  range = {
    s: {
      r: null,
      c: null
    },
    e: {
      r: null,
      c: null
    }
  };
  merges = [];
  rows = [];
  _sheet = {};
  constructor(sheet) {
    if (sheet) {
      this.sheetName = sheet.sheetName;
      this._sheet = sheet.sheet;
      this.merges = this.createMerges();
      this.range = this.createSheetRange();
      this.rows = this.createSheetArray();
    }
  }

  createMerges = () => {
    const merges = this._sheet['!merges'];
    return merges;
  };

  createSheetRange = () => {
    const rangeString = this._sheet['!ref'];

    const [start, end] = rangeString.split(':');
    const range = {
      s: {
        c: this.colIndex.indexOf(start.replace(/[0-9]+/, '')),
        r: parseInt(start.replace(/[a-z]+/i, '')) - 1
      },
      e: {
        c: this.colIndex.indexOf(end.replace(/[0-9]+/, '')),
        r: parseInt(end.replace(/[a-z]+/i, '')) - 1
      }
    };
    return range;
  };

  createSheetArray = () => {
    const rows = [];
    for (let i = 0; i <= this.range.e.r; i++) {
      rows[i] = this.createRow(i);
    }
    return rows;
  };

  createRow = rowIdx => {
    const post = {
      r: rowIdx,
      c: 0
    };
    const row = [];
    for (let i = 0; i <= this.range.e.c; i++) {
      post.c = i;
      const cellRef = XLSX.utils.encode_cell(post);
      const cellObject = this._sheet[cellRef];
      const data = {
        value: cellObject ? cellObject.v : null,
        coordinate: {
          r: rowIdx,
          c: i
        }
      };
      const cell = new Cell(data, this);
      row[i] = cell;
    }

    return row;
  };

  toJson = () => {
    const nonCircular = this.rows.map(row => {
      return row.map(cell => {
        return cell.toJson();
      });
    });
    return {
      sheetName: this.sheetName,
      content: nonCircular,
      range: this.range
    };
  };
}
