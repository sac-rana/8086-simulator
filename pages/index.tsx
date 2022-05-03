import type { NextPage } from 'next';
import EditorComponent from '../components/editor-component';
import FlagsComponent from '../components/flags-component';
import MemoryComponent from '../components/memory-component';
import RegistersComponent from '../components/registers-component';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <main className={styles.wrapper}>
      <div className={styles.side}>
        <RegistersComponent />
        <FlagsComponent />
      </div>
      <EditorComponent />
      <MemoryComponent />
    </main>
  );
};

export default Home;
