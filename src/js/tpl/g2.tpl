<!-- level2 start-->
<g>

	 <% for(var i=0,y=15; i<data.qty; i++) {  %>
	        
	      <% if (i%2 === 0 ) { %>
	      	<rect x="0" y="<%= y %>" 
		      	  width="<%=data.width%>" 
		      	  height="42" 
		      	  fill="#ffffff">
	      	</rect>
	     <% } else {%>
	      	<rect x="0" y="<%= y %>" 
	      		  width="<%=data.width%>" height="42" 
	      		  fill="#f5f5f5">
	      	</rect>
	      <% }%>
	        <% y= y+42; %>   
	<% } %>

	<rect x="135" y="15" width="<%=data.width-135 %>" height="<%=data.qty *42%>" fill="none" stroke="#e0e0e0" stroke-width="2"></rect>

	 <% for(var i=0,y=15; i<=data.qty; i++) {  %>
	        
	      <line x1="0" x2="<%=data.width%>" 
	      		y1="<%= y %>" y2="<%= y %>" 
	      		fill="none" stroke="#e0e0e0" stroke-width="2">
	      </line>
	      
	       <% y= y+42; %>
	<% } %>

	 <% for(var i=0,x=140,segment = (data.width-165)/10; i<11; i++) {  %>
	        
	     <text class="scale" 
	     x="<%= x %>" y="10" fill="black">
	     		<%= data.timeGap*i %><%= data.unit %>
	     </text>
	      <% x= x + segment; %>
	<% } %>
	<text  class="notice" x="10" y="<%= 33+42*data.qty %>" fill="black">时间轴原点时间: <%= data.startTime %></text>
	<text  class="notice" x="340" y="<%= 33+42*data.qty %>" fill="black">同步</text>
	<text  class="notice" x="420" y="<%= 33+42*data.qty %>" fill="black">异步</text>
	<line x1="370" x2="410" y1="<%= 28+42*data.qty %>" y2="<%= 28+42*data.qty %>" fill="none" stroke="green" stroke-width="2"></line>
	<line x1="450" x2="500" y1="<%= 28+42*data.qty %>" y2="<%= 28+42*data.qty %>" fill="none"  stroke="green" stroke-dasharray="5,5" stroke-width="2"></line>
</g>
<!-- level2 end -->