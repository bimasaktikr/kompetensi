export default function Home() {
  return (
    <main style={{ width: '100vw', height: '100vh', margin: 0, padding: 0, overflow: 'hidden', backgroundColor: '#f4f5f7' }}>
      <iframe
        // ⚠️ SANGAT PENTING: Ganti URL di bawah dengan link Web App Google Script Anda
        src="https://script.google.com/macros/s/AKfycbzQ2XbtR_K3Fp6bsdHRx0oFnxNYjzhRQ8dj6JoyucMbomE2EUzwwxpBzn8xdvAKHqO6/exec"
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