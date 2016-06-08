<!-- level7 start-->
 <g stroke="black" stroke-width="2" fill="black">

 	 <% for(let i=0,y1=15,y2=42,x=147,x2=162,segment = (data.width-165)/data.timeGap/10; i<data.json.length; i++) {  %>

 	 	<% if(data.json[i].pPosition === 0){ %>
 		 	
    		<circle  cx="<%= x + data.json[i].startTime*segment  %>" cy="<%= y1 %>" r="2" />

 		<% } else{ %>  

   			 <circle  cx="<%= x + data.json[i].startTime*segment  %>" cy="<%= data.json[i].pPosition*42 +7 %>" r="2" />
 		   
 		<% } %>
 	 	
 	<% } %>
 </g>
<!-- level7 end-->