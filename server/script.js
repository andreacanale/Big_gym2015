




var phps= ["php/getInstructor.php","php/getCourse.php","php/getLocation.php"]

$(document).ready(ready);



function ready(){
    console.log("I'm ready!");
    

    
    
}

function callToDB(what){
    
    
    var query="";
    
    if(what[0]=="I")query=phps[0]
    else if(what[0]=="C")query=phps[1]
    else if(what[0]=="L")query=phps[2]
    
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

                console.log(result.id);
                
               return result;
        },
        error: function(request,error) 
        {
            console.log("Error");
        }
    });

}

callToDB("I0002")