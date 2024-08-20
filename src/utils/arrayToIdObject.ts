const arrayToIdObject = (array: any[]) => {
  return array.reduce((acc, item) => {
    acc[item[item.id]] = item;
    return acc;
  }, {});
};

export default arrayToIdObject;
