<g>

 <% for(let i=0,y=25,tmp = (data.width-165)/data.timeGap/10; i<data.json.length; i++) {  %>

 	<rect x="147" y="<%= y %>" width="<%= tmp*data.json[i].latency %>" height="26" rx="0" ry="0" fill="#000000"></rect>
	        
	  
 	<% y= y+42; %> 
<% } %>
<g>