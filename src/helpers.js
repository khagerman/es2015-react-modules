// This file should export two array helper functions:

// choice(items): returns a randomly selected item from array of items
// remove(items, item): removes the first matching item from items,
// if item exists, and returns it. Otherwise returns undefined.

// get random item in array
function choice(items) {
  let randIndex = Math.floor(Math.random() * items.length);
  return items[randIndex];
}
function remove(items, item) {
  const index = items.indexOf(item);
  if (index !== -1) {
    items.splice(index, 1);
    return items;
  } else {
    return undefined;
  }
}

export { choice, remove };
