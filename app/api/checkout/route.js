import { NextResponse } from 'next/server'
import Stripe from 'stripe'

export async function POST(request) {

  const clientDOMAIN = 'https://music-store-ashy.vercel.app'

  const body = await request.json()

  if(body.lineItems.length === 0) {
    return new Response('Error', {
      status: 405
    })
  }

  try {

    const stripe = new Stripe(process.env.STRIPE_KEY ?? '', {
      apiVersion: '2020-08-27'
    })

    const session = await stripe.checkout.sessions.create({
      line_items: body.lineItems,
      success_url: `${clientDOMAIN}/success`,
      cancel_url: `${clientDOMAIN}/cancel`,
      mode: 'payment'
    })

    return NextResponse.json({ session })

  } catch (error) {
    console.log(error)
    return new Response('Error', {
      status: 500
    })
  }
}