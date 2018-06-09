var expect = require('chai').expect;

describe("Main", function(){
  var arr;


  before(function(){
    console.log("before");
  });

  after(function(){
    console.log("after");
  });

  beforeEach(function(){
    arr = [1,2,3];
  })

  afterEach(function(){

  })

  it("should have size of 4 when we push another value", function(){
    arr.push(4);
    expect(arr).to.have.lengthOf(4);
  })


  it("should remove value 3 when use pop function", function(){
    arr.pop();
    expect(arr).to.not.include(3) ; //
  })

  it("should have a size 2 when pop a value from the array", function(){
    arr.pop();
    expect(arr.length).to.be.eql(2); // 2
  })
});
