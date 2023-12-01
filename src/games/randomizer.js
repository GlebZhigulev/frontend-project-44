const getRandomNumberUpToMax = (toNum) => Math.floor(Math.random() * toNum) + 1;

const getRandomNumberBetweenMinAndMax  = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export { getRandomNumberUpToMax };
export { getRandomNumberBetweenMinAndMax };
