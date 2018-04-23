describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles mulitple items array', function(){
      expect( bubbleSort([5,2,7])).toEqual([2,5,7]);
  });

  it('handles single items array', function(){

    expect( bubbleSort([1])).toEqual([1]);
  });
});