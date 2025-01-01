

const mykeyValues=window.location.search
const urlParams=new URLSearchParams(mykeyValues)
const nam=urlParams.get('nam')
document.querySelector('.nam').innerHTML=nam
const url="http://localhost:7071/"
function share(){
    navigator.share({
      title:"Wishes",
      url:url+"?nam="+document.getElementById('nam').value
    })
}