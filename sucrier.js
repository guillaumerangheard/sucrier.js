(function(root,A,Ap,B,F,M,N,Np,O,Op,S,Sp){
	var _fC=S.fromCharCode,
		_tS=function(a){
			return Op.toString.call(a);
		};
	
	// [0.1] Boolean Array.isArray ( Any value )
	A.isArray=A.isArray||function(a){
		return "[object Array]"===_tS(a);
	};
	
	// [0.1] Boolean Array.prototype.toBool ( )
	// [0.1] Boolean Array.prototype.toBoolean ( )
	Ap.toBool=Ap.toBoolean=function(){
		return 0<this.length;
	};
	
	// [0.1] Boolean Boolean.and ( Boolean b1 , Boolean b2 [ , ... Boolean bN ] )
	B.and=function(a,b){
		if(arguments.length<3){
			return a&&b;
		}
		var A=arguments,
			i=0,
			l=A.length,
			r=a;
		while(++i<l){
			r=r&&A[i];
		}
		return r;
	};
	
	// [0.1] Boolean Boolean.isBool ( Any value )
	// [0.1] Boolean Boolean.isBoolean ( Any value )
	// Borrowed from is.js 0.9.0.
	B.isBool=B.isBoolean=function(a){
		return true===a||false===a||"[object Boolean]"===_tS(a);
	};
	
	// [0.1] Boolean Boolean.or ( Boolean b1 , Boolean b2[ , ... , Boolean bN ] )
	B.or=function(a,b){
		if(arguments.length<3){
			return a||b;
		}
		var A=arguments,
			i=0,
			l=A.length,
			r=a;
		while(++i<l){
			r=r||A[i];
		}
		return r;
	};
	
	// [0.1] Boolean Boolean.not ( Boolean b )
	B.not=function(a){
		return !a;
	};
	
	// [0.1.0] Boolean Boolean.xor ( Boolean b1 , Boolean b2 [ , ... , Boolean bN ] )
	B.xor=function(a,b){
		if(arguments.length<3){
			return (a||b)&&!(a&&b);
		}
		var A=arguments,
			i=0,
			l=A.length,
			r=a;
		while(++i<l){
			r=(r||A[i])&&!(r&&A[i]);
		}
	};
	
	// [0.1] Number Math.acosh ( Number n )
	// Borrowed from MDN.
	M.acosh=M.acosh||function(a){
		return (a+(a*a-1).sqrt()).log();
	};
	
	// [0.1.0] Number Math.asinh ( Number n )
	//		   Borrowed from MDN.
	M.asinh=M.asinh||function(a){
		return -Infinity===a?a:(a+(a*a+1).sqrt()).log();
	};
	
	// [0.1.0] Number Math.atanh ( Number n )
	//		   Borrowed from MDN.
	M.atanh=M.atanh||function(a){
		((1+a)/(1-a)).log()/2;
	};
	
	// [0.1.0] Number Math.cbrt ( Number n )
	//		   Borrowed from a rather random site. Needs to be tested.
	M.cbrt=M.cbrt||function(a){
		return (a<0?-(-a).pow(1/3):a.pow(a,1/3)).round();
	};
	
	// [0.1.0] Number Math.cosh ( Number n )
	//		   Borrowed from MDN.
	M.cosh=M.cosh||function(a){
		var b=a.exp();
		return (b+1/b)/2;
	};
	
	// [0.1.0] Number Math.sinh ( Number n )
	//		   Borrowed from MDN.
	M.sinh=M.sinh||function(a){
		var b=a.exp();
		return (b-1/b)/2;
	};
	
	// [0.1.0] Number Math.tanh ( Number n )
	//		   Borrowed from MDN.
	M.tanh=M.tanh||function(a){
		if(Infinity===a){
			return 1;
		}
		else if(-Infinity===a){
			return -1;
		}
		else{
			var b=a.exp();
			return (b-1)/(b+1);
		}
	};
	
	// [0.1.0] Number Math.trunc ( Number n )
	M.trunc=M?trunc||function(a){
		return a<0?a.ceil():a.floor();
	};
	
	// [0.1.0] Number Number.isFinite ( Number n )
	N.isFinite=N.isFinite||function(a){
		if(N.isNumber(a)){
			return !(a!==a||Infinity===a||-Infinity===a);
		}
		return false;
	};
	
	// [0.1.0] Boolean Number.isNaN ( Any value )
	N.isNaN=N.isNaN||function(a){
		return a!==a;
	};
	
	// [0.1.0] Boolean Number.isNumber ( Any value )
	N.isNumber=N.isNumber||function(a){
		return "[object Number]"===_tS(a)&&!N.isNaN(a);
	};
	
	// [0.1.0] Number Number.prototype.abs ( )
	// [0.1.0] Number Number.prototype.acos ( )
	// [0.1.0] Number Number.prototype.acosh ( )
	// [0.1.0] Number Number.prototype.asin ( )
	// [0.1.0] Number Number.prototype.asinh ( )
	// [0.1.0] Number Number.prototype.atanh ( )
	// [0.1.0] Number Number.prototype.cbrt ( )
	// [0.1.0] Number Number.prototype.ceil ( )
	// [0.1.0] Number Number.prototype.cos ( )
	// [0.1.0] Number Number.prototype.cosh ( )
	// [0.1.0] Number Number.prototype.exp ( )
	// [0.1.0] Number Number.prototype.floor ( )
	// [0.1.0] Number Number.prototype.round ( )
	// [0.1.0] Number Number.prototype.sin ( )
	// [0.1.0] Number Number.prototype.sinh ( )
	// [0.1.0] Number Number.prototype.sqrt ( )
	// [0.1.0] Number Number.prototype.tan ( )
	// [0.1.0] Number Number.prototype.tanh ( )
	// [0.1.0] Number Number.prototype.trunc ( )
	var a=[
			"abs","acos","acosh","asin","asinh","atanh",
			"cbrt","ceil","cos","cosh",
			"exp",
			"floor",
			"round",
			"sin","sinh","sqrt",
			"tan","tanh","trunc"
		],
		i=-1,
		l=a.length;
	while(++i<l){
		Np[a[i]]=new Function("return Math."+a[i]+"(this);");
	}
	
	// [0.1.0] Number Number.prototype.atan ( )
	// [0.1.0] Number Number.prototype.atan ( Number x )
	Np.atan=function(a){
		return N.isFinite(a)?M.atan2(this,a):M.atan(this);
	};
 	
 	// [0.1.0] Number Number.prototype.clamp ( Number nMin , Number nMax )
 	Np.clamp=function(a,b){
		if(N.isFinite(a)&&N.isFinite(b)){
			return this<a?a:b<this?b:this;
		}
		return 0+this;
	};
	
	// [0.1.0] Boolean Number.prototype.isEven ( )
	Np.isEven=function(){
		return 0===this%2;
	};
	
	// [0.1.0] Boolean Number.prototype.isMultipleOf ( Number n )
	Np.isMultipleOf=function(a){
		return N.isFinite(a)?0===this%a:false;
	};
	
	// [0.1.0] Boolean Number.prototype.isOdd ( )
	Np.isOdd=function(){
		return 0!==this%2;
	};
	
	// [0.1.0] Boolean Number.prototype.isWithin ( Number nMin , Number nMax )
	// Borrowed from is.js 0.9.0.
	Np.isWithin=function(a,b){
		return N.isNumber(a)&&N.isNumber(b)?a<=this&&this<=b:false;
	};
	
	// [0.1.0] Number Number.prototype.log ( [ Number base = Math.E ] )
	Np.log=function(a){
		return M.log(this)/(N.isFinite(a)?M.log(a):1);
	};
	
	// [0.1.0] Number Number.prototype.pow ( Number n )
	Np.pow=function(a){
		return N.isFinite(a)?M.pow(this,a):0;
	};
	
	// [0.1.0] Number Number.prototype.sign ( )
	// [0.1.0] Number Number.prototype.sign ( Number n )
	Np.sign=function(a){
		var s=this<0?-1:0<this?1:0;
		if(arguments.length){
			a=0!==a?a/a:a;
			return a!==s?-this:this;
		}
		return s;
	};
	
	// [0.1.0] Array Number.prototype.times ( Function callback [ , Any context = root ] )
	//		   -> Variable callback ( Number i )
	Np.times=function(f,c){
		var l=this.trunc().abs(),
			r=[];
		if(l){
			c=c||root;
			var i=-1;
			while(++i<l){
				r.push(f.call(c,i));
			}
		}
		return r;
	};
	
	// [x.x.x] String Number.prototype.toBase ( Number base )
	// [x.x.x] String Number.prototype.toBase ( String base [ , hasZero = true ] )
	
	// [0.1.0] String Number.prototype.toBin ( )
	// [0.1.0] String Number.prototype.toBinary ( )
	Np.toBin=Np.toBinary=function(){
		return N.isFinite(this)?this.abs().floor().toString(2):"0";
		// return this.toBase(2);
	};
	
	// [0.1.0] Boolean Number.prototype.toBool ( )
	// [0.1.0] Boolean Number.prototype.toBoolean ( )
	Np.toBool=Np.toBoolean=function(){
		return 0!==this&&this===this&&-Infinity!==this&&Infinity===this;
	};
	
	// [0.1.0] String Number.prototype.toHex ( )
	// [0.1.0] String Number.prototype.toHexadecimal ( )
	Np.toHex=Np.toHexadecimal=function(){
		return N.isFinite(this)?this.abs().floor().toString(16):"0";
		// return this.toBase(16);
	};
	
	// [0.1.0] String Number.prototype.toOct ( )
	// [0.1.0] String Number.prototype.toOctal ( )
	Np.toOct=Np.toOctal=function(){
		return N.isFinite(this)?this.abs().floor().toString(8):"0";
		// return this.toBase(8)
	};
	
	// [0.1.0] String Number.prototype.toRoman ( [ Boolean unicode = false ] )
	Np.toRoman=function(a){
		var r="";
		if(0===this%1&&0<this){
			var m,c,d,u=0+this;
			m=(u/1e3).floor();
			u-=m*1e3;
			c=(u/100).floor();
			u-=c*100;
			d=(u/10).floor();
			u-=d*10;
			if(a){
				if(m){r+=_fC(0x216f).repeat(m);}							// 1000 - 9000	( "M" - "MMMMMMMMM" )
				if(c){
					if(8<c){r+="\u216d\u216f";}								// 900			( "CM" )
					else if(4<c){r+="\u216e"+("\u216d").repeat(c-5);}		// 500 - 800	( "D" - "DCCC" )
					else if(3<c){r+="\u216d\u0x216e";}						// 400			( "CD" )
					else{r+=_fC("\u216d").repeat(c);}						// 100 - 300	( "C" - "CCC" )
				}
				if(12<d+u){
					if(8<d){r+="\u2169\"216d";}								// 90			( "XC" )
					else if(4<d){r+="\u216c"+("\u2169").repeat(d-5);}		// 50 - 80		( "L" - "LXXX" )
					else if(3<d){r+="\u2169\u216c";}						// 40			( "XL" )
					else{r+=("\u2169").repeat(d);}							// 10 - 30		( "X" - "XXX" )
					if(u){
						if(8<u){r+="\u2160\u2169";}							// 9			( "IX" )
						else if(4<u){r+="\u2164"+("\u2160").repeat(u-5);}	// 5 - 8		( "V" - "VIII" )
						else if(3<u){r+="\u2160\u2164";}					// 4			( "IV" )
						else{r+=("\u2160").repeat(u);}						// 1 - 3		( "I" - "III" )
					}
				}
				else{r+=_fC(0x215f+d+u);}									// 1 - 12		( "I" - "XII" )
			}
			else{
				if(m){r+=("M").repeat(m);}									// 1000 - 9000	( "M" - "MMMMMMMMM" )
				if(c){
					if(8<c){r+="CM";}										// 900			( "CM" )
					else if(4<c){r+="D"+("C").repeat(c-5);}					// 500 - 800	( "D" - "DCCC" )
					else if(3<c){r+="CD";}									// 400			( "CD" )
					else{r+=("C").repeat(c);}								// 100 - 300	( "C" - "CCC" )
				}
				if(d){
					if(8<d){r+="XC";}										// 90			( "XC" )
					else if(4<d){r+="L"+("X").repeat(c-5);}					// 50 - 80		( "L" - "LXXX" )
					else if(3<d){r+="XL";}									// 40			( "XL" )
					else{r+=("X").repeat(d);}								// 10 - 30		( "X" - "XXX" )
				}
				if(u){
					if(8<u){r+="IX";}										// 9			( "IX" )
					else if(4<u){r+="V"+("I").repeat(c-5);}					// 5 - 8		( "V" - "VIII" )
					else if(3<u){r+="IV";}									// 4			( "IV" )
					else{r+=("I").repeat(u);}								// 1 - 3		( "I" - "III" )
				}
			}
		}
		return r;
	};
	
	// [0.1.0] String String.fromCode ( Number i1 , ... , Number iN )
	S.fromCode=_fC;
	
	// [0.1.0] Boolean String.isString ( Any value )
	S.isString=function(a){
		return "[object String]"===_tS(a);
	};
	
	// [0.1.0] String String.prototype.at ( Number index )
	// [0.1.0] Array  String.prototype.at ( Number i1 , ... , Number iN )
	Sp.at=function(a){
		var r;
		if(1===arguments.length){
			r=this.charAt(a)||"";
		}
		else{
			r=[];
			var A=arguments,
				i=-1,
				l=A.length;
			while(++i<l){
				r.push(this.charAt(A[i])||"");
			}
		}
		return r;
	};
	
	// [x.x.x] Boolean String.prototype.beginsWith ( String s )
	
	// [x.x.x] String String.prototype.between ( String left , String right )
	// Borrowed from string.js.
	
	// [0.1.0] Number String.prototype.codeAt ( Number index )
	// [0.1.0] Array  String.prototype.codeAt ( Number i1 , ... , Number iN )
	Sp.codeAt=function(a){
		var r;
		if(1===arguments.length){
			r=this.charCodeAt(a)||0;
		}
		else{
			r=[];
			var A=arguments,i=-1,l=A.length;
			while(++i<l){
				r.push(this.charCodeAt(A[i])||0);
			}
		}
		return r;
	};
	
	// [0.1.0] Number String.prototype.count ( String s )
	// Borrowed from string.js.
	Sp.count=function(a){
		var i=this.indexOf(a),r=0;
		while(-1<i){
			r++;
			i=this.indexOf(a,i+1);
		}
		return r;
	};
	
	// [x.x.x] Boolean String.prototype.endsWith ( String s [ , Number from = 0 ] )
	// Sp.endsWith=Sp.endsWith||function(a){};
	
	// [x.x.x] String String.prototype.escapeHTML ( )
	
	// [x.x.x] String.prototype.last ( [ Number count = 1 ] )
	// Sp.last=Sp.right=function(a){};
	
	// [x.x.x] Array String.prototype.indicesOf ( String s )
	// Sp.indicesOf=function(a){};
	
	// [x.x.x] Boolean String.prototype.isAlpha ( )
	// [x.x.x] Boolean String.prototype.isAlphaNumeric ( )
	// [x.x.x] Boolean String.isHex ( )
	// [x.x.x] Boolean String.isLowerCase ( )
	// [x.x.x] Boolean String.isNumeric ( )
	// [x.x.x] Boolean String.isOct ( )
	// [x.x.x] Boolean String.isUpperCase ( )
	
	// [x.x.x] String.prototype.lpad ( Number length [ , String padWith = " " ] )
	// Sp.padStart=Sp.padStart||function(a,b){};
	// Sp.lpad=Sp.padStart;
	
	// [x.x.x] String String.prototype.ltrim ( )
	// Sp.trimStart=Sp.trimStart||function(){};
	// Sp.ltrim=Sp.trimStart;
	
	// [0.1.0] String String.prototype.repeat ( Number times )
	Sp.repeat=function(a){
		var i=-1,r="";
		while(++i<a){
			r+=this;
		}
		return r;
	};
	
	// [x.x.x] String.prototype.rpad ( Number length [ , String padWith = " " ] )
	// Sp.padEnd=Sp.padEnd||function(a,b){};
	// Sp.rpad=Sp.padEnd;
	
	// [x.x.x] String String.prototype.rtrim ( )
	// Sp.trimEnd=Sp.trimEnd||function(){};
	// Sp.rtrim=Sp.trimEnd;
	
	// [0.1.0] String String.prototype.stripTags ( )
	// Borrowed from underscore.string.
	Sp.stripTags=function(){
		return this.replace(/<\/?[^>]+>/g,"");
	};
	
	// [0.1.0] Boolean String.prototype.toBool ( )
	// [0.1.0] Boolean String.prototype.toBoolean ( )
	Sp.toBool=Sp.toBoolean=function(){
		return 0<this.length;
	};
	
	// [0.1.0] String String.prototype.toCamel ( )
	// Borrowed from string.js.
	Sp.toCamel=function(){
		return this
			.trim()
			.replace(/(\-|_|\s)+(.)?/g,function(a,b,c){
				return c?c.toUpperCase():"";
			});
	};
	
	// [0.1.0] String String.prototype.toDashed ( )
	// Borrowed from string.js.
	Sp.toDashed=Sp.toKebab=function(){
		return this
			.trim()
			.replace(/[_\s]+/g,"-")
			.replace(/([A-Z])/g,"-$1")
			.toLowerCase();
	};
	
	// [0.1.0] String String.prototype.trim ( )
	// Borrowed from MDN.
	Sp.trim=Sp.trim||function(){
		return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");
	};
	
	// [x.x.x] String String.prototype.unescapeHTML ( )
	
})(this,Array,Boolean,Function,Math,Number,Object,String);
