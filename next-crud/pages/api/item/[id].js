// pages/api/items/[id].js

import { getItem, updateItem, deleteItem } from '../../../lib/data';

export default function handler(req, res) {
  const { id } = req.query;
  if (req.method === 'GET') {
    const item = getItem(id);
    if (item) {
      res.status(200).json(item);
    } else {
      res.status(404).end(`Item with ID ${id} not found`);
    }
  } else if (req.method === 'PUT') {
    const item = updateItem(id, req.body);
    if (item) {
      res.status(200).json(item);
    } else {
      res.status(404).end(`Item with ID ${id} not found`);
    }
  } else if (req.method === 'DELETE') {
    const item = deleteItem(id);
    if (item) {
      res.status(200).json(item);
    } else {
      res.status(404).end(`Item with ID ${id} not found`);
    }
  } else {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
