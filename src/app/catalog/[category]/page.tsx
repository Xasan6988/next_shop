import goods from '@/app/catalog/goods.json'
import Card from '@/components/Card/Card';
import { notFound } from 'next/navigation';

interface ICategoryParams {
  params: Promise<{category: string}>
}

export default async function Category({params}: ICategoryParams) {
  const {category} = await params

  const goodsFilteredByCategory = goods?.catalog.find(good => good.category === category)?.items;

  if (goodsFilteredByCategory?.length === 0) return notFound();

  const goodsLayout = goodsFilteredByCategory?.map(({description, id, price, title}) => {
    return <Card title={title} key={id} isProduct category={category} description={description} price={price} productId={id}/>
  })

  return (
    <div>
      {goodsLayout}
    </div>
  )
}
