const removeFromArray = function () {
    const args = Array.from(arguments)
    let numberSet = args[0];
    let numberSetRemove = args.slice(1);

    return numberSet.filter(item => !numberSetRemove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
