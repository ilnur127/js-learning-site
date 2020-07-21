let resultstest1 = document.getElementsByClassName('result_point_test1'),
    resultstest2 = document.getElementsByClassName('result_point_test2'),
    resultstest3 = document.getElementsByClassName('result_point_test3');
resultstest1 = Array.prototype.slice.call(resultstest1);
resultstest2 = Array.prototype.slice.call(resultstest2);
resultstest3 = Array.prototype.slice.call(resultstest3);
resultstest1.forEach(function(elem) {
    if (localStorage.getItem('result_point_test1') !== null) { elem.textContent = localStorage.getItem('result_point_test1'); } else {
        elem.textContent = '0';
    }
});
resultstest2.forEach(function(elem) {
    if (localStorage.getItem('result_point_test2') !== null) { elem.textContent = localStorage.getItem('result_point_test2'); } else {
        elem.textContent = '0';
    }
});
resultstest3.forEach(function(elem) {
    if (localStorage.getItem('result_point_test3') !== null) { elem.textContent = localStorage.getItem('result_point_test3'); } else {
        elem.textContent = '0';
    }
});
document.getElementById('start').textContent = localStorage.getItem("start");
if (localStorage.getItem("finish") !== null) { document.getElementById('finish').textContent = localStorage.getItem("finish"); } else { document.getElementById('finish').textContent = 'Вы еще не закончили обучение.' }
document.getElementById('progress').textContent = localStorage.getItem("nameNumber");