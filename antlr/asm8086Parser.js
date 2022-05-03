// Generated from C:\Users\Sachin Rana\Downloads\antlr grammars-v4 master asm-asm8086\asm8086.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import asm8086Listener from './asm8086Listener.js';
const serializedATN = [4,1,47,290,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,1,0,1,0,1,0,5,0,78,8,0,10,0,12,0,81,9,0,1,0,1,0,5,
0,85,8,0,10,0,12,0,88,9,0,1,1,3,1,91,8,1,1,1,1,1,3,1,95,8,1,1,1,3,1,98,8,
1,1,2,3,2,101,8,2,1,2,1,2,3,2,105,8,2,1,3,1,3,3,3,109,8,3,1,4,1,4,1,4,1,
4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,127,8,4,1,5,3,5,130,
8,5,1,5,1,5,1,5,1,6,3,6,136,8,6,1,6,1,6,1,6,1,7,3,7,142,8,7,1,7,1,7,1,7,
1,8,1,8,3,8,149,8,8,1,9,1,9,3,9,153,8,9,1,10,1,10,1,10,1,11,1,11,1,11,1,
12,1,12,1,12,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,15,1,15,1,15,1,15,5,15,
175,8,15,10,15,12,15,178,9,15,1,15,1,15,1,15,1,15,3,15,184,8,15,1,16,1,16,
1,17,1,17,1,17,1,17,3,17,192,8,17,1,18,1,18,1,19,1,19,1,20,1,20,1,20,1,21,
1,21,1,21,1,22,1,22,1,22,1,23,1,23,1,23,5,23,210,8,23,10,23,12,23,213,9,
23,1,24,1,24,1,25,1,25,1,25,5,25,220,8,25,10,25,12,25,223,9,25,1,26,1,26,
1,26,5,26,228,8,26,10,26,12,26,231,9,26,1,27,1,27,1,27,1,27,1,27,1,27,1,
27,1,27,1,27,1,27,1,27,3,27,244,8,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,
1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,3,27,264,8,27,1,28,
3,28,267,8,28,1,28,1,28,1,29,1,29,1,30,1,30,1,31,1,31,1,32,1,32,1,33,3,33,
280,8,33,1,33,1,33,1,34,1,34,1,35,1,35,1,36,1,36,1,36,0,0,37,0,2,4,6,8,10,
12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,
60,62,64,66,68,70,72,0,3,1,0,6,7,1,0,9,12,1,0,15,17,303,0,86,1,0,0,0,2,90,
1,0,0,0,4,100,1,0,0,0,6,106,1,0,0,0,8,126,1,0,0,0,10,129,1,0,0,0,12,135,
1,0,0,0,14,141,1,0,0,0,16,146,1,0,0,0,18,150,1,0,0,0,20,154,1,0,0,0,22,157,
1,0,0,0,24,160,1,0,0,0,26,163,1,0,0,0,28,167,1,0,0,0,30,183,1,0,0,0,32,185,
1,0,0,0,34,191,1,0,0,0,36,193,1,0,0,0,38,195,1,0,0,0,40,197,1,0,0,0,42,200,
1,0,0,0,44,203,1,0,0,0,46,206,1,0,0,0,48,214,1,0,0,0,50,216,1,0,0,0,52,224,
1,0,0,0,54,263,1,0,0,0,56,266,1,0,0,0,58,270,1,0,0,0,60,272,1,0,0,0,62,274,
1,0,0,0,64,276,1,0,0,0,66,279,1,0,0,0,68,283,1,0,0,0,70,285,1,0,0,0,72,287,
1,0,0,0,74,79,3,2,1,0,75,76,5,1,0,0,76,78,3,2,1,0,77,75,1,0,0,0,78,81,1,
0,0,0,79,77,1,0,0,0,79,80,1,0,0,0,80,82,1,0,0,0,81,79,1,0,0,0,82,83,5,46,
0,0,83,85,1,0,0,0,84,74,1,0,0,0,85,88,1,0,0,0,86,84,1,0,0,0,86,87,1,0,0,
0,87,1,1,0,0,0,88,86,1,0,0,0,89,91,3,6,3,0,90,89,1,0,0,0,90,91,1,0,0,0,91,
94,1,0,0,0,92,95,3,8,4,0,93,95,3,4,2,0,94,92,1,0,0,0,94,93,1,0,0,0,94,95,
1,0,0,0,95,97,1,0,0,0,96,98,3,72,36,0,97,96,1,0,0,0,97,98,1,0,0,0,98,3,1,
0,0,0,99,101,3,70,35,0,100,99,1,0,0,0,100,101,1,0,0,0,101,102,1,0,0,0,102,
104,3,68,34,0,103,105,3,46,23,0,104,103,1,0,0,0,104,105,1,0,0,0,105,5,1,
0,0,0,106,108,3,48,24,0,107,109,5,2,0,0,108,107,1,0,0,0,108,109,1,0,0,0,
109,7,1,0,0,0,110,127,3,40,20,0,111,127,3,38,19,0,112,127,3,28,14,0,113,
127,3,36,18,0,114,127,3,26,13,0,115,127,3,22,11,0,116,127,3,20,10,0,117,
127,3,16,8,0,118,127,3,24,12,0,119,127,3,18,9,0,120,127,3,42,21,0,121,127,
3,44,22,0,122,127,3,10,5,0,123,127,3,12,6,0,124,127,3,14,7,0,125,127,5,3,
0,0,126,110,1,0,0,0,126,111,1,0,0,0,126,112,1,0,0,0,126,113,1,0,0,0,126,
114,1,0,0,0,126,115,1,0,0,0,126,116,1,0,0,0,126,117,1,0,0,0,126,118,1,0,
0,0,126,119,1,0,0,0,126,120,1,0,0,0,126,121,1,0,0,0,126,122,1,0,0,0,126,
123,1,0,0,0,126,124,1,0,0,0,126,125,1,0,0,0,127,9,1,0,0,0,128,130,3,64,32,
0,129,128,1,0,0,0,129,130,1,0,0,0,130,131,1,0,0,0,131,132,5,33,0,0,132,133,
3,50,25,0,133,11,1,0,0,0,134,136,3,64,32,0,135,134,1,0,0,0,135,136,1,0,0,
0,136,137,1,0,0,0,137,138,5,34,0,0,138,139,3,50,25,0,139,13,1,0,0,0,140,
142,3,64,32,0,141,140,1,0,0,0,141,142,1,0,0,0,142,143,1,0,0,0,143,144,5,
35,0,0,144,145,3,50,25,0,145,15,1,0,0,0,146,148,5,19,0,0,147,149,3,50,25,
0,148,147,1,0,0,0,148,149,1,0,0,0,149,17,1,0,0,0,150,152,5,18,0,0,151,153,
3,50,25,0,152,151,1,0,0,0,152,153,1,0,0,0,153,19,1,0,0,0,154,155,5,27,0,
0,155,156,3,46,23,0,156,21,1,0,0,0,157,158,5,28,0,0,158,159,3,46,23,0,159,
23,1,0,0,0,160,161,5,29,0,0,161,162,3,46,23,0,162,25,1,0,0,0,163,164,3,64,
32,0,164,165,5,26,0,0,165,166,3,50,25,0,166,27,1,0,0,0,167,168,5,25,0,0,
168,169,3,30,15,0,169,29,1,0,0,0,170,176,3,34,17,0,171,172,3,32,16,0,172,
173,3,34,17,0,173,175,1,0,0,0,174,171,1,0,0,0,175,178,1,0,0,0,176,174,1,
0,0,0,176,177,1,0,0,0,177,184,1,0,0,0,178,176,1,0,0,0,179,180,5,4,0,0,180,
181,3,30,15,0,181,182,5,5,0,0,182,184,1,0,0,0,183,170,1,0,0,0,183,179,1,
0,0,0,184,31,1,0,0,0,185,186,7,0,0,0,186,33,1,0,0,0,187,192,3,64,32,0,188,
192,3,66,33,0,189,190,5,31,0,0,190,192,3,34,17,0,191,187,1,0,0,0,191,188,
1,0,0,0,191,189,1,0,0,0,192,35,1,0,0,0,193,194,5,24,0,0,194,37,1,0,0,0,195,
196,5,22,0,0,196,39,1,0,0,0,197,198,5,23,0,0,198,199,3,50,25,0,199,41,1,
0,0,0,200,201,5,21,0,0,201,202,3,62,31,0,202,43,1,0,0,0,203,204,5,20,0,0,
204,205,3,64,32,0,205,45,1,0,0,0,206,211,3,50,25,0,207,208,5,8,0,0,208,210,
3,50,25,0,209,207,1,0,0,0,210,213,1,0,0,0,211,209,1,0,0,0,211,212,1,0,0,
0,212,47,1,0,0,0,213,211,1,0,0,0,214,215,3,64,32,0,215,49,1,0,0,0,216,221,
3,52,26,0,217,218,5,42,0,0,218,220,3,52,26,0,219,217,1,0,0,0,220,223,1,0,
0,0,221,219,1,0,0,0,221,222,1,0,0,0,222,51,1,0,0,0,223,221,1,0,0,0,224,229,
3,54,27,0,225,226,7,1,0,0,226,228,3,54,27,0,227,225,1,0,0,0,228,231,1,0,
0,0,229,227,1,0,0,0,229,230,1,0,0,0,230,53,1,0,0,0,231,229,1,0,0,0,232,264,
3,66,33,0,233,264,3,58,29,0,234,264,3,60,30,0,235,264,3,64,32,0,236,264,
3,62,31,0,237,238,5,4,0,0,238,239,3,50,25,0,239,240,5,5,0,0,240,264,1,0,
0,0,241,244,3,66,33,0,242,244,3,64,32,0,243,241,1,0,0,0,243,242,1,0,0,0,
243,244,1,0,0,0,244,245,1,0,0,0,245,246,5,13,0,0,246,247,3,50,25,0,247,248,
5,14,0,0,248,264,1,0,0,0,249,250,3,56,28,0,250,251,3,50,25,0,251,264,1,0,
0,0,252,253,5,31,0,0,253,264,3,50,25,0,254,255,5,32,0,0,255,264,3,50,25,
0,256,257,5,36,0,0,257,264,3,50,25,0,258,259,3,60,30,0,259,260,5,2,0,0,260,
261,1,0,0,0,261,262,3,50,25,0,262,264,1,0,0,0,263,232,1,0,0,0,263,233,1,
0,0,0,263,234,1,0,0,0,263,235,1,0,0,0,263,236,1,0,0,0,263,237,1,0,0,0,263,
243,1,0,0,0,263,249,1,0,0,0,263,252,1,0,0,0,263,254,1,0,0,0,263,256,1,0,
0,0,263,258,1,0,0,0,264,55,1,0,0,0,265,267,7,2,0,0,266,265,1,0,0,0,266,267,
1,0,0,0,267,268,1,0,0,0,268,269,5,30,0,0,269,57,1,0,0,0,270,271,5,41,0,0,
271,59,1,0,0,0,272,273,5,38,0,0,273,61,1,0,0,0,274,275,5,45,0,0,275,63,1,
0,0,0,276,277,5,43,0,0,277,65,1,0,0,0,278,280,5,42,0,0,279,278,1,0,0,0,279,
280,1,0,0,0,280,281,1,0,0,0,281,282,5,44,0,0,282,67,1,0,0,0,283,284,5,39,
0,0,284,69,1,0,0,0,285,286,5,40,0,0,286,71,1,0,0,0,287,288,5,37,0,0,288,
73,1,0,0,0,24,79,86,90,94,97,100,104,108,126,129,135,141,148,152,176,183,
191,211,221,229,243,263,266,279];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class asm8086Parser extends antlr4.Parser {

    static grammarFileName = "asm8086.g4";
    static literalNames = [ null, "'!'", "':'", "'.'", "'('", "')'", "'eq'", 
                            "'ne'", "','", "'*'", "'/'", "'mod'", "'and'", 
                            "'['", "']'", null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, "'$'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, "BYTE", 
                             "WORD", "DWORD", "DSEG", "CSEG", "INCLUDE", 
                             "TITLE", "END", "ORG", "ENDIF", "IF", "EQU", 
                             "DW", "DB", "DD", "PTR", "NOT", "OFFSET", "RW", 
                             "RB", "RS", "LENGTH", "COMMENT", "REGISTER", 
                             "OPCODE", "REP", "DOLLAR", "SIGN", "NAME", 
                             "NUMBER", "STRING", "EOL", "WS" ];
    static ruleNames = [ "prog", "line", "instruction", "lbl", "assemblerdirective", 
                         "rw", "rb", "rs", "cseg", "dseg", "dw", "db", "dd", 
                         "equ", "if_", "assemblerexpression", "assemblerlogical", 
                         "assemblerterm", "endif_", "end", "org", "title", 
                         "include_", "expressionlist", "label", "expression", 
                         "multiplyingExpression", "argument", "ptr", "dollar", 
                         "register_", "string_", "name", "number", "opcode", 
                         "rep", "comment" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = asm8086Parser.ruleNames;
        this.literalNames = asm8086Parser.literalNames;
        this.symbolicNames = asm8086Parser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, asm8086Parser.RULE_prog);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << asm8086Parser.T__0) | (1 << asm8086Parser.T__2) | (1 << asm8086Parser.DSEG) | (1 << asm8086Parser.CSEG) | (1 << asm8086Parser.INCLUDE) | (1 << asm8086Parser.TITLE) | (1 << asm8086Parser.END) | (1 << asm8086Parser.ORG) | (1 << asm8086Parser.ENDIF) | (1 << asm8086Parser.IF) | (1 << asm8086Parser.DW) | (1 << asm8086Parser.DB) | (1 << asm8086Parser.DD))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (asm8086Parser.RW - 33)) | (1 << (asm8086Parser.RB - 33)) | (1 << (asm8086Parser.RS - 33)) | (1 << (asm8086Parser.COMMENT - 33)) | (1 << (asm8086Parser.OPCODE - 33)) | (1 << (asm8086Parser.REP - 33)) | (1 << (asm8086Parser.NAME - 33)) | (1 << (asm8086Parser.EOL - 33)))) !== 0)) {
	            this.state = 74;
	            this.line();
	            this.state = 79;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===asm8086Parser.T__0) {
	                this.state = 75;
	                this.match(asm8086Parser.T__0);
	                this.state = 76;
	                this.line();
	                this.state = 81;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 82;
	            this.match(asm8086Parser.EOL);
	            this.state = 88;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	line() {
	    let localctx = new LineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, asm8086Parser.RULE_line);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 90;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        if(la_===1) {
	            this.state = 89;
	            this.lbl();

	        }
	        this.state = 94;
	        this._errHandler.sync(this);
	        switch (this._input.LA(1)) {
	        case asm8086Parser.T__2:
	        case asm8086Parser.DSEG:
	        case asm8086Parser.CSEG:
	        case asm8086Parser.INCLUDE:
	        case asm8086Parser.TITLE:
	        case asm8086Parser.END:
	        case asm8086Parser.ORG:
	        case asm8086Parser.ENDIF:
	        case asm8086Parser.IF:
	        case asm8086Parser.DW:
	        case asm8086Parser.DB:
	        case asm8086Parser.DD:
	        case asm8086Parser.RW:
	        case asm8086Parser.RB:
	        case asm8086Parser.RS:
	        case asm8086Parser.NAME:
	        	this.state = 92;
	        	this.assemblerdirective();
	        	break;
	        case asm8086Parser.OPCODE:
	        case asm8086Parser.REP:
	        	this.state = 93;
	        	this.instruction();
	        	break;
	        case asm8086Parser.T__0:
	        case asm8086Parser.COMMENT:
	        case asm8086Parser.EOL:
	        	break;
	        default:
	        	break;
	        }
	        this.state = 97;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===asm8086Parser.COMMENT) {
	            this.state = 96;
	            this.comment();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruction() {
	    let localctx = new InstructionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, asm8086Parser.RULE_instruction);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 100;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===asm8086Parser.REP) {
	            this.state = 99;
	            this.rep();
	        }

	        this.state = 102;
	        this.opcode();
	        this.state = 104;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << asm8086Parser.T__3) | (1 << asm8086Parser.T__12) | (1 << asm8086Parser.BYTE) | (1 << asm8086Parser.WORD) | (1 << asm8086Parser.DWORD) | (1 << asm8086Parser.PTR) | (1 << asm8086Parser.NOT))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (asm8086Parser.OFFSET - 32)) | (1 << (asm8086Parser.LENGTH - 32)) | (1 << (asm8086Parser.REGISTER - 32)) | (1 << (asm8086Parser.DOLLAR - 32)) | (1 << (asm8086Parser.SIGN - 32)) | (1 << (asm8086Parser.NAME - 32)) | (1 << (asm8086Parser.NUMBER - 32)) | (1 << (asm8086Parser.STRING - 32)))) !== 0)) {
	            this.state = 103;
	            this.expressionlist();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lbl() {
	    let localctx = new LblContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, asm8086Parser.RULE_lbl);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 106;
	        this.label();
	        this.state = 108;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===asm8086Parser.T__1) {
	            this.state = 107;
	            this.match(asm8086Parser.T__1);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assemblerdirective() {
	    let localctx = new AssemblerdirectiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, asm8086Parser.RULE_assemblerdirective);
	    try {
	        this.state = 126;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 110;
	            this.org();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 111;
	            this.end();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 112;
	            this.if_();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 113;
	            this.endif_();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 114;
	            this.equ();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 115;
	            this.db();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 116;
	            this.dw();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 117;
	            this.cseg();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 118;
	            this.dd();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 119;
	            this.dseg();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 120;
	            this.title();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 121;
	            this.include_();
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 122;
	            this.rw();
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 123;
	            this.rb();
	            break;

	        case 15:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 124;
	            this.rs();
	            break;

	        case 16:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 125;
	            this.match(asm8086Parser.T__2);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	rw() {
	    let localctx = new RwContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, asm8086Parser.RULE_rw);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 129;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===asm8086Parser.NAME) {
	            this.state = 128;
	            this.name();
	        }

	        this.state = 131;
	        this.match(asm8086Parser.RW);
	        this.state = 132;
	        this.expression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	rb() {
	    let localctx = new RbContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, asm8086Parser.RULE_rb);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 135;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===asm8086Parser.NAME) {
	            this.state = 134;
	            this.name();
	        }

	        this.state = 137;
	        this.match(asm8086Parser.RB);
	        this.state = 138;
	        this.expression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	rs() {
	    let localctx = new RsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, asm8086Parser.RULE_rs);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 141;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===asm8086Parser.NAME) {
	            this.state = 140;
	            this.name();
	        }

	        this.state = 143;
	        this.match(asm8086Parser.RS);
	        this.state = 144;
	        this.expression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cseg() {
	    let localctx = new CsegContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, asm8086Parser.RULE_cseg);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 146;
	        this.match(asm8086Parser.CSEG);
	        this.state = 148;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << asm8086Parser.T__3) | (1 << asm8086Parser.T__12) | (1 << asm8086Parser.BYTE) | (1 << asm8086Parser.WORD) | (1 << asm8086Parser.DWORD) | (1 << asm8086Parser.PTR) | (1 << asm8086Parser.NOT))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (asm8086Parser.OFFSET - 32)) | (1 << (asm8086Parser.LENGTH - 32)) | (1 << (asm8086Parser.REGISTER - 32)) | (1 << (asm8086Parser.DOLLAR - 32)) | (1 << (asm8086Parser.SIGN - 32)) | (1 << (asm8086Parser.NAME - 32)) | (1 << (asm8086Parser.NUMBER - 32)) | (1 << (asm8086Parser.STRING - 32)))) !== 0)) {
	            this.state = 147;
	            this.expression();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dseg() {
	    let localctx = new DsegContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, asm8086Parser.RULE_dseg);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 150;
	        this.match(asm8086Parser.DSEG);
	        this.state = 152;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << asm8086Parser.T__3) | (1 << asm8086Parser.T__12) | (1 << asm8086Parser.BYTE) | (1 << asm8086Parser.WORD) | (1 << asm8086Parser.DWORD) | (1 << asm8086Parser.PTR) | (1 << asm8086Parser.NOT))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (asm8086Parser.OFFSET - 32)) | (1 << (asm8086Parser.LENGTH - 32)) | (1 << (asm8086Parser.REGISTER - 32)) | (1 << (asm8086Parser.DOLLAR - 32)) | (1 << (asm8086Parser.SIGN - 32)) | (1 << (asm8086Parser.NAME - 32)) | (1 << (asm8086Parser.NUMBER - 32)) | (1 << (asm8086Parser.STRING - 32)))) !== 0)) {
	            this.state = 151;
	            this.expression();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dw() {
	    let localctx = new DwContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, asm8086Parser.RULE_dw);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 154;
	        this.match(asm8086Parser.DW);
	        this.state = 155;
	        this.expressionlist();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	db() {
	    let localctx = new DbContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, asm8086Parser.RULE_db);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 157;
	        this.match(asm8086Parser.DB);
	        this.state = 158;
	        this.expressionlist();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dd() {
	    let localctx = new DdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, asm8086Parser.RULE_dd);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 160;
	        this.match(asm8086Parser.DD);
	        this.state = 161;
	        this.expressionlist();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	equ() {
	    let localctx = new EquContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, asm8086Parser.RULE_equ);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 163;
	        this.name();
	        this.state = 164;
	        this.match(asm8086Parser.EQU);
	        this.state = 165;
	        this.expression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	if_() {
	    let localctx = new If_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, asm8086Parser.RULE_if_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 167;
	        this.match(asm8086Parser.IF);
	        this.state = 168;
	        this.assemblerexpression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assemblerexpression() {
	    let localctx = new AssemblerexpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, asm8086Parser.RULE_assemblerexpression);
	    var _la = 0; // Token type
	    try {
	        this.state = 183;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case asm8086Parser.NOT:
	        case asm8086Parser.SIGN:
	        case asm8086Parser.NAME:
	        case asm8086Parser.NUMBER:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 170;
	            this.assemblerterm();
	            this.state = 176;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===asm8086Parser.T__5 || _la===asm8086Parser.T__6) {
	                this.state = 171;
	                this.assemblerlogical();
	                this.state = 172;
	                this.assemblerterm();
	                this.state = 178;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        case asm8086Parser.T__3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 179;
	            this.match(asm8086Parser.T__3);
	            this.state = 180;
	            this.assemblerexpression();
	            this.state = 181;
	            this.match(asm8086Parser.T__4);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assemblerlogical() {
	    let localctx = new AssemblerlogicalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, asm8086Parser.RULE_assemblerlogical);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 185;
	        _la = this._input.LA(1);
	        if(!(_la===asm8086Parser.T__5 || _la===asm8086Parser.T__6)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assemblerterm() {
	    let localctx = new AssemblertermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, asm8086Parser.RULE_assemblerterm);
	    try {
	        this.state = 191;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case asm8086Parser.NAME:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 187;
	            this.name();
	            break;
	        case asm8086Parser.SIGN:
	        case asm8086Parser.NUMBER:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 188;
	            this.number();
	            break;
	        case asm8086Parser.NOT:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 189;
	            this.match(asm8086Parser.NOT);
	            this.state = 190;
	            this.assemblerterm();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	endif_() {
	    let localctx = new Endif_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, asm8086Parser.RULE_endif_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 193;
	        this.match(asm8086Parser.ENDIF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	end() {
	    let localctx = new EndContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, asm8086Parser.RULE_end);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 195;
	        this.match(asm8086Parser.END);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	org() {
	    let localctx = new OrgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, asm8086Parser.RULE_org);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 197;
	        this.match(asm8086Parser.ORG);
	        this.state = 198;
	        this.expression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	title() {
	    let localctx = new TitleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, asm8086Parser.RULE_title);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 200;
	        this.match(asm8086Parser.TITLE);
	        this.state = 201;
	        this.string_();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	include_() {
	    let localctx = new Include_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, asm8086Parser.RULE_include_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 203;
	        this.match(asm8086Parser.INCLUDE);
	        this.state = 204;
	        this.name();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expressionlist() {
	    let localctx = new ExpressionlistContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, asm8086Parser.RULE_expressionlist);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 206;
	        this.expression();
	        this.state = 211;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===asm8086Parser.T__7) {
	            this.state = 207;
	            this.match(asm8086Parser.T__7);
	            this.state = 208;
	            this.expression();
	            this.state = 213;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	label() {
	    let localctx = new LabelContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, asm8086Parser.RULE_label);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 214;
	        this.name();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, asm8086Parser.RULE_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 216;
	        this.multiplyingExpression();
	        this.state = 221;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 217;
	                this.match(asm8086Parser.SIGN);
	                this.state = 218;
	                this.multiplyingExpression(); 
	            }
	            this.state = 223;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,18,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	multiplyingExpression() {
	    let localctx = new MultiplyingExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, asm8086Parser.RULE_multiplyingExpression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 224;
	        this.argument();
	        this.state = 229;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 225;
	                _la = this._input.LA(1);
	                if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << asm8086Parser.T__8) | (1 << asm8086Parser.T__9) | (1 << asm8086Parser.T__10) | (1 << asm8086Parser.T__11))) !== 0))) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 226;
	                this.argument(); 
	            }
	            this.state = 231;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	argument() {
	    let localctx = new ArgumentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, asm8086Parser.RULE_argument);
	    try {
	        this.state = 263;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 232;
	            this.number();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 233;
	            this.dollar();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 234;
	            this.register_();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 235;
	            this.name();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 236;
	            this.string_();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 237;
	            this.match(asm8086Parser.T__3);
	            this.state = 238;
	            this.expression();
	            this.state = 239;
	            this.match(asm8086Parser.T__4);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 243;
	            this._errHandler.sync(this);
	            switch (this._input.LA(1)) {
	            case asm8086Parser.SIGN:
	            case asm8086Parser.NUMBER:
	            	this.state = 241;
	            	this.number();
	            	break;
	            case asm8086Parser.NAME:
	            	this.state = 242;
	            	this.name();
	            	break;
	            case asm8086Parser.T__12:
	            	break;
	            default:
	            	break;
	            }
	            this.state = 245;
	            this.match(asm8086Parser.T__12);
	            this.state = 246;
	            this.expression();
	            this.state = 247;
	            this.match(asm8086Parser.T__13);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 249;
	            this.ptr();
	            this.state = 250;
	            this.expression();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 252;
	            this.match(asm8086Parser.NOT);
	            this.state = 253;
	            this.expression();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 254;
	            this.match(asm8086Parser.OFFSET);
	            this.state = 255;
	            this.expression();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 256;
	            this.match(asm8086Parser.LENGTH);
	            this.state = 257;
	            this.expression();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 258;
	            this.register_();
	            this.state = 259;
	            this.match(asm8086Parser.T__1);
	            this.state = 261;
	            this.expression();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ptr() {
	    let localctx = new PtrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, asm8086Parser.RULE_ptr);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 266;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << asm8086Parser.BYTE) | (1 << asm8086Parser.WORD) | (1 << asm8086Parser.DWORD))) !== 0)) {
	            this.state = 265;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << asm8086Parser.BYTE) | (1 << asm8086Parser.WORD) | (1 << asm8086Parser.DWORD))) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 268;
	        this.match(asm8086Parser.PTR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dollar() {
	    let localctx = new DollarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, asm8086Parser.RULE_dollar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 270;
	        this.match(asm8086Parser.DOLLAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	register_() {
	    let localctx = new Register_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, asm8086Parser.RULE_register_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 272;
	        this.match(asm8086Parser.REGISTER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	string_() {
	    let localctx = new String_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, asm8086Parser.RULE_string_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 274;
	        this.match(asm8086Parser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	name() {
	    let localctx = new NameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, asm8086Parser.RULE_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 276;
	        this.match(asm8086Parser.NAME);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	number() {
	    let localctx = new NumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, asm8086Parser.RULE_number);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 279;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===asm8086Parser.SIGN) {
	            this.state = 278;
	            this.match(asm8086Parser.SIGN);
	        }

	        this.state = 281;
	        this.match(asm8086Parser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	opcode() {
	    let localctx = new OpcodeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, asm8086Parser.RULE_opcode);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 283;
	        this.match(asm8086Parser.OPCODE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	rep() {
	    let localctx = new RepContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, asm8086Parser.RULE_rep);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 285;
	        this.match(asm8086Parser.REP);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comment() {
	    let localctx = new CommentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, asm8086Parser.RULE_comment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 287;
	        this.match(asm8086Parser.COMMENT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

asm8086Parser.EOF = antlr4.Token.EOF;
asm8086Parser.T__0 = 1;
asm8086Parser.T__1 = 2;
asm8086Parser.T__2 = 3;
asm8086Parser.T__3 = 4;
asm8086Parser.T__4 = 5;
asm8086Parser.T__5 = 6;
asm8086Parser.T__6 = 7;
asm8086Parser.T__7 = 8;
asm8086Parser.T__8 = 9;
asm8086Parser.T__9 = 10;
asm8086Parser.T__10 = 11;
asm8086Parser.T__11 = 12;
asm8086Parser.T__12 = 13;
asm8086Parser.T__13 = 14;
asm8086Parser.BYTE = 15;
asm8086Parser.WORD = 16;
asm8086Parser.DWORD = 17;
asm8086Parser.DSEG = 18;
asm8086Parser.CSEG = 19;
asm8086Parser.INCLUDE = 20;
asm8086Parser.TITLE = 21;
asm8086Parser.END = 22;
asm8086Parser.ORG = 23;
asm8086Parser.ENDIF = 24;
asm8086Parser.IF = 25;
asm8086Parser.EQU = 26;
asm8086Parser.DW = 27;
asm8086Parser.DB = 28;
asm8086Parser.DD = 29;
asm8086Parser.PTR = 30;
asm8086Parser.NOT = 31;
asm8086Parser.OFFSET = 32;
asm8086Parser.RW = 33;
asm8086Parser.RB = 34;
asm8086Parser.RS = 35;
asm8086Parser.LENGTH = 36;
asm8086Parser.COMMENT = 37;
asm8086Parser.REGISTER = 38;
asm8086Parser.OPCODE = 39;
asm8086Parser.REP = 40;
asm8086Parser.DOLLAR = 41;
asm8086Parser.SIGN = 42;
asm8086Parser.NAME = 43;
asm8086Parser.NUMBER = 44;
asm8086Parser.STRING = 45;
asm8086Parser.EOL = 46;
asm8086Parser.WS = 47;

asm8086Parser.RULE_prog = 0;
asm8086Parser.RULE_line = 1;
asm8086Parser.RULE_instruction = 2;
asm8086Parser.RULE_lbl = 3;
asm8086Parser.RULE_assemblerdirective = 4;
asm8086Parser.RULE_rw = 5;
asm8086Parser.RULE_rb = 6;
asm8086Parser.RULE_rs = 7;
asm8086Parser.RULE_cseg = 8;
asm8086Parser.RULE_dseg = 9;
asm8086Parser.RULE_dw = 10;
asm8086Parser.RULE_db = 11;
asm8086Parser.RULE_dd = 12;
asm8086Parser.RULE_equ = 13;
asm8086Parser.RULE_if_ = 14;
asm8086Parser.RULE_assemblerexpression = 15;
asm8086Parser.RULE_assemblerlogical = 16;
asm8086Parser.RULE_assemblerterm = 17;
asm8086Parser.RULE_endif_ = 18;
asm8086Parser.RULE_end = 19;
asm8086Parser.RULE_org = 20;
asm8086Parser.RULE_title = 21;
asm8086Parser.RULE_include_ = 22;
asm8086Parser.RULE_expressionlist = 23;
asm8086Parser.RULE_label = 24;
asm8086Parser.RULE_expression = 25;
asm8086Parser.RULE_multiplyingExpression = 26;
asm8086Parser.RULE_argument = 27;
asm8086Parser.RULE_ptr = 28;
asm8086Parser.RULE_dollar = 29;
asm8086Parser.RULE_register_ = 30;
asm8086Parser.RULE_string_ = 31;
asm8086Parser.RULE_name = 32;
asm8086Parser.RULE_number = 33;
asm8086Parser.RULE_opcode = 34;
asm8086Parser.RULE_rep = 35;
asm8086Parser.RULE_comment = 36;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asm8086Parser.RULE_prog;
    }

	line = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LineContext);
	    } else {
	        return this.getTypedRuleContext(LineContext,i);
	    }
	};

	EOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(asm8086Parser.EOL);
	    } else {
	        return this.getToken(asm8086Parser.EOL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitProg(this);
		}
	}


}



class LineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asm8086Parser.RULE_line;
    }

	lbl() {
	    return this.getTypedRuleContext(LblContext,0);
	};

	assemblerdirective() {
	    return this.getTypedRuleContext(AssemblerdirectiveContext,0);
	};

	instruction() {
	    return this.getTypedRuleContext(InstructionContext,0);
	};

	comment() {
	    return this.getTypedRuleContext(CommentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitLine(this);
		}
	}


}



class InstructionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asm8086Parser.RULE_instruction;
    }

	opcode() {
	    return this.getTypedRuleContext(OpcodeContext,0);
	};

	rep() {
	    return this.getTypedRuleContext(RepContext,0);
	};

	expressionlist() {
	    return this.getTypedRuleContext(ExpressionlistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterInstruction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitInstruction(this);
		}
	}


}



class LblContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asm8086Parser.RULE_lbl;
    }

	label() {
	    return this.getTypedRuleContext(LabelContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterLbl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitLbl(this);
		}
	}


}



class AssemblerdirectiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asm8086Parser.RULE_assemblerdirective;
    }

	org() {
	    return this.getTypedRuleContext(OrgContext,0);
	};

	end() {
	    return this.getTypedRuleContext(EndContext,0);
	};

	if_() {
	    return this.getTypedRuleContext(If_Context,0);
	};

	endif_() {
	    return this.getTypedRuleContext(Endif_Context,0);
	};

	equ() {
	    return this.getTypedRuleContext(EquContext,0);
	};

	db() {
	    return this.getTypedRuleContext(DbContext,0);
	};

	dw() {
	    return this.getTypedRuleContext(DwContext,0);
	};

	cseg() {
	    return this.getTypedRuleContext(CsegContext,0);
	};

	dd() {
	    return this.getTypedRuleContext(DdContext,0);
	};

	dseg() {
	    return this.getTypedRuleContext(DsegContext,0);
	};

	title() {
	    return this.getTypedRuleContext(TitleContext,0);
	};

	include_() {
	    return this.getTypedRuleContext(Include_Context,0);
	};

	rw() {
	    return this.getTypedRuleContext(RwContext,0);
	};

	rb() {
	    return this.getTypedRuleContext(RbContext,0);
	};

	rs() {
	    return this.getTypedRuleContext(RsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterAssemblerdirective(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitAssemblerdirective(this);
		}
	}


}



class RwContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asm8086Parser.RULE_rw;
    }

	RW() {
	    return this.getToken(asm8086Parser.RW, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterRw(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitRw(this);
		}
	}


}



class RbContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asm8086Parser.RULE_rb;
    }

	RB() {
	    return this.getToken(asm8086Parser.RB, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterRb(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitRb(this);
		}
	}


}



class RsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asm8086Parser.RULE_rs;
    }

	RS() {
	    return this.getToken(asm8086Parser.RS, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterRs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitRs(this);
		}
	}


}



class CsegContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asm8086Parser.RULE_cseg;
    }

	CSEG() {
	    return this.getToken(asm8086Parser.CSEG, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterCseg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitCseg(this);
		}
	}


}



class DsegContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asm8086Parser.RULE_dseg;
    }

	DSEG() {
	    return this.getToken(asm8086Parser.DSEG, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterDseg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitDseg(this);
		}
	}


}



class DwContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asm8086Parser.RULE_dw;
    }

	DW() {
	    return this.getToken(asm8086Parser.DW, 0);
	};

	expressionlist() {
	    return this.getTypedRuleContext(ExpressionlistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterDw(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitDw(this);
		}
	}


}



class DbContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asm8086Parser.RULE_db;
    }

	DB() {
	    return this.getToken(asm8086Parser.DB, 0);
	};

	expressionlist() {
	    return this.getTypedRuleContext(ExpressionlistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterDb(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitDb(this);
		}
	}


}



class DdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asm8086Parser.RULE_dd;
    }

	DD() {
	    return this.getToken(asm8086Parser.DD, 0);
	};

	expressionlist() {
	    return this.getTypedRuleContext(ExpressionlistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterDd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitDd(this);
		}
	}


}



class EquContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asm8086Parser.RULE_equ;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	EQU() {
	    return this.getToken(asm8086Parser.EQU, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterEqu(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitEqu(this);
		}
	}


}



class If_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asm8086Parser.RULE_if_;
    }

	IF() {
	    return this.getToken(asm8086Parser.IF, 0);
	};

	assemblerexpression() {
	    return this.getTypedRuleContext(AssemblerexpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterIf_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitIf_(this);
		}
	}


}



class AssemblerexpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asm8086Parser.RULE_assemblerexpression;
    }

	assemblerterm = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AssemblertermContext);
	    } else {
	        return this.getTypedRuleContext(AssemblertermContext,i);
	    }
	};

	assemblerlogical = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AssemblerlogicalContext);
	    } else {
	        return this.getTypedRuleContext(AssemblerlogicalContext,i);
	    }
	};

	assemblerexpression() {
	    return this.getTypedRuleContext(AssemblerexpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterAssemblerexpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitAssemblerexpression(this);
		}
	}


}



class AssemblerlogicalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asm8086Parser.RULE_assemblerlogical;
    }


	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterAssemblerlogical(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitAssemblerlogical(this);
		}
	}


}



class AssemblertermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asm8086Parser.RULE_assemblerterm;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	NOT() {
	    return this.getToken(asm8086Parser.NOT, 0);
	};

	assemblerterm() {
	    return this.getTypedRuleContext(AssemblertermContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterAssemblerterm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitAssemblerterm(this);
		}
	}


}



class Endif_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asm8086Parser.RULE_endif_;
    }

	ENDIF() {
	    return this.getToken(asm8086Parser.ENDIF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterEndif_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitEndif_(this);
		}
	}


}



class EndContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asm8086Parser.RULE_end;
    }

	END() {
	    return this.getToken(asm8086Parser.END, 0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterEnd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitEnd(this);
		}
	}


}



class OrgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asm8086Parser.RULE_org;
    }

	ORG() {
	    return this.getToken(asm8086Parser.ORG, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterOrg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitOrg(this);
		}
	}


}



class TitleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asm8086Parser.RULE_title;
    }

	TITLE() {
	    return this.getToken(asm8086Parser.TITLE, 0);
	};

	string_() {
	    return this.getTypedRuleContext(String_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterTitle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitTitle(this);
		}
	}


}



