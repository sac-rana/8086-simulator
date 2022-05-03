import { useState } from 'react';
import { assembler } from '../lib/assembler';
import { beautifyInput, countLines } from '../lib/utils';

export default function EditorComponent() {
  const [code, setCode] = useState('');
  return (
    <div>
      <h2>main.asm</h2>
      <button onClick={() => assembler(beautifyInput(code))}>Compile</button>
      <button>Run</button>
      <textarea
        rows={40}
        cols={80}
        value={code}
        onChange={e => setCode(e.target.value)}
      ></textarea>
    </div>
  );
}
