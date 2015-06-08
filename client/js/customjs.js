//SERVER  VARIABLES FOR IMAGES SOURCES


var server="http://biggym2015.altervista.org/server/"
//DATABASE JS
var phps= ["../server/php/getInstructor.php","../server/php/getCourse.php","../server/php/getCoursesOfCategoryX.php","../server/php/getAllCourseByName.php","../server/php/getAllCourseByLevel.php","../server/php/getAllCourseCategories.php","../server/php/getAllInstructor.php","../server/php/getLocation.php"]
function strStartsWith(str, prefix) {
    return str.indexOf(prefix) === 0;
}

                        
function returnTypeOfPage(id){
                if(strStartsWith(id, "I0")){return 0;}
                else if(strStartsWith(id, "C0")){return 1;}
                else if(strStartsWith(id, "CC")){return 2;}
                else if(strStartsWith(id, "ACN0")){return 3;}
                else if(strStartsWith(id, "ACL0")){return 4;}
                else if(strStartsWith(id, "ACC0")){return 5;}
                else if(strStartsWith(id, "AI")){return 6;}
                else if(strStartsWith(id, "L0")){return 7;}
                else return -1;
                              }
function createPage(typeOfPage,data){
    switch (typeOfPage) {
                            case 0:
                                createPageInstructor(data)
                                break;
                            case 1:
                                createPageCourse(data)
                                break;
                            case 2:
                                createPageCoursesOfCategoryX(data);
                                break;
                            case 3:
                                createPageAllCourseByName(data)
                                break;
                            case 4:
                                createPageAllCourseByLevel(data)
                                break;
                            case 5:
                                createPageAllCourseCategories(data)
                                break;
                            case 6:
                                createPageAllInstructor(data)
                                
                                break;
                            case 7:
                                createPageLocation(data)
                                break;
                            default:console.log("ERRORE SCELTA CREAZIONE PAGINA")
}
                                    }


function requestForPage(id){
                            if(id=="HOME")createHome();
                            var type=returnTypeOfPage(id);
                            console.log("tipo: "+type+" con id: "+id);
                            callToServer(id,phps[type]);
                            
                            }




