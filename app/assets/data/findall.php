<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');

$returnValue = array (
    0 =>
        array(
            'id' => 0,
            'name' => 'name0',
            'surname' => 'surname0',
            'birth' => '29-01-1983',
            'phone' => '123123123',
            'city' => 'Warszawa',
            'street' => 'ul. Dywizjonu 303',
            'number' => '50/12'
        ),
    1 =>
        array(
            'id' => 11,
            'name' => 'name1',
            'surname' => 'surname1',
            'birth' => '10-04-1985',
            'phone' => '333444555',
            'city' => 'Poznań',
            'street' => 'ul. Długa',
            'number' => '34'
        ),
    2 =>
        array(
            'id' => 2,
            'name' => 'name2',
            'surname' => 'surname2',
            'birth' => '04-10-1999',
            'phone' => '777666555',
            'city' => 'Warszawa',
            'street' => 'ul. Dywizjonu 303',
            'number' => '50/12'
        ),
    3 =>
        array(
            'id' => 13,
            'name' => 'name3',
            'surname' => '03-11-1977',
            'birth' => '24-05-1980',
            'phone' => '234567876',
            'city' => 'Zielona Góra',
            'street' => 'ul. Władysława IV',
            'number' => '1/4'
        ),
    4 =>
        array(
            'id' => 4,
            'name' => 'name4',
            'surname' => 'surname4',
            'birth' => '29-01-1983',
            'phone' => '321456890',
            'city' => 'Nowy Tomysl',
            'street' => 'os. Połnoc',
            'number' => '11/11'
        ),
    5 =>
        array(
            'id' => 15,
            'name' => 'name5',
            'surname' => 'surname5',
            'birth' => '10-04-1985',
            'phone' => '444213234',
            'city' => 'Kraków',
            'street' => 'ul. Cicha',
            'number' => '23/23'
        ),
    6 =>
        array(
            'id' => 6,
            'name' => 'name6',
            'surname' => 'surname6',
            'birth' => '04-10-1999',
            'phone' => '987789987',
            'city' => 'Warszawa',
            'street' => 'ul. Dywizjonu 101',
            'number' => '50/12'
        ),
    7 =>
        array(
            'id' => 17,
            'name' => 'name7',
            'surname' => 'surname7',
            'birth' => '09-12-1955',
            'phone' => '333543212',
            'city' => 'Gorzów Wielkopolski',
            'street' => 'ul. Rzeczna',
            'number' => '1/4'
        ),
);

$findall = array();
foreach($_GET["ids"] as $param) {
    foreach($returnValue as $item) {
        if ($param == $item["id"]) {
            array_push($findall, $item);
        }
    }
}

echo json_encode($findall);

?>



