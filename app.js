let hidden = document.querySelectorAll(".hidden")
let shaurya = document.querySelectorAll(".shaurya")
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        }else{
            entry.target.classList.remove("show")
        }
    })
})
const observer2 = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show2")
        }else{
            entry.target.classList.remove("show2")
        }
    })
})
hidden.forEach((el)=>{
    observer.observe(el)
})
shaurya.forEach((el)=>{
    observer2.observe(el)
})