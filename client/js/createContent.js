function addCarousel2( Images,idWherePutIt){
    var div=document.createElement('div');
    div.setAttribute('id','myCarousel')
    div.setAttribute('data-ride','carousel')
    div.setAttribute('class','carousel slide')

    var el="<ol class='carousel-indicators'>";
    el+="<li class='active' data-target='#myCarousel' data-slide-to='0'></li>"
    for(var i=1;i<Images.length;i++){
        el+="<li class='active' data-target='#myCarousel' data-slide-to='"+i+"'></li>"
    }
    el+="</ol>"
    el+="<div class='carousel-inner' role='listbox'>"
    el+="<div class='item active'><img class='img-responsive center-block' src='"+server+Images[0]+"' alt=''>                                </div>";
    for(var i=1;i<Images.length;i++){
        el+="<div class='item'><img class='img-responsive center-block' src='"+server+Images[i]+"' alt=''></div>";
    }
    el+="</div>";
    el+= "<a class='left carousel-control' href='#myCarousel' role='button' data-slide='prev'><span                                     class='glyphicon glyphicon-chevron-left' aria-hidden='true'></span><span class='sr-                                         only'>Previous</span></a>";
    el+="<a class='right carousel-control' href='#myCarousel' role='button' data-slide='next'><span                                    class='glyphicon glyphicon-chevron-right' aria-hidden='true'></span><span class='sr-                                         only'>Next</span></a></div> "  
    el+="</div>";
    div.innerHTML=el;
    //vedo  cosa  stampa

    document.getElementById(idWherePutIt).appendChild(div);

}
function createImgRightText(Simg,Text,idWherePutIt){
    var div=document.createElement('div')
    div.setAttribute('class','row')
    div.setAttribute('id','content')
    var el="<div class='thumbnail right-caption'><img src='"+server+Simg+"' class='col-xs-12 col-sm-4 col-md-4 col-lg-4'><div                                           class='caption col-xs-12 col-sm-8 col-md-8 col-lg-8'>"+Text+"</div></div>";
    div.innerHTML=el;
    document.getElementById(idWherePutIt).appendChild(div);
}

function createForm(whatToKnow,idWherePutIt){
    var div=document.createElement('form');
    div.setAttribute('class','form-horizontal')
    var el="";
    for(var i=0;i<whatToKnow.length;i++){
        el+="<div class='form-group'><label for='"+whatToKnow[i]+"' class='col-sm-2 control-label'>"+whatToKnow[i]+"</label><div class='col-sm-10'><input type='text' class='form-control' placeholder='Enter the "+whatToKnow[i]+"'></input></div></div>";
    }
    el+=  "<div class='form-group'><div class='col-sm-offset-2 col-sm-10'><button class='btn btn-default' id='sendButton'>Send Form</button></div></div>";   

    div.innerHTML=el;
    document.getElementById(idWherePutIt).appendChild(div);



}

//-----per pagina all courses---////
function createImgWith1Link(JSON,idWheretoPutIt){

    var cont=document.createElement('div');
    cont.setAttribute('class','thumbnail  col-xs-12 col-sm-6 col-md-6 col-ld-6 picAndDesc')
    var el="";
    el+="<div class='col-xs-12 col-sm-6 col-md-6 col-ld-6'> <img src='"+server+JSON.coursePic+"' class='thumbnail '></div>";
    el+="<div class='right-caption col-xs-6 col-*-3'>";
    el+="<a  href='' ><h4 class='LINK"+JSON.id+"'>"+JSON.title+"</h4></a><p>"+JSON.description.substr(0,150)+"...</p>";
    el+="</div>";
    cont.innerHTML=el;

    document.getElementById(idWheretoPutIt).appendChild(cont);

}


function createListImgWith1Links(JSON,idWheretoPutIt){
    //Simg array of images Links,nameLinks matrix of links Capolinks array of  Capolinks
    var JSON2=JSON;
    var cont=document.createElement('div');
    cont.setAttribute('class','container-fluid');
    cont.setAttribute('id','list-thumbnails-links')
    var Row="";
    var j=0;
    document.getElementById(idWheretoPutIt).appendChild(cont);

    if (JSON2.courses){
        Links[i].name = Links[i].title;
        delete Links[i].title;
    }

    for(var i=0;i<JSON2.courses.length;i++){
        if(i%2==0){ j++;
                   Row="<div  id='riga"+j+"' class='row flex'></div>"
                   cont.innerHTML=cont.innerHTML+Row;
                  }
        createImgWith1Link(JSON2.courses[i],'riga'+j)
    }

}
function createListImgWith1LinksOnlyOneLevel(JSON,idWheretoPutIt,level){
    //Simg array of images Links,nameLinks matrix of links Capolinks array of  Capolinks 

    var cont=document.createElement('div');
    cont.setAttribute('class','container-fluid');
    cont.setAttribute('id','list-thumbnails-links')
    var Row="";
    var j=0;
    var l=JSON.courses;
    var JSONF=l.filter(customFilter(level))
    document.getElementById(idWheretoPutIt).appendChild(cont);
    for(var i=0;i<JSONF.length;i++){
        if(i%2==0){ j++;
                   Row="<div  id='riga"+level+j+"' class='row flex'></div>"
                   cont.innerHTML=cont.innerHTML+Row;
                  }
        createImgWith1Link(JSONF[i],'riga'+level+j)
    }


}

