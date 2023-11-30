const randomToMax = (toNum) => {
  return Math.floor(Math.random() * toNum) + 1;
};

const randomNumFromMinToMax = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export { randomToMax };
export { randomNumFromMinToMax };
