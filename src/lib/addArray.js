/* eslint-disable no-param-reassign */
const createProgression = (startNum, stepNum) => {
  const masProg = [];

  for (let i = 0; i < 10; i += 1) {
    masProg.push(startNum);
    startNum += stepNum;
  }
  return masProg;
};
export default createProgression;
