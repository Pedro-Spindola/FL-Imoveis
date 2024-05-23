const imgs = document.getElementById("container-img");
const img = document.querySelectorAll("#container-img img");

let idx = 0;

function carrosel(){
    idx++;
    if (window.innerWidth <= 999 && window.innerWidth > 768) {
        if(idx > img.length - 2){
            idx = 0;
        }
        imgs.style.transform = `translateX(${-idx * (100 / 2)}vw)`;
    } else if (window.innerWidth <= 768) {
        if(idx > img.length - 1){
            idx = 0;
        }
        imgs.style.transform = `translateX(${-idx * 100}vw)`;
    }else{
        if(idx > img.length - 3){
            idx = 0;
        }

        imgs.style.transform = `translateX(${-idx * (100 / 3)}vw)`;
    }
    
    window.addEventListener('resize', carrosel);
}

setInterval(carrosel, 2500);