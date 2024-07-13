import { useState, useEffect } from 'react';

const VideoPlayer = ({ videoFilename }) => {
  const [signedUrl, setSignedUrl] = useState(null);

  const getSignedUrl = async () => {
    try {
      const response = await fetch(`/api/signed-url?filename=${videoFilename}`, {
        method: 'GET'
      });
      const data = await response.json();
      setSignedUrl(data.signedUrl);
    } catch (error) {
      console.error('Error fetching signed URL:', error);
    }
  };

  useEffect(() => {
    getSignedUrl();
  }, []);

  return (
    <div>
      {signedUrl && (
        <video width="640" height="360" controls>
          <source src={signedUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default VideoPlayer;
