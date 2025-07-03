import { useState, useEffect } from 'react';
import axios from 'axios';
import { DogImage } from './components/DogImage';
import { Loading } from './components/Loading';
import { Error } from './components/Error';

export function DogExample() {
  const [image, setImage] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(false); 

  const fetchDog = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await axios.get('https://dog.ceo/api/breeds/image/random');
      setImage(response.data.message); 
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchDog();
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <div>
      <button onClick={fetchDog}>Buscar outro cachorro</button>
      <DogImage image={image} />
    </div>
  );
}
