//SERVER  VARIABLES FOR IMAGES SOURCES


var server="http://biggym2015.altervista.org/server/"
//DATABASE JS
var phps= ["../server/php/getInstructor.php","../server/php/getCourse.php","../server/php/getCoursesOfCategoryX.php","../server/php/getAllCourseByName.php","../server/php/getAllCourseByLevel.php","../server/php/getAllCourseCategories.php","../server/php/getAllInstructor.php","../server/php/getLocation.php"]

function returnTypeOfPage(id){
    if(strStartsWith(id, "I0")){return 0;}
    else if(strStartsWith(id, "C0")){return 1;}
    else if(strStartsWith(id, "CC")){return 2;}
    else if(strStartsWith(id, "ACN0")){return 3;}
    else if(strStartsWith(id, "ACL0")){return 4;}
    else if(strStartsWith(id, "ACC0")){return 5;}
    else if(strStartsWith(id, "AI")){return 6;}
    else if(strStartsWith(id, "L0")){return 7;}
    else if(strStartsWith(id, "H0")){return 8;}
    else return -1;
}


//GETTER & UTILITY-------------------------------------------------------

function strStartsWith(str, prefix) {
    return str.indexOf(prefix) === 0;
}

function isToggled(){ //return if sidebar is toggle or  not

                    if(document.getElementById('wrapper').className.length>0)return true;
                    else return false;

                    }
function isSideBar(){
 var el=document.getElementsByClassName('sidebar-nav').length;
    
    if(el==0)return false;
    else return true;


}

function changeArrowDirection(){
    var curr=$( "#menu-toggle" ).find( "span" )[0].className;
    var right="glyphicon glyphicon-triangle-right";
    var left="glyphicon glyphicon-triangle-left";
    if(curr.localeCompare(right)==0){curr=left;}else{curr=right}
    $( "#menu-toggle" ).find( "span" )[0].setAttribute('class',curr)
 
}
function retrieveID(nameLink,prefix,lengthID){
    var result=nameLink.substr(prefix.length,lengthID);
    return result;
}
function showPageA2A(pageToShow,npages){

    var Show="page"+pageToShow;
    for(var i=0;i<npages;i++){
        if(i!=pageToShow)$("#page"+i+"").hide();
        else $("#page"+i+"").show();
    }

}
function bindLink(nA2A,gtInfos){  //


    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
        changeArrowDirection();
    });

    if (gtInfos){
        $('[class^="LINK"]').not(".binded1").click(function(e){
            e.preventDefault();
            $(this).animate({ 
"-webkit-box-shadow": "0 0 50px red",
"box-shadow": "0 0 50px red",
"font-size": "100%",
"opacity": "0.1", 
"z-index": "1000",
"width": "90%",
"height": "90%"});
            var str=e.target.className;
            var res =retrieveID(str,"LINK",5);
            startGT(gtInfos["context"], res, gtInfos["tourVector"]);
        });
        $('[class^="LINK"]').not(".binded1").addClass('binded1');
    }

    //bind of  LINK to courses or instructors
    $('[class^="LINK"]').not(".binded2").click(function(e){

        e.preventDefault();
        var str=e.target.className;
        var res =retrieveID(str,"LINK",5);
        requestForPage(res);
    });
    $('[class^="LINK"]').not(".binded2").addClass('binded2');
    


    $('[class^="OIprevious"]').not(".binded4").addClass('binded4').click(function(e){
        e.preventDefault();
        var str=e.target.className;
        var res=retrieveID(str,"OIprevious",5);
        GTprevious();
         $(this).closest("#wrapper").find("#page-content-wrapper").animate({opacity: 0.0, "left": '+500px'}, {
    queue:    false,
    complete: function() {
        requestForPage(res);
    }} );
 

    });
    
    $('[class^="OInext"]').not(".binded3").addClass('binded3').click(function(e){
        e.preventDefault();
        var str=e.target.className;
        var res=retrieveID(str,"OInext",5);
        GTnext();
        $(this).closest("#wrapper").find("#page-content-wrapper").animate({opacity: 0.0, "left": '-500px'}, {
        queue:    false,
        complete: function() {
            requestForPage(res);
        }} );

        });

    
    $('[class^="GTINDEX"]').not(".binded5").addClass('binded5').click(function(e){
        e.preventDefault();
        var str=e.target.className;
        var res =retrieveID(str,"GTINDEX",5);
        terminateGT();
        $(this).closest("#wrapper").find("#page-content-wrapper").animate({opacity: 0.0, "top": '500px'}, {
            queue:    false,
            complete: function() {
                requestForPage(res);
            }} );

        });

    //bind of Link on Landmark
    $('[class^="LANDMARK"]').not(".binded6").addClass('binded6').click(function(e){

        e.preventDefault();
        $("#bs-example-navbar-collapse-1").find(".active").removeClass("active");

        $(this).closest( "li" ).parent().closest( "li" ).addClass("active");
        $(this).closest( "li" ).addClass("active");
        

        
       
        var str=e.target.className;
        var res = retrieveID(str,"LANDMARK",5);
        clearAllGTStacks();
        requestForPage(res);
    });

    //bind of link of A2A if present
    if(nA2A>0){
        $('[id^="A2A"]').not(".binded7").addClass('binded7').click(function(e){

            e.preventDefault();
            var str=e.target.id;
            var res =retrieveID(str,"A2A",1);

            showPageA2A(parseInt(res),nA2A);
            $("#wrapper").toggleClass("toggled");
        });


    }


