import type { NextPage } from 'next';
import FlagsComponent from '../components/flags-component';
import RegistersComponent from '../components/registers-component';

const Home: NextPage = () => {
  return (
    <div>
      <RegistersComponent />
      <FlagsComponent />
    </div>
  );
};

export default Home;
