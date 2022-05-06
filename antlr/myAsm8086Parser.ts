// Generated from ./grammer/myAsm8086.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { myAsm8086Listener } from "./myAsm8086Listener";
import { myAsm8086Visitor } from "./myAsm8086Visitor";


export class myAsm8086Parser extends Parser {
	public static readonly T__0 = 1;
	public static readonly NUMBER = 2;
	public static readonly OPCODE = 3;
	public static readonly REGISTER = 4;
	public static readonly EOL = 5;
	public static readonly WS = 6;
	public static readonly RULE_prog = 0;
	public static readonly RULE_instruction = 1;
	public static readonly RULE_opcode = 2;
	public static readonly RULE_expressionlist = 3;
	public static readonly RULE_expression = 4;
	public static readonly RULE_number = 5;
	public static readonly RULE_register = 6;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "instruction", "opcode", "expressionlist", "expression", "number", 
		"register",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "','",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, "NUMBER", "OPCODE", "REGISTER", "EOL", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(myAsm8086Parser._LITERAL_NAMES, myAsm8086Parser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return myAsm8086Parser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "myAsm8086.g4"; }

	// @Override
	public get ruleNames(): string[] { return myAsm8086Parser.ruleNames; }

	// @Override
	public get serializedATN(): string { return myAsm8086Parser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(myAsm8086Parser._ATN, this);
	}
	// @RuleVersion(0)
	public prog(): ProgContext {
		let _localctx: ProgContext = new ProgContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, myAsm8086Parser.RULE_prog);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 19;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === myAsm8086Parser.OPCODE) {
				{
				{
				this.state = 14;
				this.instruction();
				this.state = 15;
				this.match(myAsm8086Parser.EOL);
				}
				}
				this.state = 21;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public instruction(): InstructionContext {
		let _localctx: InstructionContext = new InstructionContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, myAsm8086Parser.RULE_instruction);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 22;
			this.opcode();
			this.state = 24;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === myAsm8086Parser.NUMBER || _la === myAsm8086Parser.REGISTER) {
				{
				this.state = 23;
				this.expressionlist();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public opcode(): OpcodeContext {
		let _localctx: OpcodeContext = new OpcodeContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, myAsm8086Parser.RULE_opcode);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 26;
			this.match(myAsm8086Parser.OPCODE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionlist(): ExpressionlistContext {
		let _localctx: ExpressionlistContext = new ExpressionlistContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, myAsm8086Parser.RULE_expressionlist);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 28;
			this.expression();
			this.state = 33;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === myAsm8086Parser.T__0) {
				{
				{
				this.state = 29;
				this.match(myAsm8086Parser.T__0);
				this.state = 30;
				this.expression();
				}
				}
				this.state = 35;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, myAsm8086Parser.RULE_expression);
		try {
			this.state = 38;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case myAsm8086Parser.NUMBER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 36;
				this.number();
				}
				break;
			case myAsm8086Parser.REGISTER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 37;
				this.register();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, myAsm8086Parser.RULE_number);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 40;
			this.match(myAsm8086Parser.NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public register(): RegisterContext {
		let _localctx: RegisterContext = new RegisterContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, myAsm8086Parser.RULE_register);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 42;
			this.match(myAsm8086Parser.REGISTER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\b/\x04\x02\t" +
		"\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t" +
		"\x07\x04\b\t\b\x03\x02\x03\x02\x03\x02\x07\x02\x14\n\x02\f\x02\x0E\x02" +
		"\x17\v\x02\x03\x03\x03\x03\x05\x03\x1B\n\x03\x03\x04\x03\x04\x03\x05\x03" +
		"\x05\x03\x05\x07\x05\"\n\x05\f\x05\x0E\x05%\v\x05\x03\x06\x03\x06\x05" +
		"\x06)\n\x06\x03\x07\x03\x07\x03\b\x03\b\x03\b\x02\x02\x02\t\x02\x02\x04" +
		"\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x02\x02\x02+\x02\x15\x03\x02\x02" +
		"\x02\x04\x18\x03\x02\x02\x02\x06\x1C\x03\x02\x02\x02\b\x1E\x03\x02\x02" +
		"\x02\n(\x03\x02\x02\x02\f*\x03\x02\x02\x02\x0E,\x03\x02\x02\x02\x10\x11" +
		"\x05\x04\x03\x02\x11\x12\x07\x07\x02\x02\x12\x14\x03\x02\x02\x02\x13\x10" +
		"\x03\x02\x02\x02\x14\x17\x03\x02\x02\x02\x15\x13\x03\x02\x02\x02\x15\x16" +
		"\x03\x02\x02\x02\x16\x03\x03\x02\x02\x02\x17\x15\x03\x02\x02\x02\x18\x1A" +
		"\x05\x06\x04\x02\x19\x1B\x05\b\x05\x02\x1A\x19\x03\x02\x02\x02\x1A\x1B" +
		"\x03\x02\x02\x02\x1B\x05\x03\x02\x02\x02\x1C\x1D\x07\x05\x02\x02\x1D\x07" +
		"\x03\x02\x02\x02\x1E#\x05\n\x06\x02\x1F \x07\x03\x02\x02 \"\x05\n\x06" +
		"\x02!\x1F\x03\x02\x02\x02\"%\x03\x02\x02\x02#!\x03\x02\x02\x02#$\x03\x02" +
		"\x02\x02$\t\x03\x02\x02\x02%#\x03\x02\x02\x02&)\x05\f\x07\x02\')\x05\x0E" +
		"\b\x02(&\x03\x02\x02\x02(\'\x03\x02\x02\x02)\v\x03\x02\x02\x02*+\x07\x04" +
		"\x02\x02+\r\x03\x02\x02\x02,-\x07\x06\x02\x02-\x0F\x03\x02\x02\x02\x06" +
		"\x15\x1A#(";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!myAsm8086Parser.__ATN) {
			myAsm8086Parser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(myAsm8086Parser._serializedATN));
		}

		return myAsm8086Parser.__ATN;
	}

}

