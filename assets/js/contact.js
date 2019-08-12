/*

Script  : Contact Form
Version : 1.0
Author  : Surjith S M
URI     : http://themeforest.net/user/surjithctly

Copyright © All rights Reserved
Surjith S M / @surjithctly

*/

$(function () {

    "use strict";


    /* ================================================
   jQuery Validate - Reset Defaults
   ================================================ */

    $.validator.setDefaults({
        ignore: [],
        highlight: function (element) {
            //$(element).closest('.form-group').addClass('has-error');
            $(element).addClass('is-invalid');
        },
        unhighlight: function (element) {
            //$(element).closest('.form-group').removeClass('has-error');
            $(element).removeClass('is-invalid');
        },
        errorElement: 'div',
        errorClass: 'invalid-feedback',
        errorPlacement: function (error, element) {
            if (element.parent('.input-group').length || element.parent('label').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }
    });

    /* 
    VALIDATE
    -------- */

    var $phpcontactform = $("#phpcontactform");
    var $jscontactbtn = $("#js-contact-btn");
    var $jscontactresult = $("#js-contact-result");

    $phpcontactform.submit(function (e) {
        e.preventDefault();
    }).validate({
        rules: {
            first_name: "required",
            last_name: "required",
            email: {
                required: true,
                email: true
            },
            phone: "required",
            address: "required",
        },
        messages: {
            first_name: "Your first name please",
            last_name: "Your last name please",
            email: {
                required: "Please enter your email address",
                email: "Please enter a valid email address"
            },
            phone: "Please enter your phone number",
            address: "Please enter your address",
        },
        submitHandler: function (form) {

            $jscontactbtn.attr("disabled", true);

            /* 
            CHECK PAGE FOR REDIRECT (Thank you page)
            ---------------------------------------- */

            var redirect = $phpcontactform.data('redirect');
            var noredirect = false;
            if (redirect == 'none' || redirect == "" || redirect == null) {
                noredirect = true;
            }

            $jscontactresult.html('<p class="help-block text-center mt-3 mb-0">Please wait...</p>');

            /* 
            FETCH SUCCESS / ERROR MSG FROM HTML DATA-ATTR
            --------------------------------------------- */

            var success_msg = $jscontactresult.data('success-msg');
            var error_msg = $jscontactresult.data('error-msg');

            var dataString = $(form).serialize();

            /* 
             AJAX POST
             --------- */

            $.ajax({
                type: "POST",
                data: dataString,
                url: "php/contact.php",
                cache: false,
                success: function (d) {
                    if (d == 'success') {
                        if (noredirect) {
                            $phpcontactform[0].reset();
                            $jscontactresult.fadeIn('slow').html('<div class="mt-3 mb-0 alert alert-success text-center">' + success_msg + '</div>').delay(3000).fadeOut('slow');
                        } else {
                            window.location.href = redirect;
                        }
                    } else {
                        $jscontactresult.fadeIn('slow').html('<div class="mt-3 mb-0 alert alert-danger text-center">' + error_msg + '</div>').delay(3000).fadeOut('slow');
                        if (window.console) {
                            console.log('PHP Error: ' + d);
                        }
                    }
                    $jscontactbtn.attr("disabled", false);
                },
                error: function (d) {
                    $jscontactresult.fadeIn('slow').html('<div class="mt-3 mb-0 alert alert-danger text-center"> Cannot access Server</div>').delay(3000).fadeOut('slow');
                    $jscontactbtn.attr("disabled", false);
                    if (window.console) {
                        console.log('Ajax Error: ' + d.statusText);
                    }

                }
            });
            return false;

        }
    });

})