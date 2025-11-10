window.addEventListener('DOMContentLoaded', function() {
   var btn1 = document.getElementById('btn1');
   var btn2 = document.getElementById('btn2');
   var btn3 = document.getElementById('btn3');
   var area1 = document.getElementById('area1');
   var area2 = document.getElementById('area2');
   var area3 = document.getElementById('area3');
   
   btn1.addEventListener('click', function() {
     area1.classList.add('active');
     area2.classList.remove('active');
     area3.classList.remove('active');
   });
   
   btn2.addEventListener('click', function() {
     area1.classList.remove('active');
     area2.classList.add('active');
     area3.classList.remove('active');
   });
   
   btn3.addEventListener('click', function() {
     area1.classList.remove('active');
     area2.classList.remove('active');
     area3.classList.add('active');
   });
 });

function curso1(){
  window.location.href = "cursoCursoMsm.html";
}