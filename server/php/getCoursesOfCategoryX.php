<?php
//get instructor from db and reply using json structure

//connection to db
include ("dbconnect.php");

if (mysqli_connect_errno()) { //verify connection
    echo "Error to connect to DBMS: ".mysqli_connect_error(); //notify error
    exit(); //do nothing else 
}
else {
 $phpGetparamid = mysql_escape_string($_GET["id"]); //get escaped id
 //   echo "Successful connection"; // connection ok
    mysqli_set_charset($mysqli, "utf8"); 
    # extract results mysqli_result::fetch_array
    $query1 = "SELECT course.* FROM coursecategory_course JOIN course ON coursecategory_course.course = course.id WHERE coursecategory_course.courseCategory = '" . $phpGetparamid."';";
 //   echo $query1;
    $query2 = "SELECT * FROM coursecategory WHERE id = '" . $phpGetparamid."';";
    
    //query execution
    $result1 = $mysqli->query($query1);    

    //if there are data available
    if($result1 and $result1->num_rows >0)
    {
        $myResult = array();//create an array
        $myCourses = array();//create an array
        while($row = $result1->fetch_array(MYSQL_ASSOC)) {
            array_push($myCourses, $row);
          //  var_dump(json_encode($myArray));
        }
    //   $myResult["courses"] = $myCourses;
       // echo json_encode($myArray);
        $result2 = $mysqli->query($query2);  
        
        //if there are courses
        if($result2 and $result2->num_rows >0)
        {
            $myArray2 = array();//create an array
            while($row = $result2->fetch_array(MYSQL_ASSOC)) {
              //  $myArray2[] = $row;
                 $myResult = $row;
                //  var_dump(json_encode($myArray));
            }
  
        }
        $myResult["courses"] = $myCourses;
      
                   // var_dump($myArray);
           echo json_encode($myResult);
    }
    //free result
    if(isset($result1) and $result1)$result1->close();
    if(isset($result2) and $result2)$result2->close();

    //close connection
    $mysqli->close();



}





?>