class Include_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asm8086Parser.RULE_include_;
    }

	INCLUDE() {
	    return this.getToken(asm8086Parser.INCLUDE, 0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterInclude_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitInclude_(this);
		}
	}


}



class ExpressionlistContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asm8086Parser.RULE_expressionlist;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterExpressionlist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitExpressionlist(this);
		}
	}


}



class LabelContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asm8086Parser.RULE_label;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterLabel(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitLabel(this);
		}
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asm8086Parser.RULE_expression;
    }

	multiplyingExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MultiplyingExpressionContext);
	    } else {
	        return this.getTypedRuleContext(MultiplyingExpressionContext,i);
	    }
	};

	SIGN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(asm8086Parser.SIGN);
	    } else {
	        return this.getToken(asm8086Parser.SIGN, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitExpression(this);
		}
	}


}



class MultiplyingExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asm8086Parser.RULE_multiplyingExpression;
    }

	argument = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArgumentContext);
	    } else {
	        return this.getTypedRuleContext(ArgumentContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterMultiplyingExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitMultiplyingExpression(this);
		}
	}


}



class ArgumentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asm8086Parser.RULE_argument;
    }

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	dollar() {
	    return this.getTypedRuleContext(DollarContext,0);
	};

	register_() {
	    return this.getTypedRuleContext(Register_Context,0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	string_() {
	    return this.getTypedRuleContext(String_Context,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	ptr() {
	    return this.getTypedRuleContext(PtrContext,0);
	};

	NOT() {
	    return this.getToken(asm8086Parser.NOT, 0);
	};

	OFFSET() {
	    return this.getToken(asm8086Parser.OFFSET, 0);
	};

	LENGTH() {
	    return this.getToken(asm8086Parser.LENGTH, 0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterArgument(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitArgument(this);
		}
	}


}



class PtrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asm8086Parser.RULE_ptr;
    }

	PTR() {
	    return this.getToken(asm8086Parser.PTR, 0);
	};

	BYTE() {
	    return this.getToken(asm8086Parser.BYTE, 0);
	};

	WORD() {
	    return this.getToken(asm8086Parser.WORD, 0);
	};

	DWORD() {
	    return this.getToken(asm8086Parser.DWORD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterPtr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitPtr(this);
		}
	}


}



class DollarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asm8086Parser.RULE_dollar;
    }

	DOLLAR() {
	    return this.getToken(asm8086Parser.DOLLAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterDollar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitDollar(this);
		}
	}


}



