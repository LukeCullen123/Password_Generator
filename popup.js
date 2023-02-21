var slider = document.getElementById("myRange");
var output = document.getElementById("len");
console.log(document.getElementById("len"));
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {

    output.innerHTML = this.value;
}

function copyTextToClipboard(text) {
    //https://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript?answertab=votes#tab-top
    var textArea = document.createElement("textarea");
    textArea.style.position = 'fixed';
    textArea.style.top = 0;
    textArea.style.left = 0;
    textArea.style.width = '2em';
    textArea.style.height = '2em';
    textArea.style.padding = 0;
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
    textArea.style.background = 'transparent';
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
    } catch (err) {}

    document.body.removeChild(textArea);
}

function pasgen() {
    var length = document.getElementById("myRange").value;
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;

    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    document.getElementById("password").innerHTML = result;
}

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById("passwordGen");

    link.addEventListener("click",
        function() {
            pasgen();
        });
});

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById("copy");

    link.addEventListener("click",
        function() {
            copyTextToClipboard(document.getElementById("password").innerHTML);
        });
});