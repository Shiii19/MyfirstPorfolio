//console.log(`Give me chicken!`)
//console.log(`Where's my favorite food?`)

//window.alert(`Warning! May kyut na darating!`)

//document.getElementById("myH1").textContent = `Hello Everyone!`;
//document.getElementById("myP").textContent = `Tommorow is another day of blessing.`;

//let x;
//x = 230;
//let gwa = 1.50;

//let firstName = "Sherlyn";

//let age;
//age = 23;

//let age1;
//age1 = 24;

//console.log(`My name is ${firstName}`);
//console.log(`Im ${age} years old and turn to ${age1} next month`);

$ (document).ready(function() {
    var envelope = $ ('#envelope');
    var btn_open = $ ('#open');
    var btn_reset = $ ('#reset');

    envelope.click(function() {
        open();
    });
    btn_open.click(function() {
        open()
    });
    btn_reset.click(function() {
        close()
    });

    function open() {
        envelope.addClass('open')
            .removeClass('close');
    }

    function close() {
        envelope.addClass('close')
            .removeClass('open');
    }
})