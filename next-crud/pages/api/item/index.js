import { useState, useEffect } from 'react';

export default function Home() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  useEffect(() => {
    fetch('/api/items')
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  const handleCreate = async () => {
    const res = await fetch('/api/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: Date.now().toString(), name: newItem })
    });
    const item = await res.json();
    setItems([...items, item]);
    setNewItem('');
  };

  const handleDelete = async (id) => {
    await fetch(`/api/items/${id}`, {
      method: 'DELETE'
    });
    setItems(items.filter(item => item.id !== id));
  };

  const handleUpdate = async (id, newName) => {
    const res = await fetch(`/api/items/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: newName })
    });
    const updatedItem = await res.json();
    setItems(items.map(item => (item.id === id ? updatedItem : item)));
  };

  return (
    <div>
      <h1>CRUD with Next.js</h1>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={handleCreate}>Create</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <input
              type="text"
              value={item.name}
              onChange={(e) => handleUpdate(item.id, e.target.value)}
            />
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
