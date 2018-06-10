import { expect } from 'chai';
import { sum, sub, mult, div } from '../src/main';

describe("Calc", () =>{
  // some tests
  describe("smoke test", () =>{

    it("should exist the method `sum`", () =>{
      expect(sum).to.exist;
      expect(sum).to.be.a('function');
    });

    it("should exist the method `sub`", () =>{
      expect(sub).to.exist;
      expect(sub).to.be.a('function');
    });

    it("should exist the method `mult`", () =>{
      expect(mult).to.exist;
      expect(mult).to.be.a('function');
    });

    it("should exist the method `div`", () =>{
      expect(div).to.exist;
      expect(div).to.be.a('function');
    });
  });

  describe("Sum", () =>{
    it("should return 4 when `sum(2, 2)`", () =>{
      expect(sum(2,2)).to.be.equal(4)
    })
  })

  describe("Sub", () =>{
    it("should return 0 when `sub(2, 2)`", () =>{
      expect(sub(2,2)).to.be.equal(0)
    })

    it("should return -4 when `sub(2, 6)`", () =>{
      expect(sub(2,6)).to.be.equal(-4)
    })
  })

  describe("Mult", () =>{
    it("should return 4 when `mult(2, 2)`", () =>{
      expect(mult(2,2)).to.be.equal(4)
    })
  })

  describe("Div", () =>{
    it("should return 1 when `sum(2, 2)`", () =>{
      expect(div(2,2)).to.be.equal(1)
    })

    it("should return `Não é possível divisão por zero!` when num2 is zero", () =>{
      expect(div(4, 0)).to.be.equal("Não é possível divisão por zero!");
    })
  })
});
