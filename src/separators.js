'use strict';

function thousands_separators(num){
    var a = num.split(".");
    var printNum = [];
    var count = 0;
    var printFinal;

    for(var i = a[0].length; i > 0; i--)
    {
        printNum.push(a[0][i]);
        count++;
        if(count%3 === 0)
            printNum.push(",");
    }
    printFinal = printNum + a[1];

    return printFinal;
}

module.exports = thousands_separators;