class Register_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asm8086Parser.RULE_register_;
    }

	REGISTER() {
	    return this.getToken(asm8086Parser.REGISTER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterRegister_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitRegister_(this);
		}
	}


}



class String_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asm8086Parser.RULE_string_;
    }

	STRING() {
	    return this.getToken(asm8086Parser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterString_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitString_(this);
		}
	}


}



class NameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asm8086Parser.RULE_name;
    }

	NAME() {
	    return this.getToken(asm8086Parser.NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitName(this);
		}
	}


}



class NumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asm8086Parser.RULE_number;
    }

	NUMBER() {
	    return this.getToken(asm8086Parser.NUMBER, 0);
	};

	SIGN() {
	    return this.getToken(asm8086Parser.SIGN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitNumber(this);
		}
	}


}



class OpcodeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asm8086Parser.RULE_opcode;
    }

	OPCODE() {
	    return this.getToken(asm8086Parser.OPCODE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterOpcode(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitOpcode(this);
		}
	}


}



class RepContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asm8086Parser.RULE_rep;
    }

	REP() {
	    return this.getToken(asm8086Parser.REP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterRep(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitRep(this);
		}
	}


}



class CommentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = asm8086Parser.RULE_comment;
    }

	COMMENT() {
	    return this.getToken(asm8086Parser.COMMENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.enterComment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof asm8086Listener ) {
	        listener.exitComment(this);
		}
	}


}




