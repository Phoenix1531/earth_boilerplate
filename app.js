//body
var bodyvar =  document.body 

//four buttons
var climatevar = document.getElementById("climate")
console.log("climatevar:" ,climatevar);

var consumptionvar = document.getElementById("consumption")
console.log("consumptionvar:" ,consumptionvar);

var resourcesvar = document.getElementById("resources")
console.log("resourcesvar:" ,resourcesvar);

var peopleVar = document.getElementById("people")
console.log("peopleVar:" ,peopleVar);

//save text
var saveText = document.getElementById("save")

//frme
var frame = document.getElementById("frame")

//variable declaration is done

consumptionvar.onclick=()=>{
    //background 
    bodyvar.style.background= "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/food-wastage-bg%5B1%5D.png')"   
    bodyvar.style.backgroundSize= "100% 100%"

//frame
frame.scr="https://www.theworldcounts.com/embed/challenges/107?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"

//saveText
saveText.innerHTML="Do your bit! Shop only what you need,eat only what you need and always save the leftovers."

//buttons
consumptionvar.style.background="#27AE60"

resourcesvar.style.background="transparent"
peopleVar.style.background="transparent"
climatevar.style.background="transparent"
}

climatevar.onclick=()=>{
    bodyvar.style.background= "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/climate-change-bg%5B1%5D.png')"   
    bodyvar.style.backgroundSize= "100% 100%"

frame.scr="https://www.theworldcounts.com/embed/challenges/23?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"

saveText.innerHTML="Do your bit! Save trees, use renewable energy sources and prefer to travel green"

climatevar.style.background="blue"

consumptionvar.style.background="transparent"
resourcesvar.style.background="transparent"
peopleVar.style.background="transparent"
}

resourcesvar.onclick=()=>{

    bodyvar.style.background= "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/natural-resources-bg%5B1%5D.png')"
    bodyvar.style.backgroundSize="100% 100%"

    frame.src="https://www.theworldcounts.com/embed/challenges/5?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"

    saveText.innerhtml="Do your bit! Avoid all things plastic. Believe in Reduce, Reuse and Recycle."

    resourcesvar.style.background="red"

    consumptionvar.style.background="transparent"
    peopleVar.style.background="transparent"
    climatevar.style.background="transparent"
}

peopleVar.onclick=()=>{
    bodyvar.style.background="url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/poverty-bg%5B1%5D.png')"
    bodyvar.style.backgroundSize="100% 100%"

    frame.src="https://www.theworldcounts.com/embed/challenges/2?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"

    saveText.innerHTML=" Do your bit! Never waste  food.Rather offer it to people or animals who are in need."

    peopleVar.style.background="orange"

    climatevar.style.background="transparent"
    consumptionvar.style.background="transparent"
    resourcesvar.style.background="transparent"
}

