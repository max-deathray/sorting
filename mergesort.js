function split(wholeArray) {

  if (wholeArray.length === 1) {
    return;
  } else {

    let midPoint = Math.floor(wholeArray.length / 2);
    let firstHalf = wholeArray.slice(0, midPoint);
    let secondHalf = wholeArray.slice(midPoint);

    return [firstHalf, secondHalf];
  }
}

function mergeSort(array) {
  if (array.length < 2) return array;

  let splitArray = split(array);
  let left = splitArray[0];
  let right = splitArray[1];

  return merge(mergeSort(left), mergeSort(right));

};


function merge(array1, array2){
   let mergedArray = [];
   let li = 0;
   let ri = 0;

   while (li < array1.length && ri < array2.length){
     if (array1[li] < array2[ri]){
       mergedArray.push(array1[li]);
       li++;

     } else {
       mergedArray.push(array2[ri]);
       ri++;

     }
   }
   const final = mergedArray.concat(array1.slice(li)).concat(array2.slice(ri));

   return final;
};
