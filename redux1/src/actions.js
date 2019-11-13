export const inc = () => {
  return { type: "INC" };
};
export const dec = () => {
  return { type: "DEC" };
};
export const rand = () => {
  return {
    payload:Math.floor(Math.random() * 10 + 1),
    type: "RAND"
  };
};
