/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
  function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
  }
  let low = hashtags.map( (h) => {return h.toLowerCase()});
  let unique = low.filter( onlyUnique );
  unique = unique.join(', ');
  return unique;
};
