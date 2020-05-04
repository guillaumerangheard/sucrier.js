(function(M,N,Np){
	var _e=function(a,b){for(var k in b){a[k]=a[k]||b[k];}};
	_e(M,{
		acosh:function(x){return M.log(x+M.sqrt(x*x-1));},
		asinh:function(x){return -Infinity===x?x:M.log(x+M.sqrt(x*x+1));},
		atanh:function(x){return M.log((1+x)/(1-x))/2;},
		cbrt:function(x){var y=M.pow(M.abs(x),1/3);return x<0?-y:y;},
		cosh:function(x){return (M.exp(x)+M.exp(-x))/2;},
		expm1:function(x){return M.exp(x)-1;},
		log10:function(x){return M.log(x)*M.LOG10E;},
		sinh:function(x){var y=M.exp(x);return (y-1/y)/2;},
		tanh:function(x){if(Infinity===x){return 1;}if(-Infinity===x){return -1;}var y=M.exp(2*x);return (y-1)/(y+1);}
	});
	
	_e(Np,{
		atan:function(x){return arguments.length?M.atan2(this,x):M.atan(this);},
		pow:function(x){return M.pow(this,x);}
	});
	
	var _f=[
			"abs","acos","acosh","asin","asinh","atanh",
			"cbrt","cos","cosh",
			"exp","expm1",
			"log",
			"sin","sinh",
			"tan","tanh"
		],
		i=-1,
		l=_f.length;
	while(++i<l){
		Np[_f[i]]=new Function("return Math."+_f[i]+"(this);");
	}
})(Math,Number,Number.prototype);

(function(S,Sp){
	
	Sp.at=function(a){
		if(1===arguments.length){
			return this.charAt(a);
		}
		var A=arguments,i=-1,l=A.length,r=[];
		while(++i<l){
			r.push(this.charAt(A[i]));
		}
		return r;
	};
	
	Sp.between=function(a,b){
		a=S(a);
		b=S(b);
		var r=[];
		if(a!==b){
			var ai=this.indicesOf(a),al=ai.length,
				bi=this.indicesOf(b),bl=bi.length;
			if(0<al&&al===bl){
				for(var i=0;i<al;i++){
					r.push(this.substring(ai[i],bi[i]));
				}
			}
		}
		return r;
	};
	
	Sp.cast=function(){
		switch(this){
			case"":return undefined;
			case"false":return false;
			case"NaN":return NaN;
			case"null":return null;
			case"true":return true;
			default:
				if(this.isFloat){return this.toFloat();}
				if(this.isInteger()){return this.toInteger();}
		}
	};
	
	Sp.characters=function(f){};
	
	Sp.codeAt=function(a){};
	
	Sp.codes=function(f){};
	
	Sp.indicesOf=function(a){
		a=S(a);
		var i=-1,o=0,r=[];
		while(-1<(i=this.indexOf(a,o))){
			r.push(i);
			o=i;
		}
		return r;
	};
	
	Sp.lines=function(f){};
	
	Sp.splitAtFirst=function(a){
		a=S(a);
		var i=this.indexOf(a);
		return -1<i?[this.substring(0,i),this.substr(i+a.length)]:[S(this),""];
	};
	
	Sp.splitAtLast=function(a){
		a=S(a);
		var i=this.lastIndexOf(a);
		return -1<i?[this.substring(0,i),this.substr(i+a.length)]:["",S(this)];
	};
	
	Sp.toCamel=function(){};
	
	Sp.toKebab=function(){};
	
	Sp.toSlug=function(){};
	
	Sp.words=function(f){};
	
})(String,String.prototype);
