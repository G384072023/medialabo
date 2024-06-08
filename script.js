document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.card').forEach(function (card) {
        card.addEventListener('click', function () {
            toggleCard(card);
        });
    });
});

function toggleCard(card) {
    if (card.classList.contains('active')) {
        card.classList.remove('active');
    } else {
        document.querySelectorAll('.card').forEach(function (c) {
        c.classList.remove('active');
        });
        card.classList.add('active');
    }
}
const background=document.querySelector(".background")
document.addEventListener('scroll',()=>{
    const scrollY=window.scrollY
    if(scrollY!==0){
        background.style.backgroundPosition=`calc(50% + ${scrollY}px) calc(50% + ${scrollY}px)`
    }else{
        background.style.backgroundPosition=''
    }
})
window.addEventListener("scroll", function() {
    var shark = document.getElementById("shark");
    var contentHeight = document.getElementById("content").offsetHeight;
    if (window.innerHeight + window.scrollY >= contentHeight) {
        shark.style.display = "block";
    } else {
        shark.style.display = "none";
    }
});

let clickCount = 0;
    const texts = [
        "こんにちは:)","何をしているの?","触れないでください!" 
    ];

    document.getElementById("smallshark").addEventListener("mouseenter", function() {
        this.style.animation = "shake 0.5s infinite alternate";
    });

    document.getElementById("smallshark").addEventListener("mouseleave", function() {
        this.style.animation = ""; 
    });

    document.getElementById("smallshark").addEventListener("click", function() {
        if (clickCount < texts.length) {
            document.getElementById("text").innerText = texts[clickCount];
            clickCount++;
        } else {
            var shark = document.getElementById("shark");
            shark.style.display = "block"; 
            shark.style.animation = "slideFromBottom 1s forwards";
            setTimeout(function() {
                shark.style.animation = "slideFromTop 1s forwards";
                setTimeout(function() {
                    shark.style.display = "none"; 
                    shark.style.animation = ""; 
                }, 1000);
            }, 1000);
            clickCount = 0; 
        }
    });