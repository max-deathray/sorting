

describe('MergeCB function', function(){
  it('mergeCB is able to merge two sorted arrays based on a cb function', function() {
    expect(mergeCB([2, 5, 7], [1, 3, 9, 12, 17 ], function(a,b) { if (a < b) return 1})).toEqual( [17, 12, 9, 7, 5, 3, 2, 1] )
  });
});
