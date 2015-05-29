
<?php

$request = new FacebookRequest(
  $session,
  'GET',
  '/ "93192098615"/feed'
    
    
   
    
);
$response = $request->execute();
$graphObject = $response->getGraphObject();




?>