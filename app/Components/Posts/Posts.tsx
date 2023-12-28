import React, { useState, useEffect, FC } from 'react';
import styles from './Posts.module.css';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts: FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data as Post[]));
  }, []);

  return (
    <div>
      {posts.map(post => (
        <div key={post.id} className={styles.post}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;