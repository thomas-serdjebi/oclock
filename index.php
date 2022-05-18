<!doctype html>
<html lang="fr">
    <head>
    <meta charset="utf-8">
    <title>Oclock</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap" rel="stylesheet">
    </head>

    <body>

        <!-- HORLOGE + ALARM -->
        <div id="oclock_alarm">

            <div id="clock"></div>
            <input type="datetime-local" name="alarm" id="alarm">
            <div class="controls">
                <button class="button set-alarm" id="set-alarm">Set alarm</button>
                <button class="button clear-alarm" id="clear-alarm">Clear alarm</button>
            </div>

        </div>

        <!-- MINUTEUR -->
        <div id="countdown-timer">

            <p id="hour-label" class="label">Hours</p><p id="min-label" class="label">Minutes</p><p id="sec-label" class="label">Seconds</p>
            <input id="hour" type="number" max="99" min="0" value="0" class="time"><p id="p1" class="semicolon">:</p><input id="minute" type="number" max="60" min="0" value="0" class="time"><p id="p2" class="semicolon">:</p><input id="second" type="number" max="60" min="0" value="0" class="time">
            <button id="start" class="btn">Start</button>
            <button id="reset" class="btn">Reset</button>

        </div>

    
    </body>
</html>