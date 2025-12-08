const homeView = document.createElement('div')
homeView.style.display = 'none'

const homeTitle = document.createElement('h1')
homeTitle.textContent = 'MyPet'
homeTitle.className = 'font-bold text-xl'
homeView.appendChild(homeTitle)

const homeSubtitle = document.createElement('h2')
homeSubtitle.textContent = 'Welcome Home!'
homeView.appendChild(homeSubtitle)

const homeAddPetButton = document.createElement('button')
homeAddPetButton.textContent = '+ Pet'
homeAddPetButton.type = 'button'
homeAddPetButton.className = 'bg-black text-white px-1'
homeView.appendChild(homeAddPetButton)

homeAddPetButton.addEventListener('click', function (event) {
    event.preventDefault()

    homeView.style.display = 'none'
    addPetView.style.display = ''
})

document.body.appendChild(homeView)