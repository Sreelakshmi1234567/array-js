function secondLargest() {
    let arr = [10, 20, 30, 40, 50];
    let max = Math.max(...arr);
    arr = arr.filter(num => num !== max);
    return Math.max(...arr);
}

console.log(secondLargest())
