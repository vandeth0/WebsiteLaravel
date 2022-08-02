export default class ColArray {
  items = [];
  constructor(start = "A", end = "BX") {
    this.items = this.createExcelLikeIndex(start, end);
  }

  createExcelLikeIndex = (start = "A", end = "BX") => {
    const startLength = start.length;
    const endLength = end.length;

    let startOffset = 0;
    let endOffset = 0;
    for (let i = 0; i < startLength; i++) {
      startOffset += this.getDistanceFromA(start[i]) + (startLength - i) * 26;
    }
    for (let i = 0; i < endLength; i++) {
      endOffset += this.getDistanceFromA(end[i]) + (endLength - i) * 26;
    }

    const colIndex = new Array(endOffset - startOffset)
      .fill(start)
      .map((item, i) => {
        const col = String.fromCharCode(item.charCodeAt(0) + (i % 26));
        if (i < 26) {
          return col;
        }

        return String.fromCharCode(start.charCodeAt(0) + i / 26 - 1) + col;
      });

    return colIndex;
  };

  getDistanceFromA = char => {
    if (char.length !== 1) {
      console.error("Argument char must be a character");
      return -1;
    }

    return char.charCodeAt(0) - "A".charCodeAt(0);
  };

  indexOf = item => {
    return this.items.indexOf(item);
  };
}
