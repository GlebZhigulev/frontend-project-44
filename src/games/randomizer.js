const getRandomNumberUpToMax = (toNum) => Math.floor(Math.random() * toNum) + 1;

const getRandomNumberBetweenMinAndMax = (min, max) => {
  const range = max - min + 1;
  const random = Math.floor(Math.random() * range);
  return random + min;
};

export { getRandomNumberUpToMax };
export { getRandomNumberBetweenMinAndMax };
