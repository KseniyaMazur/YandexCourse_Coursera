/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
  if (interval > 59) {
    minutes += Math.floor(interval % 60);
    hours += Math.floor(interval / 60);
    console.log( interval % 60);
    console.log( interval / 60);
  } else {
    minutes = minutes + interval;
  }
  if (minutes > 59) {
    hours++;
    minutes = minutes - 60;
  }
  if (hours > 23) {
    hours = hours - 24;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (hours < 10) {
    hours = '0' + hours
  }
  return (hours + ':' + minutes);
};
