$(document).ready(function() {
    insertorMaster();
});

function insertorMaster() {
    var texto = $('.neon').text();
    texto2 = texto.split(" , ");
    var anchor = parseInt(texto.length - 1 / 2);

    var rng2 = Math.floor(Math.random() * (texto.length - anchor )) + anchor;
    var rng = Math.floor(Math.random() * ((anchor - 2) - 0 )) + 0;
    console.log(rng);
    console.log(rng2);
    var aquela = [];
    var j = 0;
    for (var i = 0; i < texto.length; i++) {
        switch (i) {
            case rng:
                aquela[j] = "<span>";
                j = j + 1;
                aquela[j] = texto[i];
                j = j + 1;
                aquela[j] = "</span>";
                j = j + 1;
                break;
            case rng2:
                aquela[j] = "<span>";
                j = j + 1;
                aquela[j] = texto[i];
                j = j + 1;
                aquela[j] = "</span>";
                j = j + 1;
                break;
            default:
                aquela[j] = texto[i];
                j = j + 1;
        }
      
    };

    var novoArray = aquela.join("");

    $('.neon').text("");
    $('.neon').append(novoArray);
}