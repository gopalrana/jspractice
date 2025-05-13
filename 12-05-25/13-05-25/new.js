function findMissing(arr) {
    let n = Math.max(...arr);  // Max number in the array (we assume the numbers should range from 1 to n)
    let target = n + 1;  // Expected target number after max element
    let found = false;

    let allmissingarr = [];

    // Loop through and check for missing number
    for (let i = 1; i <= n; i++) {
        if (!arr.includes(i)) {  // If current number is not in the array
            found = true;
            allmissingarr.push(i);
        }
    }

    if (!found) {
        console.log("No missing number.");
    }

    return `${found} and numbers are ${allmissingarr}`;
}

var result = findMissing([1, 2, 4, 3, 7, 8, 9]);
console.log(result);  // This will return true or false based on whether a missing number is found





function findMissing(arr) {
    let n = Math.max(...arr);  // Max number in the array (we assume the numbers should range from 1 to n)
    let target = n + 1;  // Expected target number after max element
    let found = false;

    // Loop through and check for missing number
    for (let i = 1; i <= n; i++) {
        if (!arr.includes(i)) {  // If current number is not in the array
            console.log("Missing number is:", i);
            found = true;
            break;
        }
    }

    if (!found) {
        console.log("No missing number.");
    }

    return found;
}

var result = findMissing([1, 2, 4, 5, 3, 7, 8, 9]);
console.log(result);  // This will return true or false based on whether a missing number is found






// let arr = [1, 2, 4, 5, 3, 7, 8, 9];
// let newarr = arr.sort((a, b) => a - b);

// for (let index = 0; index < newarr.length; index++) {
//     if (newarr[index] !== index + 1) {
//         console.log("Missing number is:", index + 1);
//         break;
//     }
// }

let arr = [1, 2, 4, 5, 3, 7, 8, 9];

let num = Math.max(...arr);
console.log(num);
let totalsum = (num*(num+1))/2;
console.log(totalsum);

let sum = arr.reduce((acc,val)=>acc+val,0);
let missing_no = totalsum - sum;
console.log("missing no is",missing_no);








// var a = [9, 2, 4, 4, 5, 6];
// var b = [3, 4, 7, 9, 1];


let a = [1, 2, 2, 3];
let unique = new Set(a);        // Set automatically removes duplicates
console.log(unique);            // Output: Set(3) { 1, 2, 3 }

let result = Array.from(unique); // Set को फिर array में convert कर लो
console.log(result); 

// function arrnew(a, b) {
//     let result = [];

//     for (let i = 0; i < a.length; i++) {
//         for (let j = 0; j < b.length; j++) {
//             if (a[i] === b[j]) {
//                 if (!result.includes(a[i])) {
//                     result.push(a[i]);
//                 }
//                 // result.push(a[i]);


//             }
//         }
//     }

//     return result;
// }

// console.log(arrnew(a, b)); // Output: [9, 4]






// // find the common elements in the array
// // find the com


// // sol1
// function sortfunc(a,b) {

// const data = [...a,...b];
// console.log(data);
// var num =[]
// // let sorted = new Map(data);
// // console.log(sorted);
// for (let i = 0; i < data.length; i++) {
//     const element = array[i];
//     if (element === num) {
//         num.push(element)
        
//     }

//     return num;
    
// }
    
// }

// a = [9,2,4,4,5,6]
// b = [3,4,7,9,1]

//  data = sort(a,b);




// //  2nsol


// output [4,9]

// a = [9,2,4,4,5,6]
// b = [3,4,7,9,1]

// var element = [];
// for (let i = 0; i < a.length; i++) {
//     for (let j = i; j < b.length; j++) {
//          element = a[j];
//         if (a[i] === a[j]) {
//             element
            
//         }
                   
//     }
//     console.log("element",element);

    
// }

// const data = [...a,...b];

// let arrdata = new Map(data);
// console.log(arrdata);








// // function common(arr, tar) {
// //     arrdata = {}
// //     for (let i = 0; i < arr.length; i++) {
// //         const element = array[i];
// //         if (element === tar) {
// //             arrdata = element;
// //         }
// //          return element;
// //     }
// // }

// // console.log("array found", common[3, 4, 7, 9, 1], 4);




// let arr = [1, 2, 4, 5, 3, 7, 8, 9];
// const n = Math.max(...arr);  // maximum element in the array

// const expectedSum = (n * (n + 1)) / 2;  // sum of numbers from 1 to n
// const actualSum = arr.reduce((acc, val) => acc + val, 0);

// console.log('Expected Sum:', expectedSum);  // Sum of numbers from 1 to n
// console.log('Actual Sum:', actualSum);     // Sum of array elements

// let missingElement = expectedSum - actualSum;
// console.log('Missing Element:', missingElement);  // Output: 6
let arr = [1, 2, 4, 5, 3, 7, 8, 9];
const n = Math.max(...arr);  // maximum element in the array

let expectedSum = 0;
let actualSum = 0;

// Calculate expected sum (1 to n) and actual sum (sum of array elements) using a loop
for (let i = 1; i <= n; i++) {
    expectedSum += i;  // sum of numbers from 1 to n
}

for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];  // sum of numbers in the array
}

console.log('Expected Sum:', expectedSum);  // Sum of numbers from 1 to n
console.log('Actual Sum:', actualSum);     // Sum of array elements

let missingElement = expectedSum - actualSum;
console.log('Missing Element:', missingElement);  // Output: 6


let arr = [1, 3, 4, 6, 8];

