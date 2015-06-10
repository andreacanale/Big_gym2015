<?php

function fetchUrl($url){

 $ch = curl_init();
 curl_setopt($ch, CURLOPT_URL, $url);
 curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
 curl_setopt($ch, CURLOPT_TIMEOUT, 20);
 // You may need to add the line below
 curl_setopt($ch,CURLOPT_SSL_VERIFYPEER,false);

 $feedData = curl_exec($ch);
 curl_close($ch); 

 return $feedData;

}

$profile_id = $_GET['id'];

//App Info, needed for Auth
$app_id = "106007231971";
$app_secret = "5547a6e752c38848f5212dd422166e1a";

//Retrieve auth token
$authToken = fetchUrl("https://graph.facebook.com/oauth/access_token?grant_type=client_credentials&client_id={$app_id}&client_secret={$app_secret}");

$json_object = fetchUrl("https://graph.facebook.com/{$profile_id}/feed?{$authToken}");

        $callback = $_GET['callback'];
        $obj = json_decode($json_object);
//var_dump($obj->data);
        $json = json_encode($obj->data);
        echo "$callback({$json})";

?>