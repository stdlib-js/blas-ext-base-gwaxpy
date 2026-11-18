"use strict";var O=function(u,r){return function(){try{return r||u((r={exports:{}}).exports,r),r.exports}catch(v){throw (r=0, v)}};};var B=O(function(V,A){
function G(u,r,v,t,b,c,q,s,a,g,x){var e,o,n,f,P,m,y,i,k,M;for(e=v.data,o=c.data,n=a.data,f=v.accessors[0],P=c.accessors[0],m=a.accessors[1],y=b,i=s,k=x,M=0;M<u;M++)m(n,k,r*f(e,y)+P(o,i)),y+=t,i+=q,k+=g;return a}A.exports=G
});var p=O(function(Z,C){
var R=require('@stdlib/array-base-arraylike2object/dist'),H=require('@stdlib/blas-base-gcopy/dist').ndarray,I=require('@stdlib/blas-ext-base-gwxpy/dist').ndarray,J=B(),j=5;function K(u,r,v,t,b,c,q,s,a,g,x){var e,o,n,f,P,m,y,i;if(u<=0)return a;if(r===0)return H(u,c,q,s,a,g,x);if(r===1)return I(u,v,t,b,c,q,s,a,g,x);if(f=R(v),P=R(c),m=R(a),f.accessorProtocol||P.accessorProtocol||m.accessorProtocol)return J(u,r,f,t,b,P,q,s,m,g,x),a;if(e=b,o=s,n=x,t===1&&q===1&&g===1){if(y=u%j,y>0)for(i=0;i<y;i++)a[n]=r*v[e]+c[o],e+=t,o+=q,n+=g;if(u<j)return a;for(i=y;i<u;i+=j)a[n]=r*v[e]+c[o],a[n+1]=r*v[e+1]+c[o+1],a[n+2]=r*v[e+2]+c[o+2],a[n+3]=r*v[e+3]+c[o+3],a[n+4]=r*v[e+4]+c[o+4],e+=j,o+=j,n+=j;return a}for(i=0;i<u;i++)a[n]=r*v[e]+c[o],e+=t,o+=q,n+=g;return a}C.exports=K
});var E=O(function(_,D){
var z=require('@stdlib/strided-base-stride2offset/dist'),L=p();function Q(u,r,v,t,b,c,q,s){return L(u,r,v,t,z(u,t),b,c,z(u,c),q,s,z(u,s))}D.exports=Q
});var S=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),F=E(),T=p();S(F,"ndarray",T);module.exports=F;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
