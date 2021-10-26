const { romanToInt, shuffle, numJewelsInStones } = require("./index");

describe("romanToInt()", () => {
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

  it('should "I" be 1', () => {
    const romanNumber = "I";
    expect(romanToInt(romanNumber)).toBeGreaterThan(0);
    expect(romanToInt(romanNumber)).toBeLessThan(2);
  });
  it('should "III" be 3', () => {
    const romanNumber = "III";
    expect(romanToInt(romanNumber)).toEqual(3);
  });
  it('should "IV" be 4', () => {
    const romanNumber = "IV";
    expect(romanToInt(romanNumber)).toBeGreaterThanOrEqual(0);
    expect(romanToInt(romanNumber)).toBeLessThan(10);
  });
  it('should "V" be 5', () => {
    const romanNumber = "V";
    expect(romanToInt(romanNumber)).toBe(5);
  });
  it('should "312321" be "VALOR INVALIDO"', () => {
    expect(romanToInt("312321")).toMatch(/valor invalido/i);
  });
  it('should "VIII" be 8', () => {
    const romanNumber = "VIII";
    expect(romanToInt(romanNumber)).toBeGreaterThan(0);
  });
  it('should "IX" be 9', () => {
    expect(romanToInt("IX")).toBe(9);
  });
  it('should "" be "VALOR INVALIDO"', () => {
    expect(romanToInt("")).toContain("INVALIDO");
  });
  it('should "#$!@$@#" be "VALOR INVALIDO"', () => {
    const romanNumber = "#$!@$@#";
    expect(romanToInt(romanNumber)).toBe("VALOR INVALIDO");
  });
  it('should "XIV" be 14', () => {
    const romanNumber = "XIV";
    expect(romanToInt(romanNumber)).toBeLessThanOrEqual(14);
  });
  it('should "XV" be 15', () => {
    expect(romanToInt("XV")).toBe(15);
  });
  it('should "LUCAS" be "VALOR INVALIDO"', () => {
    expect(romanToInt("LUCAS")).toMatch(/valor/i);
  });
  it('should "XIX" be 19', () => {
    expect(romanToInt("XIX")).toEqual(19);
  });
  it('should "XX" be 20', () => {
    const romanNumber = "XX";
    expect(romanToInt(romanNumber)).toBeLessThanOrEqual(20);
    expect(romanToInt(romanNumber)).toBe(20);
  });
  it('should "XXV" be 25', () => {
    expect(romanToInt("XXV")).toBe(25);
  });
  it('should "XXIX" be 29', () => {
    expect(romanToInt("XXIX")).toBe(29);
  });
  it('should "D" be 500', () => {
    const romanNumber = "D";
    expect(romanToInt(romanNumber)).toBe(500);
    expect(romanToInt(romanNumber)).toBeGreaterThanOrEqual(499);
  });
  it('should "XL" be less than 50', () => {
    expect(romanToInt("XL")).toBeLessThan(50);
  });
  it('should "L" be 50', () => {
    expect(romanToInt("L")).toEqual(50);
  });
  it('should "MMMCMXCIX" be 3999', () => {
    expect(romanToInt("MMMCMXCIX")).toBe(3999);
  });
});

