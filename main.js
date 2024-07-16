const t=document.getElementsByClassName("input_video5")[0],a=document.getElementsByClassName("output5")[0],e=document.getElementsByClassName("output6")[0],l=document.getElementsByClassName("control5")[0],o=a.getContext("2d"),r=e.getContext("2d");let n=0,i="----",s="----";const c=Array(300).fill(0),d=Array(300).fill(0),m=Array(300).fill(0);var f,h,u,p,g=0;let v,F,C,_="----",A=0,E=0,T=0;function x(t){let a={};t.forEach((t=>a[t]=(a[t]||0)+1));let e,l=0;for(let t in a)a[t]>l&&(e=t,l=a[t]);return+e}function w(t,a){return(t+=a)>179&&(t=t-179-178-1),t<-178&&(t=179-(-178-t)+1),t}function M(t,a){let e=a.x-t.x,l=a.y-t.y,o=a.z-t.z;return Math.sqrt(e*e+l*l+o*o)}function L(t,a,e){return Math.acos((a*a+e*e-t*t)/(2*a*e))*(180/Math.PI)}function N(t){let a=clamp(t.from.z+.5,0,1);return`rgba(0, ${255*a}, ${255*(1-a)}, 1)`}var y=0,R=0,S=performance.now();const P=new FaceMesh({locateFile:t=>`https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh@0.1/${t}`});P.onResults((function(t){0,0,0,0;var a,e=[],v=[1,33,263,61,291,199];o.save(),o.clearRect(0,0,l.width,l.height);var F=t.image.width,C=t.image.height,M=1.28*C,L=cv.matFromArray(3,3,cv.CV_64FC1,[M,0,F/2,0,M,C/2,0,0,1]),N=cv.matFromArray(4,1,cv.CV_64FC1,[.1318020374,-.1550007612,-.0071350401,-.0096747708]);if(++R%20==0&&function(){const t=performance.now();y=Number((R/((t-S)/1e3)).toFixed(0)),R=0,S=t}(),r.fillText(`FPS : ${y}`,15,250),t.multiFaceLandmarks){for(let a of t.multiFaceLandmarks)for(let t of(drawConnectors(o,a,FACEMESH_TESSELATION,{color:"#C0C0C070",lineWidth:1}),v)){var P=a[t],k=P.x*F,O=P.y*C;e.push(k),e.push(O)}if(e.length>0){var b=new cv.Mat,B=new cv.Mat;let t=v.length,l=cv.matFromArray(t,2,cv.CV_64FC1,e);var $=cv.matFromArray(6,3,cv.CV_64FC1,[0,-1.126865,7.475604,-4.445859,2.663991,3.173422,4.445859,2.663991,3.173422,-2.456206,-4.342621,4.283884,2.456206,-4.342621,4.283884,0,-9.403378,4.264492]);if(cv.solvePnP($,l,L,N,b,B,!1,cv.SOLVEPNP_ITERATIVE)){var I=cv.Mat.zeros(3,3,cv.CV_64FC1);let t=new cv.Mat;cv.Rodrigues(b,I,t);var D=Math.sqrt(I.data64F[0]*I.data64F[0]+I.data64F[3]*I.data64F[3]);if(D<1e-6?(k=Math.atan2(-I.data64F[5],I.data64F[4]),O=Math.atan2(-I.data64F[6],D),a=0):(k=Math.atan2(I.data64F[7],I.data64F[8]),O=Math.atan2(-I.data64F[6],D),a=Math.atan2(I.data64F[3],I.data64F[0])),A=Number((O/Math.PI*180).toFixed(2)),E=Number((k/Math.PI*180).toFixed(2)),T=Number((a/Math.PI*180).toFixed(2)),g<300&&(c.shift(),c.push(Math.round(A)),d.shift(),d.push(Math.round(T)),m.shift(),m.push(Math.round(E)),g++),300==g&&(n=1,h=x(c),u=x(d),p=x(m),r.fillStyle="Black",r.font="bold 15px Arial",r.fillText(`Roll_Bias : ${h}`,15,125),r.fillText(`Pitch_Bias : ${p}`,15,145),r.fillText(`Yaw_Bias : ${u}`,15,165),h<30&&h>-30?(s="Optimal",r.fillText("Cam Position : Optimal",15,185)):(s="Non Optimal",r.fillText("Cam Position : Non Optimal",15,185))),i=1==n?"Auto Tuning Complete":"Auto Tuning In Progress",A>65||A<-65)f=1;else{if(f=0,n){var H=h+35,V=h-35;w(p,30),w(p,-25);E>0&&E<145?(1,_="HEAD_UP"):E<0&&E>-155?(1,_="HEAD_DOWN"):A>H&&T<45&&T>-45?(1,_="HEAD_RIGHT_TURN"):A<V&&T<45&&T>-45?(1,_="HEAD_LEFT_TURN"):_="----"}r.fillText(_,15,90)}r.fillStyle="Black",r.font="bold 15px Arial",r.fillText(`roll: ${A}`,15,30),r.fillText(`pitch : ${E}`,15,50),r.fillText(`yaw : ${T}`,15,70)}}r.fillStyle="Black",r.font="bold 15px Arial",b.delete(),B.delete()}else f=1;r.restore(),o.restore()}));const k=new Pose({locateFile:t=>`https://cdn.jsdelivr.net/npm/@mediapipe/pose@0.2/${t}`});k.onResults((function(t){if(r.save(),r.clearRect(0,0,e.width,e.height),o.save(),o.clearRect(0,0,a.width,a.height),o.drawImage(t.image,0,0,a.width,a.height),t.poseLandmarks){landmarks=t.poseLandmarks;let e=landmarks[0],l=landmarks[8],n=landmarks[7],i=[M(l,e),M(n,e),M(l,n)],s=L(i[0],i[1],i[2]),c=L(i[1],i[2],i[0]),d=L(i[2],i[0],i[1]);v=c,F=s,C=d,console.log("difference : ",Math.abs(c-s)),console.log("Leftangle :",c),console.log("Rightangle :",s),console.log("Noseangle :",d),r.fillStyle="Black",r.font="bold 15px Arial",f&&Math.abs(c-s)>=30&&(LRB=v>F,_=(RLB=F>v)?"HEAD_RIGHT_TURN_POSE":LRB?"HEAD_LEFT_TURN_POSE":"----",r.fillStyle="Black",r.font="bold 15px Arial",r.fillText(_,15,90)),drawConnectors(o,t.poseLandmarks,POSE_CONNECTIONS,{color(t){let e=a.width*t.from.x,l=a.height*t.from.y,r=a.width*t.to.x,n=a.height*t.to.y,i=clamp(t.from.z+.5,0,1),s=clamp(t.to.z+.5,0,1),c=o.createLinearGradient(e,l,r,n);return c.addColorStop(0,`rgba(0, ${255*i}, ${255*(1-i)}, 1)`),c.addColorStop(1,`rgba(0, ${255*s}, ${255*(1-s)}, 1)`),c}}),drawLandmarks(o,Object.values(POSE_LANDMARKS_LEFT).map((a=>t.poseLandmarks[a])),{color:N,fillColor:"#000000"}),drawLandmarks(o,Object.values(POSE_LANDMARKS_RIGHT).map((a=>t.poseLandmarks[a])),{color:N,fillColor:"#000000"}),drawLandmarks(o,Object.values(POSE_LANDMARKS_NEUTRAL).map((a=>t.poseLandmarks[a])),{color:N,fillColor:"#000000"})}r.restore(),o.restore()}));new Camera(t,{async onFrame(){await k.send({image:t}),await P.send({image:t})},width:480,height:480}).start();
