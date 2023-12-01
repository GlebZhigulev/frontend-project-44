const getRandomNumber = (max, min = 1) => {
  const range = max - min + 1;
  const random = Math.floor(Math.random() * range);
  return random + min;
};

export default getRandomNumber;