$('#grassFooter').not(".binded8").addClass('binded8').click(function(e){
        
        $(this).animate({ "height": "-=50px"});
        
    });




}
//----------------------------------------------------------------------
//----EVENT HANDLERS-------------------------------------
function swipeHandler(event){
    if(!isSideBar() || $(window).width()>=768 )return 0;//check if swipe do  anything
    var coordStart=event.swipestart.coords;
    var coordEnd=event.swipestop.coords;
    var swipeLeft=false;
    
    if(coordStart[0]>coordEnd[0] && coordStart[0]<(($(window).width()))){//swipeLeft
                                
                                    if(isToggled()){
                                                $("#wrapper").toggleClass("toggled");
                                                changeArrowDirection()
                                                    }
                                }
    else if(coordStart[0]<coordEnd[0] && coordStart[0]<(($(window).width()))/2){//swipeRight
      
            if(!isToggled()){
                            //$('#menu-toggle').animate({
                            //"left":"+=250px"
                            //                            })
                                                $("#wrapper").toggleClass("toggled");
                                                changeArrowDirection()
                                                    }
    
    
        }
    

}

//begin history block
var justPopped;
window.onpopstate = function(event) {
				
                var res=document.location.pathname.split('/')
                
                justPopped = true;
                if (event.state == null) {
                    requestForPage('H0001');
                } else{
                    setStacks(event.state.dato)
                    requestForPage(event.state.ID);
                }
                
			};

//------------------------------------------------------


function createPage(typeOfPage,data){
    deleteContent();
    setTimeout(function() { 
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
    if (typeOfPage>-1 && typeOfPage<8){
            $('#wrapper').fadeIn("400");
            $('#wrapper').scrollTop();
    }
    }, 500);
}


function requestForPage(id){
    
    var type=returnTypeOfPage(id);
    //history.pushState({stacks:getStacks()}, "title", id);

    if(justPopped){justPopped=false}else{
    history.pushState({dato:getStacks(),ID:id},"TITLE",id)}
   
    if(type==8)createPageHome();
    else callToServer(id,phps[type]);

}


function callToServer(whatToKnow,phpUrl){

    $.ajax({
        method: "GET",
        dataType: 'JSONP', //type of data
        //jsonpCallback: 'callback',
        crossDomain: true, //localhost purposes
        url: server+phpUrl, //Relative or absolute path to file.php file
        data: {id:whatToKnow},
        success: function(response) {   

            createPage(phps.indexOf(phpUrl),response);

        },
        error: function(XMLHttpRequest, textStatus, errorThrown) { 

            alert("Status: " + textStatus); alert("Error: " + errorThrown); 
        }
    });

}
function callback(){

}


function updateStatusCallback(){
    alert('Status updated!!');
    // Your logic here
}



//--------DOCUMENT-READY----------////

$(document).ready(function(){
    $("#HOME").fadeIn("2000");
    //Don't overlap content with navbar
    $(document.body).css('padding-top', $('#topnavbar').height() );
    $(window).resize(function(){
        $(document.body).css('padding-top', $('#topnavbar').height()-1 );
    });
    
    //swipet
    $(window).on( "swipe", function(e){swipeHandler( e) ;});
    
    $(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});
    

    //bind all button/links     
    bindLink(0);


});

//-----------------------------------


