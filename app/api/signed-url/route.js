import { NextResponse } from 'next/server'
import { Storage }  from '@google-cloud/storage'

export async function GET(req) {

  const url = new URL(req.url);
  const params = new URLSearchParams(url.search);
  const filename = params.get('filename')
  console.log(filename)

  if(req.method !== 'GET') {
    console.log("wrong method received")
  }

  const storage = new Storage();

  try {
    const bucketName = 'music-store-602';
    const bucket = storage.bucket(bucketName);
    const blob = bucket.file(filename);


    const [url] = await blob.getSignedUrl({
      action: 'read',
      expires: '01-01-2026', // Set a very long expiration time (e.g., 1 year)
    });


    return NextResponse.json({ signedUrl: url })
  } catch (err) {
    return new Response("Error", {
      status: 508
    })
  }
}