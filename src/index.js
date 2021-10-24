// https://leetcode.com/problems/roman-to-integer/
const romanToInt = function (s) {
  try {
    if (typeof s === "number" || s.length === 0) {
      return "VALOR INVALIDO";
    }

    const roman = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
    let resultado = 0;
    for (let i = 0; i < s.length; i++) {
      if (i > 0 && roman[s[i]] > roman[s[i - 1]]) {
        resultado += roman[s[i]] - 2 * roman[s[i - 1]];
      } else {
        resultado += roman[s[i]];
      }
    }

    let response;
    isNaN(resultado) ? (response = "VALOR INVALIDO") : (response = resultado);
    return response;
  } catch (error) {
    console.error(error);
  }
};

module.exports = romanToInt;
