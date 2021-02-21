document.querySelector('.response').addEventListener('click', (e) => {
    fetchSmt();
});

function authenticateUser(user, password)
{
    var token = user + ":" + password;

    // Should i be encoding this value????? does it matter???
    // Base64 Encoding -> btoa
    var hash = btoa(token); 

    return "Basic " + hash;
}

function CallWebAPI() {

    // New XMLHTTPRequest
    var request = new XMLHttpRequest();
    request.open("GET", "http://192.168.14.35/index.htm", false);  
    request.setRequestHeader("Access-Control-Allow-Origin", "*");
    request.setRequestHeader("Access-Control-Allow-Methods", "GET");
    request.setRequestHeader("Access-Control-Allow-Headers", "X-Requested-With,Origin,Content-Type, Accept, x-device-user-agent, Content-Type");
    request.setRequestHeader("Authorization", authenticateUser("administrator", "password"));
    request.send();
    // view request status
    alert(request.status);
    document.querySelector('.response').innerHTML = request.responseText;
}

function fetchSmt() {
    fetch('http://192.168.14.35/index.htm', {
        method: "GET",
        headers: {
            Connection: 'keep-alive',
            'Accept-Encoding': 'gzip, deflate, br',
            Accept: '*/*',
          Authorization: authenticateUser("administrator", "password")
        }
      });
}

