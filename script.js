let main = document.querySelector('#main');
let cursor = document.querySelector('#cursor');

main.addEventListener('mousemove',(event)=>{
    cursor.style.left = event.x + 'px';
    cursor.style.top = event.y + 'px';
})