function callToServer(whatToKnow,phpUrl){
    
    //0 Instructor 1 Course 2 Location
  
    console.log(phpUrl)
    console.log(whatToKnow)
    
    $.ajax({
        method: "GET",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: phpUrl, //Relative or absolute path to file.php file
        data: {id:whatToKnow},
        success: function(response) {   console.log(JSON.parse(response))
                                        createPage(phps.indexOf(phpUrl),JSON.parse(response));
            
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



//--------DOCUMENT-READY----------////
    
    $(document).ready(function(){
        
     //Don't overlap content with navbar
     $(document.body).css('padding-top', $('#topnavbar').height() );
        $(window).resize(function(){
            $(document.body).css('padding-top', $('#topnavbar').height()-1 );
        });
            
         
        //bind all button/links     
            bindLink(0);
   
 
    });

//change arrrowDirection of button for show/sidebar
function changeArrowDirection(){
        var curr=$( "#menu-toggle" ).find( "span" )[0].className;
        var right="glyphicon glyphicon-triangle-right";
        var left="glyphicon glyphicon-triangle-left";
        if(curr.localeCompare(right)==0){curr=left;}else{curr=right}
        $( "#menu-toggle" ).find( "span" )[0].setAttribute('class',curr)
        }

 //aggiungere server nel source

function createOrientationInfoSmartphone(){ //sono da passare le variabili come punto inizio-fine gt contesto partenza 
    //e aggungere onClick                event
            //create OI for smartphone
              //dove mettere
    
            /*var div = document.createElement('ul');
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
             li2.appendChild(a2);*/
    var OI = giveOrientationInfos(); 
        var div = document.createElement('div');
    div.setAttribute('class','panel panel-default');
    var el="";
     el+= "<a class='OIprevious"+OI["previous"].id+"' href='#'><span class='glyphicon glyphicon-chevron-left' aria-hidden='true'></span></a>";
    el+= "<a  href='#'><p class='GTINDEX"+OI["context"].id+"'>"+OI["context"].name+"</p></a>";
     el+= "<p>"+(OI["current"]+1)+" of "+OI["tourSize"]+"</p>";
    el+= "<a  class='OInext"+OI["next"].id+"' href='#'><span class='glyphicon glyphicon-chevron-right' aria-hidden='true'></span></a>"; 
    
    div.innerHTML=el;
             document.getElementById('page-content-wrapper').appendChild(div);
            
            }
function createOrientationDesktop(){ //sono da passare le variabili come punto inizio-fine gt contesto partenza e aggungere onClick                                            event
    var OI = giveOrientationInfos(); 
    /*<div class="panel panel-default">
  <div class="panel-heading">Panel Heading</div>
  <div class="panel-body">Panel Content</div>
</div>*/
    var div = document.createElement('div');
    div.setAttribute('class','panel panel-default');
    var el="";
    el+= "<div class='panel-heading'>Orientation info</div> <div class='panel-body'>";
    el+= "<a  href='#'><p class='GTINDEX"+OI["context"].id+"'>"+OI["context"].name+"</p></a>";
    el+= "<p>"+(OI["current"]+1)+" of "+OI["tourSize"]+"</p>";
    el+= "<nav><ul class='pager'><li><a class='OIprevious"+OI["previous"].id+"' href='#'>Previous</a></li>";
    el+= "<li><a  class='OInext"+OI["next"].id+"' href='#'>Next</a></li></ul></nav>";
    el+= "<div>";
  
    

            div.innerHTML=el;
              var e=document.getElementById('sidebar-wrapper');
            console.log("HEll");
               e.insertBefore(div, e.firstChild);
            }
//------FUNCTION FOR CREATE/DELETE PAGE--------------



/*
function createSideBarNav(){
                            var ul=document.createElement("ul");
                            ul.setAttribute('class','sidebar-nav');
                            document.getElementById('sidebar-wrapper').appendChild(ul);
                            }

function createDivA2A(n){
                            var content=document.getElementById('Pages-Container')
                            for(var i=0;i<n;i++){
                                                var div=document.createElement('div')
                                                div.setAttribute('id','page'+i)
                                                content.appendChild(div);
                                            }
                        }
*/
function initializePage(nA2A){
                deleteContent();
                var div=document.createElement('div')
                div.setAttribute('id','wrapper')
                var el="<div id='sidebar-wrapper'><ul class='sidebar-nav'></ul></div>"
                el+="<div id='page-content-wrapper' class='container'>"
                el+="<div class='container-fluid' id='buttonSide'>"
                el+= "<div class='row'>"
                el+= "<div class='col-xs-3 col-sm-3'>"
                el+= "<a href='#menu-toggle' class='btn btn-default hid visible-xs' id='menu-toggle'><span class='glyphicon glyphicon-triangle-right' aria-hidden='true'></span></a></div></div>"
                el+="</div>"
                el+="<div id='Pages-Container'>"
                for(var i=0;i<nA2A;i++)el+="<div id='page"+i+"'></div>"
                el+="</div>";
                
                div.innerHTML=el;
                document.body.appendChild(div);
                        }


  

function deleteContent(){
                               console.log("ELIMINO")
                              $('#wrapper').remove();
                                //$('#sidebar-wrapper').empty();
                                //$('#Pages-Container').empty();
                                
                             }

//---------New Function----------------------------------------


//binda tutto
function bindLink(nA2A,gtInfos){  //
    
    
                    $("#menu-toggle").click(function(e) {
                                                    e.preventDefault();
                                                    $("#wrapper").toggleClass("toggled");
                                                    changeArrowDirection();
                                                        });

                    if (gtInfos){
                            $('[class^="LINK"]').click(function(e){
                                    e.preventDefault();
                                    var str=event.target.className;
                                    var res = str.substr(4, 25);
                                    
                                    startGT(gtInfos["context"], res, gtInfos["tourVector"]);
                            });
                        
                    
                    
                                
                                }
                    
                                      //bind of  LINK to courses or instructors
                    $('[class^="LINK"]').click(function(e){
                                
                                e.preventDefault();
                                var str=event.target.className;
                                console.log("id di quello  selezionato"+str)
                                var res = str.substr(4,8);
                                console.log("ho selezionato un link:"+res)
                                
                                requestForPage(res);
                        });
                    
                    $('[class^="OInext"]').click(function(e){
                        e.preventDefault();
                         var str=event.target.className;
                         var res = str.substr(6, 25);
                         console.log("ho selezionato un link:"+res)
                         GTnext();
                         requestForPage(res);
                         
                    });
                    $('[class^="OIprevious"]').click(function(e){
                        e.preventDefault();
                        var str=event.target.className;
                        var res = str.substr(10, 25);
                        console.log("ho selezionato un link:"+res)
                        GTprevious();
                        requestForPage(res);
                        
                    });
                    $('[class^="GTINDEX"]').click(function(e){
                                    e.preventDefault();
                                    var str=event.target.className;
                                    var res = str.substr(7, 25);
                                  
                                            terminateGT();
                                          
                               requestForPage(res);
                              
                            });
                //bind of Link on Landmark
                    $('[class^="LANDMARK"]').click(function(e){
                                
                                e.preventDefault();
                                var str=event.target.className;
                                console.log("id di quello  selezionato"+str)
                                var res = str.substr(8, 25);
                                console.log("cosa sto passando"+str)
                                clearAllGTStacks();
                                requestForPage(res);
                        });
    
                //bind of link of A2A if present
                if(nA2A>0){
                            //$("#A2A1")[0].onclick=function(){showPageA2A(1,2)}
                 $('[id^="A2A"]').click(function(e){
                                
                                e.preventDefault();
                                var str=event.target.id;
                                console.log("id di quello  selezionato"+str)
                                var res = str.substr(3, 25);
                                console.log("cosa sto passando"+str)
                                
                                showPageA2A(parseInt(res),nA2A)
                                                    });
            
                            }
    
                    
                    
        }






//function for construction page



//addLinkOnSideBar vecchia

    
    
    
    //assoccio ad ogni cosa aggiunta cosa fare al click
    
                              


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
                                       var pg=document.getElementById('Pages-Container');
                                    pg.insertBefore(div, pg.firstChild);
                                       }

/*function addLinkOnSideBarInstructor(Courses){
                            
                            var LC=document.createElement('div');
                            LC.setAttribute('id','linkCollegati')
                            //Title of links
                            var el2="";
                            el2+="<li class='sidebar-brand'>Courses Taught<a href='#'>"
                            for(var i=0;i<Courses.length;i++){
                                
                            el2+="<li><a href='#' class='LINK"+Courses[i].courseID+"'>"+Courses[i].courseTitle+"</a></li>"
                                                                }
                            
                            LC.innerHTML=el2;
                            var temp=document.getElementsByClassName('sidebar-nav')[0];
                            temp.appendChild(LC);
                            
                            
                              }//vale per tutti i tipi di correlati

*/


    
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
                                                el+="<li class='LINK"+Links[i]+"'><a href='#'>"+nameLinks[i]+"</a></li>";
                                                    
                            
                                                            }
                            el+="</div></div></div></div>";
                            cont.innerHTML=el;
                           
                            document.getElementById(idWherePutIt).appendChild(cont);
                            

                            }

//server per fare lista
/*function createWithLinks2(Simg,Links,nameLinks,CapoLinks,isCapoLinkALink,idWherePutIt){
                            var cont=document.createElement('div');
                            cont.setAttribute('class','thumbnail right-caption col-xs-12 col-sm-6 col-md-6 col-ld-6')
                            var el=""
                            el+="<img src='"+Simg+"'width='50%' class='col-xs-12 col-sm-6 col-md-6 col-ld-6'>";
                            el+="<div class='right-caption col-xs-6 col-*-3'>";
                            el+="<h4>"+CapoLinks+"</h4>";
                            
                            for(var i=0;i<Links.length;i++){
                                                el+="<li class='LINK"+Links[i]+"'><a href='#'>"+nameLinks[i]+"</a></li>";
                                                    
                            
                                                            }
                            el+="</div>";
                            cont.innerHTML=el;
                           
                            document.getElementById(idWherePutIt).appendChild(cont);
                            

                            }*/

//-----per pagina all courses---////
function createImgWith1Link(JSON,idWheretoPutIt){

var cont=document.createElement('div');
          cont.setAttribute('class','thumbnail  col-xs-12 col-sm-6 col-md-6 col-ld-6')
                            var el="";
                            el+="<img src='"+server+JSON.coursePic+"'width='100px' class='col-xs-12 col-sm-6 col-md-6 col-ld-6'>";
                            el+="<div class='right-caption col-xs-6 col-*-3'>";
                            el+="<a  href='' ><h4 class='LINK"+JSON.id+"'>"+JSON.title+"</h4></a>";
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
                                            Row="<div  id='riga"+j+"' class='row'></div>"
                                            cont.innerHTML=cont.innerHTML+Row;
                                           }
                                
                                
                                createImgWith1Link(JSON2.courses[i],'riga'+j)
                                
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

/*function createImgWithMoreLink(JSON,idWheretoPutIt){

var cont=document.createElement('div');
          cont.setAttribute('class','thumbnail  col-xs-12 col-sm-6 col-md-6 col-ld-6')
                            var el="";
                            el+="<img src='"+server+JSON.thumbnail+"'s class='col-xs-12 col-sm-6 col-md-6 col-ld-6'>";
                            el+="<div class='right-caption col-xs-6 col-*-3'>";
                            el+="<a  href='' ><h4 class='LINK"+JSON.id+"'>"+JSON.nome+"</h4></a>";
                            
                            //qui ci va id per fare query  di corsi per una categoria
                            el+="<p class='LINK'><a  href='' >See Course of  this category</a></p>";
                            
    
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
*/
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
            img.setAttribute('class','LINK'+JSON.id+'   thumbnail  col-xs-12 col-sm-6 col-md-6 col-ld-6');
                             var aH=document.createElement('a')
                             aH.setAttribute('class','LINK'+JSON.id)
                             aH.appendChild(img);
                             img=aH;
                                }
            else img.setAttribute('class','thumbnail  col-xs-12 col-sm-6 col-md-6 col-ld-6')
            //caption header
            var DIVcaption=document.createElement('div')
            DIVcaption.setAttribute('class','right-caption col-xs-12 col-*-6')
            var textCaption="";
    //se l'header è linkato o no
            if(headerLinked){
                            textCaption+="<a  href=''><h4  class='LINK"+JSON.id+"'>"+name+"</h4></a>";
                            }
            else {
                            textCaption+="<h4>"+name.toUpperCase()+"</h4>";
                 }
    if(caption && headerLinked)    textCaption+="<p >"+description+"</p>"   
    else if(moreLink){
        textCaption+="<li><a  href='' ><p >SEE CATEGORY "+name.toUpperCase()+"</p></a></li>"
        textCaption+="<li ><a  href='' ><p class='LINK"+JSON.id+"'>See Courses of  '"+name+"'</p></a></li>";            
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
                           
                            
                            console.log(array)
                            for(var i=0;i<array.length;i++){
                                
                                
                                if(i%2==0){ j++;
                                            Row="<div  id='riga"+j+"' class='row'></div>"
                                            cont.innerHTML=cont.innerHTML+Row;
                                           }
                                
                                
                            createThumbnailFINAL(array[i],'riga'+j,headerLinked,moreLink,caption);
                                
                                                            }
                          
                            
                            
}



