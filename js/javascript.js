//Banner (Skriv efter 2 rader)


var test = document.getElementsByClassName("banner");

//test[0].style.backgroundImage = "url('bilder/banner/bannergif.gif')";
//test[0].style.backgroundRepeat = "no-repeat";

var mobile = (/iphone|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase())); 
if(mobile){
    $("#hbild").hide();
    $("#vbild").hide();
    $("#vänsterbild").hide();
    $("#högerbild").hide();
    $(".mobil-css").width("50vw");
    $(".mobil-css").css({marginLeft : "100px", marginTop : "20px"});
    $("#mittbild").width('65vw');
}

//Teaser (skriv efter 2 rader)
$("dankmemes-index").on("click",function(){
    document.location.replace("/category-sidor/dank.html");
});

document.addEventListener("keydown", piltryck);
const teaserbilder = ["bilder/memes/1.png","bilder/memes/2.png","bilder/memes/3.png","bilder/memes/4.png","bilder/memes/5.png","bilder/memes/6.png","bilder/memes/7.png","bilder/memes/8.png","bilder/memes/9.png","bilder/memes/10.png","bilder/memes/11.png","bilder/memes/12.png","bilder/memes/13.jpg","bilder/memes/14.jpg","bilder/memes/15.jpg","bilder/memes/16.png","bilder/memes/17.png","bilder/memes/18.png"];
var i=0;

$(window).resize(function(){
    if($(window).width() < 1080){
        $("#hbild").hide();
        $("#vbild").hide();
        $("#vänsterbild").hide();
        $("#högerbild").hide();
    }
    else{
        $("#hbild").show();
        $("#vbild").show();
        $("#vänsterbild").show();
        $("#högerbild").show();
    }
})




function piltryck(event){
    if(event.key === "ArrowRight"){
        if(i==16){
            i = 0;
            $("#hbild").attr("src", teaserbilder[i+1])
            $("#mbild").attr("src", teaserbilder[i]);
            $("#vbild").attr("src", teaserbilder[17]);
        }
        
        else{
            i = i+1;
            $("#hbild").attr("src", teaserbilder[2 + i])
            $("#mbild").attr("src", teaserbilder[1 + i]);
            $("#vbild").attr("src", teaserbilder[i]);
        }
    }

    if(event.key === "ArrowLeft"){
        if(i==-1){
            i=17;
            $("#mbild").attr("src", teaserbilder[i]);
            $("#vbild").attr("src", teaserbilder[i-1])
            
        }
        
        else{
            i = i-1;
            $("#hbild").attr("src", teaserbilder[2 + i])
            $("#mbild").attr("src", teaserbilder[1 + i]);
            $("#vbild").attr("src", teaserbilder[i]);
        }
    }
}

var hbtn = document.getElementById("högerknapp");
var vbtn = document.getElementById("vänsterknapp");
hbtn.addEventListener("click",högertryck);
vbtn.addEventListener("click",vänstertryck);

function högertryck(){
    if (i == 16) {
        i = 0;
            $("#hbild").attr("src", teaserbilder[i + 1])
            $("#mbild").attr("src", teaserbilder[i]);
            $("#vbild").attr("src", teaserbilder[17]);
    } else {
        i++;
        document.getElementById("hbild").src = teaserbilder[2 + i];
        document.getElementById("mbild").src = teaserbilder[1 + i];
        document.getElementById("vbild").src = teaserbilder[i];
    }
}


function vänstertryck(){

    if(i==-1){
        i=17;
        $("#mbild").attr("src", teaserbilder[i]);
        $("#vbild").attr("src", teaserbilder[i-1])
        
    }
    
    else{
        i = i-1;
        $("#hbild").attr("src", teaserbilder[2 + i])
        $("#mbild").attr("src", teaserbilder[1 + i]);
        $("#vbild").attr("src", teaserbilder[i]);
    }
}


/*
function autoscroll(){
    console.log(`before: ${i}`)
    if(i < 16){
            document.getElementById("hbild").src = teaserbilder[2 + i];
            document.getElementById("mbild").src = teaserbilder[1 + i];
            document.getElementById("vbild").src = teaserbilder[i];
            
        console.log(i);
    }
    if(i > 16){
        i=0;
    
        
            document.getElementById("hbild").src = teaserbilder[2 + i];
            document.getElementById("mbild").src = teaserbilder[1 + i];
            document.getElementById("vbild").src = teaserbilder[i];
            
    }
    i++;
    
    SetInterval(5000); 
    console.log(`after: ${i}`);
}

function autoscroll(){
    for(i;i=Array.length;i++){

    }
}
*/

//Gallery (skriv efter 2 rader)