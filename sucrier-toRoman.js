(function(){
	
	var _p=function(n){
			var r=[0,0,0];
			r[0]=n<0?-1:(0<n?1:0);
			if(r[0]){
				r[1]=n.abs();
				r[2]=r[1]-r[1].floor();
				if(r[2]){
					while(!r[2].isInt()){
						r[2]*=10;
					}
				}
			}
		},
		
		_r=function(n,i,v,x){
			return n<4?
					   i.repeat(n):
					   (4===n?
							  i+v:
							  (5===n?
									 v:
									 (5<n&&n<9?
											   v+i.repeat(n-5):
											   i+x)));
		},
		
		_R=function(n,i,v,x,l,c,d,m){
			var r="",
				s=n,
				t;
			if(1e3<=s){
				t=(s/1e3).floor();
				r+=m.repeat(t);
				s-=t*1e3;
			}
			if(100<=s){
				t=(s/100).floor();
				r+=_r(t,c,d,m);
				s-=t*100;
			}
			if(10<=s){
				t=(s/10).floor();
				r+=_r(t,x,l,c);
				s-=t*10;
			}
			if(s){
				r+=_r(s,i,v,x);
			}
			return r;
		};
	
	// [0.1] String Number.prototype.toRoman ( [ String type = "ascii" | "html" | "unicode" [ , Boolean lowercase = false ] ] )
	Number.prototype.toRoman=function(t,l){
		t=t||"ascii";
		l=Boolean.isBool(l)?l:false;
		var p=_p(this),
			r=p[0]<0?"-":"";
		switch(t){
			case"ascii":
				
			case"html":
				
			case"unicode":
				
		}
	};
	
})();
