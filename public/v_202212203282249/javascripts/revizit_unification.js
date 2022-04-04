var translate = window.translate;
var validatePasswordComplexity = window.validatePasswordComplexity;

(function($) {

  // for login_unification.html
  $("#username").bind('focus', function() {
    $(".form-email .form-field__label").addClass("is-active");
    $("#username").removeAttr('placeholder');
  });

  $("#username").bind('focusout', function() {
    if ($("#username").val() === '') {
      $(".form-email .form-field__label").removeClass("is-active");
      $("#username").attr('placeholder', translate("COMMON_EMAIL_FIELD_LABEL"));
    }
  });

  $("#password").bind('focus', function() {
    $(".form-password .form-field__label").addClass("is-active");
    $("#password").removeAttr('placeholder');
  });

  $("#password").bind('focusout', function() {
    if ($("#password").val() === '') {
      $(".form-password .form-field__label").removeClass("is-active");
      $("#password").attr('placeholder', translate("COMMON_PASSWORD_FIELD_LABEL"));
    }
  });

  // for signup_unification.html
  $("#signup-realname").bind('focus', function() {
    $(".form-signup-realname .form-field__label").addClass("is-active");
    $("#signup-realname").removeAttr('placeholder');
  });

  $("#signup-realname").bind('focusout', function() {
    if ($("#signup-realname").val() === '') {
      $(".form-signup-realname .form-field__label").removeClass("is-active");
      $("#signup-realname").attr('placeholder', translate("SIGNUP_MODAL_REAL_NAME_FIELD_LABEL"));
    }
  });

  $("#signup-email").bind('focus', function() {
    $(".form-signup-email .form-field__label").addClass("is-active");
    $("#signup-email").removeAttr('placeholder');
    $('#form--account-signup').find('.email-warning').hide();
  });

  $("#signup-email").bind('focusout', function() {
    if ($("#signup-email").val() === '') {
      $(".form-signup-email .form-field__label").removeClass("is-active");
      $("#signup-email").attr('placeholder', translate("COMMON_EMAIL_FIELD_LABEL"));
    }
  });

  $("#signup-password").bind('focus', function() {
    $(".form-signup-password .form-field__label").addClass("is-active");
    $("#signup-password").removeAttr('placeholder');
  });

  $("#signup-password").bind('focusout', function() {
    if ($("#signup-password").val() === '') {
      $(".form-signup-password .form-field__label").removeClass("is-active");
      $("#signup-password").attr('placeholder', translate("COMMON_PASSWORD_FIELD_LABEL"));
    }
  });

  $("#signup-password-confirm").bind('focus', function() {
    $(".form-signup-password-confirm .form-field__label").addClass("is-active");
    $("#signup-password-confirm").removeAttr('placeholder');
  });

  $("#signup-password-confirm").bind('focusout', function() {
    if ($("#signup-password-confirm").val() === '') {
      $(".form-signup-password-confirm .form-field__label").removeClass("is-active");
      $("#signup-password-confirm").attr('placeholder', translate("COMMON_CONFIRM_FIELD_LABEL"));
    }
  });

  // for reset password
  $("#password-recover").bind('focus', function() {
    $(".form-password-recover .form-field__label").addClass("is-active");
    $("#password-recover").removeAttr('placeholder');
  });

  $("#password-recover").bind('focusout', function() {
    if ($("#password-recover").val() === '') {
      $(".form-password-recover .form-field__label").removeClass("is-active");
      $("#password-recover").attr('placeholder', translate("COMMON_EMAIL_FIELD_LABEL"));
    }
  });

  var $formSignup = $('#form--account-signup');
  var $formPasswordRecover = $('#form--password-recover');

  // Reset default messages.
  $.validator.messages.required = translate("MODAL_ERROR_REQUIRED_FIELD_DEFAULT");
  $.validator.messages.email = translate("MODAL_ERROR_INVALID_EMAIL");
  $.validator.messages.minlength = translate("MODAL_ERROR_MINLENGTH_PASSWORD");

  // Check if select list is set to "-None-".
  $.validator.addMethod("selectNone", function(value, element) {
    if (value === "_none" || value === "*" || value === "#empty_value" || value === " ") {
      return false;
    }
    return true;
  }, translate("MODAL_ERROR_REQUIRED_FIELD_DEFAULT"));

  // The following regexes are taken from Corp WWW for the marketing lead generation form.
  // These are intended as a fairly permissive front-end validation supplementing server side validation.
  // In lieu of listing out all the unicode blocks, see: http://www.unicode.org/Public/UNIDATA/Blocks.txt
  //
  // This addresses:
  // FROM \u00C0 - Start of Latin alphabet with diacritics range
  // TO \u1FFF - Greek extended alphabet
  //
  // This range below covers the majority of Chinese Japanese Korean (CJK) range, along with some uncommon characters.
  // FROM \u2800 - Braille Patterns
  // TO \uFFFD - Special characters
  // Check if the input is alphanumeric
  $.validator.addMethod("isAlphaNum", function(value, element) {
    return /^([a-zA-Z0-9\u00C0-\u1FFF\u2800-\uFFFD\u0027\u2018\u2019\s\-\_\,\.'\(\)\&\/\:#\pL\" ]*)?$/.test($(element).val());
  }, translate("MODAL_ERROR_INVALID_ALPHANUM"));
  // Check if input is a valid password
  $.validator.addMethod("complexity", function(value, element) {
    return validatePasswordComplexity(value);
  }, translate("COMMON_PASSWORD_FIELD_INSTRUCTION"));

  if ($formSignup.length) {
    var signupFormValidator = $formSignup.validate({
      errorPlacement: function(error, element) {
        error.insertAfter(element.parent().find('.form-field__description'));
      },
      rules: {
        'signup-realname': {
          required: true,
          isAlphaNum: true
        },
        'signup-email': {
          required: true,
          email: true
        },
        'signup-password' : {
          required: true,
          complexity: true
        },
        'signup-password-confirm' : {
          required: true,
          equalTo: '#signup-password'
        },
        'signup-legal' : {
          required: true
        }
      },
      messages: {
        'signup-realname': {
          required: translate("MODAL_ERROR_REQUIRED_NAME")
        },
        'signup-email': {
          required: translate("MODAL_ERROR_REQUIRED_EMAIL")
        },
        'signup-password': {
          complexity: ''
        },
        'signup-password-confirm': {
          required: translate("MODAL_ERROR_REQUIRED_CONFIRM_PASSWORD"),
          equalTo: translate("MODAL_ERROR_REQUIRED_MATCHING_PASSWORDS")
        },
        'signup-legal': {
          required: translate("MODAL_ERROR_REQUIRED_LEGAL")
        }
      },
      highlight: function(element, errorClass) {
        // if you want to highlight the instruction instead of adding a new error message,
        // you need to manually toggle the highlight and untoggle it
        switch (jQuery(element).attr('id')) {
          case 'signup-password':
            $(element).parent().find('.instruction').addClass(errorClass);
            break;
          default:
          // do nothing
        }
        jQuery(element).addClass(errorClass);
      },
      unhighlight: function(element, errorClass) {
        $(element).removeClass(errorClass);
        $(element).parent().find('.instruction').removeClass(errorClass);
      }
    });

    var email_in_use = true;

    var checkFormForCompletion = function() {
      var empty = false;
      $('form .form-section .form-field input').each(function() {
        if ($(this).val() == '') {
          empty = true;
        }
      });
      // Keep the "Submit" button disabled while any of the following conditions are true:
      // - Are any of the form inputs empty?
      // - Is the provided email already in use?
      // - Does the form have any invalid entries?
      if (empty || email_in_use || !$formSignup.validate().checkForm()) {
        $('#submit').attr('disabled', 'disabled');
      } else {
        $('#submit').removeAttr('disabled');
      }
    }

    // check input fields to see if all fields have values and ready to submit
    // create account
    $('form .form-section .form-field input').bind('click mouseup keyup blur', checkFormForCompletion);

    var createUser = function(displayName, email, password) {
      return $.get('/profile/api/publickey' + getCacheBuster())
        .then(function(publicKey) {
          var userData = {
            displayName: displayName,
            email: email,
            password: rsa.encrypt(password, publicKey.key),
            publicKey: publicKey.keyId
          };
          return $.ajax({
            type: "POST",
            url: "/profile/api/create_user" + getCacheBuster(),
            data: JSON.stringify(userData),
            contentType: "application/json"
          });
        });
    };

    var emailAvailabilityHandler = function(data) {
      // email not available
      if (!data) {
      	email_in_use = true;
        $formSignup.find('.email-warning').show().text(translate("MODAL_ERROR_EMAIL_NOT_AVAILABLE"));
      } else {
      	email_in_use = false;
        $formSignup.find('.email-warning').hide();
      }
    };

    // Check email availability on field blur.
    $('#signup-email').bind('blur.availability', function() {
      var $this = $(this);

      if ($this.valid()) {
        $.get('/profile/api/verify_email_availability/' + $this.val()  + getCacheBuster())
          .done(emailAvailabilityHandler);
      }
    });

    // Handle the actual form submit
    $formSignup.on('submit.signup', function(e) {
      var $email = $('#signup-email').val(),
          $displayName = $('#signup-realname').val(),
          $password = $('#signup-password').val();

      e.preventDefault();

      if (!$(this).valid()) {
        return;
      }

      createUser($displayName, $email, $password)
        .done(function() {
            toastr.success(translate("MODAL_SUCCESS_PROFILE_CREATED_IN_BROWSER"));
            doUserPassLogin($email, $password);
        })
        .fail(function() {
          addInlineError(translate("MODAL_ERROR_SERVER_COMMUNICATION_FAILED"), ".form-section.form-password");
        });
    });
  }

  if ($formPasswordRecover.length) {
    $formPasswordRecover.validate({
      errorPlacement: function(error, element) {
        error.insertAfter(element.parent().parent());
      },
      rules: {
        'password-recover': {
          required: true,
          email: true
        }
      },
      messages: {
        'password-recover': {
          required: translate("MODAL_ERROR_REQUIRED_EMAIL")
        }
      }
    });

    $formPasswordRecover.on('submit.passwordreset', function submitPasswordRecover(e) {
      e.preventDefault();

      if (!$(this).valid()) {
        return;
      }

      $.get('/desktop/forgot.html?email=' + $('#password-recover').val())
        .done(function() {
          toastr.info(translate("MODAL_RESET_PASSWORD_EMAIL_SENT"));
          setTimeout(function() {
              window.location.href = '/desktop/login_unification.html' + window.location.search;
          }, 6000);
        })
        .fail(function() {
          addInlineError(translate("MODAL_ERROR_SERVER_COMMUNICATION_FAILED"), ".form-section.form-password-recover");
        });
    });
  }

})(jQuery);
