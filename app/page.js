import Image from "next/image";
import Stripe from "stripe";
import ProductCard from "./productcard";

async function getStripeProducts() {
  const stripe = new Stripe(process.env.STRIPE_KEY ?? '', {
    apiVersion: '2020-08-27'
  })
  const res = await stripe.prices.list({
    expand: ['data.product']
  })
  const prices = res.data
  return prices
}

export default async function Home() {

  const products = await getStripeProducts()

  console.log(products)

  return (
    <main className="flex flex-col">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-[1200px] mx-auto w-full place-items-top gap-10">
        {products.map((item, itemIndex) => {
          return (
            <ProductCard key={itemIndex} product={item}/>
          )
        })}
      </div>
    </main>
  );
}
