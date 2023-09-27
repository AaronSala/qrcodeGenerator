


let imgBox =document.getElementById("imgbox")
let qrImage =document.getElementById("qrImage")
let qrText =document.getElementById("qrText")
let qrBtn =document.getElementById("qrBtn")
let links =document.querySelector("#linker")
let links2 = document.get



function generateQr(){
qrImage.src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+qrText.value;

 //imgBox.classList.add("show-img");
 qrBtn.style.background="green";
 links.innerHTML= qrText.value;
}


    
