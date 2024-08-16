function kthSmallest() {
    let arr = [7, 10, 4, 3, 20, 15];
    let k = 3;  

    
    arr.sort((a, b) => a - b);


    return arr[k - 1];
}

console.log(kthSmallest())
