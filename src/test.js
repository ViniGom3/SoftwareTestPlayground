const { romanToInt, shuffle, numJewelsInStones } = require("./index");

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

// CDT 1: ,, 'VALOR INVALIDO'; -- analise do valor limite
// CDT 2: [1,2], 2, 'VALOR INVALIDO'; -- error guessing
// CDT 3: [1,2,3,4], 2, [1,3,2,4]; -- particionamento de equivalencia
// CDT 4: [1,2,3,4,6,7], 3, [1,4,2,6,3,7] -- particionamento de equivalencia
// CDT 5: ['A','B','X','Z'], 2, ['A','X','B','Z']; -- particionamento de equivalencia
// CDT 6: [5,2,...], 501, 'VALOR INVALIDO'; -- analise do valor limite
// CDT 7: [],1, 'VALOR INVALIDO'; -- analise do valor limite
// CDT 8: [],, 'VALOR INVALIDO'; -- error guessing
// CDT 9: ['#@!#!@#'],1, '#@!#!@#';
// CDT 10: [1,2,3,4,5,6,7,8,9,10], 5, [1,6,2,7,3,8,4,9,5,10]; -- particionamento de equivalencia
// CDT 11: [1,"A",2,"B"], 2, [1,2,"A","B"]; -- particionamento de equivalencia
// CDT 12: [1,2,"B","B"], 2, [1,"B",2,"B"]; -- particionamento de equivalencia
// CDT 13: [1,2,3,"A","B","C"], 3, [1,"A",2,"B",3,"C"]; -- particionamento de equivalencia
// CDT 14: [1,2,2,4], x, 'VALOR INVALIDO'; -- error guessing
// CDT 15: 'LUCAS', 1, 'VALOR INVALIDO'; -- error guessing
// CDT 16: {L: 1, U: 2, C: 3, A: 4}, 2, 'VALOR INVALIDO'; -- error guessing
// CDT 17: ["","","",""], 2, 'VALOR INVALIDO'; -- error guessing
// CDT 18: ['A','A','A',A'], 2, ['A','A','A','A']; -- particionamento de equivalencia
// CDT 19: [undefined,undefined,undefined,undefined], 2, 'VALOR INVALIDO'; -- error guessing
// CDT 20: [null, null], 1, 'VALOR INVALIDO'; -- error guessing

describe("shuffle()", () => {
  it('should "", "", be "VALOR INVALIDO" ', () => {
    expect(shuffle()).toBe("VALOR INVALIDO");
  });
  it('should [1,2], 2, be "VALOR INVALIDO" ', () => {
    expect(shuffle([1, 2], 2)).toBe("VALOR INVALIDO");
  });
  it("should [1,2,3,4], 2, be [1,3,2,4] ", () => {
    expect(shuffle([1, 2, 3, 4], 2)).toEqual([1, 3, 2, 4]);
  });
  it("should [1,2,3,4,6,7], 3, be [1,4,2,6,3,7] ", () => {
    expect(shuffle([1, 2, 3, 4, 6, 7], 3)).toEqual([1, 4, 2, 6, 3, 7]);
  });
  it("should ['A','B','X','Z'], 2, be ['A','X','B','Z'] ", () => {
    expect(shuffle(["A", "B", "X", "Z"], 2)).toEqual(["A", "X", "B", "Z"]);
  });
  it("should [5,2,...], 501, be 'VALOR INVALIDO' ", () => {
    expect(shuffle([5, 2, 3, 4, 6, 7], 501)).toBe("VALOR INVALIDO");
  });
  it("should [],1, be 'VALOR INVALIDO' ", () => {
    expect(shuffle([], 1)).toBe("VALOR INVALIDO");
  });
  it("should [],, be 'VALOR INVALIDO' ", () => {
    expect(shuffle([], "")).toBe("VALOR INVALIDO");
  });
  it("should ['#@!#!@#'],1, be 'VALOR INVALIDO' ", () => {
    expect(shuffle(["#@!#!@#"], 1)).toBe("VALOR INVALIDO");
  });
  it("should [1,2,3,4,5,6,7,8,9,10], 5, be [1,6,2,7,3,8,4,9,5,10] ", () => {
    expect(shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)).toEqual([
      1, 6, 2, 7, 3, 8, 4, 9, 5, 10,
    ]);
  });
  it("should [1,'A',2,'B'], 2, be [1,2,'A','B'] ", () => {
    expect(shuffle([1, "A", 2, "B"], 2)).toEqual([1, 2, "A", "B"]);
  });
  it("should [1,2,'B','B'], 2, be [1,'B',2,'B'] ", () => {
    expect(shuffle([1, 2, "B", "B"], 2)).toEqual([1, "B", 2, "B"]);
  });
  it("should [1,2,3,'A','B','C'], 3, be [1,'A',2,'B',3,'C'] ", () => {
    expect(shuffle([1, 2, 3, "A", "B", "C"], 3)).toEqual([
      1,
      "A",
      2,
      "B",
      3,
      "C",
    ]);
  });
  it("should [1,2,2,4], x, be 'VALOR INVALIDO' ", () => {
    expect(shuffle([1, 2, 2, 4], "x")).toBe("VALOR INVALIDO");
  });
  it("should 'LUCAS', 1, be 'VALOR INVALIDO' ", () => {
    expect(shuffle("LUCAS", 1)).toBe("VALOR INVALIDO");
  });
  it("should {L: 1, U: 2, C: 3, A: 4}, 2, be 'VALOR INVALIDO' ", () => {
    expect(shuffle({ L: 1, U: 2, C: 3, A: 4 }, 2)).toBe("VALOR INVALIDO");
  });
  it("should ['', '', '', ''], 2, be ['','','','','']; ", () => {
    expect(shuffle(["", "", "", ""], 2)).toBe("VALOR INVALIDO");
  });
  it("should ['A','A','A','A'], 2, be ['A','A','A','A']; ", () => {
    expect(shuffle(["A", "A", "A", "A"], 2)).toEqual(["A", "A", "A", "A"]);
  });
  it("should [undefined,undefined,undefined,undefined], 2, be 'VALOR INVALIDO'; ", () => {
    expect(shuffle([undefined, undefined, undefined, undefined], 2)).toBe(
      "VALOR INVALIDO"
    );
  });
  it("should [null, null], 1, be 'VALOR INVALIDO'; ", () => {
    expect(shuffle([null, null], 1)).toBe("VALOR INVALIDO");
  });
});

// CDT 1:
// CDT 2:
// CDT 3:
// CDT 4:
// CDT 5:
// CDT 6:
// CDT 7:
// CDT 8:
// CDT 9:
// CDT 10:
// CDT 11:
// CDT 12:
// CDT 13:
// CDT 14:
// CDT 15:
// CDT 16:
// CDT 17:
// CDT 18:
// CDT 19:
// CDT 20:

describe("numJewelsInStones()", () => {});
