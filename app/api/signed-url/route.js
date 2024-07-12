import { Storage } from '@google-cloud/storage';
const cors = require('cors')({ origin: true });
import { NextResponse } from 'next/server'

const storage = new Storage();

export const GET = async (req) => { // Export the GET handler
  cors(req, async () => {
    const { filename } = req.query;
    console.log(filename)

    try {
      const bucketName = 'your-bucket-name'; // Replace with your actual bucket name
      const bucket = storage.bucket(bucketName);
      const blob = bucket.file(filename);

      const [url] = await blob.getSignedUrl({
        action: 'read',
        expires: '01-01-0001', // Set a very long expiration time (e.g., 1 year)
      });

      return NextResponse.json({ signedUrl: url })
    } catch (error) {
      console.error('Error generating signed URL:', error);
      return res.status(500).json({ error: 'Failed to generate signed URL' });
    }
  });
};
