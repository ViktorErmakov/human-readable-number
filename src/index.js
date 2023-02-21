module.exports = function toReadable (number) {
  
    let result = '';
    let strNumber = number.toString();
    if(number === 0){
        result = 'zero';
    } else if(number < 20) {
        result = oneNumber(strNumber);
    } else if(number < 100){
        result = twoNumber(strNumber);
    } else {
        result = '';
        let a = strNumber[0];
        let b = strNumber.slice(1);
        if(a === '1') {
            result = 'one hundred';
        } else if(a === '2') {
            result = 'two hundred';
        } else if(a === '3') {
            result = 'three hundred';
        } else if(a === '4') {
            result = 'four hundred';
        } else if(a === '5') {
            result = 'five hundred';
        } else if(a === '6') {
            result = 'six hundred';
        } else if(a === '7') {
            result = 'seven hundred';
        } else if(a === '8') {
            result = 'eight hundred';
        } else if(a === '9') {
            result = 'nine hundred';
        }
        result += ' ' + twoNumber(b);
    }
    result = result.trim();
    console.log(result);
    return result;
    
}

function oneNumber(strNumber) {
    if(strNumber === '0') {
        return '';
    }else if(strNumber === '1') {
        return 'one';
    } else if(strNumber === '2') {
        return 'two';
    } else if(strNumber === '3') {
        return 'three';
    } else if(strNumber === '4') {
        return 'four';
    } else if(strNumber === '5') {
        return 'five';
    } else if(strNumber === '6') {
        return 'six';
    } else if(strNumber === '7') {
        return 'seven';
    } else if(strNumber === '8') {
        return 'eight';
    } else if(strNumber === '9') {
        return 'nine';
    } else if(strNumber === '10') {
        return 'ten';
    } else if(strNumber === '11') {
        return 'eleven';
    } else if(strNumber === '12') {
        return 'twelve';
    } else if(strNumber === '13') {
        return 'thirteen';
    } else if(strNumber === '14') {
        return 'fourteen';
    } else if(strNumber === '15') {
        return 'fifteen';
    } else if(strNumber === '16') {
        return 'sixteen';
    } else if(strNumber === '17') {
        return 'seventeen';
    } else if(strNumber === '18') {
        return 'eighteen';
    } else if(strNumber === '19') {
        return 'nineteen';
    }
}

function twoNumber(strNumber) {
        
    let result = ''
    let a = strNumber[0];
    let b = strNumber[1];
    if(a === '0'){
        return result += oneNumber(b);
    }else if(a === '1'){
        return result += oneNumber(strNumber);
    }else if(a === '2') {
        result += 'twenty';
    }else if(a === '3') {
        result += 'thirty';
    }else if(a === '4') {
        result += 'forty';
    }else if(a === '5') {
        result += 'fifty';
    }else if(a === '6') {
        result += 'sixty';
    }else if(a === '7') {
        result += 'seventy';
    }else if(a === '8') {
        result += 'eighty';
    }else if(a === '9') {
        result += 'ninety';
    }

    result += ' ' + oneNumber(b);

    return result;
    
}

module.exports(0);