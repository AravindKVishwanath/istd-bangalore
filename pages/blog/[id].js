import Navbar from '../../components/Navbar';
import { useRouter } from 'next/router';
import { posts } from '../../src/data/posts';

export default function Post() {
  const router = useRouter();
  const { id } = router.query;

  const post = posts.find((p) => p.id === id);

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div>
      <Navbar />
      <div style={{marginTop:100,color:'black'}}>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </div>
    </div>
  );
}
