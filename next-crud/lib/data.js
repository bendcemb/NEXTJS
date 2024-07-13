// lib/data.js

let items = [];

export function getItems() {
  return items;
}

export function getItem(id) {
  return items.find(item => item.id === id);
}

export function createItem(item) {
  items.push(item);
  return item;
}

export function updateItem(id, newItem) {
  const index = items.findIndex(item => item.id === id);
  if (index !== -1) {
    items[index] = { ...items[index], ...newItem };
    return items[index];
  }
  return null;
}

export function deleteItem(id) {
  const index = items.findIndex(item => item.id === id);
  if (index !== -1) {
    return items.splice(index, 1);
  }
  return null;
}
