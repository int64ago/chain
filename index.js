// .name or [index]
var propertyRegx = /\s*\.\s*(\w+)\s*|\s*\[\s*(\d+)\s*\]\s*/g;
var propertyListCache = {};

function parsePropertyString(string) {
  if (propertyListCache[string])
    return propertyListCache[string];

  var result = [];

  string.replace(propertyRegx, function(m, name, index) {
    if (name) {
      result.push(name);
    } else if (index) {
      result.push(index / 1);
    }
  });

  propertyListCache[string] = result;

  return propertyListCache[string];
};

/**
 * @param {object} sourceObject - The plain object
 * @param {string} propertyString - The chain string for querying
 * @param {any} defaultValue - The Default value if querying failed
 */
module.exports = function(sourceObject, propertyString, defaultValue) {
  var propertyList = parsePropertyString(propertyString);
  var result = sourceObject, stopped = false;

  propertyList.forEach(function(property){ 
    if (typeof result === 'object' && result.hasOwnProperty(property)) {
      result = result[property];
    } else {
      stopped = true;
    }
  });

  return stopped ? defaultValue : result;
};