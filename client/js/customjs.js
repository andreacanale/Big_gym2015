//SERVER  VARIABLES FOR IMAGES SOURCES


var server="/SITO/server/"
//DATABASE JS
var phps= ["../server/php/getInstructor.php","../server/php/getCourse.php","../server/php/getLocation.php"]



function callToDB(what){
    var query="";
    var typeOfPage=0;
    if(what[0]=="I"){query=phps[0];typeOfPage=0;}
    else if(what[0]=="C"){query=phps[1];typeOfPage=1;}
    else if(what[0]=="L"){query=phps[2];typeOfPage=2;}
    
    //0 Instructor 1 Course 2 Location
  
    console.log(query)
    console.log(what)
    
    $.ajax({
        method: "GET",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: query, //Relative or absolute path to file.php file
        data: {id:what},
        success: function(response) {
            console.log(JSON.parse(response));
            var result=JSON.parse(response);
            var el="";

                console.log(result);
                
               //choose type of page to make
               if(typeOfPage==0)createPageInstructor(JSON.parse(response))
               else if(typeOfPage==1){}
               if(typeOfPage==2)createPageLocation(JSON.parse(response))
        
        
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });

}


function updateStatusCallback(){
   alert('Status updated!!');
   // Your logic here
}


//------------------------------------
//var for test
   var isLink=false;  //there are link to  show on sidebar for smartphone
    var OIS=false;   //Orientation Info for smartphone
    var OID=false;   //Orientation Info for desktop
    var A2AD=false;  //A2A link for desktop   
    var  A2AS=false; ////A2A link for smartphone  
    var  CL=false;    //Correlated link for  everything
    var isSlider=false;
    var isContent=false;
    var isImgLinks=false;
   //test variables
    var nomeLinkCorrelati=["linkaC1","linkaC2","linkaC3"]
    var nomeLinkA2A=["linka2a1","linka2a1","linka2a1"]
    
    //test variables carousel
    var srcIU="http://www.kaylainthecity.com/wp-content/uploads/gym.jpg";
    var srcI=[srcIU,srcIU,srcIU,srcIU]
    var titleI=["img1","img2","img3","img4"]
    var textI=["text1","text2","text3","text4"]
   //test variable text+img
    var scrITI="http://www.kaylainthecity.com/wp-content/uploads/gym.jpg";
    var header="heading 1"
    var textTest="<p>Short Bio</p></br><p>ofodhososifidsfoihdifhsihfiodhfi</p>"
    var content="Istructor 1 is one of the best fu*****  instructor of the world ,he don't know nothing  jon Snow sto scrivendo cosa a cazzo"
    
    
    //-------------------VARIABILI DEL SITO----------////
    
    $(document).ready(function(){
        
     //for don't  overlap  content with navbar
     $(document.body).css('padding-top', $('#topnavbar').height() );
        $(window).resize(function(){
            $(document.body).css('padding-top', $('#topnavbar').height()-1 );
        });
     
  
     $("#buttonSideBar").click(function(){
            if(!isLink)$("#buttonSideBar").hide();
           })
     
     $.ajaxSetup({ cache: true });
  $.getScript('//connect.facebook.net/en_US/sdk.js', function(){
    FB.init({
      appId: '921666911210062',
      version: 'v2.3' // or v2.0, v2.1, v2.0
    });     
    $('#loginbutton,#feedbutton').removeAttr('disabled');
    FB.getLoginStatus(updateStatusCallback);
  });
     
     
     
     
     
       $("#menu-toggle").click(function(e) {
                    e.preventDefault();
                    
                    $("#wrapper").toggleClass("toggled");
                    
                    
                            changeArrowDirection(arrow)
         
        
                                            });
     
     
     
     
       $("#AttivaOIS").click(function(e){
            e.preventDefault();
        console.log("attivo mappa")
           createGoogleMaps();
           
     
                                        })
       
        $("#addTEXTTITLE").click(function(e){
            e.preventDefault();
                
           createTextwithTitle("dsandiosandlksandlsanakldsnsakd","TITOLO","page-content-wrapper")
     
                                        })
       
       
       
       
        $("#AttivaOID").click(function(e){console.log("boooooooo")
            e.preventDefault();
           if(!OID){createOrientationDesktop();
                    OID=true;}
           else {$('#NavInfoDesktop').remove();
                    OID=false;}
           
     
     })
         $("#AttivaA2AD").click(function(e){
            e.preventDefault();
           if(!A2AD){createA2ABarDesktopLocation();
                    A2AD=true;}
           else {$('#A2ABD').remove();
                    A2AD=false;}
             })
         
         $("#add3A2A").click(function(e){
            e.preventDefault();
                createDivA2A(3)
             })
         
        $("#OPENFromHomepage").click(function(e){
                                          
                            addWrappers();
                                          }) 
         
         
        $("#AttivaA2AS").click(function(e){
                                                e.preventDefault();
                                               if(!(A2AS || CL))createSideBarNav();
                                               
                                               if(!A2AS){addLinkOnSideBar(false,true,nomeLinkA2A,null,nomeLinkA2A,null);
                                                        A2AS=true;
                                                        }
                                               else {$('#linkA2Asmartphone').remove();
                                                        A2AS=false;}
                                                if(!(A2AS || CL))$('.sidebar-nav').remove()

             
                                          })
         $("#AttivaLC").click(function(e){
                                                e.preventDefault();
                                               if(!(A2AS || CL))createSideBarNav();
                                               
                                               
                    if(!CL){addLinkOnSideBar(true,false,null,nomeLinkCorrelati,null,nomeLinkCorrelati);
                                                        CL=true;
                                                        }
                                               else {$('#linkCollegati').remove();
                                                        CL=false;}
                                                if(!(A2AS || CL))$('.sidebar-nav').remove()

             
                                          })
        
     $("#addSlider").click(function(e){
                                               e.preventDefault();
                                               
                                               if(!isSlider){addCarousel2(srcI);
                                                        isSlider=true;
                                                        }
                                               else {$('#myCarousel').remove();
                                                        isSlider=false;}

             
                                          })
     $("#addContent").click(function(e){
                                               e.preventDefault();
                                               
                                               if(!isContent){createImgRightText(srcIU,textTest);
                                                        isContent=true;
                                                        }
                                               else {$('#content').remove();
                                                        isContent=false;}

             
                                          })
     $("#addImgWithLinks").click(function(e){
                                               e.preventDefault();
                                               
                                               if(!isContent){createListImgWithLinks(ImgList,nameLinksList,LinksIdList,CapoList,'page-content-wrapper')
                                                        isImgLinks=true;
                                                        }
                                               else {$('#content').remove();
                                                        isImgLinks=false;}

             
                                          })
     
     $("#I0001").click(function(e){//create Instructor
                                    e.preventDefault();
                                    var  Json=callToDB("I0001");
                                    //console.log(Json);
                                   //createPageInstructor(callToDB("I0001"));

                                  })
     $("#L0001").click(function(e){//create Location
                                    e.preventDefault();
                                    var  Json=callToDB("L0001");
                                    //console.log(Json);
                                   //createPageInstructor(callToDB("I0001"));

                                  })
     
  var ImgList=[srcIU,srcIU,srcIU,srcIU]
var CapoList=["Classe1","Classe2","Classe3","Classe4"]
var LinksIdList=[["link1-1","link1-2"],["link2-1","link2-2"],["link3-1","link3-2"],["link4-1","link4-2"]]
var nameLinksList=[["link1-1","link1-2"],["link2-1","link2-2"],["link3-1","link3-2"],["link4-1","link4-2"]]
     
    
 

 
 
 });









    //funzione gestione freccia
    var arrow=true;
    
    function changeArrowDirection(){
            if(arrow){
                    
                            var div=document.getElementsByClassName('glyphicon glyphicon-triangle-right');
                            div[0].setAttribute('class','glyphicon glyphicon-triangle-left')
                            arrow=false;
                         
                    }
           else{
                            var div=document.getElementsByClassName('glyphicon glyphicon-triangle-left');
                            div[0].setAttribute('class','glyphicon glyphicon-triangle-right')
                            arrow=true;
                    
                           
                    }
    
                                        }

 //aggiungere server nel source

function createOrientationInfoSmartphone(){ //sono da passare le variabili come punto inizio-fine gt contesto partenza 
    //e aggungere onClick                event
            //create OI for smartphone
              //dove mettere
             var div = document.createElement('ul');
             div.setAttribute('class', 'pager pager-fixed-bottom  visible-xs');
             div.setAttribute('id', 'OISmartphone');
             var p1=document.createElement('p');
             p1.innerHTML="prova p1"
             var p2=document.createElement('p');
             p2.innerHTML="prova p2"
             
             //create button previous
             var li1=document.createElement('li');
             li1.setAttribute('id','Previous');   
             var a1=document.createElement('a');
             a1.setAttribute('href','#');
             a1.innerHTML="Previous";
           
    
            //create button next
             var li2=document.createElement('li');
             li2.setAttribute('id','Next');
             var a2=document.createElement('a');
             a2.setAttribute('href','#');
             a2.innerHTML="Next";
             
            //add everythung to page
             div.appendChild(p1);
             div.appendChild(p2);
             div.appendChild(li1);
             li1.appendChild(a1);
             div.appendChild(li2);
             li2.appendChild(a2);
    
             document.getElementById('page-content-wrapper').appendChild(div);
            
            }
function createOrientationDesktop(){ //sono da passare le variabili come punto inizio-fine gt contesto partenza e aggungere onClick                                            event
            //create OI for smartphone
              //dove mettere
             var div = document.createElement('ul');
             div.setAttribute('class', 'pager visible-md visible-sm visible-lg');
             div.setAttribute('id', 'NavInfoDesktop');
             var p1=document.createElement('p');
             p1.innerHTML="prova p1"
             var p2=document.createElement('p');
             p2.innerHTML="prova p2"
             //create button previous
             var li1=document.createElement('li');
             li1.setAttribute('id','Previous');
             var a1=document.createElement('a');
             a1.setAttribute('href','#');
             a1.innerHTML="Previous";
             //create button next
            
             var li2=document.createElement('li');
             li2.setAttribute('id','Next');
             var a2=document.createElement('a');
             a2.setAttribute('href','#');
             a2.innerHTML="Next";
             //add everythung to page
             div.appendChild(p1);
             div.appendChild(p2);
             div.appendChild(li1);
             li1.appendChild(a1);
             div.appendChild(li2);
             li2.appendChild(a2);
              var e=document.getElementById('sidebar-wrapper');
            
               e.insertBefore(div, e.firstChild);
            }
//<li id="Previous"><a href="#">Previous</a></li>
 
var nomeLinkCorrelati=["linkaC1","linkaC2","linkaC3"]
var nomeLinkA2A=["linka2a1","linka2a1","linka2a1"]


//sidebar div to put in Link of side-bar--------------
function createSideBarNav(){
                            var ul=document.createElement("ul");
                            ul.setAttribute('class','sidebar-nav');
                            document.getElementById('sidebar-wrapper').appendChild(ul);
                            }



//---------New Function----------------------------------------


//function for construction page
function addLinkOnSideBar(addLinkC, addLinkA2A, namesLinkA2A, namesLinkC,LinkA2A,LinkC){
                            
                   
    
    
                if(addLinkA2A){       
                            var  A2A=document.createElement('div');
                            A2A.setAttribute('id','linkA2Asmartphone');
                            var el="";
                            el+="<li class='sidebar-brand'>See also(linkA2A)<a href='#'>"
                            for(var i=0;i<namesLinkA2A.length;i++){
                                
                                            el+="<li><a href='#' id='A2A"+i+"'>"+namesLinkA2A[i]+"</a></li>"
                                                                }
                                    //associo a ogni link la funzione di showA2A
                                    
                          
                                      
                                    A2A.innerHTML=el;                               
                                    var temp=document.getElementsByClassName('sidebar-nav')[0];
                                    temp.insertBefore(A2A,temp.lastChild);
                               
                            
                              }

                 if(addLinkC){       
                            var LC=document.createElement('div');
                            LC.setAttribute('id','linkCollegati')
                            //Title of links
                           var el2="";
                            el2+="<li class='sidebar-brand'>See also(linkA2A)<a href='#'>"
                            for(var i=0;i<namesLinkC.length;i++){
                                
                                            el2+="<li><a href='#' id='"+LinkC[i]+"'>"+namesLinkC[i]+"</a></li>"
                                                                }
                            
                            LC.innerHTML=el2;
                            var temp=document.getElementsByClassName('sidebar-nav')[0];
                            temp.appendChild(LC);
                            
                            
                              }
    
    
    
    //assoccio ad ogni cosa aggiunta cosa fare al click
    for(var i=0;i<namesLinkA2A.length;i++){
                                                
                                            console.log($("a[id^=A2A" + i+ "]"))
                                           
        if(i==0) {$("a[id^=A2A" + i+ "]")[0].onclick=function(){showPageA2A(0,namesLinkA2A.length)}}
        if(i==1) {$("a[id^=A2A" + i+ "]")[0].onclick=function(){showPageA2A(1,namesLinkA2A.length)}   }                          if(i==2) {$("a[id^=A2A" + i+ "]")[0].onclick=function(){showPageA2A(2,namesLinkA2A.length)}   }
                                          
                                          }
                                } 
function addLinkOnSideBarLocation(addLinkC, addLinkA2A, namesLinkA2A, namesLinkC,LinkA2A,LinkC){
                            
                   
    
    
                     
                            var  A2A=document.createElement('div');
                            A2A.setAttribute('id','linkA2Asmartphone');
                            var el="";
                            el+="<li class='sidebar-brand'>See also(linkA2A)<a href='#'>"
                            for(var i=0;i<namesLinkA2A.length;i++){
                                
                                            el+="<li><a href='#' id='A2A"+i+"'>"+namesLinkA2A[i]+"</a></li>"
                                                                }
                                    //associo a ogni link la funzione di showA2A
                                    
                          
                                      
                                    A2A.innerHTML=el;                               
                                    var temp=document.getElementsByClassName('sidebar-nav')[0];
                                    temp.insertBefore(A2A,temp.lastChild);
                               
                            
                       

                 
    
    
    
    //assoccio ad ogni cosa aggiunta cosa fare al click
         for(var i=0;i<namesLinkA2A.length;i++){
                                            console.log("prova)    
                                            console.log($("a[id^=A2A" + i+ "]"))
                                           
        if(i==0) {$("a[id^=A2A" + i+ "]")[0].onclick=function(){showPageA2A(0,namesLinkA2A.length)}}
        if(i==1) {$("a[id^=A2A" + i+ "]")[0].onclick=function(){showPageA2A(1,namesLinkA2A.length)}   }                          if(i==2) {$("a[id^=A2A" + i+ "]")[0].onclick=function(){showPageA2A(2,namesLinkA2A.length)}   }
                                          
                                          
         
          }
                                } 
function createA2ABarDesktopLocation(){ var div=document.createElement('div');
                                           div.setAttribute('class','btn-group btn-group-justified hidden-xs');
                                           div.setAttribute('id',"A2ABD");
                                           div.setAttribute('role','group');
                                           div.setAttribute('aria-label','...');
                                        el="<div class='btn-group' role='group'><div class='btn btn-default'id='A2A0'>Location</div></div><div class='btn-group' role='group'><div class='btn btn-default'id='A2A1'>CONTACT US </div></div>";
                                          
                                       
                                      
                                        div.innerHTML=el;
                                     var e=document.getElementById('page-content-wrapper');
                                     var bs=document.getElementById('buttonSide');
                                     e.insertBefore(div, bs.nextSibling);
                                       
                                       
                                       $("#A2A0")[0].onclick=function(){showPageA2A(0,2)}
                                       $("#A2A1")[0].onclick=function(){showPageA2A(1,2)}
                                       console.log($("#A2A0"));





}
function createA2ABarDesktopCourse(){
                                        var div=document.createElement('div');
                                           div.setAttribute('class','btn-group btn-group-justified hidden-xs');
                                           div.setAttribute('id',"A2ABD");
                                           div.setAttribute('role','group');
                                           div.setAttribute('aria-label','...');
                                        el="<div class='btn-group' role='group'><div class='btn btn-default'id='A2A0'>Description</div></div><div class='btn-group' role='group'><div class='btn btn-default'id='A2A1'>Scheduling</div></div><div class='btn-group' role='group'><div class='btn btn-default'id='A2A2'>Register</div></div>";
    
                                        
                                       
                                        div.innerHTML=el;
                                     var e=document.getElementById('page-content-wrapper');
                                     var bs=document.getElementById('buttonSide');
                                     e.insertBefore(div, bs.nextSibling);


     $("A2A0").onclick(function(){showPageA2A(0,2)})
                                       $("#A2A0")[0].onclick(function(){showPageA2A(0,3)})
                                       $("#A2A1")[0].onclick(function(){showPageA2A(1,3)})
                                       $("#A2A2")[0].onclick(function(){showPageA2A(2,3)})
}

function addLinkOnSideBarInstructor(Courses){
                            
                            var LC=document.createElement('div');
                            LC.setAttribute('id','linkCollegati')
                            //Title of links
                            var el2="";
                            el2+="<li class='sidebar-brand'>Courses Taught<a href='#'>"
                            for(var i=0;i<Courses.length;i++){
                                
                            el2+="<li><a href='#' id='"+Courses[i].courseID+"'>"+Courses[i].courseTitle+"</a></li>"
                                                                }
                            
                            LC.innerHTML=el2;
                            var temp=document.getElementsByClassName('sidebar-nav')[0];
                            temp.appendChild(LC);
                            
                            
                              }
    
    
    
    
                          








//function for construction content
//aggiungere opzione A2A passando se è A2a o no(nel caso no mettere in all content-wrapper)
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
                                        var el="<div class='thumbnail right-caption'><img src='"+server+Simg+"' width='50%'><div                                           class='caption'>"+Text+"</div></div>";
                                        div.innerHTML=el;
                                        document.getElementById('page-content-wrapper').appendChild(div);
                                        }




function createWithLinks(Simg,Links,nameLinks,CapoLinks,idWherePutIt){
                            var cont=document.createElement('div');
                            cont.setAttribute('class','container');
                            var el="<div class='cointaner-fluid'><div class='row'>"
                            el+="<div class='thumbnail right-caption col-xs-12 col-*-6'><img src='"+Simg+"'width='50%'>";
                            el+="<div class='right-caption'";
                            el+="<h6>"+CapoLinks+"</h6>";
                            
                            for(var i=0;i<Links.length;i++){
                                                el+="<li id='"+Links[i]+"'><a href='#'>"+nameLinks[i]+"</a></li>";
                                                    
                            
                                                            }
                            el+="</div></div></div></div>";
                            cont.innerHTML=el;
                           
                            document.getElementById(idWherePutIt).appendChild(cont);
                            

                            }

//server per fare lista
function createWithLinks2(Simg,Links,nameLinks,CapoLinks,idWherePutIt){
                            var cont=document.createElement('div');
                            cont.setAttribute('class','thumbnail right-caption col-xs-12 col-sm-6 col-md-6 col-ld-6')
                            var el=""
                            el+="<img src='"+Simg+"'width='50%' class='col-xs-12 col-sm-6 col-md-6 col-ld-6'>";
                            el+="<div class='right-caption col-xs-6 col-*-3'>";
                            el+="<h4>"+CapoLinks+"</h4>";
                            
                            for(var i=0;i<Links.length;i++){
                                                el+="<li id='"+Links[i]+"'><a href='#'>"+nameLinks[i]+"</a></li>";
                                                    
                            
                                                            }
                            el+="</div>";
                            cont.innerHTML=el;
                           
                            document.getElementById(idWherePutIt).appendChild(cont);
                            

                            }

function createListImgWithLinks(Simg,Links,nameLinks,CapoLinks,idWherePutIt){
  //Simg array of images Links,nameLinks matrix of links Capolinks array of  Capolinks 
                            var cont=document.createElement('div');
                            cont.setAttribute('class','container-fluid');
                            cont.setAttribute('id','list-thumbnails-links')
                            var Row="";
                            var j=0;
                            document.getElementById(idWherePutIt).appendChild(cont);
                            for(var i=0;i<Links.length;i++){
                                
                                
                                if(i%2==0){ j++;
                                            Row="<div  id='riga"+j+"' class='row'></div>"
                                            cont.innerHTML=cont.innerHTML+Row;
                                           }
                                
                                
                                createWithLinks2(Simg[i],Links[i],nameLinks[i],CapoLinks[i],'riga'+j)
                                
                                                            }
                          
                            
                            }

function createMap(idwherePutIt){
        



}
//semplice titolo+testo
function createTextwithTitle(text,title,idWherePutIt){
                                    
    
                                    var div=document.createElement('div')
                                    var el="";
                                    el+="<h1 align='center'>"+title+"</h1></br></br><p align='center'>"+text+"</p>";
                                    div.innerHTML=el;
                                    document.getElementById(idWherePutIt).appendChild(div);





                                }

function addTestButton(idWherePutIt){
        var div=document.createElement('div')
        div.setAttribute('class','row')
        div.setAttribute('class','TestButtons')
            var el="";
                     el+="   <div class='col-lg-12'><h1 ><a href='' id='AttivaOIS'>ATTIVA OIS</h1>"
                       el+="<h1><a href='' id='AttivaOID'>ATTIVA OID</h1>"
                         el+="<h1><a href='' id='AttivaA2AD'>ATTIVA A2AD</h1>"
                         el+="<h1><a href='' id='AttivaA2AS'>ATTIVA A2AS</h1>"
                         el+="<h1><a href='' id='AttivaLC'>ATTIVA LC</h1>"
                        el+=" <h1><a href='' id='addSlider'>AGGIUNGI  CAROUSEL</h1>"
                        el+=" <h1><a href='' id='addContent'>AGGIUNGI  Content</h1>"
                        el+=" <h1><a href='' id='addImgWithLinks'>AGGIUNGI  Img con Links</h1>"
                            
                    el+=" </div>"
                el+=" </div>"
   div.innerHTML=el;
   document.getElementById(idWherePutIt).appendChild(div);             
                
}



function addWrappers(){
    
                var home=document.getElementsByClassName('HOME-BYG-GYM')
                
                home[0].remove();
                var div=document.createElement('div')
                div.setAttribute('id','wrapper')
                var el="<div id='sidebar-wrapper'></div><div id='sidebar-content'></div>"
                div.innerHTML=el;
                document.body.appendChild(div);


}
function createDivA2A(n){
                        var content=document.getElementById('page-content-wrapper')
                        console.log(content);
                        var el="";
                        for(var i=0;i<n;i++){
                                                var div=document.createElement('div')
                                                div.setAttribute('id','page'+i)
                                                div.innerHTML="<h1>PAGE"+i+"</h1>";
                            
                                            content.appendChild(div);
                        }

}
function showPageA2A(pageToShow,npages){
    
    
                console.log("voglio vedere "+pageToShow+ " su un totale di "+npages)
                    var Show="page"+pageToShow;
                   
    
                for(var i=0;i<npages;i++){
                        if(i!=pageToShow)$("#page"+i+"").hide();
                        else $("#page"+i+"").show();
                
                }
    
                   
                        
}


//function of create Page
//to add a function that bind every added elements to Jquery

//presuppongono che la pagina sia  stata svuotata
function createPageLocation(JSON){
                            console.log("sto creando pagina LOCATION")
                            createDivA2A(2);
                            showPageA2A(0,2);
                            createTextwithTitle(JSON.whereweare,"WHERE WE ARE","page0");
                            createTextwithTitle(JSON.howtogethere,"HOW TO GET THERE","page0");
                            createGoogleMaps("page0");
                            createTextwithTitle(JSON.howtogethere,"CONTACT US","page1");
                            createA2ABarDesktopLocation();
                            createSideBarNav();
                            addLinkOnSideBar(false,true,nomeLinkA2A,null,nomeLinkA2A,null);






}
function createPageInstructor(JSON){

            console.log(JSON)
            createTextwithTitle("",JSON.name,'page-content-wrapper');//titolo
            createImgRightText(JSON.profilePic,JSON.shortBio,'page-content-wrapper')
            createTextwithTitle(JSON.professionalQualification,"",'page-content-wrapper');
            addCarousel2(JSON.images,'page-content-wrapper');
            createSideBarNav();
            addLinkOnSideBarInstructor(JSON.courses)





}
function createPageAllInstructor(JSON){}
function createPageAllCourseByName(JSON){}
function createPageAllCourseByLevel(JSON){}


//------------------------------------------------------------------

//API FACEBOOK/TWITTER/GOOGLE MAPS


function initialize() {
  var mapOptions = {
    zoom: 8,
    center: new google.maps.LatLng(-34.397, 150.644)
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
 document.getElementById('map-canvas').setAttribute('overflow','visible')   
    
}




function createGoogleMaps(idwhereToPutIt){

             var div=document.createElement('div');
             div.setAttribute('id','map-canvas')
             document.getElementById(idwhereToPutIt).appendChild(div);
             
             initialize() 

                    }





