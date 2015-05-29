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
    //echo "Successful connection"; // connection ok
    mysqli_set_charset($mysqli, "utf8"); 
    # extract results mysqli_result::fetch_array
    $query1 = " SELECT * FROM instructor WHERE id = '" . $phpGetparamid."';";
    $query2 = "SELECT course.id as courseID, course.title as courseTitle FROM instructor  JOIN instructor_course ON instructor_course.instructor = id JOIN course ON instructor_course.course = course.id WHERE instructor.id = '" . $phpGetparamid."';";
    $query3 = "SELECT id_image.image as image FROM instructor JOIN id_image on id_image.id=instructor.id WHERE instructor.id = '" . $phpGetparamid."';";
    //scarica awards
     $query4 = "SELECT award.* FROM award JOIN instructor_award on instructor_award.award=award.id WHERE instructor_award.instructor = '" . $phpGetparamid."';"; 
    //query execution
    $result1 = $mysqli->query($query1);    

    //if there are data available
    if($result1 and $result1->num_rows >0)
    {
        $myInstructor = array();//create an array
        while($row = $result1->fetch_array(MYSQL_ASSOC)) {
            $myInstructor = $row;
          //  var_dump(json_encode($myArray));
        }
       // echo json_encode($myArray);
        
        $result2 = $mysqli->query($query2);    
        //if there are courses
        if($result2 and $result2->num_rows >0)
        {
            $myArray2 = array();//create an array
            while($row = $result2->fetch_array(MYSQL_ASSOC)) {
              //  $myArray2[] = $row;
                array_push($myArray2, $row);
                //  var_dump(json_encode($myArray));
            }
    //        echo json_encode($myArray);
              $myInstructor["courses"]= $myArray2;
        }
      
        $result3 = $mysqli->query($query3);
        //if there are images
        if($result3 and $result3->num_rows >0)
        {
            $myArray3 = array();//create an array
            while($row = $result3->fetch_array(MYSQL_ASSOC)) {
              //  $myArray[] = $row;
                  array_push($myArray3, $row["image"]);
                //  var_dump(json_encode($myArray));
            }
            $myInstructor["images"]= $myArray3;

        }
              $result4 = $mysqli->query($query4);
        //if there are images
        if($result4 and $result4->num_rows >0)
        {
            $myArray4 = array();//create an array
            while($row = $result4->fetch_array(MYSQL_ASSOC)) {
              //  $myArray[] = $row;
                  array_push($myArray4, $row);
                //  var_dump(json_encode($myArray));
            }
            $myInstructor["awards"]= $myArray4;

        }
                   // var_dump($myArray);
           echo json_encode($myInstructor);
    }

    //free result
    if($result1)$result1->close();
    if($result2)$result2->close();
    if($result3)$result3->close();
    if($result4)$result4->close();

    //close connection
    $mysqli->close();



}





?>