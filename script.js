var panes = ['paneOne', 'paneTwo', 'paneThree', 'paneFour', 'paneFive', 'paneSix', 'paneSeven', 'paneEight'];
var a = 0;
document.querySelector('#' + panes[a]).scrollIntoView();
function scroller(direction) {

    if (direction === 'down') {
        if (a >= panes.length - 1) return;
        a = a + 1;
        document.querySelector('#' + panes[a]).scrollIntoView();
    } else if (direction === 'up') {
        if (a == 0) return;
        a = a - 1;
        document.querySelector('#' + panes[a]).scrollIntoView();
    }
}



function animatePaneTwo() {
    document.querySelector('#paneTwo').scrollIntoView();
    var intro = "Hello, My Name is Pascoal Daniel Fernandes.";
    var introElement = document.querySelector('#introElement');
    var i = 0;

    setInterval(function () {
        if (i < intro.length) {
            
            introElement.innerHTML += intro.charAt(i);
            i++;
        } else {
            clearInterval();
        }
    }, 100);
}