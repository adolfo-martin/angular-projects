<?php

//https://www.youtube.com/watch?v=q0JhJBYi4sw&list=PLY3j36HMSHNUCsG7S1lnBg_mOg3_VZrcq

function show($stuff) {
    echo '<pre>';
    print_r($stuff);
    echo '</pre>';
}

function splitUrl() {
    $url = $_GET['url'] ?? 'mvc';
    $url = explode('/', $url);
    return $url;
}

function loadController() {
    $url = splitUrl();

    $filename = '../app/controllers/'. $url[0]. '.php';
    if (file_exists($filename)) {
        require_once $filename;
    } else {
        echo 'Controller not found';
    }
}

loadController();