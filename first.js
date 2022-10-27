
const btn1=document.querySelector(".inc");
const btn2=document.querySelector(".res");
const btn3=document.querySelector(".dec");
const count=document.querySelector(".count");
var no=0;
btn1.addEventListener('click',function(){
  no+=1;
  count.textContent=no;
  document.body.style.background.color=green;

});
btn3.addEventListener('click',function(){
  no-=1;
  count.textContent=no;

});
btn2.addEventListener('click',function(){
  no=0;
  count.textContent=no;

});
