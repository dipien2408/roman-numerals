//mention case: input is not string, input is not uppercase, input is string but empty (""), character not roman numeral
/**
 * Converts a Roman numeral string to an integer.
 * @param {string} input
 * @return {number}
 */
function romanToInt(input) {
  //case input is not string (number,...)
    if (typeof input !== 'string') {
        throw new Error("Input invalid: Expected a string.");
    }

    input = input.trim().toUpperCase();

    if (input.length === 0) {
        return 0;
    }

    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    const n = input.length;

    for (let i = 0; i < n; i++) {
        const currentChar = input[i];
        const currentVal = romanMap[currentChar];

        //check character does not exist in map 
        if (currentVal === undefined) {
            throw new Error(`Character is invalid: '${currentChar}'`);
        }

        const nextVal = (i < n - 1) ? romanMap[input[i + 1]] : 0;

        if (currentVal < nextVal) {
            total -= currentVal;
        } else {
            total += currentVal;
        }
    }

    return total;
}

// function runTests() {
//   console.log("=== TEST BEGIN ===");

//   const testCases = [
//       { input: "III", expected: 3 },
//       { input: "IV", expected: 4 },
//       { input: "IX", expected: 9 },
//       { input: "LVIII", expected: 58 },
//       { input: "MCMXCIV", expected: 1994 },
//       { input: "CDXLIV", expected: 444 }, 
//       //not valid character case
//       { input: "i", expected: 1 },        
//       { input: "  MCM  ", expected: 1900 }, 
//       { input: "", expected: 0 }        
//   ];

//   let passedCount = 0;


//   console.log("\n--- Logic Test ---");
//   testCases.forEach(test => {
//       try {
//           const result = romanToInt(test.input);
//           if (result === test.expected) {
//               console.log(`PASS | Input: "${test.input}" -> Output: ${result}`);
//               passedCount++;
//           } else {
//               console.log(`FAIL | Input: "${test.input}" -> Expected: ${test.expected}, Got: ${result}`);
//           }
//       } catch (e) {
//           console.log(`ERROR | Input: "${test.input}" Error: ${e.message}`);
//       }
//   });

//   console.log("\n--- Error Handling ---");
//   const errorCases = [
//       { input: 123, desc: "Input is number" },
//       { input: "MC Q", desc: "Not roman numerals" },
//       { input: null, desc: "Input null" }
//   ];

//   errorCases.forEach(test => {
//       try {
//           romanToInt(test.input);
//           console.log(`FAIL | Case [${test.desc}] must be errored`);
//       } catch (e) {
//           console.log(`PASS | Case [${test.desc}] error caught: "${e.message}"`);
//           passedCount++;
//       }
//   });

//   console.log(`\n=== SUMMARY: ${passedCount}/${testCases.length + errorCases.length} TEST PASSED ===`);
// }

// runTests();

