/**
 * Returns a string with year to second in decending order of the given unic format number.
 * @param {Number} timestamp 
 */
function convertTime(timestamp, precision = 'hour') {
  let date = new Date(timestamp * 1000);
  let year = date.getFullYear();
  let month = '0' + parseInt(date.getMonth() + 1);
  month = month.substring(month.length-2, month.length);
  let day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
  let hour = date.getHours() > 9 ? date.getHours() : '0' + date.getHours();
  let min = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();

  let time = '';
  switch (precision) {
    case 'year':
      time = year;
      break;
    case 'half':
      time = month < 6 ? `first half of ${year}` : `second half of ${year}`;
      break;
    case 'quarter':
      switch (true) {
        case (month < 3):
          `first quarter of ${year}`;
          break;
        case (month < 3):
          `first quarter of ${year}`;
          break;
        case (month < 3):
          `first quarter of ${year}`;
          break;
        case (month < 3):
          `first quarter of ${year}`;
          break;
        default:
          `in ${year}`;
          break;
      }
      break;
    case 'month':
      time = year + '-' + month;
      break;
    case 'day':
      time = year + '-' + month + '-' + day;
      break;
    case 'hour':
      time = year + '-' + month + '-' + day + ' at ' + hour + ':' + min;
      break;
    default:
      break;
  }
  return time;
}

function validateEmail(element) {
  const email = element.value;
  const emailPattern = /\S+@\S+\.\S+/; // may be a bit too simple.

  if (emailPattern.test(email)) {
    // Valid 
    console.log("valid");
    element.setAttribute('data-validity', 'true')
  } else {
    // Invalid
    console.log("invalid");
    element.setAttribute('data-validity', 'false')
  }
  return false;
}

function toggleCardInfoDisplay(button, cardId) {
  console.log(cardId);
}