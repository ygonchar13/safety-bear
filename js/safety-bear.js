$(document).ready(function() {


    var qArr = [{
            question: "Safety Bear is being challenged with a dangerous situation in the lab.  What should he do?",
            option: {
                a: 'Read the Safety Bear Safety Manual',
                b: 'Wing it and hope it goes well',
                c: 'Ask someone for help'
            },
            answer: {
                a: "Safety Bear reads the manual and proceeds to the next challenge unscathed.",
                b: "Safety Bear wings it and dies in a horrible fire. He'll learn next time.",
                c: "Safety Bear asks for help and proceeds to the next challenge with minor burns."
            }
        },{
            question: "Safety Bear is being challenged with a dangerous situation in the lab.</br>What should he do?",
            option: {
                a: 'Read the Safety Bear Safety Manual',
                b: 'Wing it and hope it goes well',
                c: 'Ask someone for help'
            },
            answer: {
                a: "Safety Bear reads the manual and proceeds to the next challenge unscathed.",
                b: "Safety Bear wings it and dies in a horrible fire. He'll learn next time.",
                c: "Safety Bear asks for help and proceeds to the next challenge with minor burns."
            }
        },],
        currentQuestionIndex = 0,
        isPlaying = true;

    function getQuestion(index) {
        var questionHtml = '<div class="row"><div class ="large-12 columns questions"><label class="question"></label></div>',
            answerHtml = '<div><input type="radio" name="options"><label></label></div>',
            $question = $(questionHtml),
            key;

        $('#question').html('');
        $('#results').html('');
        $question.find('.question').text(qArr[index].question);
        for (key in qArr[index].option) {
            var $answer = $(answerHtml);
            $answer.find('input').attr('value', key).attr('id', key);
            $answer.find('label').attr('for', key).text(qArr[index].option[key]);
            $question.find('.questions').append($answer);
        }
        $('#question').append($question);
        $('input[type=radio][name=options]').on('change', function(e) {
            var answer = this.value;

            $('#results').text(getAnswer(answer, currentQuestionIndex));
            $('#nextQuestionBtn').removeClass('disabled');
        });
    }

    function getAnswer(input, index) {
        return qArr[index].answer[input];
    }

    $('#nextQuestionBtn').on('click', function(e) {
    	if($(this).hasClass('disabled')){
    		return;
    	}
    	currentQuestionIndex++;
        getQuestion(currentQuestionIndex);
        $(this).addClass('disabled');
    });

    getQuestion(currentQuestionIndex);
});
