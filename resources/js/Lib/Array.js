Array.prototype.unique = function() {
  return this.reduce(
    (reduced, item) => (reduced.includes(item) ? reduced : [...reduced, item]),
    []
  );
};

Array.prototype.uniqueWithKeys = function(key) {
  return this.reduce(
    (reduced, item) =>
      reduced.map(reducedItem => reducedItem[key]).includes(item[key])
        ? reduced
        : [...reduced, item],
    []
  );
};

Array.prototype.first = function() {
  if (this.length === 0) {
    return null;
  }
  return this[0];
};