// Automatically find max number from array
const n = Math.max(...arr);

let missingElements = [];

for (let i = 1; i <= n; i++) {
    if (!arr.includes(i)) {
        missingElements.push(i);  // Push the missing numbers
    }
}

console.log('Missing Elements:', missingElements);  // Output: [2, 5, 7]




let arr = [1, 3, 4, 6, 8];

// First, remove duplicates (optional, but safer) and sort in descending order
let sortedUnique = [...new Set(arr)].sort((a, b) => b - a);

const firstLargest = sortedUnique[0];
const secondLargest = sortedUnique[1]; // 2nd largest

console.log("1st Largest:", firstLargest);     // Output: 8
console.log("2nd Largest:", secondLargest);    // Output: 6


 


// // [1,2,4,5,3,7,8,9] find the missing number in the array

// let arr =[1,2,4,5,3,7,8,9]
// let newarr=  arr.sort()


// for (let index = 0; index < newarr.length; index++) {
//     // const element = newarr[index];
//     if (index+1 != newarr[index]  ) {
//         console.log("missing elemnet ",index+1);
//         break;
           
//     }
// }


arr =[1,2,4,5,3,7,8,9]
const n = 5;

const expectedSum = n * (n + 1) / 2;
const actualSum = arr.reduce((acc, val) => acc + val, 0);
console.log(expectedSum);
console.log(actualSum);



function findMissing(arr) {
    let n = Math.max(...arr);  // Max number in the array (we assume the numbers should range from 1 to n)
    let target = n + 1;  // Expected target number after max element
    let found = false;

    let allmissingarr = [];

    // Loop through and check for missing number
    for (let i = 1; i <= n; i++) {
        if (!arr.includes(i)) {  // If current number is not in the array
            found = true;
            allmissingarr.push(i);
        }
    }

    if (!found) {
        console.log("No missing number.");
    }

    return `${found} and numbers are ${allmissingarr}`;
}

var result = findMissing([1, 2, 4, 3, 7, 8, 9]);
console.log(result);  // This will return true or false based on whether a missing number is found




function target(arr, target) {
    var data = '';
    let found = false; // Added a flag to track if target is found

    for (let i = 0; i < arr.length; i++) {
        data += arr[i];
        if (data === target.toString()) {  // Convert target to string for comparison
            console.log("Number is found in arr:", data);
            found = true;  // Set flag to true if target is found
            break;  // Exit the loop once the target is found
        }
    }

    // If target was not found
    if (!found) {
        console.log("Number is not found in arr");
    }

    // Return whether the target is found or not
    return found;
}

var nofound = target([1, 2, 3, 5], 5);
console.log(nofound);  // This will return true or false based on whether target is found




// function pal(num){
//     var rev =''; 
//     var toStr = num.toString();
//     for (let i = toStr.length-1; i >= 0 ; i--) {
//          rev+= toStr[i];
        
//     }

//     return rev === toStr;
// }

// let data =pal(121);
// console.log(data);

// if(data === true)
// {
//     console.log("no is palidrome",data);
    
// }
// else {
//     console.log("no is not palidrome",data);
    
// }

// let data1 =pal(124);
// console.log(data1);


function pal(num) {
    var rev = ''; 
    var toStr = num.toString();
    for (let i = toStr.length - 1; i >= 0; i--) {
        rev += toStr[i];
    }

    return rev === toStr;
}

// Dynamic numbers (multiple numbers)
let numbers = [121, 124, 12321, 45654, 987];  // तुम जितने भी numbers चेक करना चाहो, उतने डाल सकते हो

for (let num of numbers) {
    let data = pal(num);
    if (data) {
        console.log(`${num} is palindrome`);   // If palindrome
    } else {
        console.log(`${num} is not palindrome`);   // If not palindrome
    }
}




// function rev(num) {
//     var revno = '';

//     var strNum = num.toString(); // Number को String में convert करो

//     for (let i = strNum.length - 1; i >= 0; i--) {
//         revno += strNum[i];
//     }
    

//     return revno;
// }

// var data = rev(12456); 
// console.log(data); // Output: "65421"





// // function rev(num) {

// //     var revno = '';

// //     for (let i = num.length - 1; i >= 0; i--) {

// //         revno += num[i];

// //     }


// //     return revno

// // }

// // var arrdata = [1, 2, 4, 5, 6]
// // var data = rev(arrdata);
// // console.log(data);




// Bracket Matcher
// Have the function BracketMatcher(str) take the str parameter being passed and return 1 if the brackets are correctly matched and each one is accounted for. Otherwise return 0. For example: if str is "(hello (world))", then the output should be 1, but if str is "((hello (world))" the the output should be 0 because the brackets do not correctly match up. Only "(" and ")" will be used as brackets. If str contains no brackets return 1.
// Examples
// Input: "(coder)(byte))"
// Output: 0
// Input: "(c(oder)) b(yte)"
// Output: 1


function BracketMatcher(str) {
    let stack = [];
  
    for (let char of str) {
      if (char === '(') {
        stack.push(char);
      } else if (char === ')') {
        if (stack.length === 0) {
          return 0; // unmatched closing bracket
        }
        stack.pop();
      }
    }
  
    return stack.length === 0 ? 1 : 0; // unmatched opening brackets if not empty
  }
  
  // Test cases
  console.log(BracketMatcher("(coder)(byte))"));      // Output: 0
  console.log(BracketMatcher("(c(oder)) b(yte)"));     // Output: 1
  console.log(BracketMatcher("no brackets here"));     // Output: 1
  



