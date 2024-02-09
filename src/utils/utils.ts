export const getRandomItemFromArray = (arr: string[]) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};
