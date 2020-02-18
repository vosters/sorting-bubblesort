describe('Split Array function', function() {
    it('is able to split an array into two halves', function() {
      // your code here
      expect( split([1,2,3,4,5,6,7,8,9,10,11])).toEqual([[1,2,3,4,5,6],[7,8,9,10,11]])
    });
  });
describe('Merge function', function(){
    let arr1 = [-51, -10, 3, 7]
    let arr2 = [1,23,91]
    let arr1b = [-51, -10, 3, 7]
    let arr2b = [1,23,91]
    let arr3 = [-100, -10, 75, 101]
    let arr4 = [1,23,34]
    let arr5 = [-100, -10, 75, 101]
    let arr6 = [1,23,34]

    it('is able to merge two sorted arrays into one sorted array', function(){
        // test the merging algorithm
        expect( merge(arr1,arr2)).toEqual([-51, -10, 1, 3, 7, 23, 91]);
        expect( merge(arr2b,arr1b)).toEqual([-51, -10, 1, 3, 7, 23, 91]);
        expect( merge(arr3,arr4)).toEqual([-100, -10, 1, 23, 34, 75, 101]);
        expect( merge(arr6,arr5)).toEqual([-100, -10, 1, 23, 34, 75, 101]);
        // expect( merge(arr4,arr3)).toEqual([-51, -10, 1, 23, 34, 75, 101]);
    });
});

describe('mergesort function', function() {
    let array = [4,7,1,-13,821,-583,123,5,2]
    let array1 = [7,4]

    it('is able to recursively merge and sort', function() {
      // your code here
      expect( mergeSort(array1)).toEqual([4,7])
      expect( mergeSort(array)).toEqual([-583,-13,1,2,4,5,7,123,821])
    });
  });