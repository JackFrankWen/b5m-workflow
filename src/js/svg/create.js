import div from "../tpl/div.tpl";
import g1 from "../tpl/g1.tpl";
import g2 from "../tpl/g2.tpl";
import g3 from "../tpl/g3.tpl";
import g4 from "../tpl/g4.tpl";
import g5 from "../tpl/g5.tpl";
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
	width:1300,
	height:900,
	timeGap:5,
	unit:'ms',
	json:[
		{rootId:"123",pId:"",spanId:"0",sync:1,name:"OrderServer",timestamp:1464768523000,latency:11,startTime:0,fill:'#5e97f6',position:1,pPosition:0,},
		{rootId:"123",pId:"",spanId:"1",sync:0,name:"PayServer",timestamp:1464768523002,latency:7,startTime:2,fill:'#db4437',position:2,pPosition:0,},
		{rootId:"123",pId:"",spanId:"2",sync:1,name:"CrmServer",timestamp:1464768523009,latency:5,startTime:9,fill:'#f2a600',position:3,pPosition:0,},
		{rootId:"123",pId:"1",spanId:"10",sync:0,name:"PushServer",timestamp:1464768523003,latency:5,startTime:3,fill:'#db4437',position:4,pPosition:2,},
		{rootId:"123",pId:"10",spanId:"100",sync:1,name:"GoodsServer",timestamp:1464768523003,latency:6,startTime:3,fill:'#000000',position:5,pPosition:4,},
		{rootId:"123",pId:"1",spanId:"11",sync:0,name:"UcenterServer",timestamp:1464768523005,latency:1,startTime:5,fill:'#db4437',position:6,pPosition:2,},
	]
};

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
 		//combine g1~g4 together
		let combine = g1(data)+g2(data)+g3(data)+g4(data)+g5(data);
 		$('#'+id).append(div({width:data.width,height:data.height,tpl:combine}));
 	},
 	
 	
 }
