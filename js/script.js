function submitAnswers() {

    var answers = ["b", "a", "d", "b", "d"];
    var totalQuestions = 5;
    var score = 0;
    var results = "";
    var isValid = true;
    var resultOutput = document.getElementById('results');

    // Get input from user
    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;

    // Validation (check for blank values)
    for( var i = 1; i <= totalQuestions; i++ ) {

        // Is the value of current question null/blank?
        if( eval( 'q' + i ) == null || eval( 'q' + i ) == '' ) {

            // Yes, add error message, and mark as invalid
            results += "Question " + i + " - Please select an answer <br/>";
            isValid = false;

        }

    }

    // Did form pass validation?
    if( isValid ) {

        // Yes, compare answers with selected values
        for( i = 1; i <= totalQuestions; i++ ) {

            // Does selected value match answer?
            if( eval( 'q' + i ) == answers[i - 1] ) {

                // Yes, chalk one to the score
                score++;

            }

        }

        // Style results div to match performance
        if( score > 3 ) {

            // 4 - 5 correct = Good / Green
            resultOutput.className = "good";

        } else if( score == 3 ) {

            //     3 correct = Average / Blue
            resultOutput.className = "average";

        } else {

            // 0 - 2 correct = Bad / Red
            resultOutput.className = "bad";

        }

        // Add score string to results variable
        results = "<h3>You scored <span>" + score + "</span> out of <span>" + totalQuestions + "</span></h3>";

    } else {

        // No, give div invalid class
        resultOutput.className = "invalid";

    }

    // Post results on HTML (works for valid / invalid)
    resultOutput.innerHTML = results;

    // Scroll user back to top of page (to show results)
    window.scrollTo( 0, 0 );

    // Prevent form from submitting
    return false;

}