import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Hello! This is test NextJs project</h1>
      <p>I try to show you some food market</p>
      <Link href="/catalog">Go to catalog</Link>
    </div>
  );
}
