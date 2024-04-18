const lab8 = require("../src/lab8");

describe("Equivalence Class Test", () => {
    // Strong Normal here
    test("it should pass since all are within valid ranges", () => {
        const lock = 35
        const stock = 40
        const barrel = 45
        const output = "Pass";
        expect(lab8(lock, stock, barrel)).toEqual(output);
    });
    test("it should pass since all are within valid ranges", () => {
        const lock = 1
        const stock = 1
        const barrel = 1
        const output = "Pass";
        expect(lab8(lock, stock, barrel)).toEqual(output);
    });
    test("it should pass since all are within valid ranges", () => {
        const lock = 70
        const stock = 80
        const barrel = 90
        const output = "Pass";
        expect(lab8(lock, stock, barrel)).toEqual(output);
    });
    // Weak Robust Starts here
    test("it should fail since locks are out of valid ranges", () => {
        const lock = -10
        const stock = 40
        const barrel = 45
        const output = "Invalid. Locks must be between 1 and 70.\n";
        expect(lab8(lock, stock, barrel)).toEqual(output);
    });
    test("it should fail since locs are out of valid ranges", () => {
        const lock = 80
        const stock = 40
        const barrel = 45
        const output = "Invalid. Locks must be between 1 and 70.\n";
        expect(lab8(lock, stock, barrel)).toEqual(output);
    });
    test("it should fail since stocks are out of valid ranges", () => {
        const lock = 35
        const stock = -10
        const barrel = 45
        const output = "Invalid. Stocks must be between 1 and 80.\n";
        expect(lab8(lock, stock, barrel)).toEqual(output);
    });
    test("it should fail since stocks are out of valid ranges", () => {
        const lock = 35
        const stock = 90
        const barrel = 45
        const output = "Invalid. Stocks must be between 1 and 80.\n";
        expect(lab8(lock, stock, barrel)).toEqual(output);
    });
    test("it should fail since barrels are out of valid ranges", () => {
        const lock = 35
        const stock = 40
        const barrel = -10
        const output = "Invalid. Barrels must be between 1 and 90.\n";
        expect(lab8(lock, stock, barrel)).toEqual(output);
    });
    test("it should fail since barrels are out of valid ranges", () => {
        const lock = 35
        const stock = 40
        const barrel = 100
        const output = "Invalid. Barrels must be between 1 and 90.\n";
        expect(lab8(lock, stock, barrel)).toEqual(output);
    });
    test("it should pass since all are within valid ranges f valid ranges", () => {
        const lock = 70
        const stock = 80
        const barrel = 30
        const output = "Pass";
        expect(lab8(lock, stock, barrel)).toEqual(output);
    });
    // Strong Robust Starts Here
    test("it should fail since locks stocks and barrels are out of valid ranges", () => {
        const lock = -10
        const stock = -10
        const barrel = -10
        const output = "Invalid. Locks must be between 1 and 70.\n" +
            "Invalid. Stocks must be between 1 and 80.\n" +
            "Invalid. Barrels must be between 1 and 90.\n";
        expect(lab8(lock, stock, barrel)).toEqual(output);
    });
    test("it should fail since locks stocks and barrels are out of valid ranges", () => {
        const lock = 100
        const stock = 100
        const barrel = 100
        const output = "Invalid. Locks must be between 1 and 70.\n" +
            "Invalid. Stocks must be between 1 and 80.\n" +
            "Invalid. Barrels must be between 1 and 90.\n";
        expect(lab8(lock, stock, barrel)).toEqual(output);
    });
    test("it should fail since locks and stocks are out of valid ranges", () => {
        const lock = -10
        const stock = -10
        const barrel = 45
        const output = "Invalid. Locks must be between 1 and 70.\n" +
            "Invalid. Stocks must be between 1 and 80.\n";
        expect(lab8(lock, stock, barrel)).toEqual(output);
    });
    test("it should fail since stocks and barrels are out of valid ranges", () => {
        const lock = 35
        const stock = -10
        const barrel = -10
        const output = "Invalid. Stocks must be between 1 and 80.\n" +
            "Invalid. Barrels must be between 1 and 90.\n";
        expect(lab8(lock, stock, barrel)).toEqual(output);
    });
    test("it should fail since locks and barrels are out of valid ranges", () => {
        const lock = -10
        const stock = 40
        const barrel = -10
        const output = "Invalid. Locks must be between 1 and 70.\n" +
            "Invalid. Barrels must be between 1 and 90.\n";
        expect(lab8(lock, stock, barrel)).toEqual(output);
    });
    test("it should fail since stocks and barrels are out of valid ranges", () => {
        const lock = 100
        const stock = 100
        const barrel = 45
        const output = "Invalid. Locks must be between 1 and 70.\n" +
            "Invalid. Stocks must be between 1 and 80.\n"
        expect(lab8(lock, stock, barrel)).toEqual(output);
    });
    test("it should fail since locks and stocks are out of valid ranges", () => {
        const lock = 35
        const stock = 100
        const barrel = 100
        const output = "Invalid. Stocks must be between 1 and 80.\n" +
            "Invalid. Barrels must be between 1 and 90.\n"
        expect(lab8(lock, stock, barrel)).toEqual(output);
    });
});
