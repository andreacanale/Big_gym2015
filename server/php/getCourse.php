<?php
//get course from db and reply using json structure

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
    $query1 = " SELECT * FROM course WHERE id = '" . $phpGetparamid."';";
    //get intructors of the course
    $query2 = "SELECT instructor.id as instructorID, instructor.Name as instructorName FROM course  JOIN instructor_course ON instructor_course.course = course.id JOIN instructor ON instructor_course.instructor = instructor.id WHERE course.id = '" . $phpGetparamid."';";
    //get images of the course
    $query3 = "SELECT id_image.image as image FROM course JOIN id_image on id_image.id=course.id WHERE course.id ='" . $phpGetparamid."';";
    //get schedule
    $query4 = "SELECT DoW, init, end FROM 'schedule' WHERE course='" . $phpGetparamid."';";
    //echo $query4;
    //get form
    $query5= "SELECT field FROM `form_field` WHERE form ='F0001'";
    //query execution
    $result1 = $mysqli->query($query1);    

    //if there are data available
    if($result1 and $result1->num_rows >0)
    {
        $myCourse = array();//create an array
        while($row = $result1->fetch_array(MYSQL_ASSOC)) {
            $myCourse = $row;
           // var_dump(json_encode($myCourse));
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
              $myCourse["instructors"]= $myArray2;
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
            $myCourse["images"]= $myArray3;

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
            $myCourse["schedule"]= $myArray4;

        }

    
     $result5 = $mysqli->query($query5);
        //if there are images
           
        if($result5 and $result5->num_rows >0)
        {
            $myArray5 = array();//create an array
            while($row = $result5->fetch_array(MYSQL_ASSOC)) {
              //  $myArray[] = $row;
                  array_push($myArray5, $row["field"]);
                //  var_dump(json_encode($myArray));
            }
            $myCourse["formFields"]= $myArray5;

        }
        // var_dump($myCourse);
           echo json_encode($myCourse);
    }

    //free result
    if($result1)$result1->close();
    if($result2)$result2->close();
    if($result3)$result3->close();
    if($result4)$result4->close();
    if($result5)$result5->close();

    //close connection
    $mysqli->close();



}





?>