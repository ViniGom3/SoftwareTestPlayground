const romanToInt = require("./index");

// CDT 1: 'I', 1; -- analise do valor limite
// CDT 2: 'III', 3; -- analise do valor limite
// CDT 3: 'IV', 4; -- analise do valor limite
// CDT 4: 'V', 5; -- analise do valor limite
// CDT 5: '312321', 'VALOR INVALIDO'; -- error guessing
// CDT 6: 'VIII', 8; -- analise do valor limite
// CDT 7: 'IX', 9; -- analise do valor limite
// CDT 8: '', 'VALOR INVALIDO'; -- analise do valor limite
// CDT 9: '#$!@$@#', 'VALOR INVALIDO'; -- error guessing
// CDT 10: 'XIV', 14; -- analise do valor limite
// CDT 11: 'XV', 15; -- analise do valor limite
// CDT 12: 'LUCAS', 'VALOR INVALIDO'; -- error guessing
// CDT 13: 'XIX', 19; -- analise do valor limite
// CDT 14: 'XX', 20; -- analise do valor limite
// CDT 15: 'XXV', 25; -- analise do valor limite
// CDT 16: 'XXIX', 29; -- analise do valor limite
// CDT 17: 'D', 500; -- analise do valor limite
// CDT 18: 'XL', 40; -- analise do valor limite
// CDT 19: 'L', 50; -- analise do valor limite
// CDT 20: 'MMMCMXCIX', 3999; -- analise do valor limite

describe("romanToInt()", () => {
  it('should "I" be 1', () => {
    expect(romanToInt("I")).toBe(1);
  });
  it('should "III" be 3', () => {
    expect(romanToInt("III")).toBe(3);
  });
  it('should "IV" be 4', () => {
    expect(romanToInt("IV")).toBe(4);
  });
  it('should "V" be 5', () => {
    expect(romanToInt("V")).toBe(5);
  });
  it('should "312321" be "VALOR INVALIDO"', () => {
    expect(romanToInt("312321")).toBe("VALOR INVALIDO");
  });
  it('should "VIII" be 8', () => {
    expect(romanToInt("VIII")).toBe(8);
  });
  it('should "IX" be 9', () => {
    expect(romanToInt("IX")).toBe(9);
  });
  it('should "" be "VALOR INVALIDO"', () => {
    expect(romanToInt("")).toBe("VALOR INVALIDO");
  });
  it('should "#$!@$@#" be "VALOR INVALIDO"', () => {
    expect(romanToInt("#$!@$@#")).toBe("VALOR INVALIDO");
  });
  it('should "XIV" be 14', () => {
    expect(romanToInt("XIV")).toBe(14);
  });
  it('should "XV" be 15', () => {
    expect(romanToInt("XV")).toBe(15);
  });
  it('should "LUCAS" be "VALOR INVALIDO"', () => {
    expect(romanToInt("LUCAS")).toBe("VALOR INVALIDO");
  });
  it('should "XIX" be 19', () => {
    expect(romanToInt("XIX")).toBe(19);
  });
  it('should "XX" be 20', () => {
    expect(romanToInt("XX")).toBe(20);
  });
  it('should "XXV" be 25', () => {
    expect(romanToInt("XXV")).toBe(25);
  });
  it('should "XXIX" be 29', () => {
    expect(romanToInt("XXIX")).toBe(29);
  });
  it('should "D" be 500', () => {
    expect(romanToInt("D")).toBe(500);
  });
  it('should "XL" be 40', () => {
    expect(romanToInt("XL")).toBe(40);
  });
  it('should "L" be 50', () => {
    expect(romanToInt("L")).toBe(50);
  });
  it('should "MMMCMXCIX" be 3999', () => {
    expect(romanToInt("MMMCMXCIX")).toBe(3999);
  });
});
