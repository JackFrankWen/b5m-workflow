<!-- level5 start-->
<g id = "retangle">

 <% for(var i=0,y=23,x=147,segment = (data.width-165)/data.timeGap/10; i<data.json.length; i++) {  %>

 	<rect 
 		id = "rect<%= i %>"
	 	x="<%= x + data.json[i].axisTime*segment +15 %>" 
	 	y="<%= y %>" 
	 	width="<% if(segment*data.json[i].latency-15>0){ %><%= segment*data.json[i].latency-15 %><% } else{ %> 5<% } %> " 
	 	height="26" rx="0" ry="0" 
	 	
	 	fill="<%= data.json[i].fill %>"/>
 	
	  
 	<% y= y+42; %>

<% } %>

</g>

<!-- level5 end-->