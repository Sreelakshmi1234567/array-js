function sumArray() {
    let arr = [10, 20, 30, 40, 50];
    return arr.reduce((sum, num) => sum + num, 0);
}

console.log(sumArray())
