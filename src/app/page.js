'use client'

import Header from './components/Header';
import TopHeader from './components/TopHeader';

export default function Home() {
  return (
    <main>
      <TopHeader />
      <Header />
      <button onClick={() => console.log('clicked')}>click</button>
    </main>
  );
}
