const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(bool = true) {
    this.bool = bool;
  }

  encrypt(message, key) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if (!message || !key) {
      throw new Error();      
    } else {
      let newMessage = message.toUpperCase(),
        newKey = key.toUpperCase(),
        arr = [],
        coded = 0,
        sym = 0,
        code = 0;

      for(let i = 0; i < newMessage.length; ++i) {
        if(newMessage[i] >= 'A' && newMessage[i] <= 'Z') {
          sym = newKey[coded % newKey.length].charCodeAt(0) - 'A'.charCodeAt(0);
          code = newMessage[i].charCodeAt(0) - 'A'.charCodeAt(0);
          arr.push(String.fromCharCode((code + sym) % 26 + 'A'.charCodeAt(0)));
          coded++;
        } else {
            arr.push(newMessage[i]);
        }
      }
  
      if(!this.bool) {
        arr.reverse();
      }
      return arr.join('');
    }
  }    
  decrypt(message, key) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if (!message || !key) {
      throw new Error();      
    } else {
      let newMessage = message.toUpperCase(),
        newKey = key.toUpperCase(),
        arr = [],
        coded = 0,
        sym = 0,
        code = 0;

      for(let i = 0; i < newMessage.length; ++i) {
        if(newMessage[i] >= 'A' && newMessage[i] <= 'Z') {
          sym = newKey[coded % newKey.length].charCodeAt(0) - 'A'.charCodeAt(0);
          code = newMessage[i].charCodeAt(0) - 'A'.charCodeAt(0);
          arr.push(String.fromCharCode((code + (26 - sym)) % 26 + 'A'.charCodeAt(0)));
          coded++;
        } else {
          arr.push(newMessage[i]);
        }
      }
  
      if(!this.bool) {
        arr.reverse();
      }
      return arr.join('');
    }
  }
}

module.exports = VigenereCipheringMachine;
