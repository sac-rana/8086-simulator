import { useFlags } from '../lib/state';
// import styles from './styles/flags.module.scss';
import styles from './styles/registers.module.scss';

export default function FlagsComponent() {
  const { flags, flipFlag } = useFlags();
  return (
    <main className={styles.container}>
      <h2>Flags</h2>
      <div className={styles.table}>
        <div>
          <span>Z</span>
          <input
            type='checkbox'
            checked={flags.Zero}
            onChange={_ => flipFlag('Zero')}
          />
        </div>
        <div>
          <span>C</span>
          <input
            type='checkbox'
            checked={flags.Carry}
            onChange={_ => flipFlag('Carry')}
          />
        </div>
        <div>
          <span>S</span>
          <input
            type='checkbox'
            checked={flags.Sign}
            onChange={_ => flipFlag('Sign')}
          />
        </div>
        <div>
          <span>P</span>
          <input
            type='checkbox'
            checked={flags.Parity}
            onChange={_ => flipFlag('Parity')}
          />
        </div>
        <div>
          <span>AC</span>
          <input
            type='checkbox'
            checked={flags.Auxiliary}
            onChange={_ => flipFlag('Auxiliary')}
          />
        </div>
      </div>
    </main>
  );
}
