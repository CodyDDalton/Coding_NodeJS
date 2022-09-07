const { sum, remainder, product, quotient } = require("./math");
const { sqrt, max } = require("./advancedMath")

describe("Testing Math functions", () =>{

    test("add the value of one number to another", () => {
        expect(sum(1,2)).toBe(3);
    });

    test("subtract the value of one number from anoher", () => {
        expect(remainder(2,1)).toBe(1);
    });

    test("multiply the value of one number by another", () => {
        expect(product(3,5)).toBe(15);
    })

    test("divide the value of one number by another", () => {
        expect(quotient(6,3)).toBe(2);
    })

});

describe("Testing advanced math functions", () =>{

    test("return the square root of a number", () => {
        expect(sqrt(16)).toBe(4);
    })

    test("return the largest of the given numbers", () => {
        expect(max(1, 2, 3)).toBe(3);
    })
});