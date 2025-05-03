var btn = document.querySelector("button") 
flag = 0

btn.addEventListener("click",function(){
  if (flag == 0){
    btn.innerHTML = "Remove"
    btn.style.color = "blue"
    flag = 1
  }
  else{
    btn.innerHTML = "Add Friend"
    btn.style.color = "Red"
    flag = 0
  }

})