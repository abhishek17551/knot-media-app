const CLOUDINARY_UPLOAD_PRESET = "or89l1na";
const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dd1ynbj52/auto/upload"

const uploadMedia = (file) => {
    const formData = new FormData();
    formData.append("file",file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
    formData.append("folder","socialMedia");

    return (
        fetch(CLOUDINARY_URL, { method : 'POST', body : formData})
        .then((res) => res.json())
        .then((data) => data)
        .catch((error) => console.error(error))
    )
}