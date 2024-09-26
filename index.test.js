const HammingDistance = require("./index");

describe("HammingDistance", () => {
  test("calculates Hamming distance between two strings with some differences", () => {
    const inputArray = ["1001", "1002"];
    expect(HammingDistance(inputArray)).toBe(1);
  });

  test("handles strings that are completely different", () => {
    const inputArray = ["0000", "1111"];
    expect(HammingDistance(inputArray)).toBe(4);
  });

  test("returns zero for identical strings", () => {
    const inputArray = ["abcd", "abcd"];
    expect(HammingDistance(inputArray)).toBe(0);
  });

  test("calculates Hamming distance with multiple differences", () => {
    const inputArray = ["abcde", "abfde"];
    expect(HammingDistance(inputArray)).toBe(1);
  });

  test("returns an error for input array with one string", () => {
    const inputArray = ["abcde"];
    expect(HammingDistance(inputArray)).toBe(
      "Invalid input: Input must be an array of exactly two strings."
    );
  });

  test("returns an error for input array with more than two strings", () => {
    const inputArray = ["abcde", "abfde", "extra"];
    expect(HammingDistance(inputArray)).toBe(
      "Invalid input: Input must be an array of exactly two strings."
    );
  });

  test("returns an error for input array with non-string elements", () => {
    const inputArray = [{ result: "123" }, { result: "113" }];
    expect(HammingDistance(inputArray)).toBe(
      "Invalid input: Both elements must be strings."
    );
  });

  test("returns an error for strings of different lengths", () => {
    const inputArray = ["abc", "abcd"];
    expect(HammingDistance(inputArray)).toBe(
      "Invalid input: Strings must be of equal length."
    );
  });

  test("handles empty strings", () => {
    const inputArray = ["", ""];
    expect(HammingDistance(inputArray)).toBe(0);
  });

  test("returns an error for empty array", () => {
    const inputArray = [];
    expect(HammingDistance(inputArray)).toBe(
      "Invalid input: Input must be an array of exactly two strings."
    );
  });

  test("handles strings with numbers", () => {
    const inputArray = ["1234", "1244"];
    expect(HammingDistance(inputArray)).toBe(1);
  });

  test("returns an error for input with mixed types", () => {
    const inputArray = ["abc", 123];
    expect(HammingDistance(inputArray)).toBe(
      "Invalid input: Both elements must be strings."
    );
  });
});
