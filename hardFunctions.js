"use strict";

function descending(n) {
   var splitArray = n.toString(10).split("").map(Number);
   return parseInt(splitArray.sort().reverse().join(""));
}

function longx(str) {
    var longstring = 0;
    var curstring = 0;
    var strArray = str.split("");

    for (let i=0; i<strArray.length; i++) {
        if (strArray[i] == "x") {
            curstring ++;
        } else {
            if (curstring > 0 && curstring > longstring) {              
                longstring = curstring;
            }
            curstring = 0;
        }
    }

    return curstring > longstring ? curstring: longstring;
}

function subway (peeps, rent) {
    var highest = 0;
    var location = 0;
    for (var i=0; i<peeps.length; i++) {
        var revenue = (peeps[i] * 10) - rent[i];
        if (revenue > highest) {
            highest = revenue;
            location = i;
        } 
    }
    return location + 1;
}

module.exports = {
    descending,
    longx,
    subway
}