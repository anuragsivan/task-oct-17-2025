const imageInput = document.getElementById('inputImage')
const gallery = document.getElementById('gallery')
const message = document.getElementById('message')
const deleteAllButton = document.getElementById('delete-image')
let images = []

function updateGallery() {
    gallery.innerHTML = ''
    if (images.length === 0) {
        message.style.display = 'block'
        return
    } else {
        message.style.display = 'none'
    }
    images.forEach((imageURL, index) => {
        const imageCard = document.createElement('div')
        imageCard.className = 'image-card'

        const img = document.createElement('img')
        img.src = imageURL
        imageCard.appendChild(img)
        const deleteButton = document.createElement('button')
        deleteButton.textContent = 'Delete'
        deleteButton.className = 'delete-btn'
        deleteButton.addEventListener('click', () => {
            images.splice(index, 1)
            updateGallery()
        })
        imageCard.appendChild(deleteButton)

        gallery.appendChild(imageCard)
    })
}
imageInput.addEventListener('change', function() {
    const files = this.files
    for (let i = 0; i < files.length; i++) {
        const url = URL.createObjectURL(files[i])
        images.push(url)
    }
    updateGallery()
})
deleteAllButton.addEventListener('click', function() {
    images = []
    updateGallery()
})
