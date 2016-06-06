<!-- level4 start-->
<!-- level4 start-->
<g>

 <% for(let i=0,y1=15,y2=42,x=147,x2=162,segment = (data.width-165)/data.timeGap/10; i<data.json.length; i++) {  %>

 	<% if(data.json[i].pPosition === 0){ %>
	 	<path d="
	 	M <%= x + data.json[i].startTime*segment  %> <%= y1 %> 
	 	L <%= x + data.json[i].startTime*segment  %> <%= y2*i+36 %> 
	 	A 0 0 0 0 0 <%= x + data.json[i].startTime*segment  %> <%= y2*i+36 %> 
	 	L <%= x2 + data.json[i].startTime*segment  %> <%= y2*i+36 %> " 
	 		 fill="none"  stroke-width="2" 
	 	<% if(!data.json[i].sync){ %> stroke-dasharray="2,2"  <% } %> 
	 	stroke="green">
	 	</path>
	<% } else{ %>  
	    
	    <path d="
	 	M <%= x + data.json[i].startTime*segment  %> <%= data.json[i].pPosition*42 +7 %> 
	 	L <%= x + data.json[i].startTime*segment  %> <%= y2*i+36 %> 
	 	A 0 0 0 0 0 <%= x + data.json[i].startTime*segment  %> <%= y2*i+36 %> 
	 	L <%= x2 + data.json[i].startTime*segment  %> <%= y2*i+36 %> " 
	 		 fill="none"  stroke-width="2" 
	 	<% if(!data.json[i].sync){ %> stroke-dasharray="2,2"  <% } %> 
	 	stroke="green">
	 	</path>
	<% } %>
 	
<% } %>

</g>
<!-- level4 end-->
<!-- <g stroke="black" stroke-width="2" fill="black">
    <circle id="pointA" cx="100" cy="350" r="1" />
    <circle id="pointB" cx="250" cy="50" r="3" />
    <circle id="pointC" cx="400" cy="350" r="3" />
  </g> -->