export const TEST_INPUTS = {
    "999-999": [
        { input: "1", result: "1", clear:true },
        { input: "2", result: "12", clear:false },
        { input: "3", result: "123" , clear:false},
        { input: "4", result: "123-4", clear:false },
        { input: "5", result: "123-45", clear:false },
        { input: "6", result: "123-456", clear:false},

        { input: "1", result: "123-456", clear:false },
        { input: "1", result: "1" , clear:true},
        { input: "A", result: "1", clear:false },
        { input: "56", result: "156", clear:false },
        { input: "-", result: "156", clear:false },
        { input: "7", result: "156-7", clear:false }
    ]
}