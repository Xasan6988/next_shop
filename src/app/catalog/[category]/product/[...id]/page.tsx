import goods from '@/app/catalog/goods.json';
import { notFound } from 'next/navigation';

interface IProductParams {
  params: Promise<{id: number, category: string}>
}

export default async function Product({params}: IProductParams) {
  const {id, category} = await params;

  const product = goods?.catalog?.find((catalogCategory) => catalogCategory?.category === category)?.items?.find((product) => product?.id === Number(id));

  if (!product) return notFound();

  const {description, price, title} = product;

  return (
    <div>
      <h1>{title}</h1>
      <h2>{price}</h2>
      <p>{description}</p>
    </div>
  )

}
