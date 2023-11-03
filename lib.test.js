import lib from "./lib"

describe ("Absolute", () => {
    it("should return positive value if input is positive", () => {
        expect(lib.absolute(1)).toBe(1)
    })

    it("should return positive value if input is negative", () => {
        expect(lib.absolute(-1)).toBe(1)
    })

    it("should return zero value if input is zero", () => {
        expect(lib.absolute(0)).toBe(0)
    })
})

