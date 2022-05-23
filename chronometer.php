<!doctype html>
<html lang="fr">
    <head>
    <meta charset="utf-8">
    <title>Oclock</title>

    <link rel="stylesheet" href="header.css">
    <script src="header_script.js"></script>
    <script src="chronometer_script.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap" rel="stylesheet">
    </head>

    <body>

        <?php require('header.php') ; ?>

        <div class="row_container">

            <div id="chronometer">
                <div id="chrono"><span id="hours">00</span>:<span id="minutes">00</span>:<span id="seconds">00</span></div>
                <div id="buttons">
                    <button class="button" id="start-and-stop">Start</button>
                    <button class="button" id="round">Tour</button>
                    <button class="button" id="reset">Reset</button>
                </div>
                <div>
                    <ul id="round-list">

                    </ul>

                </div>

            </div>

        </div>

    
    </body>
</html>