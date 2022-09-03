// const { read } = require('fs');
const readline = require('readline');
// const { arrayBuffer } = require('stream/consumers');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let n = -1
let lines = []
rl.on('line', function (line) {
    if (n < 0) {
        n = parseInt(line)
    } else {
        line1 = line.split(' ')
        lines.push(line1)
        if (n == lines.length) {
            let arr = Array.from(Array(n)).map(() => Array().fill(0))
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < lines[i].length; j++) {
                    arr[i][j] = parseInt(lines[i][j])
                }
            }
            console.log(arr);
            n = -1
            lines.length = 0
        }
    }
})