import camelToKebabCase from '@/utils/camelToKebabCase';

const classNamesObjectToArray = (classNamesObject: Object) => {
  return Object.entries(classNamesObject).map(
    ([key, value]) => `${camelToKebabCase(key)}-${value}`
  );
};

export default classNamesObjectToArray;
