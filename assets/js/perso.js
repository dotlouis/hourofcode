$(function(){

count();

// on répète la fonction toutes les secondes
setInterval(count, 1000);

function count(){
    // on créé une variable pour stocker l'information
    var now = new Date();
    var hour = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // pour voir les variables
    console.log(now);
    console.log(hour, minutes, seconds);

    // on créé le texte a mettre dans le html
    var counter = hour + 'h ' + minutes + 'm ' + seconds + 's';
    console.log(counter);

    // on le remplace dans le HTML
    $('.counter').html(counter);
}

});
