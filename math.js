const add = (...rest) => {
    let total = 0;
    for(let i = 0; i < rest.length; i++){
        if(typeof rest[i] !== "number") {
            throw new Error ('You passed a non-number value into the parameters.');
        } else if(Array.isArray(rest[i])){
            total += rest[i][i]
        } else {
            total += rest[i];
        };
        
    };
    return total;
};

const multiply = (...rest) => {
    let total = 0;
    for(let i = 0; i < rest.length; i++){
        if(typeof rest[i] !== "number") {
            throw new Error ('You passed a non-number value into the parameters.');
        };
        total *= rest[i];
    };
    return total;
};

module.exports = {add, subtract, multiply, divide};