// two-pointers approach
function merge(arr1,arr2) {
    // Initialize two pointers
    let i = 0, j = 0;
    //  Empty array of arr1 and arr2
    let mergedArr = [];
    // Length of arr1 AND arr2 
    let totalLength = arr1.length + arr2.length

    for (let k =0; k < totalLength; k < totalLength - 1){
        if (j >= arr2.length){
            mergedArr[k] = arr1[i];
            i = i+1;
        }
        else if (i >= arr1.length){
            mergedArr[k] = arr2[j];
            j = j + 1;
        }
        else if (arr1[i] <= arr2[j]){
            mergedArr[k] = arr1[i];
            i = i + 1;
        }
        else{
            mergedArr[k] = arr2[j];
            j = j + 1;
        }
    }
    return mergedArr;
}

function mergeSort() {}

module.exports = { merge, mergeSort};