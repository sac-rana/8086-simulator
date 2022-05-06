import { useRegisters } from '../lib/state';
import styles from './styles/registers.module.scss';
export default function RegistersComponent() {
  const { registers } = useRegisters();
  return (
    <main className={styles.container}>
      <h2>Registers</h2>
      <div className={styles.table}>
        <div>
          <span>AX</span>
          {registers.AX}
        </div>
        <div>
          <span>BX</span>
          {registers.BX}
        </div>
        <div>
          <span>CX</span>
          {registers.CX}
        </div>
        <div>
          <span>DX</span>
          {registers.DX}
        </div>
      </div>
    </main>
  );
}
