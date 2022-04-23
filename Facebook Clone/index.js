
let down = document.querySelector(".down")
let dropMenu = document.querySelector(".dropMenu")

down.addEventListener("click", function () {


    dropMenu.classList.toggle("active")

})



let leftDown = document.querySelector(".leftDown")
let hide = document.querySelector(".hide")

leftDown.addEventListener("click", function () {


    hide.classList.toggle("active")
    // leftDown.style.transform = "rotate(180deg)"


    if (hide.classList.contains("active")) {
        leftDown.innerHTML = `
        <div class="open"> <i class="fas fa-chevron-up"></i></div>
        Daha az bax
        `
    }
    else {
        leftDown.innerHTML = `
       <div class="open"> <i class="fas fa-chevron-down"></i></div>
       Daha ətraflı bax
       `
    }



})



let story = document.querySelector(".story12")
let cont = document.querySelector(".cont")

let time = document.querySelector(".time")
let deger = 0

// let int = setInterval(function () {

//     if (deger == 380) {
//         clearInterval(int)

//         story.style.display = "none"
//         cont.style.display = "block"

//     }

//     deger++

//     time.style.width = `${deger}px`


// }, 10)



function islem() {
    let int = setInterval(function () {

        if (deger == 380) {
            clearInterval(int)

            story.style.display = "none"
            cont.style.display = "block"
            deger = 0

        }

        deger++

        time.style.width = `${deger}px`


    }, 10)
}






let head = document.querySelectorAll(".middle-head div")
let img2 = document.querySelector(".story12 img")
let im = document.querySelector('.im')


// head.forEach(function (deger) {



//     deger.addEventListener("click", function (oldu) {
//         console.log(oldu.target)
//         story.style.display = "block"
//         cont.style.display = "none"

//         islem()


//        story.innerHTML=`${oldu.target}`



//     })


// })



let images = document.querySelectorAll(".images")

images.forEach(function (deger) {
    deger.addEventListener("click", function (islem12) {

        console.log(islem12.target)
        story.style.display = "block"
        cont.style.display = "none"

        im.innerHTML=islem12.target.toString()

        time.innerHTML =islem12.target.toString()
        console.log(time)
        islem()




    })
})


















// let story = document.querySelector(".story12")
// let cont = document.querySelector(".cont")

// let artim = document.querySelector(".artim")
// let deger = 0

// let set = setInterval(function () {

//     if (deger == 420) {
//         clearInterval(set)

//         story.style.display = "none"
//         cont.style.display="block"


//     }

//     deger++

//     artim.style.width = `${deger}px`


// }, 1)


// let home = document.querySelector('.home i')
// let cont = document.querySelector('.cont')

// home.addEventListener("click", function () {
//     story.style.display = "block"
//     cont.style.display = "none"

// })


