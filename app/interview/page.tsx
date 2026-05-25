'use client';

import { useSearchParams } from 'next/navigation';

export default function InterviewPage() {

  const params = useSearchParams();

  const id = params.get('id');
  const nama = params.get('nama');

  const gasUrl =
    `https://script.google.com/macros/s/AKfycbxMc2PVEG7TwEkdTh8cg-FO45ZGJe1m42o1gmF6ksWQWxfrByyFPETLBRxeFrv50LmQ/exec?page=interview&id=${encodeURIComponent(id || '')}&nama=${encodeURIComponent(nama || '')}`;

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