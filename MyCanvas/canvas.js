//function createCanvas(){
var side=100;
var tbody=document.getElementById("whole-body");
for(var i=0;i<side;i++){
	var row=document.createElement("tr");
	for(var j=0;j<side;j++){
		var cell=document.createElement("td");
		cell.onmousemove=processmove;
		row.appendChild(cell);
	}
	tbody.appendChild(row);
}

function processmove(e){
	if(!e){
		var e=window.event;
	}
	if(e.ctrlKey){
		this.style.backgroundColor="blue";
	}
	if(e.shiftKey){
		this.style.backgroundColor="red";
	}

}
//}
