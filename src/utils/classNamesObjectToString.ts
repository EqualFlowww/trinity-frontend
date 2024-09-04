import camelToKebabCase from '@/utils/camelToKebabCase';

const classNamesObjectToString = (
  classNamesObject: Object,
  prefix?: string
) => {
  let str = '';

  Object.entries(classNamesObject).forEach(([key, value]) => {
    if (value !== undefined)
      str += `${prefix}${camelToKebabCase(key)}-${value} `;
    else if (typeof value === 'object')
      str += classNamesObjectToString(
        value,
        prefix + camelToKebabCase(key) + ':'
      );
  });

  return str;
};

export default classNamesObjectToString;
