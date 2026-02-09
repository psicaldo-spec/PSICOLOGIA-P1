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

    var listLeft1;
    var listLeftHtml1;
    var listRight1;
    var orderLeft1;
    var orderRight1;



$(document).ready(function ()
{
	const questionIndex = 1;
	const questionTime = 0;

	PageLoad(questionIndex, questionTime);

	    listLeft1 = new CreateListLeft1();
    listLeftHtml1 = new CreateListLeftHtml1();
    listRight1 = new CreateListRight1();
    orderLeft1 = new ShuffleMatchingOrder(listLeft1.length);
    orderRight1 = new ShuffleMatchingOrder(listRight1.length);
    var hideLeftDropdown = false;
    var textHtml = CreateMatchingLists(listLeft1, listLeftHtml1, listRight1, orderLeft1, orderRight1, "idDD1", textSelect, hideLeftDropdown);
    $('#matching1').html(textHtml);
    var maxLeftSize = GetMaxSizeLeftColumn(listLeft1);
    var maxRightSize = GetMaxSizeRightColumn(listRight1);
    var leftWidth = maxLeftSize * 10;
    var rightWidth = maxRightSize * 10;
    ManageMatchingEvents(listLeft1, "idDD1", leftWidth, rightWidth, options.matchingLockLeftCol);
    SetDefaultLeftColumn(listLeft1, "idDD1", hideLeftDropdown);


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
function InitQuestion2()
{
    const type = QMAKE_MATCHING;
    const questionIndex = 1;
    var weight = DecodeNumber('JZwcgAZEISk=', 959, 0, 99999);
    var numOfAnswers = 4;
    var i, j;
    var answer;
    var choice, valuation;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('JZwcgAZEISk=', 959, -1000, 1000),DecodeDecimal('nfFc05Yvfig=', 959, -1000, 1000),DecodeDecimal('nfFc05Yvfig=', 959, -1000, 1000));
    question.num = 2;
    question.answers.length = 0;
    question.shortTextQuestion = "Relaciona el nombre de la teoria, con uno de sus representantes.";
    question.noChoice = false;
    for (i = 0; i < orderLeft1.length; i++)
    {
        choice = new Array(2);;
        choice[0] = GetSelectedItemLeft("idDD1", i);
        choice[1] = GetSelextedItemRight("idDD1", i);
        if (choice[1]==='') question.noChoice=true;
        valuation = new Array();
        for (j = 0; j < listLeft1.length; j++)
        {
            if (listLeft1[j] === choice[0])
            {
                valuation.push(listRight1[j]);
            }
        }
        answer = new Answer(choice, valuation, 1, 0, '');
        question.answers.push(answer);
    }
    return question;

}


/* Code generated function */
function ClearQuestion2()
{
    ClearMatching("idDD1", 0);
    ClearMatching("idDD1", 1);
    ClearMatching("idDD1", 2);
    ClearMatching("idDD1", 3);

}


/* Code generated function */
function CreateListLeft1()
{
    this.length = 4;
    this[0] = unescape(DecodeString("EzlVSPGr+zNbGwJy"));
    this[1] = unescape(DecodeString("CILooPirx6RiF5Mr"));
    this[2] = unescape(DecodeString("SiCQwefZIn08flSc"));
    this[3] = unescape(DecodeString("EzlVSPGr+zNbGwJy"));

}

/* Code generated function */
function CreateListRight1()
{
    this.length = 4;
    this[0] = unescape(DecodeString("0eAOBeeCgYc="));
    this[1] = unescape(DecodeString("72kMK3BjTRo="));
    this[2] = unescape(DecodeString("dcgHueV/Ehs="));
    this[3] = unescape(DecodeString("0eAOBeeCgYc="));

}

/* Code generated function */
function CreateListLeftHtml1()
{
    this.length = 4;

}





