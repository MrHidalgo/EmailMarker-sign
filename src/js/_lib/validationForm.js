

/**
 * @name initValidation
 *
 * @description
 */
const initValidation = () => {

	/**
	 *
	 * @param form
	 */
	const validationSubmitHandler = (form) => {
		$.ajax({
			type: "POST",
			url: $(form).attr('action'),
			data: $(form).serialize(),
			success: (response) => {
				const data = $.parseJSON(response);

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
	const validationErrorPlacement = function(error, element) {
		error.appendTo(element.closest('.sign__form-field'));
	};

	/**
	 *
	 * @param element
	 */
	const validationHighlight = (element) => {
		$(element).closest('.sign__form-field').addClass('is-error');
		$(element).closest('.sign__form-field').removeClass('is-done');
	};

	/**
	 *
	 * @param element
	 */
	const validationUnhighlight = (element) => {
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
		onkeyup: function(element) {
			$(element).valid();
		},
		rules: {
			reset_email: {
				required: true,
				email: true
			}
		}
	});
};
