function MaxMin() {
    let arr = [100, 25, 75, 150, 200];
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    return { max, min };
}

console.log(MaxMin()); 
