// pages/index.js

import React from 'react';

export default function Home({ data }) {
  return (
    <div>
      <h1>Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/data');
  const data = await res.json();

  return { props: { data } };
}
