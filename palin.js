function isPalindrome() {
    let arr = [1, 2, 3, 2, 1];
    return arr.join('') == arr.reverse().join('');
}

console.log(isPalindrome())
