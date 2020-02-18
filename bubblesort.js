const helpers = {};

helpers.swap = function(arr, id1, id2) {
    const temp = arr[id1];
    arr[id1] = arr[id2];
    arr[id2] = temp;
    return arr;
}

// function bubbleSort(array) {
//     for (let j = 0; j < array.length; j++) {
//         for (let i = 0; i < array.length - 1; i++) {
//             if (array[i] > array[i+1]) {
//                 array = helpers.swap(array, i, i+1)
//             }
//         }
//     }
//     return array
// }


function bubbleSort(array, comparator = (a,b) => a - b) {
    for (let j = 0; j < array.length; j++) {
        for (let i = 0; i < array.length - 1; i++) {
            if (comparator(array[i], array[i+1]) > 0) {
                array = helpers.swap(array, i, i+1)
            }
        }
    }
    return array
}