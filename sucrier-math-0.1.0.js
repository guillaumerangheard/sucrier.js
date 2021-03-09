(function(root,M,N,O){
	// [0.1.0] Vec2 ( [ Number x = 0 , Number y = 0 ] )
	function Vec2(x,y){
		if(!(this instanceof Vec2)){
			return new Vec2(x,y);
		}
		this.x=N.isFinite(x)?x:0;
		this.y=N.isFinite(y)?y:0;
	}
	
	O.extend(Vec2,{
		
		// [0.1.0] Vec2 Vec2.add ( Vec2 v1 , Vec2 v2 [ , ... , Vec2 vN ] )
		add:function(a){
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
		},
		
		// [0.1.0] Boolean Vec2.col ( Vec2 v1 , Vec2 v2 [ , Number threshold = Vec2.threshold ] )
		col:function(a,b,t){
			if(Vec2.isVec2(a)&&Vec2.isVec2(b)){
				t=N.isNumber(t)?t:Vec2.threshold;
				return ((b.x?a.x/b.x:0)-(b.y?a.y/b.y:0)).abs()<=t;
			}
		},
		
		// [0.1.0] Number Vec2.dist ( Vec2 v1 , Vec2 v2 )
		dist:function(a,b){
			if(Vec2.isVec2(a)&&Vec2.isVec2(b)){
				var x=a.x-b.x,
					y=a.y-b.y;
				return (x*x+y*y).sqrt();
			}
			return Infinity;
		},
		
		// [0.1.0] Vec2 Vec2.div ( Vec2 v , Number n )
		div:function(a,b){
			if(Vec2.isVec2(a)){
				if(N.isFinite(b)){
					if(0!==b){
						return Vec2(a.x/b,a.y/b);
					}
				}
			}
			return Vec2();
		},
		
		// [0.1.0] Number Vec2.dot ( Vec2 v1 , Vec2 v2 )
		dot:function(a,b){
			return Vec2.isVec2(a)&&Vec2.isVec2(b)?
				a.x*b.x+a.y*b.y:
				0;
		},
		
		// [0.1.0] Boolean Vec2.eq ( Vec2 v1 , Vec2 v2 [ , Number threshold = Vec2.threshold ] )
		eq:function(a,b,t){
			if(Vec2.isVec2(a)&&Vec2.isVec2(b)){
				t=t||Vec2.threshold;
				return (a.x-b.x).abs()<=t&&(a.y-b.y).abs()<=t;
			}
		},
		
		// [0.1.0] Boolean Vec2.isVec2 ( Any value )
		isVec2:function(a){
			return a instanceof Vec2;
		},
		
		// [0.1.0] Number Vec2.mdist ( Vec2 v1 , Vec2 v2 )
		mdist:function(a,b){
			return Vec2.isVec2(a)&&Vec2.isVec2(b)?
				(a.x-b.x).abs()+(a.y-b.y).abs():
				Infinity;
		},
		
		// [0.1.0] Vec2 Vec2.mul ( Vec2 v , Number n )
		mul:function(a,b){
			if(Vec2.isVec2(a)){
				return N.isFinite(b)?
					Vec2(a.x*b,a.y*b):
					Vec2(a.x,a.y);
			}
			return Vec2();
		},
		
		// [0.1.0] Vec2 Vec2.norm ( Vec2 v )
		norm:function(a){
			if(Vec2.isVec2(a)){
				var m=a.mag();
				if(m){
					return Vec2(a.x/m,a.y/m);
				}
			}
			return Vec2();
		},
		
		/*
		sdist:function(a,b){},
		sub:function(a){},
		*/
		threshold:1e-4/*,
		vdiv:function(a,b){},
		vmul:function(a,b){}
		*/
		
	});
	
	O.extend(Vec2.prototype,{
		
		// [0.1.0] Vec2 Vec2.prototype.add ( Vec2 v1 [ , ... , Vec2 vN ] )
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
		cmag:function(){},
		div:function(a){},
		*/
		
		// [0.1.0] Boolean Vec2.prototype.isNull ( [ Number threshold = Vec2.threshold ] )
		isNull:function(t){
			t=N.isNumber(t)?t:Vec2.threshold;
			return this.x.abs()<=t&&this.y.abs()<=t;
		},
		
		// [0.1.0] Boolean Vec2.prototype.isUnit ( [ Number threshold = Vec2.threshold ] )
		isUnit:function(t){
			t=t||Vec2.threshold;
			return (1-this.mag()).abs()<=t;
		},
		
		// [0.1.0] Number Vec2.prototype.mag ( )
		mag:function(){
			return (this.x*this.x+this.y*this.y).sqrt();
		}/*,
		mmag:function(){},
		mul:function(a){},
		sub:function(){},
		vdiv:function(a){},
		vmul:function(a){}
		*/
		
	});
	
	root.Vec2=Vec2;
	
	function Vec3(x,y,z){
		if(!(this instanceof Vec3)){
			return new Vec3(x,y,z);
		}
		this.x=N.isFinite(x)?x:0;
		this.y=N.isFinite(y)?y:0;
		this.z=N.isFinite(z)?z:0;
	}
	
	root.Vec3=Vec3;
	
	function Vec4(x,y,z,w){
		if(!(this instanceof Vec4)){
			return new Vec4(x,y,z,w);
		}
		this.x=N.isFinite(x)?x:0;
		this.y=N.isFinite(y)?y:0;
		this.z=N.isFinite(z)?z:0;
		this.w=N.isFinite(w)?w:0;
	}
	
	root.Vec4=Vec4;
	
})(this,Math,Number,Object);
