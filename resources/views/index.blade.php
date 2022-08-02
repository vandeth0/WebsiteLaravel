<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1,user-scalable=yes">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="robots" content="noindex" />
    <link rel="shortcut icon" href="/images/icon/favicon.png">
    <title>WL Paycam (Cambodia) Co.,Ltd</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
    
</head>
<body>
    <div id="app"></div>
    <div id="bg-black" style="width:100%; height:150px; background: #000;display:none;"></div>
    <div style="width: 100%; padding: 100px;" id="reader"></div>
    <div id="bg-blacks" style="width: 100%; height:50vh; background: #000;display:none;"></div>
    
    <script src="{{mix("js/chunks/vendor.js")}}"></script>
    <script src="{{mix("js/App.js")}}"></script>
</body>
</html>