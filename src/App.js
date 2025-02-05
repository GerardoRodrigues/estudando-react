import { Header } from "./components/Header/Header";
import styles from './App.module.css';
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Post } from "./components/Post/Post";

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author='Gerardo Rodrigues'
            profession='Web Developer'
          />
          <Post 
            author='Lucas Alves'
            profession='Designer'
          />
        </main>
      </div>
    </div>
  );
}

export default App;
