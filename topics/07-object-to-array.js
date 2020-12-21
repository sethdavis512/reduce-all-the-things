const { prettyLog } = require('../utils/utilFunctions');

// Data
const { schedule } = require('../utils/data');

// Object to Array
const getLocations = scheduleObj =>
    Object.keys(scheduleObj).reduce((allLocations, month) => {
        if (scheduleObj[month] && scheduleObj[month].location) {
            allLocations.push(scheduleObj[month].location);
        }

        return allLocations;
    }, []);

const locationsArr = getLocations(schedule);
prettyLog('LOCATIONS', locationsArr);
