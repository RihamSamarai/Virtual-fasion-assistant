"use client";

import { useEffect, useState } from 'react';

const ExternalDataFetcher = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl =
        'https://asos2.p.rapidapi.com/products/detail?lang=en-US&store=US&currency=USD&sizeSchema=US';
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'asos2.p.rapidapi.com',
          'x-rapidapi-key': 'db24cd1958msha4ad80f023098dap1cba8ejsna1438c20bec0', 
        },
      };

      try {
        const response = await fetch(apiUrl, options);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const result = await response.json();
        setData(result); 
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h3>Clothing Recommendations</h3>
      <div>
        {data && data.products
          ? data.products.map((product, index) => (
              <div key={index}>
                <img src={product.imageUrl} alt={product.name} />
                <p>{product.name}</p>
              </div>
            ))
          : 'No data available'}
      </div>
    </div>
  );
};

export default ExternalDataFetcher;
