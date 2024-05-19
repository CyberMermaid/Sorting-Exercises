function bubbleSort(arr) {
   let swapped = false
    while(!swapped) {
      for(let i = 0; i < arr.length; i++) {
        //Compare current element with next one
        if(arr[i] < arr[i - 1]) {
        // Swap elements if they are in wrong order
          let temp = arr[i];
          arr[i] = arr[i - 1];
          arr[i - 1] = temp;
          // Set swapped to true if any swap occurred
          swapped = true;
        }
      }
    }
    return arr;
}

module.exports = bubbleSort;
