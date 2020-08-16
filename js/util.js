/**
 * Returns a string with year to second in decending order of the given unic format number.
 * @param {Number} timestamp 
 */
function convertTime(timestamp, precision = 'hour') {
  let date = new Date(timestamp * 1000);
  let year = date.getFullYear();
  let month = date.getMonth() > 10 ? parseInt(date.getMonth() + 1) : '0' + parseInt(date.getMonth() + 1);
  let day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
  let hour = date.getHours()> 9 ? date.getHours() : '0' + date.getHours();
  let min = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();
  let sec = date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds();

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
  // console.log("email changed");
  // console.log(element.value);

  // const $result = $("#result");
  const email = element.value;
  // $result.text("");

  const emailPattern = /\S+@\S+\.\S+/;

  if (emailPattern.test(email)) {
    console.log("valid");
    element.setAttribute("style", "border: unset");
  } else {
    console.log("invalid");
    element.setAttribute("style", "border: 2px solid red")
  }
  return false;
}