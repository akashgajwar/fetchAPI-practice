var text = document.querySelector("#inp-txt");
var btnTrans = document.querySelector("#change");
var outtputDiv = document.querySelector("#output");
var url = "https://api.funtranslations.com/translate/dothraki.json"

function getTranslationURL(input){
    return serverURL =url+"?"+"text="+ input
}
function clickHandler(){
    var input = text.value;
   
    fetch(getTranslationURL(input))
    .then (response => response.json())
    .then(json=> {
        console.log(json)
        var translatedText = json.contents.translated;
        outtputDiv.innerText = translatedText;
    })


}







btnTrans.addEventListener("click", clickHandler);