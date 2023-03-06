export const getImgPath = (imgName: string) => `/images/${imgName}`;

export const debuger = (cb: () => void) => {
  if (process.env.NODE_ENV === 'development') {
    cb();
  }
};
export const getRandomNumber = (min = 1, max = 100) =>
  Math.round(Math.random() * (max - min) + min);
