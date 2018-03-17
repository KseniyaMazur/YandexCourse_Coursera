// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = 
function foo (command) {
  
  if (command.startsWith('ADD', 0)) {
    let arrAdd = command.split(' '),
        phoneArrADD = arrAdd[2].split(','),
        key = arrAdd[1];
    if (!phoneBook.hasOwnProperty(key)) {
      phoneBook[key] = phoneArrADD;
    } else {
      phoneBook[key] = phoneBook[key].concat(phoneArrADD);
    }
  }   
  else if (command.startsWith('REMOVE_PHONE', 0)) {
    let arrRemove = command.split(' '),
        phoneRemove = arrRemove[1],
        count = 0;
    for ( let property in phoneBook) {
      let phonesOne = phoneBook[property];
      if (Array.isArray(phonesOne) && phonesOne.indexOf(phoneRemove) !== -1){
        phonesOne.splice(phonesOne.indexOf(phoneRemove), 1);
        return true;
      };
    };
    return false;
  }
  else if (command.startsWith('SHOW', 0)) {
    let clone = [];
    let keySorted = Object.keys(phoneBook).sort();
    for ( let key of keySorted) {
      if(phoneBook[key].length !== 0){
        clone.push(key + ': ' + phoneBook[key].join(', '));
      }
    }
    return clone;
  }
};

