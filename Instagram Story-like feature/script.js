var arr = [
  {dp:"",story:""}
  {dp:"",story:""}
  {dp:"",story:""}
]
var storiyan = document.querySelector("#storiyan")

var clutter = "";

arr.forEach(function(elem,idx){
  clutter += `<div class="story">
  <img id="${idx}" src="${elem.dp} alt="">
  </div>`;
});

storiyan.innerHTML = clutter;

storiyan.addEventListener("click",function(dets){
  document.querySelector("#full-screen").style.display = "block"
  document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

  setTimeout(function(){
    document.querySelector("#full-screen").style.display = "none"
  },3000);
});

