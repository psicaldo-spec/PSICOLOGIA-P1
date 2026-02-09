//=========================================
// File name: page_NNNNN.js
//-----------------------------------------
// Project : QuizFaber 4.1.9
// Licence : GNU General Public License v3.0
// Author  : Luca Galli
// Email   : info@quizfaber.com
//-----------------------------------------
// Script for NNNNN-th question
//=========================================



$(document).ready(function ()
{
	const questionIndex = 0;
	const questionTime = 0;

	PageLoad(questionIndex, questionTime);

	
});

$(window).on("beforeunload", function ()
{
	PageUnload();
	window.scrollTo(0, 0);
});

$(window).on("scroll", function ()
{
	PageOnScroll();
});


/* Code generated function */
function InitQuestion1()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 0;
    var weight = DecodeNumber('SzVoBweFtTM=', 179, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('DR2a+YiEIVU=', 375, -1000, 1000),DecodeDecimal('w4VVqwe6ZG8=', 733, -1000, 1000),DecodeDecimal('w4VVqwe6ZG8=', 733, -1000, 1000));
    question.num = 1;
    question.answers.length = 0;
    question.shortTextQuestion = "Elige la opción correcta para completar la oración.";
    question.noChoice = false;
    choice = $('#idGap1_0').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('tNJSgpS1kJEGbitbRVxdrMT4YWivXdNH3PaeBw=='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap1_1').val();
    if ((choice == null) || (choice === '')) question.noChoice=true;
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('gPUSKH2LgmkDZ20duS0onSrUDZ8='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}


/* Code generated function */
function ClearQuestion1()
{
    ClearFillTheGap(1,0);
    ClearFillTheGap(1,1);

}






