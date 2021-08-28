$(document).ready(async function(){
    const response = await fetch('http://localhost:5000/auth/userInfo', {
        method: 'GET', 
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        } 
    });
    let result = await response.json();;
    let resultstest1 = document.getElementsByClassName('result_point_test1')[0],
        resultstest2 = document.getElementsByClassName('result_point_test2')[0],
        resultstest3 = document.getElementsByClassName('result_point_test3')[0],
        login = result.fio;
    $('.login').text(login);
    resultstest1.textContent = result.test1;
    resultstest2.textContent = result.test2;
    resultstest3.textContent = result.test3;
    document.getElementById('start').textContent = localStorage.getItem("start");
    if (localStorage.getItem("finish") !== null) { 
        document.getElementById('finish').textContent = localStorage.getItem("finish"); 
    } else { 
        document.getElementById('finish').textContent = 'Вы еще не закончили обучение.' 
    }
    document.getElementById('progress').textContent = localStorage.getItem("nameNumber");
});