import { useFlags } from '../lib/state';
// import styles from './styles/flags.module.scss';
import styles from './styles/registers.module.scss';

export default function FlagsComponent() {
  const { flags, flipFlag } = useFlags();
  return (
    <main className={styles.container2}>
      <h1>Flags</h1>
      <p>
        <input
          type='checkbox'
          checked={flags.Zero}
          onChange={_ => flipFlag('Zero')}
        />
      </p>
      <p>
        C
        <input
          type='checkbox'
          checked={flags.Carry}
          onChange={_ => flipFlag('Carry')}
        />
      </p>
      <p>
        S
        <input
          type='checkbox'
          checked={flags.Sign}
          onChange={_ => flipFlag('Sign')}
        />
      </p>
      <p>
        P
        <input
          type='checkbox'
          checked={flags.Parity}
          onChange={_ => flipFlag('Parity')}
        />
      </p>
      <p>
        AC
        <input
          type='checkbox'
          checked={flags.Auxiliary}
          onChange={_ => flipFlag('Auxiliary')}
        />
      </p>
    </main>
  );
}
