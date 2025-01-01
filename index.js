

const mykeyValues=window.location.search
const urlParams=new URLSearchParams(mykeyValues)
const nam=urlParams.get('nam')
document.querySelector('.nam').innerHTML=nam
const url="https://satyahappynewyearwish2025.netlify.app/"
function share(){
    navigator.share({
      title:"Wishes",
      url:url+"?nam="+document.getElementById('nam').value
    })
}