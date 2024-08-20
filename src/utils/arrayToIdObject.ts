const arrayToIdObject = (array: any[]) => {
  return array.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {});
};

export default arrayToIdObject;
