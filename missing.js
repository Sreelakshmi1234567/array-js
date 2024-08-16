function findMissingNumber() {
    let arr = [1, 2, 4, 5, 6];
    let n = 6
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}

console.log(findMissingNumber())
