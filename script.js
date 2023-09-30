var questions = 28;

document.getElementById('checkAnswers').addEventListener('click', function() {
    // Zde můžete prověřit odpovědi a nastavit zobrazení kódu "giftcrafd" podle vaší logiky
    var right = true;
    for(var x = 1; x <= questions; x++) {
        if(document.querySelector('input[name="answer' + x + '"]:checked') == null) {
            alert('Odpověz na všechny otázky!')
            return;
        }
        var ans = document.querySelector('input[name="answer' + x + '"]:checked').value;
        if(ans != "right") right = false;
    }

    if (right) { // Zkontroluje, zda byla vybrána a jestli má hodnotu 'hruška'
        alert("Otázky byly správné! Na konci stránky se nachází kód");
        document.getElementById('giftcode').style.display = 'block';
        document.getElementById('giftcodeText').textContent = 'Kód za výhru je: RA-W3AYSNP8T2KGC2UU';
    } else {
        alert('Odpovědi nejsou správné.');
    }
});

document.getElementById("getCode").addEventListener('click', function() {
    var code = "";
    for(var x = 1; x <= questions; x++) {
        if(document.querySelector('input[name="answer' + x + '"]:checked') == null) {
            alert('Odpověz na všechny otázky!')
            return;
        }
        if(document.getElementById("answer" + x + "A").checked) code += "1";
        else if(document.getElementById("answer" + x + "B").checked) code += "2";
        else if(document.getElementById("answer" + x + "C").checked) code += "3";
        else if(document.getElementById("answer" + x + "D").checked) code += "4";
    }
    document.getElementById("idText").innerHTML = "Tvoje ID: " + code;
})

function checkID(writenID = "") {
    for(var x = 1; x <= questions; x++) {
        var text = "";
        if(writenID.split("")[x-1] == "1") text = "A";
        if(writenID.split("")[x-1] == "2") text = "B";
        if(writenID.split("")[x-1] == "3") text = "C";
        if(writenID.split("")[x-1] == "4") text = "D";
        document.getElementById("answer" + x + text).checked = true;
    }
}

document.getElementById("submitCode").addEventListener('click', function() {
    var validCode = "4G7T9K1Q6P";
    var code = document.getElementById("codeInput").value;
    if(validCode == code) {
        alert("Byli zodpovězené otázky: 5, 8, 10, 13, 17");
        document.getElementById("answer5D").checked = true;
        document.getElementById("answer8D").checked = true;
        document.getElementById("answer10A").checked = true;
        document.getElementById("answer17B").checked = true;
    } else {
        alert("Kód není správný");
    }
})

function showNextAlert() {
    var alerts = [
        'Vítej na stránce! Zde máš pár tipů',
        '1. zadej svůj kód, který jsi získal přečtením informací',
        '2. ptej se na otázky, které na 100% nevíš, máš pouze 2 povolené otázky',
        '3. pokud to vyhraješ a nepošleš tak se dalších soutěžích nebudeš moct zúčastnit',
        '4. nezapomeň, že i pokud nevyhraješ a správně odpovíš, tak budeš mít nějaké výhody do další'
    ];

    function showAlert(index) {
        var message = alerts[index];
        if (message) {
            var confirmed = confirm(message);
            if (confirmed) {
                showAlert(index + 1); // Zobrazit další alert
            }
        }
    }

    // Začít s prvním alertem
    showAlert(0);
}

// Volat funkci showNextAlert po načtení stránky
window.onload = function() {
    showNextAlert();
};