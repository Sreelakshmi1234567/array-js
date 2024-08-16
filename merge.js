function mergeSortedArrays() {
    let arr1 = [1, 3, 5];
    let arr2 = [2, 4, 6];
    return arr1.concat(arr2).sort((a, b) => 
        a - b)
}

console.log(mergeSortedArrays())
