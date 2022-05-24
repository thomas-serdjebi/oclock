<!doctype html>
<html lang="fr">
    <head>
    <meta charset="utf-8">
    <title>Oclock</title>
    <link rel="stylesheet" href="alarm_style.css">
    <link rel="stylesheet" href="header.css">
    <script src="header_script.js"></script>
    <script src="alarm_script.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap" rel="stylesheet">
    </head>

    <body>

        <?php require('header.php') ; ?>

        <main>

            <h1>Set your alarm</h1>

            <div class="row_container">

                <!-- HORLOGE + ALARM -->
                <div id="alarm">

                   
                    <input type="time" name="alarm" id="alarm-input">
                    <input type="text" name="alarm-text" id="alarm-text" placeholder="Alarm name ">
                   
                   
                    <div class="controls">
                        <button class="button set-alarm" id="set-alarm">Set alarm</button>
                        <button class="button clear-alarm" id="clear-alarm">Clear alarm</button>
                    </div>

                </div>


            </div>

            <div><ul id="alarm-list"></ul></div>

        </main>

    
    </body>
</html>