function createOrientationInfoSmartphone(){ //sono da passare le variabili come punto inizio-fine gt contesto partenza 

    var OI = giveOrientationInfos(); 
    var div = document.createElement('div');
    div.setAttribute('class','panel panel-default panel-body OIsmart visible-xs');
    var el="";
    el+= "<a  href='#'><span class='OIprevious"+OI["previous"].id+" glyphicon glyphicon-chevron-left OIarrow' aria-hidden='true'></span></a>  ";
    el+= "<a  href='#'><p class='GTINDEX"+OI["context"].id+"'>"+OI["context"].name+"</p></a>";
    el+= "<p> "+(OI["current"]+1)+" of "+OI["tourSize"]+"</p>";
    el+= "  <a   href='#'><span class='OInext"+OI["next"].id+" glyphicon glyphicon-chevron-right OIarrow' aria-hidden='true'></span></a>"; 

    div.innerHTML=el;
    var pc=document.getElementById('Pages-Container');
    pc.insertBefore(div,pc.firstChild);;

}
function createOrientationDesktop(){ //sono da passare le variabili come punto inizio-fine gt contesto partenza e aggungere onClick                                            event
    var OI = giveOrientationInfos(); 
    /*<div class="panel panel-default">
  <div class="panel-heading">Panel Heading</div>
  <div class="panel-body">Panel Content</div>
</div>*/
    var div = document.createElement('div');
    div.setAttribute('class','panel panel-default hidden-xs');
    var el="";
    el+= "<div class='panel-heading'>Orientation info</div> <div class='panel-body'>";
    el+= "<a  href='#'><p class='GTINDEX"+OI["context"].id+"'>"+OI["context"].name+"</p></a>";
    el+= "<p>"+(OI["current"]+1)+" of "+OI["tourSize"]+"</p>";
    el+= "<nav><ul class='pager'><li><a class='OIprevious"+OI["previous"].id+"' href='#'>Previous</a></li>";
    el+= "<li><a  class='OInext"+OI["next"].id+"' href='#'>Next</a></li></ul></nav>";
    el+= "<div>";

    div.innerHTML=el;
    var e=document.getElementById('sidebar-wrapper');

    e.insertBefore(div, e.firstChild);
}

function initializePage(nA2A,isSidebar){
 //   deleteContent();
 //   setTimeout(function() { 
    var div=document.createElement('div')
    div.setAttribute('id','wrapper')
    var el="";
    
    
    //sidebar-wrapper
    if(isSidebar)el="<div id='sidebar-wrapper'><ul class='sidebar-nav'></ul></div>"
    el+="<div id='page-content-wrapper' class='container'>"
    
    //button for show sidebar
    if(isSidebar){
    el+="<div class='container-fluid' id='buttonSide'>"
    el+= "<div class='row'>"
    el+= "<div class='col-xs-4 col-sm-4'>"
    el+= "<a href='#menu-toggle' class='btn btn-default hid visible-xs' id='menu-toggle'><span class='glyphicon glyphicon-triangle-right' aria-hidden='true'></span>Link</a></div></div>"
    el+="</div>"
                 }
    el+="<div id='Pages-Container'>"
    for(var i=0;i<nA2A;i++)el+="<div id='page"+i+"'></div>"
    el+="</div>";

    div.innerHTML=el;
   document.getElementById('site-wrapper').appendChild(div);//   insertBefore(div,  document.getElementById('site-wrapper').lastChild);
 //   $('footer').before(div);
   // div.insertBefore('footer');
    if(!isSidebar)$('#wrapper').css("padding-left","0px");
 //   }, 2000);
    
}

function deleteContent(){

    if($('#HOME'))$('#HOME').fadeOut("400",function(){ $( this ).remove();});
    $('#wrapper').fadeOut("400",function(){ $( this ).remove();});
    
    //$('#sidebar-wrapper').empty();
    //$('#Pages-Container').empty();

}












//-------------------------------------------------

