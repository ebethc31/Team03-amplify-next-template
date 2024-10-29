"use client";
import { useState, useEffect } from 'react';


export default function Page() {
  const [sponsorInfo, setSponsors] = useState<any[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // This will only run on the client

    const fetchData = async () => {
      try {
        const response = await fetch('/api/sponsor');
        const data = await response.json();
        console.log('response from API', data);
        setSponsors(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  if (!isClient) return null; // Ensures SSR doesn't attempt to render before the client is ready

  return (
    <div>
      <h1>Sponsor List</h1>
      {sponsorInfo && sponsorInfo.length > 0 ? (
        sponsorInfo.map((sponsor, index) => (
          <div key={index}> {/* Add a unique key to avoid list key errors */}
            <h4>{sponsor.SPONSOR_NAME}</h4>
          </div>
        ))
      ) : (
        <p>No users found</p>
      )}
    </div>
  );
}
