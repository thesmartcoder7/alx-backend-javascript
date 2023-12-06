const updateUniqueItems = (items) => {
  if (!(items instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const [key, value] of items.entries()) {
    if (value === 1) {
      items.set(key, 100);
    }
  }
  return items;
};

export default updateUniqueItems;
