const removeFromArray = function(arr, ...args) {

    for(const item of args) {

        while(arr.includes(item)) {
            arr.splice(arr.findIndex(obj => obj === item), 1);
        }

    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