function createA2ABarDesktop(Pages){ var div=document.createElement('div');
                                    div.setAttribute('class','btn-group btn-group-justified ');
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

//function FOR COSTRUZIONE CONTENUTO----------------------
//

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





//------------------------------------------------------------------

//----------API FACEBOOK/TWITTER/GOOGLE MAPS---------------------------


function initialize(var1,var2) {
    var myLatlng = new google.maps.LatLng(var1,var2);
    var mapOptions = {
        zoom: 16,
        center: myLatlng
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Big GYM!'
    });
    document.getElementById('map-canvas').setAttribute('overflow','visible');
     google.maps.event.addListenerOnce(map, 'idle', function() {
   google.maps.event.trigger(map, 'resize');
   map.setCenter(myLatlng);
});
   

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


function createFBWall(JSON){
    if(!($('#myFBWall').length)){
           $.ajax({
            method: "GET",
            dataType: 'JSONP', //type of data
            //jsonpCallback: 'callback',
            crossDomain: true, //localhost purposes
            url: server+"php/getFBFeed.php", //Relative or absolute path to file.php file
            data: {id:JSON.FBid},
            success: function(response) {   
                var div=document.createElement('div');
                div.className = div.className + " panel panel-default";
                div.setAttribute('id','myFBWall')
                var el="<div class='panel-heading'>Posts from the facebook page <a href='http://www.facebook.com/"+ JSON.FBid +"'>"+JSON.FBid+"</a></div>";
                el+=" <table class='table'><thead><tr><th class='col-xs-2'>Sender</th><th class='col-xs-10'>Message</th></tr></thead><tbody>";
                for(var i=0;i<response.length;i++){
                    if(response[i]["type"]== "status"){
                        el+="<tr>";
                        el+="<td>"+response[i]["from"]["name"]+"</td>";
                        el+="<td>"+response[i]["message"]+"</td>";
                        el+="</tr>";
                    }
                }
                el+="</tbody></table>"


        div.innerHTML=el;
        //vedo  cosa  stampa


        document.getElementById('page0').appendChild(div);

            },
            error: function(XMLHttpRequest, textStatus, errorThrown) { 

                alert("Status: " + textStatus); alert("Error: " + errorThrown); 
            }
        });
    }
}
function createTWWall(JSON){
    var div=document.createElement('div');
    div.className = div.className + " panel panel-default";
    div.setAttribute('id','myTWWall')
    var el="<div class='panel-heading'>Posts from the twittwer page <a href='http://www.twitter.com/"+ JSON.TWname +"'>"+JSON.TWname+"</a></div><div id='tweettie'></div>";
    div.innerHTML=el;
    document.getElementById('page0').appendChild(div);
    $.getScript("js/twitter.js", function(){
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'css/twitter.css') );
    var config1 = {
      "id": JSON.TWid,
      "domId": 'tweettie',
      "maxTweets": 5,
      "enableLinks": true,
      "showPermalinks": false
    };
    twitterFetcher.fetch(config1);
    
});

    
}





//--------HOME----------------------------------
var home="<div class='intro-header'> <div class='container'>  <div class='row'> <div class='col-lg-12'> <div class='intro-message'> <h1>BIG GYM</h1> <h3>A GYM  TO GET BIG</h3> <hr class='intro-divider'> </div> </div> </div>  </div>   </div> <div class='content-section-a'>  <div class='container'> <div class='row'> <div class='col-lg-5 col-sm-6'> <hr class='section-heading-spacer'> <div class='clearfix'></div> <a href=''><h2 class='LANDMARKAI000 section-heading'>Our Instructors</h2></a><br><h2>Quality fitness trainers</h2> <p class='lead'>Our instructors are specialized in their own field and they will lead you to the TOP. Click and meet them!</p> </div> <div class='col-lg-5 col-lg-offset-2 col-sm-6'> <img class='img-responsive' src='http://maisha.gradstate.com/file/2014/10/jobs-in-kenya-gym-instructor.jpg' alt=''> </div> </div>  </div> <!-- /.container -->  </div> <div class='content-section-b'>  <div class='container'>  <div class='row'> <div class='col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6'> <hr class='section-heading-spacer'> <div class='clearfix'></div> <a href=''><h2 class='LANDMARKL0001 section-heading'>Location</h2></a>  <p class='lead'>Our gym is in the middle of the city but has a very green enviroment. We also have a swimming pool and spa.</p> </div> <div class='col-lg-5 col-sm-pull-6  col-sm-6'> <img class='img-responsive' src='http://www.snapfitness.com/uploads/WelcomeMessage/2013/mar/25/gym%20front.JPG' alt=''> </div> </div>  </div>   </div> <div class='content-section-a'>  <div class='container'>  <div class='row'> <div class='col-lg-5 col-sm-6'> <hr class='section-heading-spacer'> <div class='clearfix'></div> <a href=''><h2 class='LANDMARKACN0 section-heading'>Our courses</h2></a> <p class='lead'>Our instructors teach with passion what they like because they want you to get big.</p> </div> <div class='col-lg-5 col-lg-offset-2 col-sm-6'> <img class='img-responsive' src='http://pullzone1.selvabjj.netdna-cdn.com/wp-content/uploads/2013/10/Montebello-Kickboxing.jpg' alt=''> </div> </div>  </div> </div>  <footer> <div class='container'> <div class='row'> <div class='col-lg-12'>  <p class='copyright text-muted small'>Copyright © Canale-Pagano 2015. All Rights Reserved</p> </div> </div> </div> </footer>";
