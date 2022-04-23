import { useState } from 'react';
import { beautifyInput, countLines } from '../lib/utils';

export default function EditorComponent() {
  const [code, setCode] = useState('');
  return (
    <div>
      <h2>main.asm</h2>
      <button>Compile</button>
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
