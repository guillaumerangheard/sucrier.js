Math.Vec2=(function(N){
	// [0.1] Math.Vec2 ( [ Number x = 0 , Number y = 0 ] )
	function Vec2(x,y){
		if(!(this instanceof Vec2)){
			return new Vec2(x,y);
		}
		this.x=N.isFinite(x)?x:0;
		this.y=N.isFinite(y)?y:0;
	}
	
	Vec2.add=function(a){
		var A=arguments,
			i=0,
			l=A.length,
			r=Vec2.isVec2(a)?Vec2(a.x,a.y):Vec2();
		while(++i<l){
			if(Vec2.isVec2(A[i])){
				r.x+=A[i].x;
				r.y+=A[i].y;
			}
		}
		return r;
	};

	// [0.1] Boolean Math.Vec2.col ( Math.Vec2 v1 , Math.Vec2 v2 [ , Number threshold = Math.Vec2.threshold ] )
	Vec2.col=function(a,b,t){
		if(Vec2.isVec2(a)&&Vec2.isVec2(b)){
			t=N.isNumber(t)?t:Vec2.threshold;
			return ((b.x?a.x/b.x:0)-(b.y?a.y/b.y:0)).abs()<=t;
		}
	};
	
	// [0.1] Number Math.Vec2.dist ( Math.Vec2 v1 , Math.Vec2 v2 )
	Vec2.dist=function(a,b){
		if(Vec2.isVec2(a)&&Vec2.isVec2(b)){
			var x=a.x-b.x,
				y=a.y-b.y;
			return (x*x+y*y).sqrt();
		}
		return Infinity;
	};
	
	// [0.1] Math.Vec2 Math.Vec2.div ( Math.Vec2 v , Number n )
	Vec2.div=function(a,b){
		if(Vec2.isVec2(a)){
			if(N.isFinite(b)){
				if(0!==b){
					return Vec2(a.x/b,a.y/b);
				}
			}
		}
		return Vec2();
	};
	
	// [0.1] Number Math.Vec2.dot ( Math.Vec2 v1 , Math.Vec2 v2 )
	Vec2.dot=function(a,b){
		return Vec2.isVec2(a)&&Vec2.isVec2(b)?
			a.x*b.x+a.y*b.y:
			0;
	};
	
	// [0.1] Boolean Math.Vec2.eq ( Math.Vec2 v1 , Math.Vec2 v2 [ , Number threshold = Math.Vec2.threshold ] )
	Vec2.eq=function(a,b,t){
		if(Vec2.isVec2(a)&&Vec2.isVec2(b)){
			t=t||Vec2.threshold;
			return (a.x-b.x).abs()<=t&&(a.y-b.y).abs()<=t;
		}
	};
	
	Vec2.isVec2=function(a){
		return a instanceof Vec2;
	};
	
	// [0.1.0] Number Vec2.mdist ( Vec2 v1 , Vec2 v2 )
	Vec2.mdist=function(a,b){
		return Vec2.isVec2(a)&&Vec2.isVec2(b)?
			(a.x-b.x).abs()+(a.y-b.y).abs():
			Infinity;
	};
	
	// [0.1.0] Vec2 Vec2.mul ( Vec2 v , Number n )
	Vec2.mul=function(a,b){
		if(Vec2.isVec2(a)){
			return N.isFinite(b)?
				Vec2(a.x*b,a.y*b):
				Vec2(a.x,a.y);
		}
		return Vec2();
	};
	
	// [0.1.0] Vec2 Vec2.norm ( Vec2 v )
	Vec2.norm=function(a){
		if(Vec2.isVec2(a)){
			var m=a.mag();
			if(m){
				return Vec2(a.x/m,a.y/m);
			}
		}
		return Vec2();
	};
	
	/*
	Vec2.sdist=function(a,b){
		
	};
	
	Vec2.sub=function(a){
		
	};
	*/
	
	Vec2.threshold=1e-4;
	
	/*
	Vec2.vdiv=function(a,b){
		
	};
	
	Vec2.vmul=function(a,b){
		
	};
	*/
	
	Vec2.prototype={
		
		// [0.1] Math.Vec2 Math.Vec2.prototype.add ( Vec2 v1 [ , ... , Vec2 vN ] )
		add:function(){
			var A=arguments,
				i=-1,
				l=A.length;
			while(++i<l){
				if(Vec2.isVec2(A[i])){
					this.x+=A[i].x;
					this.y+=A[i].y;
				}
			}
			return this;
		},
		
		/*
		cmag:function(){
			
		},
		
		div:function(a){
			
		},
		*/
		
		// [0.1] Boolean Math.Vec2.prototype.isNull ( [ Number threshold = Math.Vec2.threshold ] )
		isNull:function(t){
			t=N.isNumber(t)?t:Vec2.threshold;
			return this.x.abs()<=t&&this.y.abs()<=t;
		},
		
		// [0.1] Boolean Math.Vec2.prototype.isUnit ( [ Number threshold = Math.Vec2.threshold ] )
		isUnit:function(t){
			t=t||Vec2.threshold;
			return (1-this.mag()).abs()<=t;
		},
		
		// [0.1] Number Math.Vec2.prototype.mag ( )
		mag:function(){
			return (this.x*this.x+this.y*this.y).sqrt();
		}
		
		/*
		,
		
		mmag:function(){
			
		},
		
		mul:function(a){
			
		},
		
		sub:function(){
			
		},
		
		vdiv:function(a){
			
		},
		
		vmul:function(a){
			
		}
		*/
		
	});
	
	return Vec2;
})(Number);