//--------------------------------////
/*
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


*/
//








//semplice titolo+testo
function createTextwithTitle(text,title,idWherePutIt){
                                    
    
                                    var div=document.createElement('div')
                                    var el="";
                                    if(title)el+="<h1 align='center'>"+title+"</h1></br>";
                                    if(text)el+="<p align='center'>"+text+"</p>";
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
    
                            var pages=["Where we are","Contact Us"]
                            console.log("sto creando pagina LOCATION")
                            
                            initializePage(2);
                            
                            createA2ABarDesktop(pages);
                            addA2ALinkOnSideBar(pages,"Location");
                            showPageA2A(0,2);
                            //---CONTENT----
                            createTextwithTitle(JSON.whereweare,"WHERE WE ARE","page0");
                            createTextwithTitle(JSON.howtogethere,"HOW TO GET THERE","page0");
                            createTextwithTitle("","FIND US ON MAP",'page0');
                            createGoogleMaps(JSON.map,"page0");
    
                             var string=JSON.conctactUs;
                             var result=string.split('</p>');
                             console.log(result);
                             createTextwithTitle(result[1],result[0],"page1");
                             bindLink(3)
                           
                             }
function createPageInstructor(JSON){
            initializePage(1)
            
            createOrientationDesktop();
            addLCLinkOnSideBar(JSON.courses,"WHAT HE TEACHES");
            //---CONTENT
            createTextwithTitle("",JSON.name,'page0');//titolo
            createImgRightText(JSON.profilePic,JSON.shortBio,'page0');
            
            createTextwithTitle(JSON.professionalQualification,"",'page0');
            
            if(JSON.awards)createListThumbNailFInal(JSON.awards,'page0',false,false,false)
            addCarousel2(JSON.images,'page0');
         
        
            //createOrientationInfoSmartphone(JSON)
            
    
    
    //----GT INFO
             var gtInfos= new Array();
             var gtContext= new Array();
             gtContext["id"]=JSON.id;
             gtContext["name"]="Courses Tought by:"+JSON.name;
             gtInfos["context"]=gtContext;
             gtInfos["tourVector"]=JSON.courses;
             console.log(gtInfos);
             bindLink(0,gtInfos);
    


}


