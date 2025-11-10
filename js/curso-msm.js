const form = document.querySelector("form"),
fileInput = form.querySelector(".file-input"),
actualFile = document.querySelector(".nome-arquivo")

form.addEventListener("click", ()=>{
    fileInput.click()
});

fileInput.onchange = ({target}) =>{
    let file = target.files[0]
    if(file){
        let fileName = file.name
        actualFile.textContent = fileName
    }
}






// const form = document.querySelector("form"),
// fileInput = form.querySelector(".file-input"),
// progressArea = document.querySelector(".progress-area"),
// uploadedArea = document.querySelector(".uploaded-area")

// form.addEventListener("click", ()=>{
// 	fileInput.click();
// });

// fileInput.onchange = ({target}) =>{
// let file = target.files[0]
// if(file){
// 	let fileName = file.name
// 	console.log(fileName)
// }