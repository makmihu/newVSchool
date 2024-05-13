const form = document.getElementById("form")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    let goombas = form.goombasCaught.value
    let bobOmbs = form.bobOmbsCaught.value
    let cheepCheeps = form.cheepCheepsCaught.value
    let chainChomps = form.chainChompsCaught.value

    let goombaCoins = +goombas * 5
    let bobOmbCoins = +bobOmbs * 7
    let cheepCheepCoins = +cheepCheeps * 11
    let chainChompCoins = +chainChomps * 30

    console.log(goombaCoins, bobOmbCoins, cheepCheepCoins, chainChompCoins)

    let coins = +goombaCoins + +bobOmbCoins + +cheepCheepCoins + +chainChompCoins
    let total = document.getElementById("total-box")
    total.textContent = coins


})
