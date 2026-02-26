const cursor = document.querySelector('#cursor');
let timer = 0;
    let xprev = 0;
    let yprev = 0;
    let xscale = 1;
    let yscale = 1;

function squeezeMouse(){
    
    window.addEventListener('mousemove',(event)=>{
        clearTimeout(timer);

        xscale = gsap.utils.clamp(0.6,1.4,event.clientX - xprev);
        yscale = gsap.utils.clamp(0.6,1.4,event.clientY - yprev);
        
        xprev = event.clientX;
        yprev = event.clientY;

        cursor.style.transform = `translate(${event.clientX}px,${event.clientY}px) translate(-50%,-50%) scale(${xscale},${yscale})`;
        
        timer = setTimeout(()=>{
            cursor.style.transform = `translate(${event.clientX}px,${event.clientY}px) translate(-50%,-50%) scale(1,1)`;
        },100);
    })
}
squeezeMouse();