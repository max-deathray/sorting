

describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('sorts an array with just one item', function(){
    expect( bubbleSort([5]) ).toEqual( [5] );
  });

  it('sorts an array with multiple elements', function(){
    expect( bubbleSort([3, 2, 1]) ).toEqual( [1, 2, 3] );
  });

  beforeAll(function () {
    spyOn(obj, 'swap').and.callThrough(); // replace existing `tootsiepop['lick']` method
  });
  it('sorting this array took this many swaps', function () {
    obj.swap();
    expect(obj.swap.calls.count()).toEqual(100);
  });


});
