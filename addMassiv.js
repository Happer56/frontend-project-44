const progres = (start, step) => {
  const masProg = [];
  const start =;
  const step =;
  for (let i = 0; i < 10; i += 1) {
    masProg.push(start);
    start += step;
  }
  return masProg;
};
export default progres;