asm8086Parser.ProgContext = ProgContext; 
asm8086Parser.LineContext = LineContext; 
asm8086Parser.InstructionContext = InstructionContext; 
asm8086Parser.LblContext = LblContext; 
asm8086Parser.AssemblerdirectiveContext = AssemblerdirectiveContext; 
asm8086Parser.RwContext = RwContext; 
asm8086Parser.RbContext = RbContext; 
asm8086Parser.RsContext = RsContext; 
asm8086Parser.CsegContext = CsegContext; 
asm8086Parser.DsegContext = DsegContext; 
asm8086Parser.DwContext = DwContext; 
asm8086Parser.DbContext = DbContext; 
asm8086Parser.DdContext = DdContext; 
asm8086Parser.EquContext = EquContext; 
asm8086Parser.If_Context = If_Context; 
asm8086Parser.AssemblerexpressionContext = AssemblerexpressionContext; 
asm8086Parser.AssemblerlogicalContext = AssemblerlogicalContext; 
asm8086Parser.AssemblertermContext = AssemblertermContext; 
asm8086Parser.Endif_Context = Endif_Context; 
asm8086Parser.EndContext = EndContext; 
asm8086Parser.OrgContext = OrgContext; 
asm8086Parser.TitleContext = TitleContext; 
asm8086Parser.Include_Context = Include_Context; 
asm8086Parser.ExpressionlistContext = ExpressionlistContext; 
asm8086Parser.LabelContext = LabelContext; 
asm8086Parser.ExpressionContext = ExpressionContext; 
asm8086Parser.MultiplyingExpressionContext = MultiplyingExpressionContext; 
asm8086Parser.ArgumentContext = ArgumentContext; 
asm8086Parser.PtrContext = PtrContext; 
asm8086Parser.DollarContext = DollarContext; 
asm8086Parser.Register_Context = Register_Context; 
asm8086Parser.String_Context = String_Context; 
asm8086Parser.NameContext = NameContext; 
asm8086Parser.NumberContext = NumberContext; 
asm8086Parser.OpcodeContext = OpcodeContext; 
asm8086Parser.RepContext = RepContext; 
asm8086Parser.CommentContext = CommentContext; 
