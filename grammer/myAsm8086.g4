grammar myAsm8086;

prog
  : (instruction EOL)*
  ;

instruction
  : opcode expressionlist?
  ;

opcode
  : OPCODE
  ;

expressionlist
  : expression (',' expression)*
  ;

// Add more types of expressions
expression
  : number
  | register
  ;

number
  : NUMBER
  ;

register
  : REGISTER
  ;

NUMBER
  : [0-9a-fA-F] + ('H' | 'h')?
  ;


// Add more opcodes
OPCODE
  : A D D | M O V
  ;

// Add more registers
REGISTER
  : A H | A L | B H | B L | C H | C L | D H | D L | A X | B X | C X | D X | S P
  ;

EOL
  : [\r\n] +
  ;

WS
  : [ \t] -> skip
  ;

fragment A
  : ('a' | 'A')
  ;


fragment B
  : ('b' | 'B')
  ;


fragment C
  : ('c' | 'C')
  ;


fragment D
  : ('d' | 'D')
  ;


fragment E
  : ('e' | 'E')
  ;


fragment F
  : ('f' | 'F')
  ;


fragment G
  : ('g' | 'G')
  ;


fragment H
  : ('h' | 'H')
  ;


fragment I
  : ('i' | 'I')
  ;


fragment J
  : ('j' | 'J')
  ;


fragment K
  : ('k' | 'K')
  ;


fragment L
  : ('l' | 'L')
  ;


fragment M
  : ('m' | 'M')
  ;


fragment N
  : ('n' | 'N')
  ;


fragment O
  : ('o' | 'O')
  ;


fragment P
  : ('p' | 'P')
  ;


fragment Q
  : ('q' | 'Q')
  ;


fragment R
  : ('r' | 'R')
  ;


fragment S
  : ('s' | 'S')
  ;


fragment T
  : ('t' | 'T')
  ;


fragment U
  : ('u' | 'U')
  ;


fragment V
  : ('v' | 'V')
  ;


fragment W
  : ('w' | 'W')
  ;


fragment X
  : ('x' | 'X')
  ;

fragment Y
  : ('y' | 'Y')
  ;

fragment Z
  : ('z' | 'Z')
  ;