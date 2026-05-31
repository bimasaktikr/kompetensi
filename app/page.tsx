"use client";

import { useEffect, useState } from 'react';

export default function Home() {
  const [iframeUrl, setIframeUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        // ⚠️ API MASTER: URL ini digunakan HANYA untuk mengambil config.
        // Gunakan URL deployment terakhir Anda yang sudah ada fungsi ?action=getConfig
        const MASTER_API_URL = "https://script.google.com/macros/s/AKfycbzSdloZK9fAdkHHcN8W0fIa5KY1V8qCI5j_wiSxJmYlBhjSLyCP4LnLW9jmfRrLj6HP/exec";
        
        const response = await fetch(`${MASTER_API_URL}?action=getConfig`);
        
        if (!response.ok) throw new Error("Network response was not ok");
        
        const data = await response.json();
        
        // Memasang URL dari Sheet Config ke dalam state Iframe
        if (data.deploymentUrl) {
          setIframeUrl(data.deploymentUrl);
        } else {
          setIframeUrl(MASTER_API_URL); // Fallback jika sheet kosong
        }
      } catch (error) {
        console.error("Gagal mengambil config dari server:", error);
        // Fallback darurat jika gagal fetch, gunakan URL default
        setIframeUrl("https://script.google.com/macros/s/AKfycby_7xFE1nCtUPAKRbCebPmwDsBMuxOxLTJUJn66b929SMl15FTWU4Cfmj5WuAvbhSjq/exec");
      } finally {
        setIsLoading(false);
      }
    };

    fetchConfig();
  }, []);

  // Tampilan sementara saat Next.js sedang "menelepon" Google Sheets (sekitar 1 detik)
  if (isLoading) {
    return (
      <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f4f5f7', fontFamily: 'sans-serif' }}>
        <h2 style={{ color: '#5f6368' }}>Menghubungkan ke Command Center...</h2>
      </div>
    );
  }

  // Tampilan Utama (Iframe Fullscreen dengan URL dinamis)
  return (
    <main style={{ width: '100vw', height: '100vh', margin: 0, padding: 0, overflow: 'hidden', backgroundColor: '#f4f5f7' }}>
      <iframe
        src={iframeUrl}
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          display: 'block'
        }}
        title="Command Center SE2026" 
        allowFullScreen
      />
    </main>
  );
}