export const calculateRemainingDays = (remainingText: string) => {
  const [day, month, year] = remainingText.split('.').map(Number);
  const targetDate = new Date(year, month - 1, day);
  const today = new Date();

  const differenceInTime = targetDate.getTime() - today.getTime();
  const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));

  return differenceInDays;
};
