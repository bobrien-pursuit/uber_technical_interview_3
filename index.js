/*
Calculate Hamming Distance

Description:

Write a function HammingDistance that takes an array of two strings strArr as input. Both strings will be of equal length and contain only lowercase alphabetic characters or numbers. The function should return the Hamming distance between the two strings. The Hamming distance is defined as the number of positions where the corresponding characters in the two strings are different.

For example, if strArr is ["1001", "1002"], the function should return 1 because there is only one position (the last character) where the two strings differ.

input: ["1001", "1002"]
output: 1


*/

function HammingDistance(strArr) {
  let count = 0;

    if (strArr.length !== 2)

            return "Invalid input: Input must be an array of exactly two strings.";
    
    else if (typeof strArr[0] !== "string" || typeof strArr[1] !== "string")

            return "Invalid input: Both elements must be strings.";
    
    else if (strArr[0].length !== strArr[1].length)
    
            return "Invalid input: Strings must be of equal length.";
    
    else

        for (let i = 0; i < strArr[0].length; i++)
            if (strArr[0][i] !== strArr[1][i]) 
                 count++;
    

        return count;
}

module.exports = HammingDistance;
