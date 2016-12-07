function isPalindrome(string) {
    return string.split(/[^a-zA-Zа-яА-Я0-9]/).join('').toLowerCase() == string.split(/[^a-zA-Zа-яА-Я0-9]/).join('').split('').reverse().join('').toLowerCase();
}