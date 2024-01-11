// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return "Your order is empty!";
//   } else if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }

//   return "The order is accepted, our manager will contact you";
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

// function getExtremeElements(array) {
//   // Change code below this line
//   const newArray = [];
//   newArray.push(array[0], array[array.length - 1]);
//   return newArray;

//   // Change code above this line
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));

// function slugify(title) {
//   // Change code below this line
//   const slug = title.toLowerCase().split(" ").join("-");

//   return slug;
//   // Change code above this line
// }

// console.log(slugify("Arrays for begginers"));
// console.log(slugify("English for developer"));
// console.log(slugify("Ten secrets of JavaScript"));
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

// function makeArray(firstArray, secondArray, maxLength) {
//   const allArray = firstArray.concat(secondArray);
//   return allArray.slice(0, maxLength);

// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));

// function calculateTotal(number) {

//   let sum = 0;
//   for (let i = 0; i <= number; i += 1) {
//     sum += i;
//   }
//   return sum;

// }

// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(50));

// function calculateTotalPrice(order) {
//   let total = 0;

//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }

//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));

// function findLongestWord(string) {
//   let longestWord = "";
//   const words = string.split(" ");

//   for (let word of words) {
//     if (word.length > longestWord.length) longestWord = word;
//   }
//   return longestWord;
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }

//   // Change code above this line
//   return numbers;
// }

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const newArray = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     if (array1.includes(array2[i])) {
//       newArray.push(array2[i]);
//     }
//   }

//   return newArray;
//   // Change code above this line
// }

// function getEvenNumbers(start, end) {
//    // Change code below this line
//     const array = [];
//   for (let i = start; i <= end; i+=1) {
//    if(i % 2 === 0) {
//       array.push(i)
//       }
//   }

//      return array;
//     // Change code above this line
//   }

// console.log(getEvenNumbers(3, 11));

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// console.log(number);

// function includes(array) {
//   // Change code below this line
//   for (const element of array) {
//     if (element === 3) {
//       return true;
//     }
//     return false;
//   }
//   // Change code above this line
// }

// console.log(includes([1, 2, 3, 4, 5]));

// function grow(x) {
//   let result = 1;
//   for (const number of x) {
//     //   result *= number;
//     console.log((result *= number));
//   }

//   return result;
// }

// const reverseSeq = (n) => {
//   const array = [];
//   for (let i = 1; i <= n; i += 1) {
//     array.push[i];
//   }
//   return array;
// };

// function findNeedle(haystack) {
//   // your code here
//   let message = "";
//   for (let i = 0; i < haystack.length; i += 1) {
//     if (haystack[i] === "needle") {
//       message = `found the needle at position ${i}`;
//       break;
//     }
//   }
//   return message;
// }

// console.log(
//   findNeedle([
//     "3",
//     "123124234",
//     undefined,
//     "needle",
//     "world",
//     "hay",
//     2,
//     "3",
//     true,
//     false,
//   ])
// );

// function XO(str) {
//   return str.toLowerCase().includes("xo");
// }

// function positiveSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] > 0) {
//       console.log((sum += arr[i]));
//     }
//   }
//   return sum;
// }

// function repeatStr(n, s) {
//   return `${s.repeat(n)}`;
// }

// function noSpace(x) {
//   const array = x.split(" ");
//   console.log(array);

//   return array.join("");
// }

// function bmi(weight, height) {
//   const bodyMassIndex = weight / (height * height);
//   const bodyMassIndexRound = Math.round(bodyMassIndex);
//   console.log(bodyMassIndexRound);
//   if (bodyMassIndexRound <= 18.5) {
//     return "Underweight";
//   } else if (bodyMassIndexRound <= 25.0) {
//     return "Normal";
//   } else if (bodyMassIndexRound <= 30.0) {
//     return "Overweight";
//   }

//   return "Obese";
// }

// function solution(str) {
//   return str.split("").reverse().join("");
// }

// function getMiddle(s) {
//   const middelWord = Math.floor(s.length / 2);

//   if (s.length % 2 === 0) {
//     return s.substring(middelWord - 1, middelWord + 2);
//   } else {
//     return s.charAt(middelWord);
//   }
// }

// function removeChar(str) {
//   return str.slice(1, str.length - 1);
// }

// function sumMix(x) {
//   const array = [];
//   let sum = 0;
//   for (let i = 0; i < x.length; i += 1) {
//     console.log(x[i]);
//     if (typeof x[i] === "string") {
//       array.push(Number(x[i]));
//     } else {
//       array.push(x[i]);
//     }
//   }

//   for (const number of array) {
//     sum += number;
//   }
//   console.log(array);
//   console.log(sum);
// }

function removeExclamationMarks(s) {
  const array = s.split("");
  console.log(array.length);
  for (let i = 0; i < array.length; i += 1) {
    console.log(i);
    if (array[i] === "!") {
      console.log(array);
      console.log(`Delete ${array[i]}`);
      array.splice(i, 1);
      i -= 1;
    }
  }
  console.log(array);

  const newString = array.join("");

  return newString;
}

console.log(removeExclamationMarks("He!llo!!o!!!!!!!"));
// console.log(removeExclamationMarks("Hello! Hahaha!!!!"));
