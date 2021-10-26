module.exports = {
  // https://leetcode.com/problems/roman-to-integer/
  romanToInt: function (s) {
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
  },
  // https://leetcode.com/problems/shuffle-the-array/
  shuffle: function (nums, n) {
    if (!Array.isArray(nums)) return "VALOR INVALIDO";
    const array = nums.filter((item) => item);
    if (array.length === 0) return "VALOR INVALIDO";
    if (array.length !== 2 * n) return "VALOR INVALIDO";
    if (array.length < n) return "VALOR INVALIDO";
    if (n > 500) return "VALOR INVALIDO";
    if (n === 0) return "VALOR INVALIDO";
    if (n === 1) return array;
    if (n === array.length) return array;

    const resultado = [];
    for (let i = 0; i < n; i++) {
      resultado.push(array[i]);
      resultado.push(array[i + n]);
    }
    return resultado;
  },
  // https://leetcode.com/problems/jewels-and-stones/
  numJewelsInStones: function (J, S) {
    if (typeof J !== "string" || typeof S !== "string") return "VALOR INVALIDO";
    if (new Set(J).size != J.length) return "VALOR INVALIDO";
    if (J.length === 0) return "VALOR INVALIDO";
    if (S.length >= 50) return "VALOR INVALIDO";

    const resultado = [];
    for (let i = 0; i < S.length; i++) {
      if (J.includes(S[i])) {
        resultado.push(S[i]);
      }
    }
    return resultado.length;
  },
};
