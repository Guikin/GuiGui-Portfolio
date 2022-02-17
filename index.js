const faders = document.querySelectorAll(".faders")

const Options= {
    threshold:.45,
}

const sectionTwoObserver = new IntersectionObserver(function(entries,sectionTwoObserver){
    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            return;
        }else{
            entry.target.classList.add("appear")
            sectionTwoObserver.unobserve(entry.target);
        }
    })
},Options);

faders.forEach(fader=>{
    sectionTwoObserver.observe(fader);
});


window.addEventListener("scroll",bgChange)
function bgChange(){
    if(window.scrollY>0){
    document.querySelector("nav").classList.add("bg-dark")
    document.querySelector("nav").classList.remove("background-col")}
    else{
        document.querySelector("nav").classList.remove("bg-dark")
    document.querySelector("nav").classList.add("background-col")
    }
}