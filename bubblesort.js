

function bubbleSort(array){

    let current = array.length;

    while (current > 0){
      for (let i = 0; i < current; i++){
        if (array[i] > array[i + 1]){
          [array[i], array[i + 1]] = [array[i + 1], array[i]]
        }

      }
      current--;
    }
    return array;
  }
