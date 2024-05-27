const inputImage = document.getElementById("profilePicture")

inputImage.addEventListener("change", () => {
    const form = document.getElementById("editProfilePictureForm")
    form.submit()
})