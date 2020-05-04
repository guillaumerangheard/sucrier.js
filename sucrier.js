(function(G,A,Ap,M,N,Np,S,Sp){
	var _e=function(a,b){
			for(var k in b){a[k]=a[k]||b[k];}
		};
	
	_e(M,{
		acosh:function(x){return M.log(x+M.sqrt(x*x-1));},
		asinh:function(x){return -Infinity===x?x:M.log(x+M.sqrt(x*x+1));},
		atanh:function(x){return M.log((1+x)/(1-x))/2;},
		cbrt:function(x){var y=M.pow(M.abs(x),1/3);return x<0?-y:y;},
		cosh:function(x){return (M.exp(x)+M.exp(-x))/2;},
		expm1:function(x){return M.exp(x)-1;},
		log10:function(x){return M.log(x)*M.LOG10E;},
		log1p:function(x){return M.log(1+x);},
		log2:function(x){return M.log(x)*M.LOG2E;},
		sinh:function(x){var y=M.exp(x);return (y-1/y)/2;},
		tanh:function(x){if(Infinity===x){return 1;}if(-Infinity===x){return -1;}var y=M.exp(2*x);return (y-1)/(y+1);}
	});
	
	_e(Np,{
		atan:function(x){return arguments.length?M.atan2(this,x):M.atan(this);},
		clamp:function(x,y){return N(this<x?x:y<this?y:this);},
		clmax:function(x){return N(x<this?x:this);},
		clmin:function(x){return N(this<x?x:this);},
		digits:function(){
			var s=S(this);
			if(this<0){s=s.substr(1);}
			if(-1<s.indexOf(".")){
				return s.plit(".");
			}
			else{
				return [s,""];
			}
		},
		
		// Number.prototype.isEven ( )
		isEven:function(){
			return 0===this%2;
		},
		
		// Number.prototype.isFinite ( )
		isFinite:function(){
			return this===this&&-Infinity!==this&&Infinity!==this;
		},
		
		// Number.prototype.isFloat ( )
		isFloat:function(){
			
		},
		
		// Number.prototype.isInteger ( )
		isInteger:function(){
			return this.isFinite()&&this.trunc()===this;
		},
		
		// Number.prototype.isMultipleOf ( Number x )
		isMultipleOf:function(x){
			return 0===this%N(x);
		},
		
		// Number.prototype.isOdd ( =
		isOdd:function(){
			return 0!==this%2;
		},
		
		// Number.prototype.pow ( Number x )
		pow:function(x){
			return M.pow(this,N(x));
		},
		
		// Number.prototype.random ( )
		random:function(){
			return !N.isNaN(this)?M.random()*this:0;
		},
		
		// Number.prototype.sign ( )
		// Number.prototype.sign ( Number sign )
		sign:function(x){
			
		},
		
		// Number.prototype.times ( Function iterator [ , Any context = global ] )
		times:function(f,c){
			c=c||G;
			var i=0,l=N(this);
			if(l<0){
				for(;l<i;i--){
					f.call(c,i);
				}
			}
			else if(0<l){
				for(;i<l;i++){
					f.call(c,i);
				}
			}
		},
		
		// Number.prototype.toBase ( Number radix )
		/// Where 2 <= radix <= 62
		// Number .prototype.toBase ( String alphabet [ , Boolean skipZero = false ] )
		toBase:(function(){
			var _b="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
			return function(x,y){
				if(N.isNumber(x)){
					if(1<x&&x.isInteger()){
						if(x<37){
							return this.toString(x);
						}
						else if(x<62){
							return this.toBase(_b.substr(0,x));
						}
					}
				}
				else if(S.isString(x)){
					if(x.length){
						var l=x.length,p=1,n=N(this),r=n<0?"-":"";
						
					}
				}
				return "";
			};
		})(),
		
		// Number.prototype.toRoman ( )
		toRoman:function(){
			var r="";
			if(0<this&&this.isInteger()){
				var b,n=N(this);
				if(1e3<=n){b=(n/1e3).floor();r+="m".repeat(b);n-=b*1e3;}
				if(900<=n){r+="cm";n-=900;}
				else if(500<=n){r+="d";n-=500;}
				else if(400<=n){r+="cd";n-=400;}
				if(100<=n){b=(n/100).floor();r+="c".repeat(b);n-=b*100;}
				if(90<=n){r+="xc";n-=90;}
				else if(50<=n){r+="l";n-=50;}
				else if(40<=n){r+="xl";n-=40;}
				else if(10<=n){b=(n/10).floor();r+="x".repeat(b);n-=b*10;}
				if(9===n){r+="ix";}
				else if(5===n){r+="v";n-=5;}
				else if(4===n){r+="iv";}
				else{r+="i".repeat(n);}
			}
			return r;
		},
		
		// Number.prototype.toHex ( [ Number paddedLength ] )
		toHex:function(x){
			var r=this.toBase(16);
			return x?"0".repeat(x-r.length)+r:r;
		}
		
	});
	
	var _f=[
			"abs","acos","acosh","asin","asinh","atanh",
			"cbrt","ceil","cos","cosh",
			"exp","expm1",
			"floor",
			"log","log10","log1p","log2",
			"sin","sinh","sqrt",
			"tan","tanh"
		],
		i=-1,
		l=_f.length;
	while(++i<l){
		Np[_f[i]]=new Function("return Math."+_f[i]+"(this);");
	}
	// Number.prototype.abs ( )
	// Number.prototype.acos ( )
	// Number.prototype.acosh ( )
	// Number.prototype.asin ( )
	// Number.prototype.asinh ( )
	// Number.prototype.atanh ( )
	// Number.prototype.cbrt ( )
	// Number.prototype.ceil ( )
	// TODO: Number.prototype.ceil ( [ Number precision = 1 ] )
	// Number.prototype.cos ( )
	// Number.prototype.cosh ( )
	// Number.prototype.exp ( )
	// Number.prototype.expm1 ( )
	// Number.prototype.floor ( )
	// TODO: Number.prototype.floor ( [ Number precision = 1 ] )
	// Number.prototype.log ( )
	/// TODO: Number.prototype.log ( Number base )
	// Number.prototype.log10 ( )
	// Number.prototype.log1p ( )
	// Number.prototype.log2 ( )
	// Number.prototype.sin ( )
	// Number.prototype.sinh ( )
	// Number.prototype.sqrt ( )
	// Number.prototype.tan ( )
	// Number.prototype.tanh ( )
	
	_e(Sp,{
		
		// String.prototype.at ( Number i1 [ , ... , Number iN ] )
		at:function(x){
			if(1===arguments.length){
				return this.charAt(x);
			}
			var A=arguments,i=-1,l=A.length,r=[];
			while(++i<l){
				r.push(this.charAt(A[i]));
			}
			return r;
		},
		
		// String.prototype.between ( String openingSymbol , String closingSymbol )
		/// TODO: String.prototype.between ( String openingSymbol , String closingSymbol [ , Boolean allowEmbeded = false ] )
		between:function(x,y){
			x=S(x);
			y=S(y);
			var r=[];
			if(x!==y){
				var xi=this.indicesOf(x),xl=xi.length,
					yi=this.indicesOf(y),yl=yi.length;
				if(xl&&xl===yl){
					for(var i=0;i<xl;i++){
						r.push(this.substring(xi[i],xi[i]));
					}
				}
			}
			return r;
		},
		
		// String.prototype.cast ( )
		cast:function(){
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
		},
		
		// String.prototype.characters ( [ Function mapper [ , Any context ] ] )
		characters:function(f,c){
			
		},
		
		// String.prototype.codeAt ( Number i1 [ , ... , Number iN ] )
		codeAt:function(x){
			
		},
		
		// String.prototype.codes ( [ Function mapper [ , Any context ] ] )
		codes:function(f,c){
			
		},
		
		// String.prototype.indicesOf ( String needle )
		indicesOf:function(x){
			x=S(x);
			var i=-1,o=0,r=[];
			while(-1<(i=this.indexOf(x,o))){
				r.push(i);
				o=i;
			}
			return r;
		},
		
		// String.prototype.lines ( [ Function mapper [ , Any context ] ] )
		lines:function(f,c){
			
		},
		
		// String.prototype.removeDiacritics ( )
		removeDiacritics:function(){
			
		},
		
		// String.prototype.repeat ( Number times )
		repeat:function(x){
			if(N.isNumber(x)&&&&this.length){
				x=x.abs()
			}
			return "";
		},
		
		// String.prototype.splitAtFirst ( String needle )
		splitAtFirst:function(x){
			x=S(x);
			var i=this.indexOf(x);
			return -1<i?[this.substring(0,i),this.substr(i+x.length)]:[S(this),""];
		},
		
		// String.prototype.splitAtLast ( String needle )
		splitAtLast:function(x){
			x=S(x);
			var i=this.lastIndexOf(x);
			return -1<i?[this.substring(0,i),this.substr(i+x.length)]:["",S(this)];
		},
		
		// String.prototype.toCamel ( )
		toCamel:function(){
			
		},
		
		// String.prototype.toKebab ( )
		toKebab:function(){
			
		},
		
		// String.prototype.toSlug ( )
		toSlug:function(){},
		words:function(f,c){}
	});
})(
	this,
	Array,Array.prototype,
	Math,
	Number,Number.prototype,
	String,String.prototype
);
