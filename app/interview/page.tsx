'use client';

import { useSearchParams } from 'next/navigation';

export default function InterviewPage() {

  const params = useSearchParams();

  const id = params.get('id');
  const nama = params.get('nama');

  const gasUrl =
    `https://script.google.com/macros/s/AKfycbwd_umF5PhbBzkBdA7VKl9t-du-EZWpKpbjkAJp-0mWSREOS9K7O7MYewLjvpkyZPjK/exec?page=interview&id=${encodeURIComponent(id || '')}&nama=${encodeURIComponent(nama || '')}`;

  return (
    <main style={{
      width: '100vw',
      height: '100vh',
      overflow: 'hidden'
    }}>
      <iframe
        src={gasUrl}
        style={{
          width: '100%',
          height: '100%',
          border: 'none'
        }}
      />
    </main>
  );
}