const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(/* members */) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(members)) return false;
  
  let arr = [];

  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string') {    
      arr.push(members[i].trim()[0].toUpperCase());
    }
  }

  arr.sort( (a,b) => {
    if (a < b) {
      return -1;
    } else if (a > b) {
        return 1;
    };
  })

  return arr.join();
}

module.exports = {
  createDreamTeam
};
