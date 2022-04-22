import { Flags } from '../lib';
export default function FlagsComponent() {
  return (
    <div>
      <h1>Flags</h1>
      <p>
        Z <input type='checkbox' checked={Flags.Zero} />
      </p>
      <p>
        C <input type='checkbox' checked={Flags.Carry} />
      </p>
      <p>
        S <input type='checkbox' checked={Flags.Sign} />
      </p>
      <p>
        P <input type='checkbox' checked={Flags.Parity} />
      </p>
      <p>
        AC <input type='checkbox' checked={Flags.Auxillary} />
      </p>
    </div>
  );
}
