const chalk = require('chalk');

console.log(chalk.cyan('\nEXERCISE 1 LOADED\n'));

const partition = (collection, predicate) => {
    var vrai = [];
    var faux = [];
    collection.map(function(x, index, array) {
        if(x.name === predicate(x) || x.age === predicate(x) || predicate(x))
           vrai.push(x);
        else
            faux.push(x);
    });
    return [vrai, faux];
}
module.exports = {
  partition: partition,
  run: partition
}