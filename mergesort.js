function merge(arr1, arr2) {
    let arr = []

    while (arr1.length > 0 || arr2.length > 0) {
        if (arr1[0] < arr2[0] || !arr2[0]) {
            let pop1 = arr1.shift()
            arr.push(pop1);
        } else if (arr1[0] > arr2[0] || !arr1[0]) {
            let pop2 = arr2.shift()
            arr.push(pop2);
        }
    }

    return arr
  }

function split(wholeArray) {
    /* your code here to define the firstHalf and secondHalf arrays */
    const ceil = Math.ceil(wholeArray.length / 2)
    const firstHalf = wholeArray.slice(0,ceil)
    const secondHalf = wholeArray.slice(ceil, wholeArray.length)
    return [firstHalf, secondHalf];
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr
    } else {
      const [left, right] = split(arr)
      const leftarrays = mergeSort(left)
      const rightarrays = mergeSort(right)
      return merge(leftarrays, rightarrays)
    }
}