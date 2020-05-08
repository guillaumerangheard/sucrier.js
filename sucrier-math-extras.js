// Math.Vec2
(function(M,N){
	var _e=function(a,b){
			for(var k in b){
				if(b.hasOwnProperty(k)){
					a[k]=b[k];
				}
			}
		},
		V=function(x,y){
			if(!(this instanceof V)){
				return new V(x,y);
			}
			this.x=N.isNumber(x)?x:0;
			this.y=N.isNumber(y)?y:0;
		};
	
	_e(V,{
		
		// Math.Vec2.add ( Math.Vec2 v1 , Math.Vec2 v2 )
		add:function(a,b){
			
		},
		
		// Math.Vec2.div ( Math.Vec2 v1 , Number n )
		// Math.Vec2.div ( Math.Vec2 v1 , Math.Vec2 v2 )
		div:function(a,b){
			
		},
		
		// Math.Vec2.dot ( Math.Vec2 v1 , Math.Vec2 v2 )
		dot:function(a,b){
			
		},
		
		// Math.Vec2.fromArray ( Array a )
		fromArray:function(a){
			
		},
		
		// Math.Vec2.fromObject ( Object a )
		fromObject:function(a){
			
		},
		
		// Math.Vec2.mul ( Math.Vec2 v1 , Number n )
		// Math.Vec2.mul ( Math.Vec2 v1 , Math.Vec2 v2 )
		mul:function(a,b){
			
		},
		
		// Math.Vec2.sub ( Math.Vec2 v1 , Math.Vec2 v2 )
		sub:function(a,b){
			
		}
		
	});
	
	M.Vec2=V;
})(
	Math,
	Number
);
