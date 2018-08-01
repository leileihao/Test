//window.addEventListener("load", function(){
  //window.alert("Hey!")
//});

function moveBar1() {
    var elem = document.getElementById("myBar1");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 90) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

moveBar1()

function moveBar2() {
    var elem = document.getElementById("myBar2");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 80) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

moveBar2()

function moveBar3() {
    var elem = document.getElementById("myBar3");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 70) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

moveBar3()

function moveBar4() {
    var elem = document.getElementById("myBar4");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 40) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

moveBar4()

function moveBar5() {
    var elem = document.getElementById("myBar5");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

moveBar5()

function moveBar6() {
    var elem = document.getElementById("myBar6");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

moveBar6()

function moveBar7() {
    var elem = document.getElementById("myBar7");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 75) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}

moveBar7()
