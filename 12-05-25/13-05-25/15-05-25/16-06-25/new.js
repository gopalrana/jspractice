

function premium_data(arr1,arr2) {


    for (let i = 0; i < arr1.length; i++) {

        for (let j = arr1.length; j < arr1.length; j++) {
            const j = array[index];
            
        }
        
    }

}


















function arr_data(arr1) {
    counter ={}
   for (let index = 0; index < arr1.length; index++) {
    const element = arr1[index];
  
    if (counter[element]) {
        counter[elment]++
        
    }else
    {
        counter[element] = 1;
    }

    
   }
   return counter;
    
 }

 let result = arr_data([1, 2, 2, 3, 4, 4, 4]);
console.log(result); 



function arr_data(arr) {
    const counter = {};
    for (let item of arr) {
      counter[item] = (counter[item] || 0) + 1;
    }
    return counter;
  }
  
  let result = arr_data([1, 2, 2, 3, 4, 4, 4]);
  console.log(result); // { '1': 1, '2': 2, '3': 1, '4': 3 }
  

router.get('/delete-pb_captcha', function (req, res) {
    try {
        let tenMinutesAgo = moment().subtract(1, 'minutes').toDate();

        let pb_captcha = require('../models/pb_captcha.js');

        pb_captcha.deleteMany({ Created_On: { $lt: tenMinutesAgo } }, function (err, result) {
            if (err) {
                return res.json({Msg: 'Error'});
            }
            else {
                return res.json({
                    Msg: 'Success',
                    deletedCount: result.deletedCount
                });
            }
        });

    } catch (ex) {
        console.error('Exception in /delete-pb_captcha API', e.stack);
        return res.json({'msg': 'Error'});
    }
});




function arr_data(arr1) {
    let counter = {};

    for (let i = 0; i < arr1.length; i++) {
        let element = arr1[i];
        if (counter[element]) {
            counter[element]++;
        } else {
            counter[element] = 1;
        }
    }

    return counter;
}

// Example
let result = arr_data([1, 2, 2, 3, 4, 4, 4]);
console.log(result); 
// Output: { '1': 1, '2': 2, '3': 1, '4': 3 }


// 11. Find the largest number in an array.
// 12. Find the smallest number in an array.
// 13. Find the second largest number in an array.
// 14. Remove duplicates from an array.
// 15. Reverse an array.
// 16. Find the sum of all elements in an array.
// 17. Find the frequency of elements in an array.
// 18. Merge two sorted arrays.
// 19. Find the intersection of two arrays.
// 20. Rotate an array by `k` positions.

// function Match(arr) {

//     var count = {}

//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];

//         if (count[element] === undefined) {
//             count[element] = 1

//         } else {
//             count[element] = count[element] + 1
//         }
//     }

//    console.log("count is ",count);   
//     let values = Object.values(obj);
//     console.log(values); 
//     let unique_data = [...new Set(values)]
//     console.log("unique_data",unique_data);

// }

// Match([1,3,3,1,1,5])


// var arr_data = [1,3,3,1,1,5]

// var sum=arr_data.reduce((val,acc)=>val+acc,0)
// console.log("Sum ",sum);



router.get('/delete_pb_captcha', function (req, res) {
    try {
        let tenMinutesAgo = moment().subtract(1, 'minutes').toDate();
        let pb_captcha = require('../models/pb_captcha.js');

        pb_captcha.deleteMany({ Created_On: { $lt: tenMinutesAgo } }, function (err, result) {
            if (err) {
                return res.json({ Msg: 'Error' });
            } else {
                return res.json({
                    Msg: 'Success',
                    deletedCount: result.deletedCount
                });
            }
        });

    } catch (ex) {
        console.error('Exception in /delete-pb_captcha API', ex.stack);
        return res.json({ Msg: 'Error' });
    }
});


// function Inter(arr1, arr2) {
//     // Sort both arrays (optional, but useful if you want sorted result)
//     let arr1_Sorted = arr1.sort();
//     let arr2_Sorted = arr2.sort();
  
//     let result = [];
  
//     for (let i = 0; i < arr1_Sorted.length; i++) {
//       let element_i = arr1_Sorted[i];
  
//       for (let j = 0; j < arr2_Sorted.length; j++) {
//         let element_j = arr2_Sorted[j];
  
