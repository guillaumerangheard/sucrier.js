this.Fuzzy=(function(B,M,N){
	var Bp=B.prototype,
	// [0.1.0] Fussy ( )
	// [0.1.0] Fussy ( Boolean v )
	// [0.1.0] Fussy ( Number v )
		F=function Fuzzy(a){
			if(!F.isFuzzy(this)){return new F(a);}
			if(B.isBool(a)){this.v=a?1:0;}
			else if(F.isFuzzy(a)){this.v=a.v;}
			else if(N.isNumer(a)){this.v=a.clamp(0,1);}
			else{this.v=F.default;}
		},
		Fp=F.prototype,
		Np=N.prototype;
	
	// [0.1.0] Boolean Boolean.and ( Variable b1 , Variable b2 )
	B.and=function(a,b){
		return a.toBool()&&b.toBool();
	};
	
	Bp.toBool=Bp.toBoolean=function(){
		return B(this);
	};
	
	// [0.1.0] Fuzzy.and ( Variable v1 , Variable v2 )
	F.and=function(a,b){
		var c=F(a).v,
			d=F(b).v;
		return F(M.min(c,d));
	};
	
	// [0.1.0] Fuzzy.default
	F.default=0;
	
	// [0.1.0] Boolean Fuzzy.isFuzzy ( Any value )
	F.isFuzzy=function(a){
		return a instanceof F;
	};
	
	// [0.1.0] Fuzzy Fuzzy.not ( Fuzzy v )
	F.not=function(a){
		return F(1-F(a).v);
	};
	
	// [0.1.0] Fuzzy.or ( Variable v1 , Variable v2 )
	F.or=function(a,b){
		var c=F(a).v,
			d=F(b).v;
		return F(M.max(c,d));
	};
	
	// [0.1.0] Fuzzy.threshold
	F.threshold=.5;
	
	// [0.1.0] Fuzzy.xor ( Variable v1 , Variable v2 )
	F.xor=function(a,b){
		var c=F(a).v,
			d=F(b).v;
		return F(M.max(c,d)-M.min(c,d));
	};
	
	// [0.1.0] Fuzzy Fuzzy.prototype.and ( Variable v )
	Fp.and=function(a){
		this.v=M.min(this.v,F(a).v);
		return this;
	};
	
	// [0.1.0] Fuzzy Fuzzy.prototype.not ( )
	Fp.not=function(a){
		this.v=1-this.v;
		return this;
	};
	
	// [0.1.0] Fuzzy Fuzzy.prototype.or ( Variable v )
	Fp.or=function(a){
		this.v=M.max(this.v,F(a).v);
		return this;
	};
	
	// [0.1.0] Boolean Fuzzy.prototype.toBool ( [ Number threshold = Fuzzy.threshold ] )
	// [0.1.0] Boolean Fuzzy.prototype.toBoolean ( [ Number threshold = Fuzzy.threshold ] )
	Fp.toBool=Fp.toBoolean=function(t){
		return this.v<(t||F.threshold)?false:true;
	};
	
	// [0.1.0] String Fuzzy.prototype.toString ( )
	Fp.toString=function(t){
		return ""+this.v;
	};
	
	// [0.1.0] Fuzzy Fuzzy.prototype.xor ( Variable v )
	Fp.xor=function(a){
		var b=F(a).v;
		this.v=M.max(this.v,b)-M.min(this.v,b);
		return this;
	};
	
})(Boolean,Math,Number);
