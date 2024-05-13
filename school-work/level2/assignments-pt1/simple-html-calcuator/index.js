const addForm = document.addForm
const subtractForm = document.subtractForm
const multiplyForm = document.multiplyForm


addForm.addEventListener("submit", (e) => {
    e.preventDefault()

    let a1 = addForm.add1.value
    let a2 = addForm.add2.value
    
    let answer = +a1 + +a2
    const addAnswer = document.getElementById("add-answer")
    addAnswer.textContent = answer

    console.log(`add: ${a1} + ${a2} = ${answer}`)
})

subtractForm.addEventListener("submit", (e) => {
    e.preventDefault()

    let a1 = subtractForm.sub1.value
    let a2 = subtractForm.sub2.value
    
    let answer = +a1 - +a2
    const subAnswer = document.getElementById("subtract-answer")
    subAnswer.textContent = answer

    console.log(`subtract: ${a1} - ${a2} = ${answer}`)
})

multiplyForm.addEventListener("submit", (e) => {
    e.preventDefault()

    let a1 = multiplyForm.mul1.value
    let a2 = multiplyForm.mul2.value
    
    let answer = +a1 * +a2
    const mulAnswer = document.getElementById("multiply-answer")
    mulAnswer.textContent = answer

    console.log(`multiply: ${a1} x ${a2} = ${answer}`)
})