//         if (element_i === element_j) {
//           if (!result.includes(element_j)) {
//             result.push(element_j);
//           }
//         }
//       }
//     }
  
//     return result;
//   }




//  function Same(arr1, arr2) {
//     var arr1_Sorted = arr1.sort();
//     var arr2_Sorted = arr2.sort();

//     var arrdata = []
  
//     if (arr1_Sorted.length !== arr2_Sorted.length) {
//       return false;
//     } 

//     for (let i = 0; i < arr1_Sorted.length; i++) {
//         const element1 = array[i];
        
//     }

//     for (let j = 0; j < arr2_Sorted.length; j++) {
//         const element2 = array[j];

//         if (element1 === element2) {

//             if (!arrdata.includes(element1)) {
   
//             }            
//         }
  
//     }
//   }
  
  
  
//   console.log(Same([1, 2, 4], [3, 4, 5, 6]));

//   function Same(arr1, arr2) {
//     // Sort both arrays
//     let arr1_Sorted = arr1.slice().sort();
//     let arr2_Sorted = arr2.slice().sort();
  
//     // If lengths differ, they can't be the same
//     if (arr1_Sorted.length !== arr2_Sorted.length) {
//       return false;
//     }
  
//     // Compare elements one by one
//     for (let i = 0; i < arr1_Sorted.length; i++) {
//       if (arr1_Sorted[i] !== arr2_Sorted[i]) {
//         return false;
//       }
//     }
  
//     // All elements matched
//     return true;
//   }
  
//   console.log(Same([1, 2, 4], [4, 1, 2]));  // true
//   console.log(Same([1, 2, 4], [3, 4, 5]));  // false
  



//   function mergeSortedArrays(arr1, arr2) {
//     let merged = [];
//     let i = 0, j = 0;
  
//     // Main loop using for
//     for (let k = 0; k < arr1.length + arr2.length; k++) {
//       if (i < arr1.length && (j >= arr2.length || arr1[i] < arr2[j])) {
//         merged.push(arr1[i]);
//         i++;
//       } else if (j < arr2.length) {
//         merged.push(arr2[j]);
//         j++;
//       }
//     }
  
//     return merged;
//   }
  
//   // Example:
// //   const array1 = [1, 3, 5, 7];
// //   const array2 = [2, 4, 6, 8];
  
//   const result = mergeSortedArrays(array1, array2);
//   console.log("Merged Sorted Array:", result);
  



// router.get('/delete_pb_captcha', async (req, res) => {
//     try {
//         // Query param: ?minutes=10 (default = 10)
//         const minutes = parseInt(req.query.minutes) || 10;
//         const timeThreshold = moment().subtract(minutes, 'minutes').toDate();

//         console.log(`[INFO] Looking for pb_captcha entries older than ${minutes} minutes...`);

//         // Step 1: Count matching entries
//         const totalCount = await PbCaptcha.countDocuments({ Created_On: { $lt: timeThreshold } });

//         console.log(`[INFO] Found ${totalCount} entries to delete.`);

//         // Step 2: Delete them
//         const deleteResult = await PbCaptcha.deleteMany({ Created_On: { $lt: timeThreshold } });

//         console.log(`[INFO] Deleted ${deleteResult.deletedCount} entries.`);

//         // Step 3: Send response
//         return res.status(200).json({
//             status: 'success',
//             message: `${deleteResult.deletedCount} out of ${totalCount} entries deleted.`,
//             timeThreshold: timeThreshold,
//             totalCountBeforeDelete: totalCount,
//             deletedCount: deleteResult.deletedCount
//         });

//     } catch (error) {
//         console.error('[ERROR] Deletion failed:', error.stack);
//         return res.status(500).json({
//             status: 'error',
//             message: 'An error occurred while deleting pb_captcha entries',
//             error: error.message
//         });
//     }
// });




// function add_data(arr) {
//     var maxarr = Math.max(...arr)
//     console.log(maxarr);
//     sum = (maxarr * 10(maxarr+1))
//     console.log("Sum Of Arr is ",sum);
//     return sum
// }

// console.log(add_data([2,13,4,4,2,1]))

// const array1 = [1, 2, 3, 4];
// const array2 = [3, 5, 7];


// // Combine both arrays, then create a Set to keep unique values
// const union = [...new Set([...array1, ...array2])];