function createPageCourse(JSON){

                            
                            var pages=["Description","Scheduling","Register"]
                            //initialize+A2ABAR+LINKS+OI
                            initializePage(3); 
                            console.log("sto creando pagina Course")
                            createA2ABarDesktop(pages);
                            addA2ALinkOnSideBar(pages,JSON.title);
                            addLCLinkOnSideBar(JSON.instructors,"Tough by:");
                            createOrientationDesktop();
    
    
    
                            showPageA2A(0,3);
                        //----------CONTENT-------------
                            //in pagina 0 description
                            createTextwithTitle(JSON.description,JSON.title,'page0');
                            createTextwithTitle(JSON.target,"TARGET",'page0');
                            addCarousel2(JSON.images,'page0')
                            
                            //in pagina 1 scheduling
                            createTextwithTitle("","Scheduling of : "+JSON.title+"",'page1');
                            addSchedule(JSON.schedule,'page1')
                            createTextwithTitle("","INSTRUCTORS",'page1');
                            createListThumbNailFInal(JSON.instructors,"page1",true,false,true);
                            
                            
                            //in pagina 2 register
    
                            createTextwithTitle("","Register to: "+JSON.title+"",'page2');
                            createForm(JSON.formFields,'page2')


                            
                            //createOrientationDesktop();//TODO
                             var gtInfos= new Array();
                             var gtContext= new Array();
                             gtContext["id"]=JSON.id;
                             gtContext["name"]="Instructors of :"+JSON.title;
                             gtInfos["context"]=gtContext;
                             gtInfos["tourVector"]=JSON.instructors;
                             console.log(gtInfos);
                             bindLink(3,gtInfos);
}

