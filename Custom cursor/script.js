const curser = document.getElementById("cursor")

document.addEventListener("mousemove",(e) => {
     curser.style.left = e.pageX + 'px';
     curser.style.top = e.pageY + 'px';
});