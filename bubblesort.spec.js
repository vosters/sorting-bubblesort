

describe('Bubble Sort', function(){
    beforeAll(function () {
        spyOn(helpers, 'swap').and.callThrough(); // replace existing `tootsiepop['lick']` method
    });
    // it('getting to the center of tootsiepop involves exactly three licks', function () {
    //     helpers.getToCenter();
    //     expect(helpers.swap.calls.count()).toEqual(3);
    // });
    
    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });

    it('sorts 1 through 5', () => {
        expect( bubbleSort( [1,2,4,3,5] )).toEqual( [1,2,3,4,5] )
        // expect(helpers.swap.calls.count()).toEqual(1);
    })

    it('does not change a sorted array', () => {
        expect( bubbleSort( [1,2,3,4,5] )).toEqual( [1,2,3,4,5] )
    })

    it('sorts array in reverse order', () => {
        expect( bubbleSort( [5,4,3,2,1] )).toEqual( [1,2,3,4,5] )
    })

    it('sorts objects', () => {
        var arrToSort = [{ age: 4 }, { age: 8 }, { age: 2 }, { age: 9 }];
        // var sorted = arrToSort.sort(function comparator (a, b) {
        var sorted = bubbleSort(arrToSort, function comparator (a,b) {
            if (a.age < b.age) return -1; // returning `-1` means "a goes before b"
            if (a.age > b.age) return 1;  // returning  `1` means "b goes before a"
            return 0; // returning 0 means "a and b are equivalent"
        });
        expect( sorted ) .toEqual([ { age: 2 } , { age: 4 }, { age: 8}, { age: 9 }])
    })
});

