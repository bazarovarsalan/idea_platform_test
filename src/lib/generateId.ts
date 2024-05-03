function generateUniqId() {
  const set = new Set();
  let id = 1;

  return () => {
    id += 1;
    if (set.has(id)) {
      generateUniqId();
    } else {
      return id;
    }
  };
}

export const createId = generateUniqId();
