
var hrac=1;
var body1=0;
var body2=0;
var poradi1=-1;
var poradi2=-1;
var otoc;
var pole = [ [1,1,2,2,], [3,3,4,4,], [5,5,6,6], [7,7,8,8] ];
zamichat();

function zamichat() {

    var i, temp;
    for(i=0;i<30;i++)
        {
            var r1=Math.floor(Math.random()*4);
            var c1=Math.floor(Math.random()*4);
            var r2=Math.floor(Math.random()*4);
            var c2=Math.floor(Math.random()*4);
            temp = pole[r1][c1];
            pole[r1][c1] = pole[r2][c2];
            pole[r2][c2] = temp;
        }
    console.log("zamichat finished! "+pole);

}

function Obrazek(value) {
    if(poradi2!=-1)
        return;
    var line=Math.floor(value/10);
    var tol=value%10;

    if(pole[line][tol]==0)
        return;

    console.log("Kliknul jsi: line: "+line+" tol: "+tol);
    if(poradi1==line*10+tol)
        return;

    if(pole[line][tol]>0){
        var source="img/img"+pole[line][tol]+".jpg";
        var imageId="img"+line+tol;
        document.getElementById(imageId).src=source;
    }

    if(poradi1==-1)
        poradi1=line*10+tol;
    else {
        poradi2=line*10+tol;
        VybraneKarty(0);
    }
}

$(document).ready(function(){
    $("#player1").css("color", "white");
    $("#player2").css("opacity", "1");
});


function VybraneKarty() {
    var line1=Math.floor(poradi1/10);
    var tol1=poradi1%10;
    var line2=Math.floor(poradi2/10);
    var tol2=poradi2%10;

    if(pole[line1][tol1]==pole[line2][tol2]) {

        if(hrac==1) {
            body1++;
        }
        else {
            body2++;
        }
        otoc=poradi1;
        setTimeout(Karta,600);
        updateBody();
    }
    else {

        setTimeout(Zpet,600);
        hrac=hrac==1?2:1;
        if(hrac==1){
            $("#player1").css("color", "white");
            $("#player1").css("opacity", "1");
            $("#player2").css("color", "aliceblue");
            $("#player2").css("opacity", "0.3");
        }
        else{
            $("#player2").css("color", "white");
            $("#player2").css("opacity", "1");
            $("#player1").css("color", "aliceblue");
            $("#player1").css("opacity", "0.3");
        }

    }
}

function Zpet() {
    var row1=Math.floor(poradi1/10);
    var col1=poradi1%10;
    var row2=Math.floor(poradi2/10);
    var col2=poradi2%10;
    var imageId="img"+row1+col1;
    document.getElementById(imageId).src="img/pexeso_logo.png";
    var imageId="img"+row2+col2;
    document.getElementById(imageId).src="img/pexeso_logo.png";
    poradi1=-1;
    poradi2=-1;
}

function Karta() {
    var table;
    if(hrac==1){
        table=document.getElementById('tableP1');
    }
    else {
        table=document.getElementById('tableP2');
    }

    var line1=Math.floor(poradi1/10);
    var col1=poradi1%10;
    var line2=Math.floor(poradi2/10);
    var col2=poradi2%10;
    var imageSource="img/img"+pole[line1][col1]+".jpg";

    var imageId="img"+line1+col1;
    document.getElementById(imageId).src="img/blank.jpg";
    $(imageId).css("opacity", "1");

    var ObrazekID="img"+line2+col2;
    document.getElementById(ObrazekID).src="img/blank.jpg";
    $(ObrazekID).css("opacity", "1");
    var row = table.insertRow(0);


    pole[line1][col1]=0;
    pole[line2][col2]=0;

    poradi1=-1;
    poradi2=-1;
}

function updateBody() {
    if(hrac==1) {
        document.getElementById('body1').innerHTML="Score : "+body1;
    }
    else{
        document.getElementById('body2').innerHTML="Score : "+body2;
    }
}

$( "document" ).ready(function() {
	if (typeof(Storage) !== "undefined")
	{
        var value;
	}
        
    $("#btn_menu").hide();
    
    $("#btn").click(function(){
        $("#btn_menu").slideToggle(800); 
    });
    
    $("#btnCancel").click(function(){
        $("#btn_menu").slideToggle(800);
    });
    
    $("#btnRestart").click(function(){
        location.reload();
    });
});


























