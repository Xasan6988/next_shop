import Card from '@/components/Card/Card';
import goods from './goods.json';
import { notFound } from 'next/navigation';

export default function Catalog() {
  const categories = goods?.catalog?.map((category) => {
    return <Card title={category?.category} key={category?.category} />
  })

  if (!categories || categories?.length === 0) return notFound();

  return (
    <div>
      {categories}
    </div>
  )
}
