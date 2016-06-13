<!-- level4 start-->
<g>

 <% for(var i=0,y1=15,y2=42,x=147,x2=162,segment = (data.width-165)/data.timeGap/10; i<data.json.length; i++) {  %>

 	<% if(data.json[i].pPosition === 0){ %>
	 	<path id="path<%= i %>"
		 	d=" M <%= x + data.json[i].axisTime*segment  %> <%= y1 %> 
		 		L <%= x + data.json[i].axisTime*segment  %> <%= y2*i+36 %> 
		 		A 0 0 0 0 0 <%= x + data.json[i].axisTime*segment  %> <%= y2*i+36 %> 
		 		L <%= x2 + data.json[i].axisTime*segment  %> <%= y2*i+36 %> " 
		 	fill="none"  stroke-width="2" 
		 	<% if(!data.json[i].sync){ %> stroke-dasharray="2,2"  <% } %> 
	 	stroke="green">
	 	</path>
	<% } else{ %>  
	    
	    <path id="path<%= i %>"
		    d=" M <%= x + data.json[i].axisTime*segment  %> <%= data.json[i].pPosition*42 +7 %> 
		 		L <%= x + data.json[i].axisTime*segment  %> <%= y2*i+36 %> 
		 		A 0 0 0 0 0 <%= x + data.json[i].axisTime*segment  %> <%= y2*i+36 %> 
		 		L <%= x2 + data.json[i].axisTime*segment  %> <%= y2*i+36 %> " 
		 	fill="none"  stroke-width="2" 
		 	<% if(!data.json[i].sync){ %> stroke-dasharray="2,2"  <% } %> 
		 	stroke="green">
	 	</path>
	<% } %>
 	
<% } %>

</g>
<!-- level4 end-->
