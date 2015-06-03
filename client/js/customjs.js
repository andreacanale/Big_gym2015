//SERVER  VARIABLES FOR IMAGES SOURCES


var server="/SITO/Big_gym2015/server"
//DATABASE JS
var phps= ["../server/php/getInstructor.php","../server/php/getCourse.php","../server/php/getLocation.php","../server/php/getAllCourseByName.php","../server/php/getAllCourseByLevel.php","../server/php/getAllCourseCategories.php"]



function callToDB(what){
    var query="";
    var typeOfPage=0;
    if(what[0]=="I"){query=phps[0];typeOfPage=0;}
    else if(what[0]=="C"){query=phps[1];typeOfPage=1;}
    else if(what[0]=="L"){query=phps[2];typeOfPage=2;}
    else if(what=="ACN0"){query=phps[3];typeOfPage=3;}
    else if(what=="ACL0"){query=phps[4];typeOfPage=4;}
    else if(what=="ACC0"){query=phps[5];typeOfPage=5;}
    else typeOfPage=-1;
    console.log(typeOfPage)
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
            
            var result=JSON.parse(response);
            var el="";

                console.log(result);
                
               //choose type of page to make
               if(typeOfPage==0)createPageInstructor(JSON.parse(response))
               else if(typeOfPage==1){createPageCourse(JSON.parse(response))}
               else if(typeOfPage==2){createPageLocation(JSON.parse(response))}
               else if(typeOfPage==3){createPageAllCourseByName(JSON.parse(response))}
               else if(typeOfPage==4){createPageAllCourseByLevel(JSON.parse(response))}
               else if(typeOfPage==5){createPageAllCourseCategories(JSON.parse(response))}
              else console.log("nulla da fare")
        
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
     
  
     $('[id^="LINK"]').click(function(e){
                                
                                e.preventDefault();
                                var str=event.target.id;
                                console.log("id di quello  selezionato"+str)
                                var res = str.substr(4, 25);
                                console.log("ho selezionato un link:"+res)
                                callToDB(res)
                        });
     
     
     
     
       $("#menu-toggle").click(function(e) {
                    e.preventDefault();
                    
                    $("#wrapper").toggleClass("toggled");
                    
                    
                            changeArrowDirection(arrow);
         
        
                                            });
     
     
     
     
       $("#AttivaOIS").click(function(e){
            e.preventDefault();
       
           createGoogleMaps();
           
     
                                        })
       
        $("#addTEXTTITLE").click(function(e){
            e.preventDefault();
                
           createTextwithTitle("dsandiosandlksandlsanakldsnsakd","TITOLO","page-content-wrapper")
     
                                        })
       
       
         
       
       
        $("#AttivaOID").click(function(e){
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
     
     $("#deleteContent").click(function(e){//create Location
                                    
         e.preventDefault();
                                    deleteContent();
                                    
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


//binda i link a chiamate a DB
function bindLink(isA2A,nPA2A){  //bind all link  to callDB
                  
                    $('[id^="LINK"]').click(function(e){
                                
                                e.preventDefault();
                                var str=event.target.id;
                                console.log("id di quello  selezionato"+str)
                                var res = str.substr(4, 25);
                                console.log("ho selezionato un link:"+res)
                                callToDB(res)
                        });
    
                if(isA2A){
                            //$("#A2A1")[0].onclick=function(){showPageA2A(1,2)}
                 $('[id^="A2A"]').click(function(e){
                                
                                e.preventDefault();
                                var str=event.target.id;
                                console.log("id di quello  selezionato"+str)
                                var res = str.substr(3, 25);
                                console.log("cosa sto passando"+str)
                                
                                showPageA2A(parseInt(res),nPA2A)
                        });
    
                
                
                
                
                }
    
                    
                    
        }



//function to delete page

function deleteContent(){//add eliminate ORIENTATION INFO SMARTPHONE
                               console.log("ELIMINO")
                              
                                $('#sidebar-wrapper').empty();
                                $('#Pages-Container').empty();
                                
                             }


//function for construction page



//addLinkOnSideBar vecchia
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
                                                
                                            
                                           
        if(i==0) {$("a[id^=A2A" + i+ "]")[0].onclick=function(){showPageA2A(0,namesLinkA2A.length)}}
        if(i==1) {$("a[id^=A2A" + i+ "]")[0].onclick=function(){showPageA2A(1,namesLinkA2A.length)}   }                          if(i==2) {$("a[id^=A2A" + i+ "]")[0].onclick=function(){showPageA2A(2,namesLinkA2A.length)}   }
                                          
                                          }
                                } 


function addA2ALinkOnSideBar(namesPagesA2A,nameHead){
                            
                            var  A2A=document.createElement('div');
                            A2A.setAttribute('id','linkA2Asmartphone');
                            console.log(namesPagesA2A)
                            var el="";
                            el+="<li class='sidebar-brand'>"+nameHead+"<a href='#'>"
                          
                            for(var i=0;i<namesPagesA2A.length;i++){    
                            el+="<li><a href='#' id='A2A"+i+"' '>"+namesPagesA2A[i]+"</a></li>";}
                            A2A.innerHTML=el;                               
                            document.getElementsByClassName('sidebar-nav')[0].appendChild(A2A);;
                           
                               
      
                                } 


//add link correlated on sidebar pass array of Link=[id,name] and name to put head
//prototipo che vale  per tutti  ma da cambiare query
function addLCLinkOnSideBar(Links,nameHead){
                            
                            var  A2A=document.createElement('div');
                            A2A.setAttribute('id','linkCollegati');
                           
                            var el="";
                            el+="<li class='sidebar-brand'><a href='#'>"+nameHead+"</a>"
                      
                            for(var i=0;i<Links.length;i++){    
                                
                                el+="<li><a href='#' id='LINK"+Links[i].id+"' '>"+Links[i].name+"</a></li>";
                            
                            }
                            A2A.innerHTML=el;                               
                            document.getElementsByClassName('sidebar-nav')[0].appendChild(A2A);;
                           
                               
      
                                } 





                      //var create per testare funzione di prima ..da cambiare query
var LCAllCourseByLevel= [{id:"ACL0", name:"All course by level"}];

var LCAllCourseByName= [{id:"ACN0", name:"All course by Name"}];
//-------------------------------------------------

function createA2ABarDesktop(Pages){ var div=document.createElement('div');
                                           div.setAttribute('class','btn-group btn-group-justified hidden-xs');
                                           div.setAttribute('id',"A2ABD");
                                           div.setAttribute('role','group');
                                           div.setAttribute('aria-label','...');
                                           var el="";
         for(var i=0;i<Pages.length;i++){
 el+="<div class='btn-group' role='group'><div class='btn btn-default'id='A2A"+i+"'>"+Pages[i]+"</div></div>";
                                        }
                                         
                                       el+="</div>";
                                       div.innerHTML=el;
                                       document.getElementById('Pages-Container').appendChild(div);
                                       }

function addLinkOnSideBarInstructor(Courses){
                            
                            var LC=document.createElement('div');
                            LC.setAttribute('id','linkCollegati')
                            //Title of links
                            var el2="";
                            el2+="<li class='sidebar-brand'>Courses Taught<a href='#'>"
                            for(var i=0;i<Courses.length;i++){
                                
                            el2+="<li><a href='#' id='LINK"+Courses[i].courseID+"'>"+Courses[i].courseTitle+"</a></li>"
                                                                }
                            
                            LC.innerHTML=el2;
                            var temp=document.getElementsByClassName('sidebar-nav')[0];
                            temp.appendChild(LC);
                            
                            
                              }//vale per tutti i tipi di correlati




    
    
                          








//function FOR COSTRUZIONE CONTENUTO----------------------
//
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



function createWithLinks(Simg,Links,nameLinks,CapoLinks,idWherePutIt){
                            var cont=document.createElement('div');
                            cont.setAttribute('class','container');
                            var el="<div class='cointaner-fluid'><div class='row'>"
                            el+="<div class='thumbnail right-caption col-xs-12 col-*-6'><img src='"+Simg+"'width='50%'>";
                            el+="<div class='right-caption'";
                            el+="<h6>"+CapoLinks+"</h6>";
                            
                            for(var i=0;i<Links.length;i++){
                                                el+="<li id='LINK"+Links[i]+"'><a href='#'>"+nameLinks[i]+"</a></li>";
                                                    
                            
                                                            }
                            el+="</div></div></div></div>";
                            cont.innerHTML=el;
                           
                            document.getElementById(idWherePutIt).appendChild(cont);
                            

                            }

//server per fare lista
function createWithLinks2(Simg,Links,nameLinks,CapoLinks,isCapoLinkALink,idWherePutIt){
                            var cont=document.createElement('div');
                            cont.setAttribute('class','thumbnail right-caption col-xs-12 col-sm-6 col-md-6 col-ld-6')
                            var el=""
                            el+="<img src='"+Simg+"'width='50%' class='col-xs-12 col-sm-6 col-md-6 col-ld-6'>";
                            el+="<div class='right-caption col-xs-6 col-*-3'>";
                            el+="<h4>"+CapoLinks+"</h4>";
                            
                            for(var i=0;i<Links.length;i++){
                                                el+="<li id='LINK"+Links[i]+"'><a href='#'>"+nameLinks[i]+"</a></li>";
                                                    
                            
                                                            }
                            el+="</div>";
                            cont.innerHTML=el;
                           
                            document.getElementById(idWherePutIt).appendChild(cont);
                            

                            }

//-----per pagina all courses---////
function createImgWith1Link(JSON,idWheretoPutIt){

var cont=document.createElement('div');
          cont.setAttribute('class','thumbnail  col-xs-12 col-sm-6 col-md-6 col-ld-6')
                            var el="";
                            el+="<img src='"+server+JSON.coursePic+"'width='100px' class='col-xs-12 col-sm-6 col-md-6 col-ld-6'>";
                            el+="<div class='right-caption col-xs-6 col-*-3'>";
                            el+="<a  href='' ><h4 id='LINK"+JSON.id+"'>"+JSON.title+"</h4></a>";
                            el+="</div>";
                            cont.innerHTML=el;
                      
                            document.getElementById(idWheretoPutIt).appendChild(cont);
                            


                    }
function createListImgWith1Links(JSON,idWheretoPutIt){
  //Simg array of images Links,nameLinks matrix of links Capolinks array of  Capolinks 
                            var cont=document.createElement('div');
                            cont.setAttribute('class','container-fluid');
                            cont.setAttribute('id','list-thumbnails-links')
                            var Row="";
                            var j=0;
                            document.getElementById(idWheretoPutIt).appendChild(cont);
                            for(var i=0;i<JSON.courses.length;i++){
                                
                                
                                if(i%2==0){ j++;
                                            Row="<div  id='riga"+j+"' class='row'></div>"
                                            cont.innerHTML=cont.innerHTML+Row;
                                           }
                                
                                
                                createImgWith1Link(JSON.courses[i],'riga'+j)
                                
                                                            }
                          
                            
                            }
function createListImgWith1LinksOnlyOneLevel(JSON,idWheretoPutIt,level){
  //Simg array of images Links,nameLinks matrix of links Capolinks array of  Capolinks 
                            console.log("sono stato chiamato")
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
                                            Row="<div  id='riga"+level+j+"' class='row'></div>"
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

//x All Course Category

function createImgWithMoreLink(JSON,idWheretoPutIt){

var cont=document.createElement('div');
          cont.setAttribute('class','thumbnail  col-xs-12 col-sm-6 col-md-6 col-ld-6')
                            var el="";
                            el+="<img src='"+server+JSON.thumbnail+"'s class='col-xs-12 col-sm-6 col-md-6 col-ld-6'>";
                            el+="<div class='right-caption col-xs-6 col-*-3'>";
                            el+="<a  href='' ><h4 id='LINK"+JSON.id+"'>"+JSON.nome+"</h4></a>";
                            
                            //qui ci va id per fare query  di corsi per una categoria
                            el+="<p id='LINK'><a  href='' >See Course of  this category</a></p>";
                            
    
                            el+="</div>";
                            cont.innerHTML=el;
                      
                            document.getElementById(idWheretoPutIt).appendChild(cont);
                            


                    }
function createListImgWithMoreLinks(JSON,idWheretoPutIt){
  //Simg array of images Links,nameLinks matrix of links Capolinks array of  Capolinks 
                            var cont=document.createElement('div');
                            cont.setAttribute('class','container-fluid');
                            cont.setAttribute('id','list-thumbnails-links')
                            var Row="";
                            var j=0;
                            document.getElementById(idWheretoPutIt).appendChild(cont);
                            for(var i=0;i<JSON.courseCategories.length;i++){
                                
                                
                                if(i%2==0){ j++;
                                            Row="<div  id='riga"+j+"' class='row'></div>"
                                            cont.innerHTML=cont.innerHTML+Row;
                                           }
                                
                                
                                createImgWithMoreLink(JSON.courseCategories[i],'riga'+j)
                                
                                                            }
                          
                            
                            }
//--------------------------------////
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



//







function createMap(idwherePutIt){
        



}
//semplice titolo+testo
function createTextwithTitle(text,title,idWherePutIt){
                                    
    
                                    var div=document.createElement('div')
                                    var el="";
                                    el+="<h1 align='center'>"+title+"</h1></br></br><p align='center'>"+text+"                                         </p>";
                                    div.innerHTML=el;
                                    document.getElementById(idWherePutIt).appendChild(div);





                                }



//-----------------------------fine funzioni  crea contenuti-------////
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
                        var content=document.getElementById('Pages-Container')
                       
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
                            deleteContent();
                            var pages=["Where we are","Contact Us"]
                            
                             
                            console.log("sto creando pagina LOCATION")
                            createA2ABarDesktop(pages);
                            createSideBarNav();
                            addA2ALinkOnSideBar(pages,"Location");
                            createDivA2A(2);
                            showPageA2A(0,2);
                            createTextwithTitle(JSON.whereweare,"WHERE WE ARE","page0");
                            createTextwithTitle(JSON.howtogethere,"HOW TO GET THERE","page0");
                            createGoogleMaps(JSON.map,"page0");
    
                             var string=JSON.conctactUs;
                          
                             var   result=string.split('</p>');
                              console.log(result);
                            createTextwithTitle(result[1],result[0],"page1");
                            bindLink(true,2)
                           
                         






                                }
function createPageInstructor(JSON){
            deleteContent();
            console.log(JSON)
            createDivA2A(1);
            createTextwithTitle("",JSON.name,'page0');//titolo
            createImgRightText(JSON.profilePic,JSON.shortBio,'page0');
      
            createTextwithTitle(JSON.professionalQualification,"",'page0');
            addCarousel2(JSON.images,'page0');
            createSideBarNav();
            addLinkOnSideBarInstructor(JSON.courses)

            
            bindLink();




}


function createPageCourse(JSON){

                            deleteContent();
                            var pages=["Description","Scheduling","Register"]
                            
                             
                            console.log("sto creando pagina Course")
                            createA2ABarDesktop(pages);
                            createSideBarNav();
                            addA2ALinkOnSideBar(pages,JSON.title);
                            createDivA2A(3);
                            showPageA2A(0,3);
                        
                            //in pagina 0 description
                            createTextwithTitle(JSON.description,JSON.title,'page0');
                            createTextwithTitle(JSON.target,"TARGET",'page0');
                            addCarousel2(JSON.images,'page0')
                            
                            //in pagina 1 scheduling
                            createTextwithTitle("","Scheduling of : "+JSON.title+"",'page1');
                            //in pagina 2 register
    
                            createTextwithTitle("","Register to: "+JSON.title+"",'page2');
                            createForm(JSON.formFields,'page2')


                            bindLink(true,3);
}

function createPageAllInstructor(JSON){}
function createPageAllCourseByName(JSON){
                                        console.log("Sto facendo pagina course By Name")
                                        deleteContent();
                                        createDivA2A(1);
                                        createSideBarNav();
                                        addLCLinkOnSideBar(LCAllCourseByLevel,"Other sort")
                                        createTextwithTitle("",JSON.paragraph.content,"page0");
    
    
                              
                                        createListImgWith1Links(JSON,"page0");

                                        bindLink(false,0);
                                        }
function createPageAllCourseByLevel(JSON){
                                        console.log("Sto facendo pagina course By Level")
                                        deleteContent();
                                        createDivA2A(1);
                                        createSideBarNav();
                                        addLCLinkOnSideBar(LCAllCourseByName,"Other sort")
                                        createTextwithTitle("",JSON.paragraph.content,"page0");
                                        
    
    
                                        createTextwithTitle("","everyone","page0");
                                        createListImgWith1LinksOnlyOneLevel(JSON,"page0","everyone");
                                        createTextwithTitle("","intermediate","page0");
                                        createListImgWith1LinksOnlyOneLevel(JSON,"page0","intermediate");
                                        createTextwithTitle("","high","page0");
                                        createListImgWith1LinksOnlyOneLevel(JSON,"page0","high");
                                       
    
    
    
    

                                        bindLink(false,0);
                                        }
function createPageAllCourseCategories(JSON){
                                        console.log("Sto facendo pagina All course Category")
                                        deleteContent();
                                        createDivA2A(1);
                                        createSideBarNav();
                                        //cerco di  divide il content
                                        var str=JSON.paragraph.content;
                                        var res=str.split(/\n/)
                           
                            
                            
                                        addLCLinkOnSideBar(LCAllCourseByName,"Other view")
                                        createTextwithTitle(res[1],res[0],"page0");
                                        createListImgWithMoreLinks(JSON,"page0");

                                        bindLink(false,0);
                                        }



//------------------------------------------------------------------

//API FACEBOOK/TWITTER/GOOGLE MAPS


function initialize(var1,var2) {
    var myLatlng = new google.maps.LatLng(var1,var2);
  var mapOptions = {
    zoom: 16,
    center: myLatlng
            };
 
  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
    
var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Big GYM!!!'
  });
 document.getElementById('map-canvas').setAttribute('overflow','visible')   
    
}




function createGoogleMaps(coordinates,idwhereToPutIt){
            
            var cor=coordinates.split(',');
        
             var div=document.createElement('div');
             div.setAttribute('id','map-canvas')
             document.getElementById(idwhereToPutIt).appendChild(div);
             var value = parseFloat("554,20".replace(",", "."));
             initialize(parseFloat(cor[0]),parseFloat(cor[1])) 

                    }

function addSchedule( Schedule,idWherePutIt){
                    var div=document.createElement('div');
                    div.setAttribute('id','mySchedule')
     /*               div.setAttribute('data-ride','carousel')
                    div.setAttribute('class','carousel slide')*/

                    var el=" <table class='table'><thead><tr><th>DoW</th><th>start</th><th>end</th></tr></thead><tbody>";
                    el+="<li class='active' data-target='#myCarousel' data-slide-to='0'></li>"
                    for(var i=1;i<Schedule.length;i++){
                        el+="<tr>";
                        el+="<td>".Schedule[i]["DoW"]."</td>";
                        el+="<td>".Schedule[i]["init"]."</td>";
                        el+="<td>".Schedule[i]["end"]."</td>";
                        el+="</tr>";
                                    }
                    el+="</tbody></table>"
                  
                    div.innerHTML=el;
    
    
                    //vedo  cosa  stampa
                    
                    document.getElementById(idWherePutIt).appendChild(div);



                        }



