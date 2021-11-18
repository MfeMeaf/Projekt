//Banner (Skriv efter 2 rader)


var test = document.getElementsByClassName("banner");

test[0].style.backgroundImage = "url('bilder/MfeChu.png')";


//Teaser (skriv efter 2 rader)
$("dankmemes-index").on("click",function(){
    document.location.replace("/category-sidor/dank.html");
});

document.addEventListener("keydown", piltryck);
const teaserbilder = ["bilder/memes/1.png","bilder/memes/2.png","bilder/memes/3.png","bilder/memes/4.png","bilder/memes/5.png","bilder/memes/6.png","bilder/memes/7.png","bilder/memes/8.png","bilder/memes/9.png","bilder/memes/10.png","bilder/memes/11.png","bilder/memes/12.png","bilder/memes/13.png","bilder/memes/14.png","bilder/memes/15.png","bilder/memes/16.png","bilder/memes/17.png","bilder/memes/18.png"];
var i=0;

function piltryck(event){
    console.log(i);
    if(event.key === "ArrowRight"){
        if(i==15){
            console.log("return");
            return;
        }
        
        else{
            i = i+1;
            document.getElementById("hbild").src = teaserbilder[2 + i];
            document.getElementById("mbild").src = teaserbilder[1 + i];
            document.getElementById("vbild").src = teaserbilder[i];
        }
    }

    if(event.key === "ArrowLeft"){
        if(i<=0){
            return;
        }
        
        else{
            i = i-1;
            document.getElementById("hbild").src = teaserbilder[2 + i];
            document.getElementById("mbild").src = teaserbilder[1 + i];
            document.getElementById("vbild").src = teaserbilder[i];
        }
    }
}


teaserbilder[0]= new Image();
teaserbilder[0].src = "url('bilder/memes/abgs.png')"


//Gallery (skriv efter 2 rader)


