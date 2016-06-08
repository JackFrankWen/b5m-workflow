<div style="position: relative; width: <%=data.width%>px; height: <%=data.height%>px;">

	<div style="position: absolute; left: 0px; top: 0px; width: 100%; height: 100%;">

		<svg width="<%=data.width%>" height="<%=data.height%>">
		
			<defs>
				<filter x="-100%" y="-100%" width="300%" height="300%" id="rablfilter0">
					<feGaussianBlur in="SourceAlpha" stdDeviation="1"></feGaussianBlur>
					<feOffset dx="0" dy="2"></feOffset>
					<feComponentTransfer>
						<feFuncA type="linear" slope="0.2"></feFuncA>
					</feComponentTransfer>
					<feMerge>
						<feMergeNode></feMergeNode>
						<feMergeNode in="SourceGraphic"></feMergeNode>
					</feMerge>
				</filter>
			</defs>

			<%= data.tpl %>

		</svg>

	</div>

</div>