export class ProgContext extends ParserRuleContext {
	public instruction(): InstructionContext[];
	public instruction(i: number): InstructionContext;
	public instruction(i?: number): InstructionContext | InstructionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InstructionContext);
		} else {
			return this.getRuleContext(i, InstructionContext);
		}
	}
	public EOL(): TerminalNode[];
	public EOL(i: number): TerminalNode;
	public EOL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(myAsm8086Parser.EOL);
		} else {
			return this.getToken(myAsm8086Parser.EOL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return myAsm8086Parser.RULE_prog; }
	// @Override
	public enterRule(listener: myAsm8086Listener): void {
		if (listener.enterProg) {
			listener.enterProg(this);
		}
	}
	// @Override
	public exitRule(listener: myAsm8086Listener): void {
		if (listener.exitProg) {
			listener.exitProg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: myAsm8086Visitor<Result>): Result {
		if (visitor.visitProg) {
			return visitor.visitProg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InstructionContext extends ParserRuleContext {
	public opcode(): OpcodeContext {
		return this.getRuleContext(0, OpcodeContext);
	}
	public expressionlist(): ExpressionlistContext | undefined {
		return this.tryGetRuleContext(0, ExpressionlistContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return myAsm8086Parser.RULE_instruction; }
	// @Override
	public enterRule(listener: myAsm8086Listener): void {
		if (listener.enterInstruction) {
			listener.enterInstruction(this);
		}
	}
	// @Override
	public exitRule(listener: myAsm8086Listener): void {
		if (listener.exitInstruction) {
			listener.exitInstruction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: myAsm8086Visitor<Result>): Result {
		if (visitor.visitInstruction) {
			return visitor.visitInstruction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OpcodeContext extends ParserRuleContext {
	public OPCODE(): TerminalNode { return this.getToken(myAsm8086Parser.OPCODE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return myAsm8086Parser.RULE_opcode; }
	// @Override
	public enterRule(listener: myAsm8086Listener): void {
		if (listener.enterOpcode) {
			listener.enterOpcode(this);
		}
	}
	// @Override
	public exitRule(listener: myAsm8086Listener): void {
		if (listener.exitOpcode) {
			listener.exitOpcode(this);
		}
	}
	// @Override
	public accept<Result>(visitor: myAsm8086Visitor<Result>): Result {
		if (visitor.visitOpcode) {
			return visitor.visitOpcode(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionlistContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return myAsm8086Parser.RULE_expressionlist; }
	// @Override
	public enterRule(listener: myAsm8086Listener): void {
		if (listener.enterExpressionlist) {
			listener.enterExpressionlist(this);
		}
	}
	// @Override
	public exitRule(listener: myAsm8086Listener): void {
		if (listener.exitExpressionlist) {
			listener.exitExpressionlist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: myAsm8086Visitor<Result>): Result {
		if (visitor.visitExpressionlist) {
			return visitor.visitExpressionlist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public register(): RegisterContext | undefined {
		return this.tryGetRuleContext(0, RegisterContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return myAsm8086Parser.RULE_expression; }
	// @Override
	public enterRule(listener: myAsm8086Listener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: myAsm8086Listener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: myAsm8086Visitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	public NUMBER(): TerminalNode { return this.getToken(myAsm8086Parser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return myAsm8086Parser.RULE_number; }
	// @Override
	public enterRule(listener: myAsm8086Listener): void {
		if (listener.enterNumber) {
			listener.enterNumber(this);
		}
	}
	// @Override
	public exitRule(listener: myAsm8086Listener): void {
		if (listener.exitNumber) {
			listener.exitNumber(this);
		}
	}
	// @Override
	public accept<Result>(visitor: myAsm8086Visitor<Result>): Result {
		if (visitor.visitNumber) {
			return visitor.visitNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RegisterContext extends ParserRuleContext {
	public REGISTER(): TerminalNode { return this.getToken(myAsm8086Parser.REGISTER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return myAsm8086Parser.RULE_register; }
	// @Override
	public enterRule(listener: myAsm8086Listener): void {
		if (listener.enterRegister) {
			listener.enterRegister(this);
		}
	}
	// @Override
	public exitRule(listener: myAsm8086Listener): void {
		if (listener.exitRegister) {
			listener.exitRegister(this);
		}
	}
	// @Override
	public accept<Result>(visitor: myAsm8086Visitor<Result>): Result {
		if (visitor.visitRegister) {
			return visitor.visitRegister(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


