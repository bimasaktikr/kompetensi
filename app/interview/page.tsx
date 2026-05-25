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
    `https://script.google.com/macros/s/AKfycbxMc2PVEG7TwEkdTh8cg-FO45ZGJe1m42o1gmF6ksWQWxfrByyFPETLBRxeFrv50LmQ/exec?page=interview&id=${encodeURIComponent(id)}&nama=${encodeURIComponent(nama)}`;

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