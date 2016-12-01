"use strict";

function min(a, b) {
    var res
    return res =  a > b ? b : a;
}


function countBs(string) {
    var lenSimb = string.length;
    var simbol;
    var result = '';
    for (simbol = 0; simbol < lenSimb; simbol++) {
        var s = string.charAt(simbol);
        var result = s === 'B' ? result + 'B' : result; 
                              }
                  return result.length;
}



function countChar(string, searchSimbol) {
    var lenSimb = string.length;
    var simbol;
    var result = '';
    for (simbol = 0; simbol < lenSimb; simbol++) {
        var s = string.charAt(simbol);
        var result = s === searchSimbol ? result + searchSimbol : result; 
                              }
   return result.length;
}


//Задача со *
// немного не то
var numRes;
function isEven(num) {
    for (var n = 2; num >= n;) {
        num -= n;
    }
    numRes = num == 0;
    return numRes;
}
//Рекурсивная функция тут
var res;
function isEven(num) {
    res = num >= 2 ? isEven(num - 2):  num == 0;
return res;
}