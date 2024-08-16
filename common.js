function commonElements() {
    let arr1 = [1, 5, 10, 20, 40];
    let arr2 = [6, 7, 20, 80, 100];
    let arr3 = [3, 4, 15, 20, 30];
    return arr1.filter(value => arr2.includes(value) && arr3.includes(value));
}

console.log(commonElements())
