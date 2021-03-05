(function(root,A,M,N,O,S){
	var _fC=S.fromCharCode,
		_tS=function(a){
			return O.prototype.toString.call(a);
		},
		Ap=A.prototype,
		Np=N.prototype,
		Sp=S.prototype;
	
	// [0.1.0] Boolean Array.isArray ( Any value )
	A.isArray=A.isArray||function(a){
		return "[object Array]"===_tS(a);
	};
	
	// [0.1.0] Variable Array.prototype.at ( Number index )
	Ap.at=function(a){
		if(N.isInteger(a)&&this.length){
			return 0<=a?this[a]:this[this.length+a];
		}
	};
	
	// [0.1.0] Number Math.acosh ( Number n )
	//		   Borrowed from MDN.
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
		return arguments.length?M.atan2(this,a):M.atan(this);
	};
 	
 	// [0.1.0] Number Number.prototype.clamp ( Number nMin , Number nMax )
 	Np.clamp=function(a,b){
		return this<a?a:b<this?b:this;
	};
	
	// [0.1.0] Boolean Number.prototype.isEven ( )
	Np.isEven=function(){
		return 0===this%2;
	};
	
	// [0.1.0] Boolean Number.prototype.isMultipleOf ( Number n )
	Np.isMultipleOf=function(a){
		return 0===this%a;
	};
	
	// [0.1.0] Boolean Number.prototype.isOdd ( )
	Np.isOdd=function(){
		return 0!==this%2;
	};
	
	// [0.1.0] Number Number.prototype.log ( [ Number base = Math.E ] )
	Np.log=function(a){
		return M.log(this)/(b?M.log(b):1);
	};
	
	// [0.1.0] Number Number.prototype.pow ( Number n )
	Np.pow=function(a){
		return M.pow(this,a);
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
				if(m){r+=_fC(0x216f).repeat(m);}								// 1000 - 9000
				if(c){
					if(8<c){r+=_fC(0x216d,0x216f);}								// 900
					else if(4<c){r+=_fC(0x216e)+_fC(0x216d).repeat(c-5);}		// 500 - 800
					else if(3<c){r+=_fC(0x216d,0x216e);}						// 400
					else{r+=_fC(0x216d).repeat(c);}								// 100 - 300
				}
				if(12<d+u){
					if(8<d){r+=_fC(0x2169,0x216d);}								// 90
					else if(4<d){r+=_fC(0x216c)+_fC(0x2169).repeat(d-5);}		// 50 - 80
					else if(3<d){r+=_fC(0x2169,0x216c);}						// 40
					else{r+=_fC(0x2169).repeat(d);}								// 10 - 30
					if(u){
						if(8<u){r+=_fC(0x2160,0x2169);}							// 9
						else if(4<u){r+=_fC(0x2164)+_fC(0x2160).repeat(u-5);}	// 5 - 8
						else if(3<u){r+=_fC(0x2160,0x2164);}					// 4
						else{r+=_fC(0x2160).repeat(u);}							// 1 - 3
					}
				}
				else{r+=_fC(0x215f+d+u);}										// 1 - 12
			}
			else{
				if(m){r+=("M").repeat(m);}										// 1000 - 9000
				if(c){
					if(8<c){r+="CM";}											// 900
					else if(4<c){r+="D"+("C").repeat(c-5);}						// 500 - 800
					else if(3<c){r+="CD";}										// 400
					else{r+=("C").repeat(c);}									// 100 - 300
				}
				if(d){
					if(8<d){r+="XC";}											// 90
					else if(4<d){r+="L"+("X").repeat(c-5);}						// 50 - 80
					else if(3<d){r+="XL";}										// 40
					else{r+=("X").repeat(d);}									// 10 - 30
				}
				if(u){
					if(8<u){r+="IX";}											// 9
					else if(4<u){r+="V"+("I").repeat(c-5);}						// 5 - 8
					else if(3<u){r+="IV";}										// 4
					else{r+=("I").repeat(u);}									// 1 - 3
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
	
	// [0.1.0] Number String.prototype.codeAt ( Number index )
	// [0.1.0] Array  String.prototype.codeAt ( Number i1 , ... , Number iN )
	Sp.codeAt=function(a){
		var r;
		if(1===arguments.length){
			r=this.charCodeAt(a)||0;
		}
		else{
			r=[];
			var A=arguments,
				i=-1,
				l=A.length;
			while(++i<l){
				r.push(this.charCodeAt(A[i])||0);
			}
		}
		return r;
	};
	
	// [0.1.0] Number String.prototype.count ( String s )
	//		   Borrowed from string.js.
	Sp.count=function(a){
		var i=this.indexOf(a),
			r=0;
		while(-1<i){
			r++;
			i=this.indexOf(a,i+1);
		}
		return r;
	};
	
	// [0.1.0] String String.prototype.repeat ( Number times )
	Sp.repeat=function(a){
		var i=-1,
			r="";
		while(++i<a){
			r+=this;
		}
		return r;
	};
	
	// [0.1.0] String String.prototype.toCamel ( )
	//		   Borrowed from string.js.
	Sp.toCamel=function(){
		return this
			.trim()
			.replace(/(\-|_|\s)+(.)?/g,function(a,b,c){
				return c?c.toUpperCase():"";
			});
	};
	
	// [0.1.0] String String.prototype.toDashed ( )
	//		   Borrowed from string.js.
	Sp.toDashed=function(){
		return this
			.trim()
			.replace(/[_\s]+/g,"-")
			.replace(/([A-Z])/g,"-$1")
			.toLowerCase();
	};
	
	// [0.1.0] String String.prototype.trim ( )
	
})(this,Array,Math,Number,Object,String);
