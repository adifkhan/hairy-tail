'use client';

import Banner from './components/Banner';
import Header from './components/Header';
import TopHeader from './components/TopHeader';

export default function Home() {
  return (
    <main>
      <TopHeader />
      <Header />
      <Banner/>
    </main>
  );
}
