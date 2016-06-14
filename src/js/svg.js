import  {fn} from './svg/create.js';

var json = [
	{rootId:"123",pId:"",spanId:"0",sync:1,name:"OrderServer",timestamp:1464768523000,latency:10},
		{rootId:"123",pId:"",spanId:"1",sync:0,name:"PayServer",timestamp:1464768523002,latency:8},
		{rootId:"123",pId:"",spanId:"2",sync:1,name:"CrmServer",timestamp:1464768523009,latency:5},
		{rootId:"123",pId:"",spanId:"5",sync:1,name:"CrmServer",timestamp:1464768523042,latency:5},
		{rootId:"123",pId:"1",spanId:"10",sync:0,name:"PushServer",timestamp:1464768523003,latency:5},
		{rootId:"123",pId:"10",spanId:"100",sync:1,name:"GoodsServer",timestamp:1464768523003,latency:6},
		{rootId:"123",pId:"1",spanId:"11",sync:0,name:"UcenterServer1",timestamp:1464768523005,latency:6},
		{rootId:"123",pId:"1",spanId:"13",sync:1,name:"UcenterServer2",timestamp:1464768523005,latency:1},
		{rootId:"123",pId:"2",spanId:"14",sync:1,name:"otherServer",timestamp:1464768523010,latency:3},
		{rootId:"123",pId:"0",spanId:"14",sync:1,name:"otherServer",timestamp:1464768523006,latency:4},
]


// deal data
var data = fn.manipulateData(json);
console.log(data)

//create view
fn.create_wrap('mysvg',data);

//add hover events to rectangle
fn.rectangle_hover();