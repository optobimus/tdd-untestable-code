const millisPerDay = 24 * 60 * 60 * 1000;

export function daysUntilChristmas(today) {
  const currentDay = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );
  const christmasDay = new Date(today.getFullYear(), 12 - 1, 25);
  if (currentDay.getTime() > christmasDay.getTime()) {
    christmasDay.setFullYear(today.getFullYear() + 1);
  }
  const diffMillis = christmasDay.getTime() - currentDay.getTime();
  return Math.floor(diffMillis / millisPerDay);
}
