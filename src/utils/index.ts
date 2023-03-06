export const getImgPath = (imgName: string) => `/images/${imgName}`;

export const getRandomNumber = (min = 1, max = 100) => Math.round(Math.random() * (max - min) + min);
