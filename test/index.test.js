import { toRoman } from "../src";

describe('Index', () => {
   test('Debe ser un número', () => {
      expect(()=>{
         toRoman("a")
      }).toThrow();
   });
   test("Debe ser mayor que 0", () => {
      expect(toRoman(0)).toBe("Error");
   });
   test("Debe ser menor que 3001", () => {
      expect(toRoman(3001)).toBe("Es muy grande");
   });
   test("Debe devolver I si es 1", () => {
      expect(toRoman(1)).toBe("I");
   });
   test("Debe devolver V si es 4 o 5", () => {
      expect(toRoman(4)).toBe("IV");
      expect(toRoman(5)).toBe("V");
   });
   test("Debe devolver IX si es 9 y X si es 10", () => {
      expect(toRoman(9)).toBe("IX");
      expect(toRoman(10)).toBe("X");
   });
   test("Debe devolver XL si es 40 y L si es 50", () => {
      expect(toRoman(40)).toBe("XL");
      expect(toRoman(50)).toBe("L");
   });
   test("Debe devolver XC si es 90 y C si es 100", () => {
      expect(toRoman(90)).toBe("XC");
      expect(toRoman(100)).toBe("C");
   });
   test("Debe devolver CD si es 400 y D si es 500", () => {
      expect(toRoman(400)).toBe("CD");
      expect(toRoman(500)).toBe("D");
   });
   test("Debe devolver CM si es 900 y M si es 1000", () => {
      expect(toRoman(900)).toBe("CM");
      expect(toRoman(1000)).toBe("M");
   });
   test("Debe devolver MMI si es 2001", () => {
      expect(toRoman(2001)).toBe("MMI");
   });
   test("Debe devolver MCMLXXXIX si es 1989", () => {
      expect(toRoman(1989)).toBe("MCMLXXXIX");
   });
});