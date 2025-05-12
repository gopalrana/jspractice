function target(arr, num) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === num) {
        return "Element found";
      }
    }
    return "Element not found";
  }
  
  console.log(target([1, 2, 4, 5, 6], 11));  
  



  function fact(num) {
    var result = 1;
      for (let i = 2; i <= num; i++) {
        result  *= i;
        
      }
      return result;
        
    }
    
    
    let data = fact(5) 
    
    console.log("Fact Data ",data);
    


    // function feb(num) {
//   let a = 0; 
//   let b=1 ;
//   for (let i = 0; i < num; i++) {
//   let c = a + b;
//     console.log(c);
//     a = b;
//     b = c;
//   } 
// }

// feb(10);


function feb(num) {
    let a = 0;
    let b = 1;
  
    for (let i = 0; i < num; i++) {
      console.log(a); // print current value of a
      let c = a + b;
      a = b;
      b = c;
    }
  }
  
  feb(10);
  



  function rev(num) {
    var arr = [];
    for (let i = num.length - 1; i >= 0; i--) {
        const element = num[i];
        arr.push(element);
    }
    return arr;
}

console.log(rev([1, 2, 4, 5, 5, 6]));  // ✅ Output: [6, 5, 5, 4, 2, 1]
