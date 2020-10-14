// Math Exstensions Library

Math.randomInt = function (low, high) {
    //return a random interger between low (inclusive) and high (exclusive)
    return Math.floor(Math.random() * (high - low) + low);
}

 Math.randomDec = function(low, high) {
        // Return a random decimal between low (inclusive) and high (exclusive)
        return Math.random() * (high - low) + low;
}

Math.randomElement = function(anArray) {
    // Random select and return an element from anArray
    return anArray[Math.randomInt(0, anArray.length)]
}