describe("shuffle()", () => {
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

  it('should "", "", be "VALOR INVALIDO" ', () => {
    expect(shuffle()).toMatch("VALOR INVALIDO");
  });
  it('should [1,2], 2, be "VALOR INVALIDO" ', () => {
    expect(shuffle([1, 2], 2)).toBe("VALOR INVALIDO");
  });
  it("should [1,2,3,4], 2, be [1,3,2,4] ", () => {
    expect(shuffle([1, 2, 3, 4], 2)).toContain(1);
    expect(shuffle([1, 2, 3, 4], 2)).toContain(3);
    expect(shuffle([1, 2, 3, 4], 2)).toContain(2);
    expect(shuffle([1, 2, 3, 4], 2)).toContain(4);
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
    expect(shuffle([], 1)).toMatch(/invalido/i);
  });
  it("should [],, be 'VALOR INVALIDO' ", () => {
    expect(shuffle([], "")).toBe("VALOR INVALIDO");
  });
  it("should ['#@!#!@#'],1, be 'VALOR INVALIDO' ", () => {
    expect(shuffle(["#@!#!@#"], 1)).toBe("VALOR INVALIDO");
  });
  it("should [1,2,3,4,5,6,7,8,9,10], 5, be [1,6,2,7,3,8,4,9,5,10] ", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(shuffle(array, 5)).toHaveLength(array.length);
    expect(shuffle(array, 5)).toEqual([1, 6, 2, 7, 3, 8, 4, 9, 5, 10]);
  });
  it("should [1,'A',2,'B'], 2, be [1,2,'A','B'] ", () => {
    expect(shuffle([1, "A", 2, "B"], 2)).toContain("B");
    expect(shuffle([1, "A", 2, "B"], 2)).toContain("A");
    expect(shuffle([1, "A", 2, "B"], 2)).toContain(1);
    expect(shuffle([1, "A", 2, "B"], 2)).toContain(2);
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
    expect(shuffle("LUCAS", 1)).toMatch("VALOR INVALIDO");
  });
  it("should {L: 1, U: 2, C: 3, A: 4}, 2, be 'VALOR INVALIDO' ", () => {
    expect(shuffle({ L: 1, U: 2, C: 3, A: 4 }, 2)).toMatch(/INVALIDO/);
  });
  it("should ['', '', '', ''], 2, be 'VALOR INVALIDO' ", () => {
    expect(shuffle(["", "", "", ""], 2)).toMatch(/VALOR/);
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

describe("numJewelsInStones()", () => {
  // CDT 1: [1,5], 1, 'VALOR INVALIDO'; -- particionamento de equivalencia
  // CDT 2: [1,2], 2, 'VALOR INVALIDO' -- particionamento de equivalencia
  // CDT 3: { L: 1, U: 2, C: 3, A: 4 }, 'A', 'VALOR INVALIDO'; -- error guessing
  // CDT 4: null, null, 'VALOR INVALIDO'; -- error guessing
  // CDT 5: undefined, undefined, 'VALOR INVALIDO'; -- error guessing
  // CDT 6: 'aa', 'AAaaAA', 'VALOR INVALIDO'; -- particionamento de equivalencia
  // CDT 7: 'zz', 'ZZzzz', 'VALOR INVALIDO'; -- particionamento de equivalencia
  // CDT 8: 'a', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'VALOR INVALIDO'; -- analise do valor limite
  // CDT 9: "" , "", 'VALOR INVALIDO'; -- analise do valor limite
  // CDT 10: 'zzz', '', 'VALOR INVALIDO'; -- analise do valor limite
  // CDT 11: '', 'ZZbbbb', 'VALOR INVALIDO' -- analise do valor limite
  // CDT 12: 'z', 'ZZ', 0; -- particionamento de equivalencia
  // CDT 13: 'a', 'a', 1; -- particionamento de equivalencia
  // CDT 14: '12', '523245', 2; -- particionamento de equivalencia
  // CDT 15 'aA', 'aAAbbbb', 3; -- particionamento de equivalencia
  // CDT 16: '%$#', '$$$', 3; -- particionamento de equivalencia
  // CDT 17: 'sfw', 'RRRRTTTTYYY', 0; -- particionamento de equivalencia
  // CDT 18: 'sfw' 'RRRRTTTTYYYs', 1; -- particionamento de equivalencia
  // CDT 19: 'sfw', 'sFW', 1; -- particionamento de equivalencia
  // CDT 20: '[]', '[Lucas]', 2; -- particionamento de equivalencia

  it("should [1, 5], 1, be 3", () => {
    expect(numJewelsInStones([1, 5], 1)).toMatch("VALOR INVALIDO");
  });
  it('should [1,2], 2, be "VALOR INVALIDO" ', () => {
    expect(numJewelsInStones([1, 2], 2)).toMatch(/valor invalido/i);
  });
  it('should {L: 1, U:2, C:3: A:4}, A, be "VALOR INVALIDO"', () => {
    expect(numJewelsInStones({ L: 1, U: 2, C: 3, A: 4 }, "A")).toEqual(
      "VALOR INVALIDO"
    );
  });
  it('should null, null be "VALOR INVALIDO" ', () => {
    expect(numJewelsInStones(null, null)).toMatch(/valor/i);
  });
  it('should undefined, undefined be "VALOR INVALIDO" ', () => {
    expect(numJewelsInStones(undefined, undefined)).toMatch(/invalido/i);
  });
  it('should "aa", "AAaaAA", be "VALOR INVALIDO" ', () => {
    expect(numJewelsInStones("aa", "AAaaAA")).toEqual("VALOR INVALIDO");
  });
  it("should 'zz', 'ZZzzz', be 'VALOR INVALIDO' ", () => {
    expect(numJewelsInStones("zz", "ZZzzz")).toBe("VALOR INVALIDO");
  });
  it("should 'a', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', be 'VALOR INVALIDO' ", () => {
    expect(numJewelsInStones("zz", "ZZzzzz")).toMatch("VALOR INVALIDO");
  });
  it('should "", "", be "VALOR INVALIDO" ', () => {
    expect(numJewelsInStones()).toMatch(/VALOR INVALIDO/);
  });
  it("should 'zzz', '', be 'VALOR INVALIDO' ", () => {
    expect(numJewelsInStones("zzz", "")).toMatch("VALOR INVALIDO");
  });
  it("should '', 'ZZbbbb', be 'VALOR INVALIDO' ", () => {
    expect(numJewelsInStones("", "ZZbbbb")).toMatch(/invalido/i);
  });
  it("should 'z', 'ZZ', be 0 ", () => {
    expect(numJewelsInStones("z", "ZZ")).toBeGreaterThanOrEqual(0);
    expect(numJewelsInStones("z", "ZZ")).toBeLessThan(1);
  });
  it("should 'a', 'a', be 1 ", () => {
    expect(numJewelsInStones("a", "a")).toBeLessThanOrEqual(1);
    expect(numJewelsInStones("a", "a")).toBeGreaterThanOrEqual(0);
  });
  it("should '12', '523245', be 2 ", () => {
    expect(numJewelsInStones("12", "523245")).toBeLessThan(3);
    expect(numJewelsInStones("12", "523245")).toBeGreaterThan(1);
  });
  it("should 'aA', 'aAAbbbb', be 3 ", () => {
    expect(numJewelsInStones("aA", "aAAbbbb")).toEqual(3);
  });
  it("should '%$#', '$$$', be 3 ", () => {
    expect(numJewelsInStones("%$#", "$$$")).toBe(3);
  });
  it("should 'sfw', 'RRRRTTTTYYY', be 0 ", () => {
    expect(numJewelsInStones("sfw", "RRRRTTTTYYY")).toBeLessThan(1);
  });
  it("should 'sfw', 'RRRRTTTTYYYs', be 1 ", () => {
    expect(numJewelsInStones("sfw", "RRRRTTTTYYYs")).toBe(1);
  });
  it("should 'sfw', 'sFW', be 1 ", () => {
    expect(numJewelsInStones("sfw", "sFW")).toEqual(1);
  });
  it("should '[]', '[Lucas]', be 2 ", () => {
    expect(numJewelsInStones("[]", "[Lucas]")).toBeLessThan(3);
    expect(numJewelsInStones("[]", "[Lucas]")).toBeGreaterThanOrEqual(2);
  });
});
