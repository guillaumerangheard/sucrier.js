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
	
	Sp.toCamel=function(){};
	
	Sp.toKebab=function(){};
	
	Sp.toSlug=function(){};
	
	Sp.words=function(f){};
	
})();
