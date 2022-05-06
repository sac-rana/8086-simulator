// Generated from ./grammer/myAsm8086.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgContext } from "./myAsm8086Parser";
import { InstructionContext } from "./myAsm8086Parser";
import { OpcodeContext } from "./myAsm8086Parser";
import { ExpressionlistContext } from "./myAsm8086Parser";
import { ExpressionContext } from "./myAsm8086Parser";
import { NumberContext } from "./myAsm8086Parser";
import { RegisterContext } from "./myAsm8086Parser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `myAsm8086Parser`.
 */
export interface myAsm8086Listener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `myAsm8086Parser.prog`.
	 * @param ctx the parse tree
	 */
	enterProg?: (ctx: ProgContext) => void;
	/**
	 * Exit a parse tree produced by `myAsm8086Parser.prog`.
	 * @param ctx the parse tree
	 */
	exitProg?: (ctx: ProgContext) => void;

	/**
	 * Enter a parse tree produced by `myAsm8086Parser.instruction`.
	 * @param ctx the parse tree
	 */
	enterInstruction?: (ctx: InstructionContext) => void;
	/**
	 * Exit a parse tree produced by `myAsm8086Parser.instruction`.
	 * @param ctx the parse tree
	 */
	exitInstruction?: (ctx: InstructionContext) => void;

	/**
	 * Enter a parse tree produced by `myAsm8086Parser.opcode`.
	 * @param ctx the parse tree
	 */
	enterOpcode?: (ctx: OpcodeContext) => void;
	/**
	 * Exit a parse tree produced by `myAsm8086Parser.opcode`.
	 * @param ctx the parse tree
	 */
	exitOpcode?: (ctx: OpcodeContext) => void;

	/**
	 * Enter a parse tree produced by `myAsm8086Parser.expressionlist`.
	 * @param ctx the parse tree
	 */
	enterExpressionlist?: (ctx: ExpressionlistContext) => void;
	/**
	 * Exit a parse tree produced by `myAsm8086Parser.expressionlist`.
	 * @param ctx the parse tree
	 */
	exitExpressionlist?: (ctx: ExpressionlistContext) => void;

	/**
	 * Enter a parse tree produced by `myAsm8086Parser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `myAsm8086Parser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `myAsm8086Parser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `myAsm8086Parser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by `myAsm8086Parser.register`.
	 * @param ctx the parse tree
	 */
	enterRegister?: (ctx: RegisterContext) => void;
	/**
	 * Exit a parse tree produced by `myAsm8086Parser.register`.
	 * @param ctx the parse tree
	 */
	exitRegister?: (ctx: RegisterContext) => void;
}

