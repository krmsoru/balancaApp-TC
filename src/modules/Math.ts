
export const soma = (item1: string, item2: string) => {
  let num1 = Number(item1);
  let num2 = Number(item2);
  if (Number.isNaN(Number(num1))) num1 = 0;
  if (Number.isNaN(Number(num2))) num2 = 0;
  return (num1 + num2).toFixed(1);
};