function createPageAllInstructor(JSON){

                                console.log("Sto facendo pagina course By Name")
                                        initializePage(1)
                                        var str=JSON.paragraph.content;
                                        var res=str.split(/\n/)
                                        console.log(res)
                                        
                                createTextwithTitle(res[1],res[0],"page0");
                                createListThumbNailFInal(JSON.instructors,"page0",true,false,true)
                                        var gtInfos= new Array();
                                        var gtContext= new Array();
                                        gtContext["id"]="AI00";
                                        gtContext["name"]="All Instructors";
                                        gtInfos["context"]=gtContext;
                                        gtInfos["tourVector"]=JSON.instructors;
                                        bindLink(0,gtInfos);

                                        }
function createPageAllCourseByName(JSON){
                                        console.log("Sto facendo pagina course By Name")
                                        initializePage(1);
                                        addLCLinkOnSideBar(LCAllCourseByLevel,"Other sort",true)
                                        createTextwithTitle("",JSON.paragraph.content,"page0");
                                        createListThumbNailFInal(JSON.courses,"page0",true,false,false);
    
                                         var gtInfos= new Array();
                                        var gtContext= new Array();
                                        gtContext["id"]="ACN0";
                                        gtContext["name"]="All Course by Name";
                                        gtInfos["context"]=gtContext;
                                        gtInfos["tourVector"]=JSON.courses;

                                        bindLink(0,gtInfos);
                                        }
