const millisPerDay = 24 * 60 * 60 * 1000;

export function daysUntilChristmas() {
  // Why this is hard to test: this reads the current system time, which changes constantly.
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const christmasDay = new Date(now.getFullYear(), 12 - 1, 25);
  if (today.getTime() > christmasDay.getTime()) {
    // Hard to test for the same reason: this reads "now" again.
    christmasDay.setFullYear(new Date().getFullYear() + 1);
  }
  const diffMillis = christmasDay.getTime() - today.getTime();
  return Math.floor(diffMillis / millisPerDay);
}
