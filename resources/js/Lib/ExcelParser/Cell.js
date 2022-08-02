export default class Cell {
  coordinate = {
    r: null,
    c: null
  };
  value = null;
  _sheet = null;

  constructor(data, sheet) {
    if (data) {
      Object.assign(this, data);
    }
    if (sheet) {
      this._setSheet(sheet);
    }
  }

  _setSheet = sheet => {
    this._sheet = sheet;
    if (this.isMerged && !this.isMasterCell) {
      this.value = null;
    }
  };

  get mergeRange() {
    const { merges } = this._sheet;
    const [merge] = merges.filter(m => {
      return (
        m.s.r <= this.coordinate.r &&
        this.coordinate.r <= m.e.r &&
        m.s.c <= this.coordinate.c &&
        this.coordinate.c <= m.e.c
      );
    });
    return merge;
  }

  get isMerged() {
    return Boolean(this.mergeRange);
  }

  get isMasterCell() {
    if (this.mergeRange) {
      return (
        this.mergeRange.s.r === this.coordinate.r &&
        this.mergeRange.s.c === this.coordinate.c
      );
    }
    return true;
  }

  get mergeDirection() {
    if (this.mergeRange) {
      const rowSpan = this.mergeRange.e.r - this.mergeRange.s.r;
      const colSpan = this.mergeRange.e.c - this.mergeRange.s.c;
      if (rowSpan > 0 && colSpan > 0) {
        return 'both';
      }
      if (rowSpan > 0) {
        return 'row';
      }
      if (colSpan > 0) {
        return 'col';
      }
    }

    return false;
  }

  toJson = () => {
    return {
      coordinate: this.coordinate,
      value: this.value,
      isMerged: this.isMerged,
      isMasterCell: this.isMasterCell,
      mergeRange: this.mergeRange,
      mergeDirection: this.mergeDirection
    };
  };
}