function createPageAllCourseByLevel(JSON){
                                        console.log("Sto facendo pagina course By Level")
                                        initializePage(1);
                                        addLCLinkOnSideBar(LCAllCourseByName,"Other sort",true)
                                        createTextwithTitle("",JSON.paragraph.content,"page0");
                                        
    
    
                                        createTextwithTitle("","everyone","page0");
                                        createListImgWith1LinksOnlyOneLevel(JSON,"page0","everyone");
                                        createTextwithTitle("","intermediate","page0");
                                        createListImgWith1LinksOnlyOneLevel(JSON,"page0","intermediate");
                                        createTextwithTitle("","high","page0");
                                        createListImgWith1LinksOnlyOneLevel(JSON,"page0","high");
    
                                        var gtInfos= new Array();
                                        var gtContext= new Array();
                                        gtContext["id"]="ACL0";
                                        gtContext["name"]="All CourseByLEVEL";
                                        gtInfos["context"]=gtContext;
                                        gtInfos["tourVector"]=JSON.courses;

                                        bindLink(0,gtInfos);
                                        }
function createPageAllCourseCategories(JSON){
                                        console.log("Sto facendo pagina All course Category")
                                        initializePage(1);
                                        //cerco di  divide il content
                                        var str=JSON.paragraph.content;
                                        var res=str.split(/\n/)
                           
                            
                            
                                        addLCLinkOnSideBar(LCAllCourseByName,"Other view")
                                        createTextwithTitle(res[1],res[0],"page0");
                                        //createListThumbNailFInal(JSON,"page0",false,true,true)
                                createListThumbNailFInal(JSON.courseCategories,"page0",false,true,true)
                                        var gtInfos= new Array();
                                        var gtContext= new Array();
                                        gtContext["id"]="ACC0";
                                        gtContext["name"]="Courses of All CC";
                                        gtInfos["context"]=gtContext;
                                        gtInfos["tourVector"]=JSON.courseCategories;

                                        bindLink(0,gtInfos);
                                
                                
                                
                                
                                
                                
                                           
                                        }

function createPageCoursesOfCategoryX(JSON){
                  console.log("Sto facendo pagina All course Category")
                  initializePage(1);
                  createTextwithTitle(JSON.Description,"Courses of "+JSON.nome.toUpperCase()+"","page0");
                  createListThumbNailFInal(JSON.courses,"page0",true,false,false);
                  createOrientationDesktop();
    
    
                   var gtInfos= new Array();
                                        var gtContext= new Array();
                                        gtContext["id"]="ACC0";
                                        gtContext["name"]="All courses  of"+JSON.nome;
                                        gtInfos["context"]=gtContext;
                                        gtInfos["tourVector"]=JSON.courses;
                                            
                                        bindLink(0,gtInfos);




                        };


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
                    
                    for(var i=1;i<Schedule.length;i++){
                        el+="<tr>";
                        el+="<td>"+Schedule[i]["DoW"]+"</td>";
                        el+="<td>"+Schedule[i]["init"]+"</td>";
                        el+="<td>"+Schedule[i]["end"]+"</td>";
                        el+="</tr>";
                                    }
                    el+="</tbody></table>"
                  
                    div.innerHTML=el;
    
    
                    //vedo  cosa  stampa
                    
                    document.getElementById(idWherePutIt).appendChild(div);

function strStartsWith(str, prefix) {
    return str.indexOf(prefix) === 0;
}

                        }



