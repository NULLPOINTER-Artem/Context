let string = 'ПриВЕт';

let newString = filterUpperCase(string);

console.log(newString);

/**
 * This function detects characters at uppercase from the string 
 * 
 * @param {string} string a string
 * @returns {object} Returns array of characters with upper case
 */
function filterUpperCase(string) {
    return [].filter.call(string, (item) => item === item.toUpperCase() ? item : false);
}