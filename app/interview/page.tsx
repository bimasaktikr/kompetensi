type Props = {
  searchParams: Promise<{
    id?: string;
    nama?: string;
  }>;
};

export default async function InterviewPage({
  searchParams,
}: Props) {

  const params = await searchParams;

  const id = params.id || '';
  const nama = params.nama || '';

  const gasUrl =
    `https://script.google.com/macros/s/AKfycbzQ2XbtR_K3Fp6bsdHRx0oFnxNYjzhRQ8dj6JoyucMbomE2EUzwwxpBzn8xdvAKHqO6/exec?page=interview&id=${encodeURIComponent(id)}&nama=${encodeURIComponent(nama)}`;

  return (
    <main
      style={{
        width: '100vw',
        height: '100vh',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
      }}
    >
      <iframe
        src={gasUrl}
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          display: 'block',
        }}
        title="Interview"
      />
    </main>
  );
}