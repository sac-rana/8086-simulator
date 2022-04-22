import { Registers } from '../lib';
export default function RegistersComponent() {
  return (
    <div>
      <h1>Registers</h1>
      <p>AX {Registers.AX}</p>
      <p>BX {Registers.BX}</p>
      <p>CX {Registers.CX}</p>
      <p>DX {Registers.DX}</p>
    </div>
  );
}
