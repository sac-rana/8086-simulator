import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { ErrorNode } from 'antlr4ts/tree/ErrorNode';
import { ParseTree } from 'antlr4ts/tree/ParseTree';
import { RuleNode } from 'antlr4ts/tree/RuleNode';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { myAsm8086Lexer as asm8086Lexer } from '../antlr/myAsm8086Lexer';
import {
  myAsm8086Parser as asm8086Parser,
  ExpressionContext,
  ExpressionlistContext,
  InstructionContext,
  OpcodeContext,
  RegisterContext,
  NumberContext,
  ProgContext,
} from '../antlr/myAsm8086Parser';
import { myAsm8086Visitor as asm8086Visitor } from '../antlr/myAsm8086Visitor';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { Register } from './utils';

interface Instruction {
  opcode: string;
  expressionlist: Expression[];
}

type Expression = {
  type: string;
  value: string;
};

class Visitor
  extends AbstractParseTreeVisitor<void>
  implements asm8086Visitor<any>
{
  protected defaultResult() {}
  visitErrorNode(node: ErrorNode): void {
    console.log(node.text);
  }
  start(ctx: ProgContext) {
    this.visitProg(ctx);
  }
  visitProg(ctx: ProgContext) {
    for (const instructionCtx of ctx.instruction()) {
      const instruction = this.visitInstruction(instructionCtx);
      console.log(instruction);
    }
  }
  visitInstruction(ctx: InstructionContext): Instruction {
    const opcode = this.visitOpcode(ctx.opcode());
    const expressionListCtx = ctx.expressionlist();
    let expressionlist: Expression[] = [];
    if (expressionListCtx) {
      expressionlist = this.visitExpressionlist(expressionListCtx);
    }
    const instruction = {
      opcode,
      expressionlist,
    };
    return instruction;
  }
  visitOpcode(ctx: OpcodeContext): string {
    return this.visitTerminal(ctx.OPCODE());
  }
  visitExpressionlist(ctx: ExpressionlistContext): Expression[] {
    const expressionlist: Expression[] = [];
    for (const expressionCxt of ctx.expression()) {
      expressionlist.push(this.visitExpression(expressionCxt));
    }
    return expressionlist;
  }
  visitExpression(ctx: ExpressionContext): Expression {
    const numberCtx = ctx.number();
    if (numberCtx) {
      return {
        type: 'number',
        value: this.visitNumber(numberCtx),
      };
    }
    const registerCtx = ctx.register();
    if (registerCtx) {
      return {
        type: 'register',
        value: this.visitRegister(registerCtx),
      };
    }
    throw new Error('Invalid expression');
  }
  visitNumber(ctx: NumberContext): string {
    return this.visitTerminal(ctx.NUMBER());
  }
  visitTerminal(node: TerminalNode) {
    return node.text;
  }
  visitRegister(ctx: RegisterContext): Register {
    return this.visitTerminal(ctx.REGISTER()) as Register;
  }
}

const assembler = (input: string) => {
  const chars = CharStreams.fromString(input.toUpperCase());
  const lexer = new asm8086Lexer(chars);
  const tokens = new CommonTokenStream(lexer);
  const parser = new asm8086Parser(tokens);
  const tree = parser.prog();
  new Visitor().visit(tree);
};

export { assembler };
