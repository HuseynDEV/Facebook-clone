






let login = document.querySelector('.login')
let parol = document.querySelector(".parol")
let btn = document.querySelector(".button")
// let open=document.querySelector(".open")
// open.style.color="white"

function islem() {


    if (login.value === "Huseyn" && parol.value === "Alizade") {
        btn.innerHTML = `
<button class='open'> <h3> <a class='open' href="index.html" target="_blank">Giris Yap</a> </h3></button>

`

clearInterval(int)
    }
    else {
        btn.innerHTML = `
        <button>
        <h3> Giris Yap </h3>
    </button>
        `


    }
}

let int=setInterval(function () {
    islem()
},1)



