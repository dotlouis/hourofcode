$(function(){

    var deadline;

    $('.start').click(function(){
        deadline = $('.date').val();
        clearInterval(firstInterval);
        setInterval(countDown, 1000);
    });

    function countDown(){
        var remainingTime = getRemainingTime(deadline);

        var days = remainingTime.days;
        var hours = remainingTime.hours;
        var minutes = remainingTime.minutes;
        var seconds = remainingTime.seconds;

        var counter = days + 'd '+ hours + 'h ' + minutes + 'm ' + seconds + 's';

        $('.counter').html(counter);
    }

    var firstInterval = setInterval(count, 1000);

    function count(){
        // on créé une variable pour stocker l'information
        var now = new Date();
        var hour = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();

        // pour voir les variables
        // console.log(now);
        // console.log(hour, minutes, seconds);

        // on créé le texte a mettre dans le html
        var counter = hour + 'h ' + minutes + 'm ' + seconds + 's';
        // console.log(counter);

        // on le remplace dans le HTML
        $('.counter').html(counter);
    }

    // see https://gist.github.com/dot-louis/b6cd42ed74ed448415bd
    function getRemainingTime(endtime){
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor( (t/1000) % 60 );
        var minutes = Math.floor( (t/1000/60) % 60 );
        var hours = Math.floor( (t/(1000*60*60)) % 24 );
        var days = Math.floor( t/(1000*60*60*24) );
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

});
