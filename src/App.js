import { Header } from "./components/Header/Header";
import styles from './App.module.css';
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Post } from "./components/Post/Post";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/GerardoRodrigues.png',
      name: 'Gerardo Rodrigues',
      profession: 'Web Developer Front-End'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galera'
      },
      {
        type: 'paragraph',
        content: 'Fala galeraFala galeraFala galeraFala galeraFala galeraFala galeraFala galeraFala galera',
      },
      {
        type: 'link',
        content: 'Fala galera'
      },
    ],
    publishedAt: new Date('2025-02-03 22:35:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/RomuloLim.png',
      name: 'Romulo Lima',
      profession: 'Web Developer Full Stack'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galera'
      },
      {
        type: 'paragraph',
        content: 'Fala galeraFala galeraFala galeraFala galeraFala galeraFala galeraFala galeraFala galera',
      },
      {
        type: 'link',
        content: 'Fala galera'
      },
    ],
    publishedAt: new Date('2025-02-02 16:00:00')
  },
]

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
