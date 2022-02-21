(function(Np){
	
	var _r=function(n,i,v,x){
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
	
	// [x.x] String Number.prototype.toHTMLRoman ( [ Boolean lowerCase = false ] )
	
	// [0.1] String Number.prototype.toRoman ( [ Boolean lowerCase = false ] )
	Np.toRoman=function(l){
		var n=this.abs().trunc();
		return (this<0?"-":"")+
			   (l?
				  _R(n,"i","v","x","l","c","d","m"):
				  _R(n,"I","V","X","L","C","D","M"));
	};
	
	// [x.x] String Number.prototype.toUnicodeRoman ( [ Boolean lowerCase = false ] )
	
})(Number.prototype);
