$(document).ready(function () {
    var Random = Math.floor(Math.random() * 101 + 19);

    var wins = 0;
    var losses = 0;
    var counter = 0;
    $("#wins").text(wins);
    $("#losses").text(losses);
    
    var first = Math.floor(Math.random() * 11 + 1)
    var second = Math.floor(Math.random() * 11 + 1)
    var third = Math.floor(Math.random() * 11 + 1)
    var fourth = Math.floor(Math.random() * 11 + 1)

    $("#guessNumber").text(Random);

    function reset() {
        Random = Math.floor(Math.random() * 101 + 19);

        $('#guessNumber').text(Random);
        first = Math.floor(Math.random() * 11 + 1);
        second = Math.floor(Math.random() * 11 + 1);
        third = Math.floor(Math.random() * 11 + 1);
        fourth = Math.floor(Math.random() * 11 + 1);
        counter = 0;
        $("#totalScore").text(counter);
    }

    function success() {
        alert("You won!");
        wins++;
        $("#wins").text(wins);
        reset();
    }
    function failure() {
        alert("You lose!");
        losses++;
        $("#losses").text(losses);
        reset()
    }

    $("#power").on("click", function () {
        counter = counter + first;
        $("#totalScore").text(counter);

        if (counter == Random) {
            success();
        }
        else if (counter > Random) {
            failure();
        }
    })
    $("#reality").on('click', function () {
        counter = counter + second;
        $("#totalScore").text(counter);

        if (counter == Random) {
            success();
        }
        else if (counter > Random) {
            failure();
        }
    })
    $("#time").on('click', function () {
        counter = counter + third;
        $("#totalScore").text(counter);
        if (counter == Random) {
            success();
        }
        else if (counter > Random) {
            failure();
        }
    })
    $("#soul").on('click', function () {
        counter = counter + fourth;
        $("#totalScore").text(counter);

        if (counter == Random) {
            success();
        }
        else if (counter > Random) {
            failure();
        }
    })
});
