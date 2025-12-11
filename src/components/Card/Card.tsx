import Link from 'next/link';
import style from './Card.module.css';

interface ICardProps {
  title: string;
  category?: string
  description?: string;
  price?: number;
  isProduct?: boolean;
  productId?: number;
}

export default function Card({ title, category, description, price, isProduct, productId }: ICardProps) {

  const href = isProduct ? `/catalog/${category}/product/${productId}` : `/catalog/${title}`


  return (
    <Link className={style.Card} href={href}>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      {price && <p>{price.toFixed(2)}$</p>}
    </Link>
  )
}
