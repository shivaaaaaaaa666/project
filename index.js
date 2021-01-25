var tasks = [];
var employee = [];
var department=[];
var mail=[];
var doj=[];


// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
var rowCount = 1;

function addTasks() {
  var a=document.getElementById("taskname").value;
  var b=document.getElementById("taskemployee").value;
  var c=document.getElementById("taskdepartment").value;
  var d=document.getElementById("taskmail").value;
  var e=document.getElementById("taskdoj").value

if(a.length===0 || b.length===0 || c.length===0 || d.length===0 || e.length===0)
  try{
    if(a=="") throw "name";
    if(b=="") throw "employeeId";
    if(c=="") throw "department";
    if(d=="") throw "Email";
    if(e=="") throw "Doj(date of joining)";
  }
  catch(err){if(a==""){
  document.getElementById("n1").innerHTML="Please give your " + err;}
  if(b==""){
  document.getElementById("n2").innerHTML="please mention your " + "employeeId";}
  if(c==""){
  document.getElementById("n3").innerHTML="please mention your " + "department";}
  if(d==""){
  document.getElementById("n4").innerHTML="please provide your " + "Email";}
  if(e==""){
  document.getElementById("n5").innerHTML="please mention your  " + "Doj";}
}
else{
  var temp = 'style .fa fa-trash';
  tasks.push(document.getElementById("taskname").value);
  employee.push(document.getElementById("taskemployee").value);
  department.push(document.getElementById("taskdepartment").value);
  mail.push(document.getElementById("taskmail").value);
  doj.push(document.getElementById("taskdoj").value);
  var table = document.getElementById("tasksTable");
  var row = table.insertRow(rowCount);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  cell1.innerHTML = tasks[rowCount - 1];
  cell2.innerHTML = employee[rowCount - 1];
  cell3.innerHTML = department[rowCount-1];
  cell4.innerHTML = mail[rowCount-1];
  cell5.innerHTML = doj[rowCount-1];
  cell6.innerHTML = '<td class="fa fa-trash"></td>';
  rowCount++;
  modal.style.display = "none";
}




}

function clearFields(){
  document.getElementById("n1").innerHTML="";
  document.getElementById("n2").innerHTML="";
  document.getElementById("n3").innerHTML="";
  document.getElementById("n4").innerHTML="";
  document.getElementById("n5").innerHTML="";
  document.getElementById("taskname").value="";
  document.getElementById("taskemployee").value="";
  document.getElementById("taskdepartment").value="";
  document.getElementById("taskmail").value="";
  document.getElementById("taskdoj").value="";

}

function abcd(){
var elmts=["front-end" , "Back-end","Deep-learning","ML"," python"];
var select = document.getElementById("taskdepartment");
for (var i = 0; i < elmts.length; i++) {
                var optn = elmts[i];
                var el = document.createElement("option");
                el.textContent = optn;
                el.value = optn;
                select.appendChild(el); }


}
//couldnt add cross button ...:(
// function productDelete(row)
// {
//     var i=row.parentNode.parentNode.rowIndex;
//     document.getElementById('').deleteRow(i);
// }
