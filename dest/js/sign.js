"use strict";

/*
*
* ============================
* ============================
*
* Include lib:
*
* - preventBehavior.js;
*
* ============================
* ============================
* */

/**
 * @name initPreventBehavior
 *
 * @description
 */
var initPreventBehavior = function initPreventBehavior() {

	var link = document.querySelectorAll("a");

	link.forEach(function (val, idx) {

		val.addEventListener("click", function (e) {
			if (val.getAttribute("href") === "#") {
				e.preventDefault();
			}
		});
	});
};

/**
 * @name initValidation
 *
 * @description
 */
var initValidation = function initValidation() {

	/**
  *
  * @param form
  */
	var validationSubmitHandler = function validationSubmitHandler(form) {
		$.ajax({
			type: "POST",
			url: $(form).attr('action'),
			data: $(form).serialize(),
			success: function success(response) {
				var data = $.parseJSON(response);

				if (data.status === 'success') {
					// do something
				} else {
						// do something
					}
			}
		});
	};

	/**
  *
  * @param error
  * @param element
  */
	var validationErrorPlacement = function validationErrorPlacement(error, element) {
		error.appendTo(element.closest('.sign__form-field'));
	};

	/**
  *
  * @param element
  */
	var validationHighlight = function validationHighlight(element) {
		$(element).closest('.sign__form-field').addClass('is-error');
		$(element).closest('.sign__form-field').removeClass('is-done');
	};

	/**
  *
  * @param element
  */
	var validationUnhighlight = function validationUnhighlight(element) {
		$(element).closest('.sign__form-field').removeClass('is-error');
		$(element).closest('.sign__form-field').addClass('is-done');
	};

	/**
  * @description
  */
	$("#signReset").validate({
		submitHandler: validationSubmitHandler,
		errorPlacement: validationErrorPlacement,
		highlight: validationHighlight,
		unhighlight: validationUnhighlight,
		onkeyup: function onkeyup(element) {
			$(element).valid();
		},
		rules: {
			reset_email: {
				required: true,
				email: true
			}
		}
	});
	$("#signUp").validate({
		submitHandler: validationSubmitHandler,
		errorPlacement: validationErrorPlacement,
		highlight: validationHighlight,
		unhighlight: validationUnhighlight,
		onkeyup: function onkeyup(element) {
			$(element).valid();
		},
		rules: {
			signup_name: {
				required: true
			},
			signup_email: {
				required: true,
				email: true
			},
			signup_password: {
				required: true,
				minlength: 8
			}
		}
	});
	$("#signIn").validate({
		submitHandler: validationSubmitHandler,
		errorPlacement: validationErrorPlacement,
		highlight: validationHighlight,
		unhighlight: validationUnhighlight,
		onkeyup: function onkeyup(element) {
			$(element).valid();
		},
		rules: {
			signin_email: {
				required: true,
				email: true
			},
			signin_password: {
				required: true,
				minlength: 8
			}
		}
	});
};

/**
 * @description Document DOM ready.
 */
(function () {
	/*
 * =============================================
 * CALLBACK :: start
 * ============================================= */
	var inputFocusAnimate = function inputFocusAnimate() {
		var inputElem = document.querySelectorAll("[input-js]");

		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = inputElem[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var _el = _step.value;

				_el.addEventListener('focus', function (ev) {
					ev.currentTarget.closest('.sign__form-field').classList.add('is-focus');
				});

				_el.addEventListener('blur', function (ev) {
					var curElemVal = ev.currentTarget.value.trim();

					if (curElemVal === '') {
						ev.currentTarget.closest('.sign__form-field').classList.remove("is-focus");
					}
				});
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}
	};

	var togglePassword = function togglePassword() {
		$('[toggle-password-js]').on('click', function (ev) {
			var _parentNode = $(ev.currentTarget).closest('.sign__form-field');

			$(ev.currentTarget).toggleClass('is-active');

			if (_parentNode.find('input').attr('type') === 'password') {
				_parentNode.find('input[type="password"]').attr('type', 'text');
			} else {
				_parentNode.find('input[type="text"]').attr('type', 'password');
			}
		});
	};
	/*
 * CALLBACK :: end
 * ============================================= */

	/**
  * @name initNative
  *
  * @description Init all method
  */
	var initNative = function initNative() {
		// default
		initPreventBehavior();
		// ==========================================

		// lib
		initValidation();
		// ==========================================

		// callback
		inputFocusAnimate();
		togglePassword();
		// ==========================================
	};
	initNative();
})();