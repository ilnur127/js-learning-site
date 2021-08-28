var mainActiveList = document.querySelector('.mainActiveList').children,
    mainActiveListContent = document.querySelector('.mainActiveListContent').children,
    number = localStorage.getItem('number') || 0,
    count = localStorage.getItem('count') || 0,
    arrCorrectAnswersofTest1 = [1, 2, 3, 4, 1],
    questions1 = document.querySelector('.test1_questions').children,
    userAnswersTest1 = localStorage.getItem('userAnswers_test1') || [],
    arrCorrectAnswersofTest2 = [1, 2, 3, 4, 1],
    questions2 = document.querySelector('.test2_questions').children,
    userAnswersTest2 = localStorage.getItem('userAnswers_test2') || [],
    arrCorrectAnswersofTest3 = [1, 2, 3, 4, 1],
    questions3 = document.querySelector('.test3_questions').children,
    userAnswersTest3 = localStorage.getItem('userAnswers_test3') || [];
questions1 = Array.prototype.slice.call(questions1);
questions2 = Array.prototype.slice.call(questions2);
questions3 = Array.prototype.slice.call(questions3);
if (+localStorage.getItem('result_point_test1') < 4) {
    document.getElementById('test1_no').textContent = "не";
} else {
    document.getElementById('test1_no').textContent = "";
}
if (+localStorage.getItem('result_point_test2') < 4) {
    document.getElementById('test2_no').textContent = "не";
} else {
    document.getElementById('test2_no').textContent = "";
}
if (+localStorage.getItem('result_point_test3') < 4) {
    document.getElementById('test3_no').textContent = "не";
} else {
    document.getElementById('test3_no').textContent = "";
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
if (localStorage.getItem('number') || localStorage.getItem('token')) {
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
if (number>1 && number<11) {
    showChapter1();
}
mainActiveListContent.forEach(function(elem, i) {
    if (elem.classList.contains('active')) {
        elem.classList.remove("active");
        elem.classList.remove("show");
    }
    if (i == (number-1)) {
        elem.classList.add("active");
        elem.classList.add("show");
    }
    if (number == '0' && i == 0) {
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
    if (!localStorage.getItem('token')) {
        $('.menu').css('display','none');
    }
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
$('.test1Submit').click(async function() {
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
    if (+point < 4) {
        document.getElementById('test1_no').textContent = "не";
    } else {
        document.getElementById('test1_no').textContent = "";
        if (count >= 12) {
            $('#list-test2-list').css({ 'display': 'block' });
        } else {
            $('#list-test2-list').css({ 'display': 'none' });
        }
    }
    let resultstest1 = document.getElementsByClassName('result_point_test1');
    resultstest1 = Array.prototype.slice.call(resultstest1);
    resultstest1.forEach(function(elem) {
        elem.textContent = point;
    });
    localStorage.setItem('result_point_test1', point);
    localStorage.setItem('userAnswers_test1', JSON.stringify(userAnswersTest1));
    const response = await fetch('http://localhost:5000/auth/changeTestsResult', {
        method: 'Post', 
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
            "testNumber": 1,
            "result": +point
        })
    });
    let result = await response.json();
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
$('.test2Submit').click(async function() {
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
    if (+point < 4) {
        document.getElementById('test2_no').textContent = "не";
    } else {
        document.getElementById('test2_no').textContent = "";
        $('#list-test3-list').css({ 'display': 'block' });
    }
    let resultstest2 = document.getElementsByClassName('result_point_test2');
    resultstest2 = Array.prototype.slice.call(resultstest2);
    resultstest2.forEach(function(elem) {
        elem.textContent = point;
    });
    localStorage.setItem('result_point_test2', point);
    localStorage.setItem('userAnswers_test2', JSON.stringify(userAnswersTest2));
    const response = await fetch('http://localhost:5000/auth/changeTestsResult', {
        method: 'Post', 
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
            "testNumber": 2,
            "result": +point
        })
    });
    let result = await response.json();
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
$('.test3Submit').click(async function() {
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
    if (+point < 4) {
        document.getElementById('test3_no').textContent = "не";
    } else {
        document.getElementById('test3_no').textContent = "";
        let finish = new Date;
        localStorage.setItem("finish", finish);
    }
    let resultstest3 = document.getElementsByClassName('result_point_test3');
    resultstest3 = Array.prototype.slice.call(resultstest3);
    resultstest3.forEach(function(elem) {
        elem.textContent = point;
    });
    localStorage.setItem('result_point_test3', point);
    localStorage.setItem('userAnswers_test3', JSON.stringify(userAnswersTest3));
    const response = await fetch('http://localhost:5000/auth/changeTestsResult', {
        method: 'Post', 
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
            "testNumber": 3,
            "result": +point
        })
    });
    let result = await response.json();
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

function showChapter1() {
    $('.Chapter1').each(function(i, el) {
        if ($(el).css('display') == 'none') {
            $(el).css('display', 'block');
        } else {
            $(el).css('display', 'none');
        }
    });
}

function performAnAction(el, needX = false, type) {
    let resultEq,
        result;
    if (needX) {
        if ($(el).attr('x-value') != '' && $(el).attr('y-value') != '') {
            if (type == number) {
                resultEq = $(el).attr('equation').replace('x', $(el).attr('x-value')).replace('y', $(el).attr('y-value'));
                result = eval(resultEq);
            } else {
                result = $(el).attr('x-value') + $(el).attr('y-value');
            }
        } else if ($(el).attr('x-value') == '') {
            result = 'Заполните x.'
        } else {
            result = 'Заполните y.'
        }
    } else {
        resultEq = $(el).attr('equation').replace('y', el.value)
        result = eval(resultEq)
    }
    $(el).parents('.tableBlockStr').find('.result').text(result);
}

function changeEquationValue(elem, type = number) {
    if ($(elem).attr('class') == 'x-value') {
        $(elem).attr(`x-value`, elem.value);
        $(elem).parents('.tableBlockStr').find('.y-value').attr(`x-value`, elem.value);
    } else {
        $(elem).attr(`y-value`, elem.value);
        $(elem).parents('.tableBlockStr').find('.x-value').attr(`y-value`, elem.value);
    }
    performAnAction(elem, true, type);
}

function checkEquation(el,type){
    let elem = $(el).parents('.tableBlockStr').find('.result');
    if (!elem.attr('xVal')) {
        elem.text('Заполните x');
        return false;
    }
    if (!elem.attr('yVal')) {
        elem.text('Заполните y');
        return false;
    }
    if (type == '1'){
        if (elem.attr('xVal') == 'true' && elem.attr('yVal') == 'true') {
            elem.text('true');
        } else {
            elem.text('false');
        }
    } else if (type == '2'){
        if (elem.attr('xVal') == 'true' || elem.attr('yVal') == 'true') {
            elem.text('true');
        } else {
            elem.text('false');
        }
    } else {
        if (elem.attr('xVal') == elem.attr('yVal')) {
            elem.text('false');
        } else {
            elem.text('true');
        }
    }
}

function checkToString(el){
    if(isNaN(el.value)) {
        el.value = '';
        $(el).parents('.tableBlockStr').find('.result').text('Введите число.');
        return true;
    }
    return false;
}

function checkTo1or0(el){
    if(isNaN(el.value) || /[2-9]/.test(+el.value)) {
        el.value = '';
        $(el).parents('.tableBlockStr').find('.resultBit').text('Введите или 1 или 0.');
        return true;
    }
    return false;
}

function resultBit(el,type = ''){
    let elem = $(el).parents('.tableBlockStr').find('.resultBit'),
        resultBit,
        result10;
    if (type == '') {
        resultBit = el.value.split('').map(function(el){
            return (el == '0') ? '1' : '0';
        }).join('');
        result10 = parseInt(resultBit,2);
        elem.text(resultBit);
        $(el).parents('.tableBlockStr').find('.result10').text(result10);
        return false;
    }
    if (!elem.attr('xVal')) {
        elem.text('Заполните x');
        return false;
    }
    if (!elem.attr('yVal')) {
        elem.text('Заполните y');
        return false;
    }
    let x = parseInt(elem.attr('xVal'), 2),
        y = parseInt(elem.attr('yVal'), 2);
    switch (type) {
        case 1:
            result10 = x & y;
            break;
        case 2:
            result10 = x | y;
            break;
        case 3:
            result10 = x ^ y;
            break;
        case 4:
            result10 = x << y;
            break;
        case 5:
            result10 = x >> y;
            break;
    }
    resultBit = result10.toString(2);
    if(resultBit.length < 4) {
        let len = 4 - parseInt(resultBit.length);
        for (let i = 0; i < len; i++){
            resultBit = '0' + resultBit;
        }
    }
    elem.text(resultBit);
    $(el).parents('.tableBlockStr').find('.result10').text(result10);
}

async function login() {
    const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "username": $('#login').val(),
            "password": $('#password').val()
        }) // body data type must match "Content-Type" header
    });
    let result = await response.json();
    if (result.error) {
        $('.error-message').text(result.message);
    } else {
        localStorage.setItem('token',result.token);
        $('.mainActive').css({ 'display': 'block' });
        $('.main').css({ 'display': 'none' });
        localStorage.setItem("start", new Date);
        $('.menu').css('display','block');
    }
}

function singinShow(type){
    if (type == 'singin'){
        $('.login').css('display', 'none');
        $('.singin').css('display', 'inline-block');
        $('div.singin').css('display', 'block');
    } else {
        $('.login').css('display', 'inline-block');
        $('.singin').css('display', 'none');
    }
}

async function singin() {
    const response = await fetch('http://localhost:5000/auth/registration', {
        method: 'POST', 
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "username": $('#login').val(),
            "password": $('#password').val(),
            "fio" : $('#fio').val(),
        }) 
    });
    let result = await response.json();
    if (result.error) {
        $('.error-message').text(result.message);
    } else {
        localStorage.setItem('token',result.token);
        $('.mainActive').css({ 'display': 'block' });
        $('.main').css({ 'display': 'none' });
        localStorage.setItem("start", new Date);
        $('.menu').css('display','block');
    }
}