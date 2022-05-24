let textDemo = document.getElementById('textDemo');

async function  uploadText(fileName){

    let pr = await fetch(fileName);
    textDemo.innerHTML = await pr.text();
};
async function  uploadImg(fileName){
    var myImage = document.getElementById('imgDemo');

    fetch(filename).then(function (response) {
        return response.blob();
    }).then(function (myBlob) {
        var objectURL = URL.createObjectURL(myBlob);
        myImage.src = objectURL;
    });


};
uploadText("demotext.txt");