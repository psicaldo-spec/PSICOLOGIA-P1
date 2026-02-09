var allInitQuestionFunctions = new Array (
    InitQuestion1,
    InitQuestion2,
    InitQuestion3,
    InitQuestion4,
);

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
function InitQuestion3()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 2;
    var weight = DecodeNumber('x/OE3JSB/TM=', 1018, 0, 99999);
    var numOfAnswers = 4;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('x/OE3JSB/TM=', 1018, -1000, 1000),DecodeDecimal('M2W3V4TOPIU=', 1018, -1000, 1000),DecodeDecimal('M2W3V4TOPIU=', 1018, -1000, 1000));
    question.answers.length = 0;
    question.num = 3;
    question.isSingleAns = true;
    question.shortTextQuestion = "Observa la siguiente imagen e identifica que personaje es:  ";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('3GGTHja7SEA=', 1020, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = "Freud";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('aNs/pXfD+dw=', 381, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = "Pancho Villa";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('tZj0x+YRUeU=', 220, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = "A. Maslow";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    var valuation4 = DecodeNumber('a+3Ro6TFGYg=', 580, -1, 1);
    if (valuation4 === -2) PrintWrongKeyword(questionIndex);
    var answer4 = new Answer((choice == 4 ? 1 : 0), valuation4, 1, 0, '');
    answer4.shortTextAnswer = "Piaget";
    answer4.shortTextRemark = "";
    question.answers.push(answer4);
    return question;

}
/* Code generated function */
function InitQuestion4()
{
    const type = QMAKE_MULTIANS;
    const questionIndex = 3;
    var weight = DecodeNumber('snYqw2mCyRg=', 652, 0, 99999);
    var numOfAnswers = 3;
    var question = new Question(type, weight, numOfAnswers, DecodeDecimal('snYqw2mCyRg=', 652, -1000, 1000),DecodeDecimal('nCOvaCFdD4U=', 652, -1000, 1000),DecodeDecimal('nCOvaCFdD4U=', 652, -1000, 1000));
    question.answers.length = 0;
    question.num = 4;
    question.isSingleAns = true;
    question.shortTextQuestion = "Selecciona la imagen que corresponde a una neurona.";
    question.timeToAnswer = 0;
    var choice = GetSingleAnswerChoice(questionIndex);
    if (choice === 0) question.noChoice = true;
    var valuation1 = DecodeNumber('snYqw2mCyRg=', 654, -1, 1);
    if (valuation1 === -2) PrintWrongKeyword(questionIndex);
    var answer1 = new Answer((choice == 1 ? 1 : 0), valuation1, 1, 0, '');
    answer1.shortTextAnswer = " ";
    answer1.shortTextRemark = "";
    question.answers.push(answer1);
    var valuation2 = DecodeNumber('WrPJmy76Ttg=', 851, -1, 1);
    if (valuation2 === -2) PrintWrongKeyword(questionIndex);
    var answer2 = new Answer((choice == 2 ? 1 : 0), valuation2, 1, 0, '');
    answer2.shortTextAnswer = " ";
    answer2.shortTextRemark = "";
    question.answers.push(answer2);
    var valuation3 = DecodeNumber('J4dTKopqLmg=', 49, -1, 1);
    if (valuation3 === -2) PrintWrongKeyword(questionIndex);
    var answer3 = new Answer((choice == 3 ? 1 : 0), valuation3, 1, 0, '');
    answer3.shortTextAnswer = " ";
    answer3.shortTextRemark = "";
    question.answers.push(answer3);
    return question;

}
