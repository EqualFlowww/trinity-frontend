const classNamesObjectToString = (classNamesObject: Object) => {
  let str = '';

  Object.entries(classNamesObject).forEach((element) => {
    if (!!element[1] === true && typeof element[1] === 'string')
      str += `${element[1]} `;
    else if (typeof element[1] === 'object')
      str += classNamesObjectToString(element[1]) || '';
  });

  return str;
};

export default classNamesObjectToString;
