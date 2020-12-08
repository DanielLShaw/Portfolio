export const combineObjects = (objects) => {
  const output = {};
  objects.forEach((object) => {
    Object.keys(object).forEach((key) => {
      if (output[key]) {
        output[key] += object[key];
      } else {
        output[key] = object[key];
      }
    });
  });
  return output;
};
