const getUniqueId = prefix =>
    `${prefix}-${Math.random().toString(36).substr(2, 9)}`;

const randomNumber = max => Math.floor(Math.random() * Math.floor(max));

const prettyLog = (label, data) =>
    console.log(`===== ${label} =====\n${JSON.stringify(data, null, 4)}\n`);

module.exports = {
    getUniqueId,
    prettyLog,
    randomNumber
};
