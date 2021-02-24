// map() methods
function mapToNegativize(array) {
    // return array.map(num => -num) 
    let negArray = []
    for (const num of array) {
        negArray.push(-num)
    }
    return negArray
}

function mapToNoChange(array) {
    // return array
    let newArray = []
    for (const num of array) {
        newArray.push(num)
    }
    return newArray 
}

function mapToDouble(array) {
    // return array.map(num => num * 2)
    let multArray = []
    for (let i = 0; i < array.length; i++) {
        multArray.push(array[i] * 2)
    }
    return multArray
}

function mapToSquare(array) {
    // return array.map(num => num ** 2)
    let squareArray = []
    for (let i = 0; i < array.length; i++) {
        squareArray.push(array[i] ** 2)
    }
    return squareArray
}

// reduce() methods
function reduceToTotal(array, start=0) {
    let total = start
    for (let i = 0; i < array.length; i++){
        total += array[i]
    }
    return total
}

function reduceToAllTrue(array) {
    //iterate through array, checking each to be true
    for (let i = 0; i < array.length; i++ ) {
        if (!array[i]) return false
    }
    return true
}

function reduceToAnyTrue(array) {
    for (let i = 0; i < array.length; i++ ) {
        if (array[i]) return true
    }
    return false
}