function customFilter(level) {
    return function(el) {
        var r = el.level;
        return (level.localeCompare(r)==0);
    }
}


//createListFinalVersione
function createThumbnailFINAL(JSON,idWheretoPutIt,headerLinked,moreLink,caption){
    //normalizzo ogni elemento
    var name;
    var description;
    var pic;
    if (JSON.title){
        name=JSON.title;

    }
    if (JSON.nome){
        name=JSON.nome;

    }
    if (JSON.name){
        name=JSON.name;

    }
    if (JSON.miniText){
        description=JSON.miniText;

    }
    if (JSON.description){
        description=JSON.description.substr(0,150)+"...";
    }
    if(JSON.profilePic) {
        pic=JSON.profilePic;

    }
    else if(JSON.coursePic) {
        pic=JSON.coursePic;

    }
    else if(JSON.thumbnail) {
        pic=JSON.thumbnail;

    }



    var cont=document.createElement('div');
    cont.setAttribute('class','thumbnail  col-xs-12 col-sm-6 col-md-6 col-ld-6')
    var el="";

    var img=document.createElement('img');

    img.setAttribute('src',server+pic)
    if(headerLinked){
        img.setAttribute('class','LINK'+JSON.id+'   thumbnail ');
        var aH=document.createElement('a')
        aH.setAttribute('class',' col-xs-12 col-sm-6 col-md-6 col-ld-6')
        aH.appendChild(img);
        img=aH;
    }
    else img.setAttribute('class','thumbnail ')
    if (JSON.id.indexOf('A0')==0){
        img.setAttribute('class','col-xs-2 col-sm-2 col-md-2 col-lg-2');

    }
    //caption header
    var DIVcaption=document.createElement('div')
    if (JSON.id.indexOf('A0')==0){
        DIVcaption.setAttribute('class','col-xs-10 col-sm-10 col-md-10 col-lg-10');

    }else{
    DIVcaption.setAttribute('class','right-caption col-xs-12 col-sm-6')
    }
    var textCaption="";
    //se l'header è linkato o no
    if(headerLinked){
        textCaption+="<a  href=''><h4  class='LINK"+JSON.id+"'>"+name+"</h4></a>";
    }//<p>"+JSON.description.substr(0,150)+"...</p>
    else {
        textCaption+="<h4>"+name.toUpperCase()+"</h4>";
    }
    if(caption && headerLinked)   {
        cont.className = cont.className + " picAndDesc";
        textCaption+="<p >"+description+"</p>"   }
    else if(moreLink){
        DIVcaption.className = DIVcaption.className + " col-xs-9 col-sm-9 col-md-9 col-lg-9";
        img.className = " col-xs-3 col-sm-3 col-md-3 col-lg-3";
        textCaption+="<li><p >SEE CATEGORY "+name.toUpperCase()+"</p></li>"
        textCaption+="<li ><a  href='' ><p class='LINK"+JSON.id+"'>See Courses of  "+name.toUpperCase()+"</p></a></li>";
    }
    //qui ci va id per fare query  di corsi per una categoria
    DIVcaption.innerHTML=textCaption;
    cont.appendChild(img);
    cont.appendChild(DIVcaption);


    document.getElementById(idWheretoPutIt).appendChild(cont);

}
function createListThumbNailFInal(array,idWheretoPutIt,headerLinked,moreLink,caption){
    //Simg array of images Links,nameLinks matrix of links Capolinks array of  Capolinks 


    var cont=document.createElement('div');
    cont.setAttribute('class','container-fluid');
    cont.setAttribute('id','list-thumbnails-links')
    var Row="";
    var j=0;
    document.getElementById(idWheretoPutIt).appendChild(cont);

    for(var i=0;i<array.length;i++){
        if(i%2==0){ j++;
                   Row="<div  id='riga"+j+"' class='row flex'></div>"
                   cont.innerHTML=cont.innerHTML+Row;
                  }
        createThumbnailFINAL(array[i],'riga'+j,headerLinked,moreLink,caption);
    }
}


//semplice titolo+testo
function createTextwithTitle(text,title,idWherePutIt){

    var div=document.createElement('div')
    var el="";
    if(title)el+="<h1 align='center'>"+title+"</h1></br>";
    if(text)el+="<p align='center'>"+text+"</p>";
    div.innerHTML=el;
    document.getElementById(idWherePutIt).appendChild(div);
}

function addLCLinkOnSideBar(Links2,nameHead,areLandmark){
    var Links= Links2;
    var  correlatedLinks=document.createElement('div');
    correlatedLinks.setAttribute('class','linkCollegati');
    var el="";
    el+="<li class='sidebar-brand'>"+nameHead+"<a href='#'>"

    for(var i=0;i<Links.length;i++){

        if (Links[i].title){
            Links[i].name = Links[i].title;
            delete Links[i].title;
        }
        if(!areLandmark){                      
            el+="<li><a href='#' class='LINK"+Links[i].id+"' '>"+Links[i].name+"</a></li>";

        }else{
            el+="<li><a href='#' class='LANDMARK"+Links[i].id+"' '>"+Links[i].name+"</a></li>";
        }

    }
    correlatedLinks.innerHTML=el;                               
    document.getElementsByClassName('sidebar-nav')[0].appendChild(correlatedLinks);


} 
