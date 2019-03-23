var param;
var paramValue;
var query;
query=window.location.search.substring(1).split("?");
for (i in query){
   param=query[i].split("=");
   paramValue=parseInt(param[1]);
}
var request;
var idb=window.indexedDB || window.mozIndexedDB || window.msIndexedDB || window.webkitIndexedDB;
if(!idb in window){
  alert("Browser is not supported");
}
var open=idb.open("StoreData",1);
console.log("indexedDB is created");
open.onupgradeneeded=function(event){
var request=event.target.result;
var storeDB=request.createObjectStore("Formdata",{keyPath:"id",autoIncrement:true});
}
open.onerror=function(error){
  console.log("Error occured",+error);
}
open.onsuccess=function(event){
  request=event.target.result;
  var transaction=request.transaction("Formdata","readwrite");
  var storeDB=transaction.objectStore("Formdata");
  var info=storeDB.get(paramValue);
  info.onsuccess=function(data){
    console.log(data.target.result);
    display(data.target.result);
  }
}
var left=document.querySelector(".left");
var right=document.querySelector(".right");
var main=document.querySelector(".main");

function display(data){
  var img=document.createElement("img");
  img.src="images/girl.svg";
  left.append(img);
  var h3=document.createElement("h3");
  h3.textContent=data.name;
  var h31=document.createElement("h3");
  h31.textContent=data.role;
  left.append(h3);
  left.append(h31);

main.append(left);
var c=document.createElement("h1");
c.textContent="Career_Objective";
right.append(c);
var c1=document.createElement("h2");
c1.textContent=data.career;
right.append(c1);
var c2=document.createElement("h1");
c2.textContent="Graduation_details";
right.append(c2);
var table=document.createElement("table");
let row='';
table.border='3';
row+="<tr>"+"<th>"+"college"+"</th>"+
"<th>"+"degree"+"</th>"+
"<th>"+"branch"+"</th>"+
"<th>"+"marks"+"</th>"+"</tr>";
for(i in data.education){
row += "<tr>"+"<td>"+data.education[i].college+"</td>"+
"<td>"+data.education[i].degree+"</td>"+
"<td>"+data.education[i].branch+"</td>"+
"<td>"+data.education[i].marks+"</td>"+"</tr>";

}
table.innerHTML=row;
right.append(table);
 var d1=document.createElement("h1");
 d1.textContent="Skills";
 right.append(d1);
 var d2=document.createElement("h2");
 d2.textContent=data.skills;
 right.append(d2);
 main.append(right);
}
