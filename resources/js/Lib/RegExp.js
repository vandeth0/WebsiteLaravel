RegExp.escape = function(str) {
  var specials = new RegExp('[.*+?|()\\[\\]{}\\\\]', 'g'); // .*+?|()[]{}\
  return str.replace(specials, '\\$&');
};
