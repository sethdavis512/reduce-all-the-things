const { locations } = require('../utils/data');

// Object to Array
// aasdfkasdfkasdfkkasdfkasdkfkasdf

const getLocations = obj => {
    return Object.keys(obj).reduce((acc, cur) => {
        acc.push(obj[cur]);
        return acc;
    }, []);
};
const locationsArr = getLocations(locations);
console.log(locationsArr);
