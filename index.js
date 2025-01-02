

const mykeyValues=window.location.search
const urlParams=new URLSearchParams(mykeyValues)
const nam=urlParams.get('nam')
if(nam){document.querySelector('.from').innerHTML=`Wishes from <b class='nam'>${nam}</b>`}
const nam2=urlParams.get('nam2')
document.querySelector('.nam2').innerHTML=nam2
//const url="https://satyahappynewyearwish2025.netlify.app/"
const url="http://127.0.0.1:5500/index.html"
function wish(){
    if(document.getElementById('nam').value.trim()===''){
      alert2('Enter your name',document.getElementById('nam'))
    }
    else if(document.getElementById('nam2').value.trim()===''){
      alert2("Enter your friend's name",document.getElementById('nam2'))
    }
    else{
      navigator.share({
        title:"Wishes",
        url:url+"?nam="+document.getElementById('nam').value+"&nam2="+document.getElementById('nam2').value
      })
    }
}

function alert2(a,e){
   e.placeholder=a;
   e.style.boxShadow='0px 0px 30px red'
   e.style.border='1px solid red'
}
function getNormal(e){
   if(e.value.trim().length>0){
   e.style.boxShadow='0px 0px 0px red'
   e.style.border='0px solid red'
    e.placeholder=''
   }
}