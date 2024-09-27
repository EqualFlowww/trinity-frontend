const arrayToIdObject = (array: any[] | undefined) => {
  if (!Array.isArray(array)) return;
  return array.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {});
};

export default arrayToIdObject;
