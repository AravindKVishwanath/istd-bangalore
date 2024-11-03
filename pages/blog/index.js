import Navbar from '../../components/Navbar';
import Link from 'next/link';
import { posts } from '../../src/data/posts';

export default function Blog() {
  return (
    <div>
      <Navbar />
      <div style={{marginTop:100,color:'black'}}>
        <h1>Blog</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        ul {
          list-style: none;
          padding: 0;
        }
        li {
          margin: 0.5em 0;
        }
        Link {
          text-decoration: none;
          color: #0070f3;
        }
        Link:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
