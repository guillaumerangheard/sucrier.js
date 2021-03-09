(function(root,M,N){
	// [0.1.0] Vec2 ( Number x , Number y )
	var V=function Vec2(x,y){
 			if(!V.isVec2(this)){
				return new V(x,y);
			}
			this.x=x||0;
			this.y=y||0;
		},
		Vp=V.prototype;
	
	// [0.1.0] Vec2 Vec.add ( Vec2 v1 , Vec2 v2 [ , ... Vec2 vN ] )
	V.add=function(a,b){
		if(arguments.length<3){
			return V(a.x+b.x,a.y+b.y);
		}
		else{
			var A=arguments,
				i=0,
				l=A.length,
				r=V(a.x,a.y);
			while(++i<l){
				r.x+=A[i].x;
				r.y+=A[i].y;
			}
			return r;
		}
	};
	
	// [0.1.0] Number Vec2.cdist ( Vec2 v1 , Vec v2 )
	// [0.1.0] Number Vec2.cDistance ( Vec2 v1 , Vec v2 )
	V.cdist=V.cDistance=function(a,b){
		return M.max((a.x-b.x).abs(),(a.y-b.y).abs());
	};
	
	// [0.1.0] Boolean Vec.col ( Vec2 v1 , Vec2 v2 [ , Number threshold = Vec2.eq.threshold ] )
	// [0.1.0] Boolean Vec.colinear ( Vec2 v1 , Vec2 v2 [ , Number threshold = Vec2.eq.threshold ] )
	V.col=V.colinear=function(a,b){
		return a.x/b.x===a.y/b.x;
	};
	
	// [0.1.0] Number Vec.dist ( Vec2 v1 , Vec2 v2 )
	// [0.1.0] Number Vec.distance ( Vec2 v1 , Vec2 v2 )
	V.dist=V.distance=function(a,b){
		var x=a.x-b.x,
			y=a.y-b.y;
		return (x*x+y*y).sqrt();
	};
	
	// [0.1.0] Number Vec.div ( Vec2 v , Number n )
	// [0.1.0] Number Vec.divide ( Vec2 v , Number n )
	V.div=V.divide=function(a,b){
		return b?V(a.x/b,a.y/b):V();
	};
	
	// [0.1.0] Number Vec.dot ( Vec2 v1 , Vec2 v2 )
	V.dot=function(a,b){
		return a.x*b.x+a.y*b.y;
	};
	
	// [0.1.0] Boolean Vec.eq ( Vec2 v1 , Vec2 v2 [ , Number threshold = Vec2.eq.threshold ] )
	V.eq=function(a,b,t){
		t=t||V.eq.threshold;
		return (a.x-b.x).abs()<=t&&(a.y-b.y).abs()<=t;
	};
	V.eq.threshold=.0001;
	
	// [0.1.0] Boolean Vec2.isVec2 ( Any value )
	V.isVec2=function(a){
		return a instanceof V;
	};
	
	// [0.1.0] Number Vec2.mdist ( Vec2 v1 , Vec2 v2 )
	// [0.1.0] Number Vec2.mDistance ( Vec2 v1 , Vec2 v2 )
	V.mdist=V.mDistance=function(a,b){
		return (a.x-b.x).abs()+(a.y-b.y).abs();
	};
	
	// [0.1.0] Number Vec.mul ( Vec2 v , Number n )
	// [0.1.0] Number Vec.multiply ( Vec2 v , Number n )
	V.mul=V.multiply=function(a,b){
		return V(a.x*b,a.y*b);
	};
	
	// [0.1.0] Vec2 Vec2.normalize ( Vec2 v )
	V.norm=V.normalize=function(a){
		var m=a.mag();
		return m?V(a.x/m,a.y/m):V();
	};
	
	// [0.1.0] Number Vec.sdist ( Vec2 v1 , Vec2 v2 )
	// [0.1.0] Number Vec.sDistance ( Vec2 v1 , Vec2 v2 )
	V.sdist=V.sDistance=function(a,b){
		var x=a.x-b.x,
			y=a.y-b.y;
		return x*x+y*y;
	};
	
	// [0.1.0] Vec2 Vec.sub ( Vec2 v1 , Vec2 v2 [ , ... Vec2 vN ] )
	V.sub=V.substract=function(a,b){
		if(arguments.length<3){
			return V(a.x-b.x,a.y-b.y);
		}
		else{
			var A=arguments,
				i=0,
				l=A.length,
				r=V(a.x,a.y);
			while(++i<l){
				r.x-=A[i].x;
				r.y-=A[i].y;
			}
			return r;
		}
	};
	
	// [0.1.0] Vec2.div ( Vec2 v , Number n )
	// [0.1.0] Vec2.divide ( Vec2 v , Number n )
	V.vdiv=V.vDivide=function(a,b){
		return V(b.x?a.x/b.x:0,b.y?a.y/b.y:0);
	};
	
	// [0.1.0] Vec2.mul ( Vec2 v , Number n )
	// [0.1.0] Vec2.multiply ( Vec2 v , Number n )
	V.vmul=V.vMultiply=function(a,b){
		return V(a.x*b.x,a.y*b.y);
	};
	
	// [0.1.0] Vec2 Vec2.prototype.add ( Vec2 v1 [ , ... , Vec2 vN ] )
	Vp.add=function(a){
		if(1===arguments.length){
			this.x+=a.x;
			this.y+=a.y;
		}
		else{
			var A=arguments,
				i=-1,
				l=A.length;
			while(++i<l){
				this.x+=A[i].x;
				this.y+=A[i].y;
			}
		}
		return this;
	};
	
	// [0.1.0] Number Vec2.prototype.cmag ( )
	Vp.cmag=Vp.cMagnitude=function(){
		return M.max(this.x.abs(),this.y.abs());
	};
	
	// [0.1.0] Vec2 Vec2.prototype.div ( Number n )
	// [0.1.0] Vec2 Vec2.prototype.divide ( Number n )
	Vp.div=Vp.divide=function(a){
		if(a){
			this.x/=a;
			this.y/=a;
		}
		else{
			this.x=this.y=0;
		}
		return this;
	};
	
	// [0.1.0] Boolean Vec2.prototype.isUnit (  )
	// [x.x.x] Boolean Vec2.prototype.isUnit ( Number threshold = Vec2.eq.threshold )
	Vp.isUnit=function(){
		return 1===this.mag();
	};
	
	// [0.1.0] Number Vec2.mag ( )
	// [0.1.0] Number Vec2.magnitude ( )
	Vp.mag=Vp.magnitude=function(){
		return (this.x*this.x+this.y*this.y).sqrt();
	};
	
	// [0.1.0] Number Vec2.prototype.mmag ( )
	// [0.1.0] Number Vec2.prototype.mMagnitude ( )
	Vp.mmag=Vp.mMagnitude=function(){
		return this.x.abs()+this.y.abs();
	};
	
	// [0.1.0] Vec2 Vec2.prototype.mul ( Nmber n )
	// [0.1.0] Vec2 Vec2.prototype.multiply ( Nmber n )
	Vp.mul=Vp.multiply=function(a){
		this.x*=a;
		this.y*=a;
		return this;
	};
	
	// [0.1.0] Vec2 Vec2.prototype.norm ( )
	// [0.1.0] Vec2 Vec2.prototype.normalize ( )
	Vp.norm=Vp.normalize=function(){
		return this.div(this.mag());
	};
	
	// [0.1.0] Number Vec2.prototype.smag ( )
	// [0.1.0] Number Vec2.prototype.sMagnitude ( )
	Vp.smag=Vp.sMagnitude=function(){
		return this.x*this.x+this.y*this.y;
	};
	
	// [0.1.0] Vec2 Vec2.prototype.sub ( Vec2 v1 [ , ... , Vec2 vN ] )
	// [0.1.0] Vec2 Vec2.prototype.substract ( Vec2 v1 [ , ... , Vec2 vN ] )
	Vp.sub=Vp.substract=function(a){
		if(1===arguments.length){
			this.x-=a.x;
			this.y-=a.y;
		}
		else{
			var A=arguments,
				i=-1,
				l=A.length;
			while(++i<l){
				this.x-=A[i].x;
				this.y-=A[i].y;
			}
		}
		return this;
	};
	
	// [0.1.0] String Vec2.prototype.toString ( )
	Vp.toString=function(){
		return "Vec2 x: "+this.x+" , y: "+this.y;
	};
	
	// [0.1.0] Vec2 Vec2.prototype.vdiv ( Vec2 v )
	// [0.1.0] Vec2 Vec2.prototype.vDivide ( Vec2 v )
	Vp.vdiv=Vp.vDivide=function(a){
		this.x=a.x?this.x/a.x:0;
		this.y=a.y?this.y/a.y:0;
		return this;
	};
	
	// [0.1.0] Vec2 Vec2.prototype.vmul ( Vec2 v )
	// [0.1.0] Vec2 Vec2.prototype.vMultiply ( Vec2 v )
	Vp.vmul=Vp.vMultiply=function(a){
		this.x*=a.x;
		this.y*=a.y;
		return this;
	};
	
	root.Vec2=V;
})(this,Math,Number);

