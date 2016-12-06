function colorIn(r, g, b) {
    var color16 = '';
    var colors = [r, g, b];
    for (i = 0; i < colors.length; i++) {
        var fColor = colors[i] >= 0 && colors[i] <= 255 ? colors[i].toString(16) : 'нет такого цвета';
        if (fColor === 'нет такого цвета') {
            return fColor;
        }
        else {
            fColor = fColor.length < 2 ? fColor + 0 : fColor;
            color16 += fColor;
        }
    }
    return color16;
}



function numObject(num) {
    if (num > 999) {
        return console.log('Это очень большое число')
    }
    var obj = {};
    var nums = num.toString().split('');
    var rnums = nums.reverse();
    for (i=0; i < nums.length; i++) {
        if (i == 0) {
            obj['Единицы'] = rnums[i];
        }
        else if (i == 1) {
            obj['Десятки'] = rnums[i];
        }
        else if (i == 2) {
            obj['Сотни'] = rnums[i];
        }
            }
    return obj;
}


//задача со *

function objectToQueryString(object) {
   res = ''; 
for (var key in object) {
res = res+'&'+ key + ':'+ object[key]
}    
return res;
}