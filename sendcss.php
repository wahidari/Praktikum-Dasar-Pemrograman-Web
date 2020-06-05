<?php
$data = file_get_contents('php://input');
$inp = file_get_contents('datacss.txt');
$tempArray = json_decode($inp);
array_push($tempArray, json_decode($data));
$jsonData = json_encode($tempArray);
file_put_contents('datacss.txt', $jsonData);
?>