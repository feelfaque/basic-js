const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
   if (Array.isArray(arr)) {
    let newArr = [];
    j = 0;

    for (let i = 0; i < arr.length;) {
        if (Number.isInteger(arr[i])) {
            newArr[j] = arr[i];
            i++;
            j++;
        } else if (arr[i] == "string") {
            if (arr[i] == "--discard-next") {
                i =+ 2;
            } else if (arr[i] == "--discard-prev") {
                i++;
                j--;
            } else if (arr[i] == "--double-next") {
                newArr[j] = arr[i+1];
                i++;
                j++;
            } else if (arr[i] == "--double-prev") {
                newArr[j] = newArr[j-1];
                i++;
                j++;
            }
        }
    }
    return newArr;
   } else {
       throw Error;
   }
};
