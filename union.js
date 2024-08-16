function union() {
    let arr1 = [1, 2, 3, 4];
    let arr2 = [3, 4, 5, 6];
    return [new Set([...arr1, ...arr2])];
}

console.log(union()); 
