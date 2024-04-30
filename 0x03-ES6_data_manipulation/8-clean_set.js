/* eslint-disable */

function cleanSet(set, startString) {
    let result = '';
    for (const value of set) {
        if (value.startsWith(startString)) {
            result += value.slice(startString.length) + '-';
        }
    }
    // Removing the trailing '-' if any
    if (result.endsWith('-')) {
        result = result.slice(0, -1);
    }
    return result;
}

export default cleanSet;

