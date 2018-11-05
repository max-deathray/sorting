describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([1, 3, 7, 5, 2, 10]) ).toEqual( [[1, 3, 7],  [5, 2, 10]] )
  });


});


describe('Merge function', function(){
  it('merge is able to merge two sorted arrays', function() {
    expect(merge([2, 5, 7], [1, 3, 9, 12, 17 ]) ).toEqual( [1, 2, 3, 5, 7, 9, 12, 17] )
  });
});


describe('MergeSort function', function(){
  it('mergeSort is able to merge two unsorted arrays', function() {
    expect(mergeSort([1, 5, 3, 2, 8, 4]) ).toEqual( [1, 2, 3, 4, 5, 8] )
  });

  it('mergeSort is able to sort any array of 1 element', function() {
    expect(mergeSort([1]) ).toEqual([1])
  });

  it('mergeSort is able to sort any array of many elements', function() {
    expect(mergeSort([4, 10, 9, 8, 5, 6, 7, 1]) ).toEqual( [1, 4, 5, 6, 7, 8, 9, 10] )
  });
});

