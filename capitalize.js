// Test Case 4
const capitalize = (string) => {
  if (typeof string === 'string') {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return false;
};

module.exports = capitalize;
