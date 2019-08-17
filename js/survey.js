$(function () {

    /********** constant variables ***********/
    const contentListAnswer = $('.contentListAnswer'),
        age = $('.age__selection'),
        otherSports = $('.other-sports__selection'),
        signupWordList = $('#signup-clickWordList li'),
        featuresWordList = $('#features-clickWordList li'),
        dislikeWordList = $('#dislike-clickWordList li'),
        signupMessage = $('#signup-txtMessage'),
        featuresMessage = $('#features-txtMessage'),
        dislikeMessage = $('#dislike-txtMessage'),
        recommend = $('.recommend__selection'),
        hidden_btn = $('.temp-hide-btn'),

        yesBtn = $('#yes-btn'),
        noBtn = $('#no-btn'),
        yesSection = $('#yes-section'),
        noSection = $('#no-section'),
        btnsArray = [yesBtn, noBtn],
        wordListArray = [signupWordList, featuresWordList, dislikeWordList],
        messageListArray = [signupMessage, featuresMessage, dislikeMessage];


    // temporarily hides submit button
    function hideMe() {
        hidden_btn.hide();
    }

    hideMe();
    // hide submit button on next section until select made
    hidden_btn.bind('click', function () {
        $(this).hide();
    });


    /**** initial page yes (Enter to Win) and no (not interested) buttons ****/
    $.each(btnsArray, function (index, value) {
        value.on('click', function () {
            $(this).parent().parent().children().css('visibility', 'hidden');

            if ($(this).is(yesBtn)) {
                yesSection.slideToggle();
            } else {
                noSection.slideToggle();
            }
        });
    });

    /********** contentPref-questions ***********/

    function contentList() {
        contentListAnswer.on('click', function () {
            //let $parent = $(this).parent();
            let $span = $(this).find('.fa');
            //add .correctAnswer class
            $(this).toggleClass('correctAnswer correct');
            //find next span and change icon
            if ($(this).hasClass('correctAnswer correct')) {
                $(this).addClass('correct');
                $span.removeClass('fa fa-square-o').addClass('fa fa-check-square-o');
            } else if (!$(this).hasClass('correctAnswer correct')) {
                $(this).removeClass('correct');
                $span.removeClass('fa fa-check-square-o').addClass('fa fa-square-o');
            }

            // determine if any selections have been selected and then show submit button
            if ($('.contentList').children().hasClass('correctAnswer correct') > 0) {
                hidden_btn.fadeIn("slow");
            } else {
                hidden_btn.fadeOut("slow");
            }


            //deactivate options on click
            //$parent.find(contentListAnswer).off('click');

            // check for .correct class
            // if yes
            // if ($(this).hasClass('correct')) {
            //     //add .correctAnswer class
            //     $(this).addClass('correctAnswer');
            //     //find next span and change icon
            //     $span.removeClass('fa fa-square-o').addClass('fa fa-check-square-o');
            //     //reduce opacity of other options
            //     $(this).siblings().addClass('fade');
            // }
        });
    }

    contentList();

    /***** singleHighLight function *****/

    function singleHighLight() {
        $([age, recommend]).each(function () {
            // console.log($(this).children());
            $(this).on('click', function () {
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active').addClass('fade');
                    $(this).children().removeClass('my_hover').attr('disabled', 'disabled');
                } else if (!$(this).hasClass('active')) {
                    $(this).addClass('active');
                    $(this).siblings().removeClass('active').addClass('fade');
                    $(this).children().removeClass('my_hover').attr('disabled', 'disabled');
                    $(this).siblings().children().removeClass('my_hover').attr('disabled', 'disabled');
                }
            });
        });
    }

    singleHighLight(); // singleHighlight


    /***** multipleHighLight function *****/

    function multipleHighLight() {
        $([otherSports]).each(function () {
            $(this).on('click', function () {
                $(this).addClass('active').removeClass('my_hover');
                $(this).next('li').attr('disabled', 'disabled');
                if(!$(this).hasClass('active')) {
                    hidden_btn.fadeOut('slow');
                } else {
                  hidden_btn.fadeIn('slow');
                }
            });
        });
    }

    multipleHighLight(); // multipleHighlight


    /******* scroll function *********/
    $('.scrollTo').on('click', function () {

        // data-scrollTo = section scrolling to name
        const scrollTo = $(this).attr('data-scrollTo');

        // toggle active class on and off.
        $(this).each(function () {
            if (scrollTo === $(this).attr('data-scrollTo')) {
                $(this).addClass('on');
                console.log(scrollTo);
                if(scrollTo === 'yes-section') {
                    $('#yes-questions-intro').slideToggle();
                    $('#decision').slideToggle();

                } else if(scrollTo === 'recommend-questions') {
                    $('#recommend-questions').slideToggle();
                    $('#yes-questions-intro').slideToggle();

                } else if(scrollTo === 'ageRange-questions') {
                    $('#ageRange-questions').slideToggle();
                    $('#recommend-questions').slideToggle();

                } else if(scrollTo === 'contentPref-questions') {
                    $('#contentPref-questions').slideToggle();
                    $('#ageRange-questions').slideToggle();


                } else if(scrollTo === 'otherSportsPref-questions') {
                    $('#otherSportsPref-questions').slideToggle();
                    $('#contentPref-questions').slideToggle();

                } else if(scrollTo === 'freeForm-questions') {
                    $('#otherSportsPref-questions').slideToggle();
                    $('#freeForm-questions').slideToggle();


                } else if(scrollTo === 'timePref-questions') {
                    $('#freeForm-questions').slideToggle();
                    $('#timePref-questions').slideToggle();


                } else if(scrollTo === 'features-questions') {
                    $('#timePref-questions').slideToggle();
                    $('#features-questions').slideToggle();

                } else if(scrollTo === 'conclusion-yes') {
                    $('#features-questions').slideToggle();
                    $('#conclusion-yes').slideToggle();

                } // start no-section
                else if(scrollTo === 'no-section') {
                    $('#no-questions-intro').slideToggle();
                    $('#decision').slideToggle();

                } else if(scrollTo === 'dislike-questions') {
                    $('#dislike-questions').slideToggle();
                    $('#no-questions-intro').slideToggle();

                } else if(scrollTo === 'contentPref-questions_no') {
                    $('#contentPref-questions_no').slideToggle();
                    $('#dislike-questions').slideToggle();

                } else if(scrollTo === 'otherSportsPref-questions_no') {
                    $('#otherSportsPref-questions_no').slideToggle();
                    $('#contentPref-questions_no').slideToggle();


                } else if(scrollTo === 'timePref-questions_no') {
                    $('#timePref-questions_no').slideToggle();
                    $('#otherSportsPref-questions_no').slideToggle();

                } else if(scrollTo === 'ageRange-questions_no') {
                    $('#ageRange-questions_no').slideToggle();
                    $('#timePref-questions_no').slideToggle();


                } else if(scrollTo === 'conclusion-no') {
                    $('#conclusion-no').slideToggle();
                    $('#ageRange-questions_no').slideToggle();
                }

            } else {
                $(this).removeClass('on');
            }
        });

        //animate and scroll to the section
        $('body, html').animate({
            // the magic - scroll to section
            scrollTop: $('#' + scrollTo).offset().top
        }, 700);

        //hide submit button again when scroll to next section
        hideMe();

    }); // scroll


    /******* Sign-Up, features and dislike Message Boxes ******/
    $.each(wordListArray, function (index, value) {
        value.on('click', function (e) {
            if ($(this).is(signupWordList)) {
                signupMessage.insertAtCart($(this).text());
                hidden_btn.fadeIn('slow');
            } else if ($(this).is(featuresWordList)) {
                featuresMessage.insertAtCart($(this).text());
                hidden_btn.fadeIn('slow');
            } else if ($(this).is(dislikeWordList)) {
                dislikeMessage.insertAtCart($(this).text());
                hidden_btn.fadeIn('slow');
            }
            e.preventDefault();
        });
    });

    // determines if textarea has text if it doesn't hide submit button
    $.each(messageListArray, function (index, value) {
        value.on('mouseenter mouseleave touchstart touchend touchmove touchcancel', function () {
            if (value.is(signupMessage)) {
                const signUpTrim = $.trim($(this).val());
                if (signUpTrim !== "") {
                    hidden_btn.fadeIn('slow');
                } else if (signUpTrim === ""){
                    hidden_btn.fadeOut('slow');
                }
            } else if (value.is(featuresMessage)) {
                const featuresTrim = $.trim($(this).val());
                if(featuresTrim !== "") {
                    hidden_btn.fadeIn('slow');
                } else if (featuresTrim === ""){
                    hidden_btn.fadeOut('slow');
                }
            } else if (value.is(dislikeMessage)) {
                const dislikeTrim = $.trim($(this).val());
                if(dislikeTrim !== "") {
                    hidden_btn.fadeIn('slow');
                } else if (dislikeTrim === ""){
                    hidden_btn.fadeOut('slow');
                }
            }
        });
    });


    $.fn.insertAtCart = function (myValue) {
        return this.each(function () {
            //IE support
            if (document.selection) {
                this.focus();
                let sel = document.selection.createRange();
                // console.log(sel.text = myValue);
                this.focus();
            }

            //FireFox support
            else if (this.selectionStart || this.selectionStart === '0') {
                const startPos = this.selectionStart,
                    endPos = this.selectionEnd;
                this.value = this.value.substring(0, startPos)
                    + myValue + this.value.substring(endPos, this.value.length);
                this.focus();
                this.selectionStart = startPos + myValue.length;
                this.selectionEnd = startPos + myValue.length;
            } else {
                this.value += myValue;
                this.focus();
            }
        });
    };

    //clickable features
    $('#click1').text('Feature 1: Lorem ipsum dolor sit amet, consectetur adipisicing elit.');
    $('#click2').text('Feature 2: Lorem ipsum dolor sit amet, consectetur adipisicing elit.');
    $('#click3').text('Feature 3: Lorem ipsum dolor sit amet, consectetur adipisicing elit.');
    //clickable testimonies
    $('#click4').text('Testimony 1: Lorem ipsum dolor sit amet, consectetur adipisicing elit.');
    $('#click5').text('Testimony 2: Lorem ipsum dolor sit amet, consectetur adipisicing elit.');
    $('#click6').text('Testimony 3: Lorem ipsum dolor sit amet, consectetur adipisicing elit.');
    //clickable dislikes
    $('#click7').text('Dislike 1: Lorem ipsum dolor sit amet, consectetur adipisicing elit.');
    $('#click8').text('Dislike 2: Lorem ipsum dolor sit amet, consectetur adipisicing elit.');
    $('#click9').text('Dislike 3: Lorem ipsum dolor sit amet, consectetur adipisicing elit.');

// disable scroll on mobile devices
    const targetElement = $('body');
    bodyScrollLock.disableBodyScroll(targetElement);

});//()