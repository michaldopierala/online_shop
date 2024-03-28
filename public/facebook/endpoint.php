<?php

function sendEventToFacebook($data) {
    $url = "https://graph.facebook.com/v11.0/YOUR_PIXEL_ID/events";
    $data = [
        'data' => [$data],
        'access_token' => 'YOUR_ACCESS_TOKEN',
    ];

    $options = [
        'http' => [
            'header'  => "Content-type: application/json",
            'method'  => 'POST',
            'content' => json_encode($data),
        ]
    ];
    $context  = stream_context_create($options);
    $result = file_get_contents($url, false, $context);

    if ($result === FALSE) { /* Handle error */ }

    echo $result;
}
