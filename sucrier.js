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
	
	// [0.1.0] Boolean
	
})(this,Array,Math,Number,Object,String);
