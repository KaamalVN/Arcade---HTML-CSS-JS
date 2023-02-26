function showQuestion(qnum) {
    var question = questions[qnum-1];
    var popup = window.open('', 'quiz', 'width=400,height=300');
    popup.document.write('<h1>' + question.title + '</h1>');
    popup.document.write('<p>' + question.question + '</p>');
    popup.document.write('<form>');
    for (var i = 0; i < question.choices.length; i++) {
       popup.document.write('<input type="radio" name="answer" value="' + question.choices[i] + '">' + question.choices[i] + '<br>');
    }
    popup.document.write('<input type="button" value="Submit" onclick="checkAnswer(' + qnum + ')">');
    popup.document.write('</form>');
 }
 function checkAnswer(qnum) {
    var question = questions[qnum-1];
    var popup = window.opener;
    var answer = popup.document.querySelector('input[name="answer"]:checked');
    if (answer === null) {
       alert('Please select an answer');
       return;
    }
    if (answer.value === question.answer) {
       popup.document.write('<p>Correct!</p>');
    } else {
       popup.document.write('<p>Incorrect. The correct answer is ' + question.answer + '.</p>');
    }
    popup.document.write('<input type="button" value="Close" onclick="window.close()">');
 }
  