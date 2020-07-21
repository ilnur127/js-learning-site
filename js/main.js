$('#mainActiveBtn').click(function() {
    $('.mainActive').css({ 'display': 'block' });
    $('.main').css({ 'display': 'none' });
    let start = new Date;
    localStorage.setItem("start", start);
});
var mainActiveList = document.querySelector('.mainActiveList').children,
    mainActiveListContent = document.querySelector('.mainActiveListContent').children,
    number = localStorage.getItem('number') || 0,
    count = localStorage.getItem('count') || 0,
    arrCorrectAnswersofTest1 = [1, 2, 3, 4, 1],
    questions1 = document.querySelector('.test1_questions').children,
    userAnswersTest1 = localStorage.getItem('userAnswers_test1') || [],
    arrCorrectAnswersofTest2 = [2, 3, 4, 1, 2],
    questions2 = document.querySelector('.test2_questions').children,
    userAnswersTest2 = localStorage.getItem('userAnswers_test2') || [],
    arrCorrectAnswersofTest3 = [3, 4, 1, 2, 3],
    questions3 = document.querySelector('.test3_questions').children,
    userAnswersTest3 = localStorage.getItem('userAnswers_test3') || [];
questions1 = Array.prototype.slice.call(questions1);
questions2 = Array.prototype.slice.call(questions2);
questions3 = Array.prototype.slice.call(questions3);
if (localStorage.getItem('result_point_test1') < 4) {
    document.getElementById('test1_no').textContent = "не";
}
if (localStorage.getItem('result_point_test2') < 4) {
    document.getElementById('test1_no').textContent = "не";
}
if (localStorage.getItem('result_point_test3') < 4) {
    document.getElementById('test1_no').textContent = "не";
}
if (localStorage.getItem('result_point_test1') !== null) {
    let resultstest1 = document.getElementsByClassName('result_point_test1')
    resultstest1 = Array.prototype.slice.call(resultstest1);
    resultstest1.forEach(function(elem) {
        elem.textContent = localStorage.getItem('result_point_test1');;
    });
    $('.test1_info').css({ 'display': 'none' });
    $('.result_test1').css({ 'display': 'block' });
} else {
    $('.test1_info').css({ 'display': 'block' });
    $('.result_test1').css({ 'display': 'none' });
}
if (localStorage.getItem('result_point_test2') !== null) {
    let resultstest2 = document.getElementsByClassName('result_point_test2')
    resultstest2 = Array.prototype.slice.call(resultstest2);
    resultstest2.forEach(function(elem) {
        elem.textContent = localStorage.getItem('result_point_test2');;
    });
    $('.test2_info').css({ 'display': 'none' });
    $('.result_test2').css({ 'display': 'block' });
} else {
    $('.test2_info').css({ 'display': 'block' });
    $('.result_test2').css({ 'display': 'none' });
}
if (localStorage.getItem('result_point_test3') !== null) {
    let resultstest3 = document.getElementsByClassName('result_point_test3')
    resultstest3 = Array.prototype.slice.call(resultstest3);
    resultstest3.forEach(function(elem) {
        elem.textContent = localStorage.getItem('result_point_test3');;
    });
    $('.test3_info').css({ 'display': 'none' });
    $('.result_test3').css({ 'display': 'block' });
} else {
    $('.test3_info').css({ 'display': 'block' });
    $('.result_test3').css({ 'display': 'none' });
}
if (count >= 9) {
    $('#list-test1-list').css({ 'display': 'block' });
}
if (count >= 12 && localStorage.getItem('result_point_test1') !== null) {
    $('#list-test2-list').css({ 'display': 'block' });
}
if (count >= 12 && localStorage.getItem('result_point_test1') !== null && localStorage.getItem('result_point_test2') !== null) {
    $('#list-test3-list').css({ 'display': 'block' });
}
if (localStorage.getItem('number')) {
    $('.mainActive').css({ 'display': 'block' });
    $('.main').css({ 'display': 'none' });
}
mainActiveList = Array.prototype.slice.call(mainActiveList);
mainActiveListContent = Array.prototype.slice.call(mainActiveListContent);
mainActiveList.forEach(function(elem, i) {
    if (elem.classList.contains('active')) {
        elem.classList.remove("active");
    }
    if (i == number) {
        elem.classList.add("active");
    }
});
mainActiveListContent.forEach(function(elem, i) {
    if (elem.classList.contains('active')) {
        elem.classList.remove("active");
        elem.classList.remove("show");
    }
    if (i == number) {
        elem.classList.add("active");
        elem.classList.add("show");
    }
});
$('.mainActiveList').children().click(function(e) {
    let str = this.textContent;
    mainActiveList.forEach(function(elem, i) {
        if (elem.textContent === str) {
            localStorage.setItem('number', i);
            localStorage.setItem('nameNumber', str);
        }
    });
    if (count >= 9) {
        $('#list-test1-list').css({ 'display': 'block' });
    } else {
        $('#list-test1-list').css({ 'display': 'none' });
    }
    if (count >= 12 && localStorage.getItem('result_point_test1') !== null) {
        $('#list-test2-list').css({ 'display': 'block' });
    } else {
        $('#list-test2-list').css({ 'display': 'none' });
    }
    count++;
    localStorage.setItem('count', count);
});
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').css({ 'display': 'block' });
        } else {
            $('.scrollup').css({ 'display': 'none' });
        }
    });
});
//Тест 1
$('.test1Go').click(function() {
    $('.test1Content').css({ 'display': 'block' });
    $('.test1Go').css({ 'display': 'none' });
    $('.test1_info').css({ 'display': 'none' });
    $('.result_test1').css({ 'display': 'none' });
});
$('.reGoTest1').click(function() {
    $('.test1Content').css({ 'display': 'block' });
    $('.test1_questions').css({ 'display': 'block' });
    $('.result_test1').css({ 'display': 'none' });
})
$('.test1Submit').click(function() {
    $('.test1_questions').css({ 'display': 'none' });
    $('.result_test1').css({ 'display': 'block' });
    $('#result_test1_Content').empty();
    let point = 0,
        userAnswers_obj = {};
    userAnswersTest1 = [];
    questions1.forEach(function(elem, i) {
        let numberQuestion = i;
        if (i != 5) {
            let el = elem.children;
            el = Array.prototype.slice.call(el);
            el1 = el[0].children;
            el1 = Array.prototype.slice.call(el1);
            el1.forEach(function(elem, i) {
                if (i != 0) {
                    let num = i;
                    if (elem.firstElementChild.checked == true) {
                        userAnswers_obj['numberAnswers'] = elem.firstElementChild.value;
                        userAnswers_obj['Question'] = elem.parentElement.firstElementChild.textContent;
                        userAnswers_obj['Answers'] = elem.lastElementChild.textContent;
                        userAnswersTest1.push(JSON.stringify(userAnswers_obj));
                        userAnswers_obj = {};
                        if (elem.firstElementChild.value == arrCorrectAnswersofTest1[numberQuestion]) {
                            point++;
                            //console.log(elem.firstElementChild.value);
                            $('#result_test1_Content').append('<div class="row">Вопрос ' + (numberQuestion + 1) + '</div>' +
                                '<div class="row">' +
                                '<div class="col-10">Вопрос:' + elem.parentElement.firstElementChild.textContent + '</div>' +
                                '<div class="col-2 res">1 балл из 1 балла</div>' +
                                '</div>' +
                                '<div class="row">Ваш ответ:' + elem.lastElementChild.textContent + '</div>');
                        } else {
                            $('#result_test1_Content').append('<div class="row">Вопрос ' + (numberQuestion + 1) + '</div>' +
                                '<div class="row">' +
                                '<div class="col-10">Вопрос:' + elem.parentElement.firstElementChild.textContent + '</div>' +
                                '<div class="col-2 res">0 баллов из 1 балла</div>' +
                                '</div>' +
                                '<div class="row">Ваш ответ:' + elem.lastElementChild.textContent + '</div>');
                        }
                    }
                };
            });
        }
    });
    if (point < 4) {
        document.getElementById('test1_no').textContent = "не";
    }
    let resultstest1 = document.getElementsByClassName('result_point_test1');
    resultstest1 = Array.prototype.slice.call(resultstest1);
    resultstest1.forEach(function(elem) {
        elem.textContent = point;
    });
    localStorage.setItem('result_point_test1', point);
    localStorage.setItem('userAnswers_test1', JSON.stringify(userAnswersTest1));
    console.log(userAnswersTest1);
});
$('.showResultTest1').click(function() {
    $('#result_test1_Content').css({ 'display': 'block' });
    $('#result_test1_Content').empty();
    let arr = JSON.parse(localStorage.getItem('userAnswers_test1'));
    for (let i = 0; i < arr.length; i++) {
        if (JSON.parse(arr[i])['numberAnswers'] == arrCorrectAnswersofTest1[i]) {
            $('#result_test1_Content').append('<div class="row">Вопрос ' + (i + 1) + '</div>' +
                '<div class="row">' +
                '<div class="col-10">Вопрос:' + JSON.parse(arr[i])['Question'] + '</div>' +
                '<div class="col-2 res">1 балл из 1 балла</div>' +
                '</div>' +
                '<div class="row">Ваш ответ:' + JSON.parse(arr[i])['Answers'] + '</div>');
        } else {
            $('#result_test1_Content').append('<div class="row">Вопрос ' + (i + 1) + '</div>' +
                '<div class="row">' +
                '<div class="col-10">Вопрос:' + JSON.parse(arr[i])['Question'] + '</div>' +
                '<div class="col-2 res">0 баллов из 1 балла</div>' +
                '</div>' +
                '<div class="row">Ваш ответ:' + JSON.parse(arr[i])['Answers'] + '</div>');
        }
    }
});
//Тест 2
$('.test2Go').click(function() {
    $('.test2Content').css({ 'display': 'block' });
    $('.test2Go').css({ 'display': 'none' });
    $('.test2_info').css({ 'display': 'none' });
    $('.result_test2').css({ 'display': 'none' });
});
$('.reGoTest2').click(function() {
    $('.test2Content').css({ 'display': 'block' });
    $('.test2_questions').css({ 'display': 'block' });
    $('.result_test2').css({ 'display': 'none' });
})
$('.test2Submit').click(function() {
    $('.test2_questions').css({ 'display': 'none' });
    $('.result_test2').css({ 'display': 'block' });
    $('#result_test2_Content').empty();
    let point = 0,
        userAnswers_obj = {};
    userAnswersTest2 = [];
    questions2.forEach(function(elem, i) {
        let numberQuestion = i;
        if (i != 5) {
            let el = elem.children;
            el = Array.prototype.slice.call(el);
            el1 = el[0].children;
            el1 = Array.prototype.slice.call(el1);
            el1.forEach(function(elem, i) {
                if (i != 0) {
                    let num = i;
                    if (elem.firstElementChild.checked == true) {
                        userAnswers_obj['numberAnswers'] = elem.firstElementChild.value;
                        userAnswers_obj['Question'] = elem.parentElement.firstElementChild.textContent;
                        userAnswers_obj['Answers'] = elem.lastElementChild.textContent;
                        userAnswersTest2.push(JSON.stringify(userAnswers_obj));
                        userAnswers_obj = {};
                        if (elem.firstElementChild.value == arrCorrectAnswersofTest2[numberQuestion]) {
                            point++;
                            //console.log(elem.firstElementChild.value);
                            $('#result_test2_Content').append('<div class="row">Вопрос ' + (numberQuestion + 1) + '</div>' +
                                '<div class="row">' +
                                '<div class="col-10">Вопрос:' + elem.parentElement.firstElementChild.textContent + '</div>' +
                                '<div class="col-2 res">1 балл из 1 балла</div>' +
                                '</div>' +
                                '<div class="row">Ваш ответ:' + elem.lastElementChild.textContent + '</div>');
                        } else {
                            $('#result_test2_Content').append('<div class="row">Вопрос ' + (numberQuestion + 1) + '</div>' +
                                '<div class="row">' +
                                '<div class="col-10">Вопрос:' + elem.parentElement.firstElementChild.textContent + '</div>' +
                                '<div class="col-2 res">0 баллов из 1 балла</div>' +
                                '</div>' +
                                '<div class="row">Ваш ответ:' + elem.lastElementChild.textContent + '</div>');
                        }
                    }
                };
            });
        }
    });
    if (point < 4) {
        document.getElementById('test2_no').textContent = "не";
    }
    let resultstest2 = document.getElementsByClassName('result_point_test2');
    resultstest2 = Array.prototype.slice.call(resultstest2);
    resultstest2.forEach(function(elem) {
        elem.textContent = localStorage.getItem('result_point_test2');;
    });
    localStorage.setItem('result_point_test2', point);
    localStorage.setItem('userAnswers_test2', JSON.stringify(userAnswersTest2));
    console.log(userAnswersTest2);
});
$('.showResultTest2').click(function() {
    $('#result_test2_Content').css({ 'display': 'block' });
    $('#result_test2_Content').empty();
    let arr = JSON.parse(localStorage.getItem('userAnswers_test2'));
    for (let i = 0; i < arr.length; i++) {
        if (JSON.parse(arr[i])['numberAnswers'] == arrCorrectAnswersofTest2[i]) {
            $('#result_test2_Content').append('<div class="row">Вопрос ' + (i + 1) + '</div>' +
                '<div class="row">' +
                '<div class="col-10">Вопрос:' + JSON.parse(arr[i])['Question'] + '</div>' +
                '<div class="col-2 res">1 балл из 1 балла</div>' +
                '</div>' +
                '<div class="row">Ваш ответ:' + JSON.parse(arr[i])['Answers'] + '</div>');
        } else {
            $('#result_test2_Content').append('<div class="row">Вопрос ' + (i + 1) + '</div>' +
                '<div class="row">' +
                '<div class="col-10">Вопрос:' + JSON.parse(arr[i])['Question'] + '</div>' +
                '<div class="col-2 res">0 баллов из 1 балла</div>' +
                '</div>' +
                '<div class="row">Ваш ответ:' + JSON.parse(arr[i])['Answers'] + '</div>');
        }
    }
});
//Тест 3
$('.test3Go').click(function() {
    $('.test3Content').css({ 'display': 'block' });
    $('.test3Go').css({ 'display': 'none' });
    $('.test3_info').css({ 'display': 'none' });
    $('.result_test3').css({ 'display': 'none' });
});
$('.reGoTest3').click(function() {
    $('.test3Content').css({ 'display': 'block' });
    $('.test3_questions').css({ 'display': 'block' });
    $('.result_test3').css({ 'display': 'none' });
})
$('.test3Submit').click(function() {
    $('.test3_questions').css({ 'display': 'none' });
    $('.result_test3').css({ 'display': 'block' });
    $('#result_test3_Content').empty();
    let point = 0,
        userAnswers_obj = {};
    userAnswersTest3 = [];
    questions3.forEach(function(elem, i) {
        let numberQuestion = i;
        if (i != 5) {
            let el = elem.children;
            el = Array.prototype.slice.call(el);
            el1 = el[0].children;
            el1 = Array.prototype.slice.call(el1);
            el1.forEach(function(elem, i) {
                if (i != 0) {
                    let num = i;
                    if (elem.firstElementChild.checked == true) {
                        userAnswers_obj['numberAnswers'] = elem.firstElementChild.value;
                        userAnswers_obj['Question'] = elem.parentElement.firstElementChild.textContent;
                        userAnswers_obj['Answers'] = elem.lastElementChild.textContent;
                        userAnswersTest3.push(JSON.stringify(userAnswers_obj));
                        userAnswers_obj = {};
                        if (elem.firstElementChild.value == arrCorrectAnswersofTest3[numberQuestion]) {
                            point++;
                            //console.log(elem.firstElementChild.value);
                            $('#result_test2_Content').append('<div class="row">Вопрос ' + (numberQuestion + 1) + '</div>' +
                                '<div class="row">' +
                                '<div class="col-10">Вопрос:' + elem.parentElement.firstElementChild.textContent + '</div>' +
                                '<div class="col-2 res">1 балл из 1 балла</div>' +
                                '</div>' +
                                '<div class="row">Ваш ответ:' + elem.lastElementChild.textContent + '</div>');
                        } else {
                            $('#result_test2_Content').append('<div class="row">Вопрос ' + (numberQuestion + 1) + '</div>' +
                                '<div class="row">' +
                                '<div class="col-10">Вопрос:' + elem.parentElement.firstElementChild.textContent + '</div>' +
                                '<div class="col-2 res">0 баллов из 1 балла</div>' +
                                '</div>' +
                                '<div class="row">Ваш ответ:' + elem.lastElementChild.textContent + '</div>');
                        }
                    }
                };
            });
        }
    });
    if (point < 4) {
        document.getElementById('test3_no').textContent = "не";
    } else {
        let finish = new Date;
        localStorage.setItem("finish", finish);
    }
    let resultstest3 = document.getElementsByClassName('result_point_test3');
    resultstest3 = Array.prototype.slice.call(resultstest3);
    resultstest3.forEach(function(elem) {
        elem.textContent = localStorage.getItem('result_point_test3');;
    });
    localStorage.setItem('result_point_test3', point);
    localStorage.setItem('userAnswers_test3', JSON.stringify(userAnswersTest3));
});
$('.showResultTest3').click(function() {
    $('#result_test3_Content').css({ 'display': 'block' });
    $('#result_test3_Content').empty();
    let arr = JSON.parse(localStorage.getItem('userAnswers_test3'));
    for (let i = 0; i < arr.length; i++) {
        if (JSON.parse(arr[i])['numberAnswers'] == arrCorrectAnswersofTest3[i]) {
            $('#result_test3_Content').append('<div class="row">Вопрос ' + (i + 1) + '</div>' +
                '<div class="row">' +
                '<div class="col-10">Вопрос:' + JSON.parse(arr[i])['Question'] + '</div>' +
                '<div class="col-2 res">1 балл из 1 балла</div>' +
                '</div>' +
                '<div class="row">Ваш ответ:' + JSON.parse(arr[i])['Answers'] + '</div>');
        } else {
            $('#result_test3_Content').append('<div class="row">Вопрос ' + (i + 1) + '</div>' +
                '<div class="row">' +
                '<div class="col-10">Вопрос:' + JSON.parse(arr[i])['Question'] + '</div>' +
                '<div class="col-2 res">0 баллов из 1 балла</div>' +
                '</div>' +
                '<div class="row">Ваш ответ:' + JSON.parse(arr[i])['Answers'] + '</div>');
        }
    }
});

function toggleMobileMenu() {
    if (document.getElementById('themeMenu').style.display == 'block') {
        document.getElementById('themeMenu').style.display = 'none';
    } else {
        document.getElementById('themeMenu').style.display = 'block';
    }
}