/**
 * Transform the 1st character of a character string into uppercase
 * @param {string} str
 * @returns {string}
 */
const toCapitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export default toCapitalize;
