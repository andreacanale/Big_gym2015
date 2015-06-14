
var LCAllCourseByLevel= [{id:"ACL0", name:"All course by level"}];

var LCAllCourseByName= [{id:"ACN0", name:"All course by Name"}];

function createPageLocation(JSON){

    var pages=["Where we are","Contact Us"]


    initializePage(2,false);

    createA2ABarDesktop(pages);
    //addA2ALinkOnSideBar(pages,"Location");
    showPageA2A(0,2);
    //---CONTENT----
    createTextwithTitle(JSON.whereweare,"WHERE WE ARE","page0");
    createTextwithTitle(JSON.howtogethere,"HOW TO GET THERE","page0");
    createTextwithTitle("","FIND US ON MAP",'page0');
    createGoogleMaps(JSON.map,"page0");

    var string=JSON.conctactUs;
    var result=string.split('</p>');

    createTextwithTitle(result[1],result[0],"page1");
    //createGrassFooter();
    bindLink(3)

}
function createPageInstructor(JSON){
    initializePage(1,true)

    createOrientationDesktop();
    createOrientationInfoSmartphone();
    addLCLinkOnSideBar(JSON.courses,"WHAT HE TEACHES");
    //---CONTENT
    createTextwithTitle("",JSON.name,'page0');//titolo
    createImgRightText(JSON.profilePic,JSON.shortBio+JSON.professionalQualification,'page0');

    if(JSON.awards)createListThumbNailFInal(JSON.awards,'page0',false,false,false)
    if(JSON.FBid)createFBWall(JSON);
    if(JSON.TWid)createTWWall(JSON);
    addCarousel2(JSON.images,'page0');
    //createOrientationInfoSmartphone(JSON)
    //----GT INFO
    var gtInfos= new Array();
    var gtContext= new Array();
    gtContext["id"]=JSON.id;
    gtContext["name"]="Courses Tought by:"+JSON.name;
    gtInfos["context"]=gtContext;
    gtInfos["tourVector"]=JSON.courses;
    bindLink(0,gtInfos);
}


function createPageCourse(JSON){

    var pages=["Description","Scheduling","Register"]
    //initialize+A2ABAR+LINKS+OI
    initializePage(3,true); 
    createA2ABarDesktop(pages);
    //addA2ALinkOnSideBar(pages,JSON.title);
    addLCLinkOnSideBar(JSON.instructors,"Tough by:");
    createOrientationDesktop();
    createOrientationInfoSmartphone();
    showPageA2A(0,3);
    //----------CONTENT-------------
    //in pagina 0 description
    createTextwithTitle(JSON.description,JSON.title,'page0');
    createTextwithTitle("","TARGET : "+JSON.target.toUpperCase(),'page0');
    createTextwithTitle("","LEVEL : "+JSON.level.toUpperCase(),'page0');
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

    bindLink(3,gtInfos);
}

function createPageAllInstructor(JSON){

    initializePage(1,false);
    var str=JSON.paragraph.content;
    var res=str.split(/\n/)
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

    initializePage(1,true);
    addLCLinkOnSideBar(LCAllCourseByLevel,"Other sort",true)

    var headerText=JSON.paragraph.content.split('</p>');
    createTextwithTitle(headerText[1],headerText[0],"page0");

    createListThumbNailFInal(JSON.courses,"page0",true,false,true);

    var gtInfos= new Array();
    var gtContext= new Array();
    gtContext["id"]="ACN0";
    gtContext["name"]="All Course by Name";
    gtInfos["context"]=gtContext;
    gtInfos["tourVector"]=JSON.courses;

    bindLink(0,gtInfos);
}
function createPageAllCourseByLevel(JSON){

    initializePage(1,true);
    addLCLinkOnSideBar(LCAllCourseByName,"Other sort",true)

    var headerText=JSON.paragraph.content.split('</p>');
    createTextwithTitle(headerText[1],headerText[0],"page0");

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

    initializePage(1,true);
    //cerco di  divide il content
    var str=JSON.paragraph.content;
    var res=str.split(/\n/)

    addLCLinkOnSideBar(LCAllCourseByName,"See More")
    createTextwithTitle(res[1],res[0],"page0");
    //createListThumbNailFInal(JSON,"page0",false,true,true)
    createListThumbNailFInal(JSON.courseCategories,"page0",false,true,true)
    var gtInfos= new Array();
    var gtContext= new Array();
    gtContext["id"]="ACC0";
    gtContext["name"]="Courses of every Category";
    gtInfos["context"]=gtContext;
    gtInfos["tourVector"]=JSON.courseCategories;

    bindLink(0,gtInfos);
}

function createPageCoursesOfCategoryX(JSON){

    initializePage(1,true);
    createTextwithTitle(JSON.Description,"Courses of "+JSON.nome.toUpperCase()+"","page0");
    createListThumbNailFInal(JSON.courses,"page0",true,false,false);
    createOrientationDesktop();
    createOrientationInfoSmartphone();
    
    //fix hide sidebar for  xs
    var class1=document.getElementById('sidebar-wrapper').className;
    document.getElementById('sidebar-wrapper').setAttribute('class',class1+' hidden-xs')
   
    var class2=document.getElementById('buttonSide').className;
    document.getElementById('buttonSide').setAttribute('class',class2+' hidden-xs')
    //-----

    var gtInfos= new Array();
    var gtContext= new Array();
    gtContext["id"]=JSON.id;
    gtContext["name"]="All courses  of "+JSON.nome;
    gtInfos["context"]=gtContext;
    gtInfos["tourVector"]=JSON.courses;

    bindLink(0,gtInfos);
};

function createPageHome(){
            deleteContent();
            initializePage(1,false)
            var div=document.createElement('div');
            div.setAttribute('id','HOME')
            div.innerHTML=home;
            document.getElementById('site-wrapper').appendChild(div);
            bindLink(0);
            
            $("#HOME").fadeIn("2000");
    $('#HOME').scrollTop();
                          }