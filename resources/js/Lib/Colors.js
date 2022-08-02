/**
 * @param {String} content
 */
export function createColorCode(content) {
  if (!content) return false;
  if (typeof content !== 'string') return false;
  const condition = /청|적|흑|백|검은|은|주|주황|황|갈|녹|자|보라|회|하늘|분홍|핑크|등|G\/Y/u;

  const matches = content.match(condition);
  if (!matches) return false;

  switch (matches[0]) {
    case '흑':
      return {
        textColor: 'black'
      };
    case '오':
      return {
        textColor: 'orange'
      };
    case '청':
      return {
        textColor: 'blue'
      };
    case 'G/Y':
      return {
        textColor: 'yellow',
        shadow: 'green'
      };
    case '주':
      return {
        textColor: 'orange',
        shadow: 'black'
      };
    default:
      return false;
  }
}

export function detectColor(string) {
  const condition = /청|적|흑|백|검은|은|주|주황|G\/Y|황|Y|갈|녹|G|자|보라|회|하늘|분홍|핑크|등/u;
  if (!string) return false;
  if (typeof string !== 'string') return false;

  const match = string.match(condition);
  if (!match) return false;
  switch (match[0]) {
    case '청':
      return 'blue';
    case '적':
      return 'red';
    case '백':
      return 'white';
    case '흑':
    case '검은':
      return 'black';
    case '은':
      return 'silver';
    case '주':
    case '주황':
      return 'coral';
    case 'G/Y':
      return 'green-yellow';
    case '황':
    case 'Y':
      return 'yellow';
    case '갈':
      return 'brown';
    case '녹':
    case 'G':
      return 'green';
    case '자':
    case '보라':
      if (/단자/u.test(string)) {
        return false;
      }
      return 'purple';
    case '회':
      return 'gray';
    case '하늘':
      return 'skyblue';
    case '분홍':
    case '핑크':
      return 'pink';
    case '등':
      return 'brown';
  }
}
