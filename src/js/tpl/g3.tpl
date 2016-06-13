<!-- level3 start -->
<g text-anchor="end">
	 <% for(var i=0,x=130,y=41; i<data.json.length; i++) {  %>
	  
		<text  id="name<%= i %>" class="text" x="<%= x %>" y="<%= y %>"  fill="#5e97f6" ><%= data.json[i].name %></text>
	   <% y= y+42; %> 

	<% } %>
</g>
<!-- level3 end -->