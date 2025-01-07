// Code your solution in this file!

const returnFirstTwoDrivers = (driversArray) => {
    return driversArray.slice(0, 2)
}

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

//! This is a partially applied function that leverages closures
//! so when we invoke the outer function the inner one is returned (NOT INVOKED)
//! Since the inner one is a closure, it will ALWAYS remember the value of int
const createFareMultiplier = (int) => {
    return (fare) => int * fare
}
// const createFareMultiplier2 = (int, fare) => {
//     return int * fare
// }


const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (arrayOfDrivers, fn) => fn(arrayOfDrivers)

// console.log(selectDifferentDrivers(["Ada", "Matteo", "Luca"], returnFirstTwoDrivers))