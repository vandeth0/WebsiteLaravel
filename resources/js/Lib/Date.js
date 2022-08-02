Date.prototype.format = function(f) {
  if (!this.valueOf()) return '';

  var weekName = ['일', '월', '화', '수', '목', '금', '토'];
  var d = this;
  var h;

  return f.replace(/(yyyy|yy|MM|M|dd|d|E|hh|mm|ss|a\/p)/gi, function($1) {
    switch ($1) {
      case 'yyyy':
        return d.getFullYear();
      case 'yy':
        return (d.getFullYear() % 100).zf(2);
      case 'M':
        return (d.getMonth() + 1).zf(1);
      case 'MM':
        return (d.getMonth() + 1).zf(2);
      case 'd':
        return d.getDate().zf(1);
      case 'dd':
        return d.getDate().zf(2);
      case 'E':
        return weekName[d.getDay()];
      case 'HH':
        return d.getHours().zf(2);
      case 'hh':
        return ((h = d.getHours() % 12) ? h : 12).zf(2);
      case 'mm':
        return d.getMinutes().zf(2);
      case 'ss':
        return d.getSeconds().zf(2);
      case 'a/p':
        return d.getHours() < 12 ? '오전' : '오후';
      default:
        return $1;
    }
  });
};

Date.holidaysBetween = function(start, end) {
  const duration = parseInt(
    (end.getTime() - start.getTime()) / 24 / 60 / 60 / 1000
  );

  const holidays = new Array(duration)
    .fill(0)
    .map((item, i) => {
      const tmpDate = new Date(start);
      tmpDate.setDate(tmpDate.getDate() + i);
      return tmpDate.getDay();
    })
    .filter(day => day === 0 || day === 6);
  return holidays;
};

Date.prototype.isSunday = function() {
  if (!this.valueOf()) return '';
  const d = this;
  return d.getDay() === 0;
};

Date.prototype.isSaturday = function() {
  if (!this.valueOf()) return '';
  const d = this;
  return d.getDay() === 6;
};

Date.prototype.isWeekDay = function() {
  if (!this.valueOf()) return '';
  const d = this;
  return !this.isSaturday() && !this.isSunday();
};

Date.prototype.after = function(delay) {
  if (!this.valueOf()) return '';
  const d = new Date(this);
  d.setDate(d.getDate() + delay);
  return d;
};

Date.prototype.moveTo = function(offset) {
  if (!this.valueOf()) return false;
  const d = this;
  d.setDate(d.getDate() + offset);
  return d;
};

Date.prototype.setZeroTime = function() {
  if (!this.valueOf()) return '';
  const d = this;
  d.setHours(0);
  d.setMinutes(0);
  d.setSeconds(0);
  return d;
};

Date.prototype.isBetween = function(start, end) {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const d = this;

  return startDate <= d && d <= endDate;
};

Date.prototype.getStartDateOfMonth = function() {
  let today = this;
  if (!this.valueOf()) {
    today = new Date();
  }
  const start = new Date(today.getFullYear(), today.getMonth(), 1);
  return start.format('yyyy-MM-dd');
};

Date.prototype.getEndDateOfMonth = function() {
  let today = this;
  if (!this.valueOf()) {
    today = new Date();
  }
  const start = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  return start.format('yyyy-MM-dd');
};
