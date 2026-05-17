export default function Home() {
  return (
    <main style={{ width: '100vw', height: '100vh', margin: 0, padding: 0, overflow: 'hidden', backgroundColor: '#f4f5f7' }}>
      <iframe
        // ⚠️ SANGAT PENTING: Ganti URL di bawah dengan link Web App Google Script Anda
        src="https://script.google.com/macros/s/AKfycbyb1qGyivOWXzim0cOJLFek9_OCg5g3CV78lYw44tCneuXxrKMCfuw2VmRlOB7HKi5O/exec"
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