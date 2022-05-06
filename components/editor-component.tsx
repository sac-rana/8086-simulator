import { useState } from 'react';
import { assembler } from '../lib/assembler';

export default function EditorComponent() {
  const [code, setCode] = useState('');
  return (
    <div>
      <h2>main.asm</h2>
      <button onClick={() => assembler(code)}>Compile</button>
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
