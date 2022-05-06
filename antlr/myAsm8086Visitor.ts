// Generated from ./grammer/myAsm8086.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ProgContext } from "./myAsm8086Parser";
import { InstructionContext } from "./myAsm8086Parser";
import { OpcodeContext } from "./myAsm8086Parser";
import { ExpressionlistContext } from "./myAsm8086Parser";
import { ExpressionContext } from "./myAsm8086Parser";
import { NumberContext } from "./myAsm8086Parser";
import { RegisterContext } from "./myAsm8086Parser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `myAsm8086Parser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface myAsm8086Visitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `myAsm8086Parser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProg?: (ctx: ProgContext) => Result;

	/**
	 * Visit a parse tree produced by `myAsm8086Parser.instruction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstruction?: (ctx: InstructionContext) => Result;

	/**
	 * Visit a parse tree produced by `myAsm8086Parser.opcode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpcode?: (ctx: OpcodeContext) => Result;

	/**
	 * Visit a parse tree produced by `myAsm8086Parser.expressionlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionlist?: (ctx: ExpressionlistContext) => Result;

	/**
	 * Visit a parse tree produced by `myAsm8086Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `myAsm8086Parser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by `myAsm8086Parser.register`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRegister?: (ctx: RegisterContext) => Result;
}

