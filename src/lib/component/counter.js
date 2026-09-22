let count = 0;

export function getCounter() {
  return {
    getCount() {
      return count;
    },

    increment() {
      count++;
    },
  };
}
