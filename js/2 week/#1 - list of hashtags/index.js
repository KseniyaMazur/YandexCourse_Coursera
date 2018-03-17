/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
  let tweetArray = tweet.split(' ');
  let hashArray = tweetArray.filter((word) => word[0] === '#')
                            .map((word) => word.slice(1, word.length));
  return hashArray;
};
