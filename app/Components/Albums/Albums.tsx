import React, { useState, useEffect, FC } from 'react';
import styles from './Albums.module.css';

interface Album {
  userId: number;
  id: number;
  title: string;
}

const Albums: FC = () => {
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(data => setAlbums(data as Album[]));
  }, []);

  return (
    <div className={styles.gridContainer}>
      {albums.map(album => (
        <div key={album.id} className={styles.card}>
          <h3>{album.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Albums;