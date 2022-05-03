import antlr4 from 'antlr4';
import MyGrammarLexer from '../antlr/asm8086Lexer';
import MyGrammarParser from '../antlr/asm8086Parser';
import MyGrammarListener from '../antlr/asm8086Listener';

const assembler = (input: string) => {
  const chars = new antlr4.InputStream(input);
  console.log(chars);
  const lexer = new MyGrammarLexer(chars);
  console.log(lexer);
  const tokens = new antlr4.CommonTokenStream(lexer);
  console.log(tokens);
  const parser = new MyGrammarParser(tokens);
  console.log(parser);
  parser.buildParseTrees = true;
  const tree = parser.opcode;
};

export { assembler };
