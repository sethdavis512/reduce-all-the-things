const line = '--------------\n';
const spacer = `\n${line}`;

function randomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

module.exports = {
    line,
    randomNumber,
    spacer
}