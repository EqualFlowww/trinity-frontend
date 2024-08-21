const arrayToUsernameObject = (array: any[]) => {
  return array.reduce((acc, item) => {
    acc[item.username] = item;
    return acc;
  }, {});
};

export default arrayToUsernameObject;
