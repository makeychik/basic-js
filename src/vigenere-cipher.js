const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direction) {
    this.direction = direction;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Invalid argument!");
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let encrypted = "";
    let n = 0;

    for (let i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        encrypted += String.fromCharCode(
          ((message.charCodeAt(i) + key.charCodeAt(n % key.length) - 130) %
            26) +
            65
        );
        n++;
      } else {
        encrypted += message[i];
      }
    }

    if (this.direction === false) {
      return encrypted.split("").reverse().join("");
    }

    return encrypted;
  }
  decrypt(message, key) {
    if (!message || !key) {
      throw new Error("Invalid argument!");
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let decrypted = "";
    let n = 0;

    for (let i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        decrypted += String.fromCharCode(
          ((message.charCodeAt(i) + 26 - key.charCodeAt(n % key.length)) % 26) +
            65
        );
        n++;
      } else {
        decrypted += message[i];
      }
    }

    if (this.direction === false) {
      return decrypted.split("").reverse().join("");
    }

    return decrypted;
  }
}

module.exports = VigenereCipheringMachine;
