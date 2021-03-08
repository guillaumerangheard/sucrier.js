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
	
	// [0.1.0] Boolean Vec.col ( Vec2 v1 , Vec2 v2 [ , Number threshold = Vec2.eq.threshold ] )
	// [0.1.0] Boolean Vec.colinear ( Vec2 v1 , Vec2 v2 [ , Number threshold = Vec2.eq.threshold ] )
	V.col=V.colinear=function(a,b){
		return a.x/b.x===a.y/b.x;
	};
	
	// V.cdist
	
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
	
	// V.mdist
	
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
	
	V.vdiv=V.vDivide=function(a,b){return V(b.x?a.x/b.x:0,b.y?a.y/b.y:0);};
	V.vmul=V.vMultiply=function(a,b){return V(a.x*b.x,a.y*b.y);};
	
	Vp.add=function(a){this.x+=a.x;this.y+=a.y;return this;};
	// Vp.cmag
	Vp.div=function(a){if(a){this.x/=a;this.y/=a;}else{this.x=this.y=0;}return this;};
	Vp.isUnit=function(){return 1===this.mag();}
	Vp.mag=Vp.magnitude=function(){return (this.x*this.x+this.y*this.y).sqrt();};
	// Vp.mmag
	Vp.mul=Vp.multiply=function(a){this.x*=a;this.y*=a;return this;};
	Vp.norm=Vp.normalize=function(){return this.div(this.mag());};
	// Vp.smag
	Vp.sub=Vp.substract=function(a){this.x-=a.x;this.y-=a.y;return this;};
	Vp.toString=function(){return "Vec2 x: "+this.x+" , y: "+this.y;};
	Vp.vdiv=Vp.vDivide=function(a){this.x=a.x?this.x/a.x:0;this.y=a.y?this.y/a.y:0;return this;};
	Vp.vmul=Vp.vMultiply=function(a){this.x*=a.x;this.y*=a.y;return this;};
	
	root.Vec2=V;
})(this,Math,Number);
