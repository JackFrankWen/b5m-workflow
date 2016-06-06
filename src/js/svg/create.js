import div from "../tpl/div.tpl";
import g1 from "../tpl/g1.tpl";
import g2 from "../tpl/g2.tpl";
import g3 from "../tpl/g3.tpl";
import g4 from "../tpl/g4.tpl";
/*
 *timestap: 0 ~ 100ms gap:5 unit:ms
 *timestap: 0 ~ 500ms
 *timestap: 0 ~ 1s
 *timestap: 0 ~ 5s
 *timestap: 0 ~ 10s
 *
 *
*/
var  data =  {
	qty:6,
	width:1200,
	height:900,
	timeGap:10,
	unit:'ms',
	json:[
		{rootId:"123",pId:"",spanId:"0",sync:1,name:"OrderServer",timestamp:1464768523000,latency:10,startTime:0},
		{rootId:"123",pId:"",spanId:"1",sync:1,name:"PayServer",timestamp:1464768523002,latency:7,startTime:2},
		{rootId:"123",pId:"",spanId:"2",sync:1,name:"CrmServer",timestamp:1464768523009,latency:1,startTime:9},
		{rootId:"123",pId:"1",spanId:"10",sync:0,name:"PushServer",timestamp:1464768523003,latency:5,startTime:3},
		{rootId:"123",pId:"10",spanId:"100",sync:1,name:"GoodsServer",timestamp:1464768523003,latency:6,startTime:3},
		{rootId:"123",pId:"1",spanId:"11",sync:0,name:"UcenterServer",timestamp:1464768523005,latency:10,startTime:5},
	]
};



var combine = g1(data)+g2(data)+g3(data)+g4(data);
/*
 *
 *
 */
 export var fn = {
 	/*
 	 * create basic wrap
 	 * 
 	 * @id div's id
 	 *
 	 */
 	create_wrap:function (id) { 
 		let x = 1904,y = 900;
 		
 		$('#'+id).append(div({width:x,height:y,tpl:combine}));
 	},
 	
 	
 }
