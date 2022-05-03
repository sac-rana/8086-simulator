import { useRegisters } from '../lib/state';
import styles from './styles/registers.module.scss';
export default function RegistersComponent() {
  const { registers } = useRegisters();
  return (
    <main className={styles.container}>
      <h1>Registers</h1>
      <div className={styles.table}>
        <div>AX {registers.AX}</div>
        <div>BX {registers.BX}</div>
        <div>CX {registers.CX}</div>
        <div>DX {registers.DX}</div>
      </div>
    </main>
  );
}
