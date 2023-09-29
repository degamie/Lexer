//Developed By Sarthak Mittal(Degamiesign)//
export enum TokenType{
	//Number
	num,
	//Equals
	eq,
	//not equal
	neq,
	//openPar
	op,
	Identifier,
	//closePar
	clp,
	//binary_operator
	bop,
	let,
}	
export interface token{
	value:string,
	type:TokenType
}
function isalpha(string:src){
	return src.toUpperCase()!=src.tolowerCase();
}
function isInt(string:src){
	const c=str.charCode(0),bounds=['0'.charCodeAt(0),'9'.charCodeAt(0)];
	return (c>=bounds[0] && c<=bounds[1]);
}
function isSkippable(string:src){
	return src=='' || src=='\n' || src=='\t';
}
const Keywords{
	Record<string,TokenType>;
};
export Function Tokenize(sourceCode:string){
	const Tokens =new Array <Tokens>;
	src=sourceCode.split();
	while(src.length>0){
		//Open and Close Brackets Validation
		(src[0]=='('|| src[0]==')')?Tokens.push(Token(src.shift(),TokenType.op):Tokens.push(Token(src.shift(),TokenType.clp);
		//Bodmas Operators Validation
		(src[0]=='+'|| src[0]=='-' || src[0]=='*'|| src[0]=='/')?Tokens.push(Token(src.shift(),TokenType.bop)):return null;
		//Equal/Not_Equal Validation 
		(src[0]=='='|| src[0]=='!=')?Tokens.push(Token(src.shift(),TokenType.eq):Tokens.push(Token(src.shift(),TokenType.neq);
			else if(isInt(src[0])){
			//number Token declaration
			nm="";
			while(src.length>0 && isInt(src[0])){
				nm+=src.shift();
				tokens.push(Token(nm,TokenType.nm))
			}
		}
		else if(isalpha(src[0])){
			//Alpha Token declaration
			let ident="";
			while(src.length>0 && isalpha(src[0])){
				ident+=src.shift;
			}
			//nm="";
			//while(src.length>0 && isalpha(src[0])){
				//nm+=src.shift();
				//tokens.push(Token(nm,TokenType.nm))
			//}
			
		}
		else if(isSkippable(src[0]))shift();
		//Reserved keyword validation
		const reserved=Keywords[ident];
		//reserved validation
		reserved==undefined ? tokens.push(Token(ident,TokenType.Identifier)):tokens.push(Token(ident,TokenType.reserved));
		else console.log("Unrecognised Token",src[0]);
		Deno.exit(1);
	}
	return Tokens;
}	

const source=await Deno.readTextFile("./test_1.txt");
for(const token of Tokenize(source)){
	console.log(token);
}
//Developed By Sarthak Mittal(Degamiesign)//


