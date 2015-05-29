<?php
//get instructor from db and reply using json structure

//connection to db
include ("dbconnect.php");

if (mysqli_connect_errno()) { //verify connection
    echo "Error to connect to DBMS: ".mysqli_connect_error(); //notify error
    exit(); //do nothing else 
}
else {
    //echo "Successful connection"; // connection ok
    mysqli_set_charset($mysqli, "utf8"); 
    # extract results mysqli_result::fetch_array
    $query1 = " SELECT * FROM location ";
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
        
    
                   // var_dump($myArray);
           echo json_encode($myInstructor);
    }

    //free result
    if($result1)$result1->close();

    //close connection
    $mysqli->close();



}





?>