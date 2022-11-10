"use client"
import {use} from 'react';

const fetchData = async () => {
  const res = await fetch('http://localhost:3000/api/hello')
  return res.json();
}

export default function Home() {
  const data = use(fetchData());
  return (
    <div>{JSON.stringify(data)}</div>
  )
}
