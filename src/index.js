let dogList = document.querySelector(".dogs-list")

let dogSection = document.querySelector(".main__dog-section")

function displayDogList(dog) {
    let dogLi = document.createElement("li")
    dogLi.className = "dogs-list__button"
    dogLi.textContent = dog.name 

    

    dogLi.addEventListener("click", function() {
        displayDog(dog)
    })

    dogList.append(dogLi) 
}

function displayDog(dog) {
    dogSection.textContent =""
    

let h2El = document.createElement("h2")
h2El.textContent = dog.name

 let dogimgEL = document.createElement("img")
 dogimgEL.src = dog.image
 dogimgEL.alt = dog.name

 let divEl = document.createElement("div")
 divEl.className = "main__dog-section__desc"

 let h3El = document.createElement("h3")
 h3El.textContent = "Bio:"
 
 let pEl = document.createElement("p")
 pEl.textContent = dog.bio
 
 let pEl2 = document.createElement("p")
 let emEl = document.createElement("em")
  emEl.textContent = "Is naughty? "
 if (!dog.isGoodDog) {
    pEl2.append(emEl, 'Yes!')
 }
 else{
  pEl2.append(emEl, 'No!')}
 
 let btnEl = document.createElement("button")
 btnEl.className = "main__dog-section__btn"
 if (dog.isGoodDog) {
 btnEl.textContent = "Good Dog"}
 else {btnEl.textContent = "Bad Dog"}

 btnEl.addEventListener("click", function() {
    dog.isGoodDog = !dog.isGoodDog
    displayDog(dog)
 })

 divEl.append(h3El, pEl, pEl2)

 dogSection.append(h2El, dogimgEL, divEl, btnEl)

}


function addDog(dog) {
 
 let addDogh2 = document.createElement("h2")
 addDogh2.textContent = "Add a new Dog?"
 
 let addDogForm = document.createElement("form")
 addDogForm.className = "form"

 let labelEl1 = document.createElement("label")
 labelEl1.textContent = "Dog's name"

 let inputEl1 = document.createElement("input")
 inputEl1.type = "text"
 inputEl1.id = "name"
 inputEl1.name = "name"
 
 let labelEl2 = document.createElement("label")
 labelEl2.textContent = "Dog's picture"

 let inputEl2 = document.createElement("input")
 inputEl2.type = "url"
 inputEl2.id = "image"
 inputEl2.name = "image"

 let labelEl3 = document.createElement("label")
 labelEl3.textContent = "Dog's bio"
 
 let textareaEl = document.createElement("textarea")
 textareaEl.rows = "5"
 textareaEl.id = "bio"
 textareaEl.name = "bio"
 
 let inputEl3 = document.createElement("input")
 inputEl3.type = "submit"
 inputEl3.id = "submit"
 inputEl3.name = "submit"
 inputEl3.value = "Let's add a dog!"
 inputEl3.className = "form__button"

 addDogForm.append(labelEl1, inputEl1, labelEl2, inputEl2, labelEl3, textareaEl, inputEl3)

 addDog.append(addDogh2, addDogForm)
 

}

for (let dog of data) {
    displayDogList(dog)
 }

 