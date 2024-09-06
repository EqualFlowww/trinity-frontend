const classNamesObjectToString = (classNamesObject: Object) => {
  let str = '';

  Object.entries(classNamesObject).forEach(([key, value]) => {
    if (!!value === true && typeof value === 'string') str += `${value} `;
    else if (typeof value === 'object')
      str += classNamesObjectToString(value) || '';
  });

  return str;
};

export default classNamesObjectToString;
