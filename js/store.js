function addData(){
//Personal details
  var career=document.querySelector("#career").value;
  var name=document.querySelector("#name").value;
  var email=document.querySelector("#email").value;
  var role=document.querySelector("#role").value;
  var phoneno=document.querySelector("#phoneno").value;
//Graduation details
  var college1=document.querySelector("#college1").value;
  var degree1=document.querySelector("#degree1").value;
  var branch1=document.querySelector("#branch1").value;
  var marks1=document.querySelector("#marks1").value;
//Intermediate details
  var college2=document.querySelector("#college2").value;
  var degree2=document.querySelector("#degree2").value;
  var branch2=document.querySelector("#branch2").value;
  var marks2=document.querySelector("#marks2").value;
//SSC details
  var college3=document.querySelector("#college3").value;
  var degree3=document.querySelector("#degree3").value;
  var marks3=document.querySelector("#marks3").value;
  //Technical skills
  var skills=document.querySelector("#skills").value;
//indexedDB creation
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
  storeDB.put({
    career:career,
    name:name,
    email:email,
    role:role,
    phoneno:phoneno,
    education:[{
      college:college1,
      degree:degree1,
      branch:branch1,
      marks:marks1
    },
  {
    college:college2,
    degree:degree2,
    branch:branch2,
    marks:marks2
  },
{
  college:college3,
  degree:degree3,
  branch:"",
  marks:marks3
}],
  skills:skills
  });
  window.open("index.html");
}
}
