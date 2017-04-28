const chalk = require('chalk');

console.log(chalk.cyan('\nEXERCISE 3 LOADED\n'));

const injectStar = (input) => {
    var res = input.split("");
    return res.reduce((result, element, index, array) => {
        result.push(element);
        if (res[index] == res[index+1]) {
            result.push("*");
        }
        return result;
    }, []).join("");
}
console.log(injectStar("hello"));
module.exports = {
  injectStar: injectStar,
  run: injectStar
}