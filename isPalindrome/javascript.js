function isPalindrome(string) {
    return string.split(/[^a-zA-Zа-яА-Я0-9]/).join('').toLowerCase() == string.split(/[^a-zA-Zа-яА-Я0-9]/).join('').split('').reverse().join('').toLowerCase();
}


//version 2

function isPalindrome(string) {
    return string.replace(/[^a-zA-Zа-яА-Я0-9]/g,'').toLowerCase() == string.replace(/[^a-zA-Zа-яА-Я0-9]/g,'').split('').reverse().join('').toLowerCase();
}