(function(root,M,N){
	var V=function Vec3(x,y,z){
			if(!V.isVec3(this)){
				return new V(x,y,z);
			}
			this.x=x||0;
			this.y=y||0;
			this.z=z||0;
		},
		Vp=V.prototype;
	
	// [0.1.0] Vec3.add
	// [0.1.0] Vec3.cdist
	// [0.1.0] Vec3.col
	// [0.1.0] Vec3.cross
	// [0.1.0] Vec3.dist
	// [0.1.0] Vec3.div
	// [0.1.0] Vec3.dot
	// [0.1.0] Vec3.fromVec2
	// [0.1.0] Vec3.isVec3
	// [0.1.0] Vec3.mdist
	// [0.1.0] Vec3.mul
	// [0.1.0] Vec3.norm
	// [0.1.0] Vec3.sdist
	// [0.1.0] Vec3.sub
	// [0.1.0] Vec3.vdiv
	// [0.1.0] Vec3.vmul
	
	// [0.1.0] Vec3.prototype.add
	// [0.1.0] Vec3.prototype.cmag
	// [0.1.0] Vec3.prototype.div
	// [0.1.0] Vec3.prototype.isUnit
	// [0.1.0] Vec3.prototype.mag
	// [0.1.0] Vec3.prototype.mmag
	// [0.1.0] Vec3.prototype.mul
	// [0.1.0] Vec3.prototype.norm
	// [0.1.0] Vec3.prototype.smag
	// [0.1.0] Vec3.prototype.sub
	// [0.1.0] Vec3.prototype.vdiv
	// [0.1.0] Vec3.prototype.vmul
	
	root.Vec3=V;
})(this,Math,Number);