// console.log(union);  // [1, 2, 3, 4, 5, 7]


// const newunion = [...new Set([...array1,...array2])];




// const array1 = [1, 2, 3, 4];
// const array2 = [3, 5, 7];

// const hasCommon = array2.some(el => array1.includes(el));

// console.log(hasCommon);  // true (because 3 is common)




// function remove_array(arr, tar) {
//     var arr_data = [];
//     for (let i = 0; i < arr.length; i++) {
//       const element = arr[i];
//       if (element !== tar) {
//         arr_data.push(element); 
//       }
//     }
//     return arr_data;
//   }
  
//   console.log(remove_array([1, 2, 3, 2, 4, 2, 5], 2));  
  

// function smallest(arr) {
   
//     var min = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         const element = array[i];
//         if (element<min) {
//             min = element;
            
//         }
        
//     }
//     return min;
    
// }


// console.log(smallest[10,1,2,4,5,6]);



// function fat(arr) {
//  var fact = null
 
// for (let i = 0; i < arr.length; i++) {
//     fact = fact * arr[i];
    
// }

// return fact ;

    
// }

// console.log(fat([5]));



// const myfunction = new Promise(reject, resolve)
// {


//     setTimeout((data)=>{
//     var success = true;

//     if (success) {
//         resolve("Data Fetched successfully ");

//     } else {

//         reject("Failed  to fetched data ");


//     }

//     } ,2000)
    

// }


// myfunction.then((data) => {

//     console.log(data);


// })
//     .catch((error) => {
//         console.log(error);


//     })




//     function count(str) {
//         const vowels = "aeiouAEIOU";
//         var count = 0
//         var addarr = [];
//         for (let i = 0; i < str.length; i++) {
//             const element = str[i];

//             if (vowels.includes(element)) {
//                 count++
//                 addarr.push(element)
                
//             }
            
//         }
//         return count 
    

//     }
    // console.log(count("I love programming")); // Output: 6


















function remove(arr1) { 
    // Step 1: Convert the array to a Set (removes duplicates)
    const uniqueSet = new Set(arr1);
  
    // Step 2: Convert the Set back into an array
    const uniqueArray = Array.from(uniqueSet);
  
    return uniqueArray;
  }
  
  console.log(remove([1, 2, 1, 1, 1, 2])); // ✅ Correct call with ()
           


function small_word(arr) {
   var word = arr.split(' ');

   var smallest_no = word[0];
   
   for (let i = 0; i < word.length; i++) {
        if (word[[i].length < smallest.length]) {
            var small_word = word[i];
            
        }
    
   }

   return smallest;
    
}

  // Example usage:
  const new_sentence = "I love programming in JavaScript";
  console.log(findLongestWord(new_sentence));  // Output: programming
































  function findLongestWord(sentence) {
    // Split the sentence into words using space as delimiter
    const words = sentence.split(' ');
  
    // Initialize longest word as the first word
    let longestWord = words[0];
  
    // Loop through all words
    for (let i = 1; i < words.length; i++) {
      // If current word is longer than longestWord, update longestWord
      if (words[i].length > longestWord.length) {
        longestWord = words[i];
      }
    }
  
    return longestWord;
  }
  
  // Example usage:
  const sentence = "I love programming in JavaScript";
  console.log(findLongestWord(sentence));  // Output: programming
  



  function find_diff(arr1, arr2) {
    let result = [];
  
    for (let i = 0; i < arr1.length; i++) {
      const element = arr1[i];
      if (!arr2.includes(element)) {
        result.push(element);
      }
    }
  
    return result;
  }
  
  // Example:
  const a = [1, 2, 3, 4, 5];
  const b = [2, 4];
  
  console.log(find_diff(a, b)); // Output: [1, 3, 5]
  


function  find_diff(arr1,arr2) {

var arr1_sort = arr1.sort()
var arr2_sort = arr2.sort()

let arr_data = []

for (let i = 0; i < arr1_sort.length; i++) {
    const element = arr1_sort[i];
    if (!arr2.includes(element) ) {
        
        arr_data.push(element)
        
    }
    
}
return result 
    
}




function printSubstrings(str) {
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            //console.log(str.substring(i, j));
        }
    }
}
 
let sting = "welcome to policyboss.com interview roend";
console.log(printSubstrings(sting));
 // Prints all substrings one by one



