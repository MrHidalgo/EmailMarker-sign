/**
 * @description Document DOM ready.
 */
(function () {
	/*
	* =============================================
	* CALLBACK :: start
	* ============================================= */
	const inputFocusAnimate = () => {
		const inputElem = document.querySelectorAll("[input-js]");

		for(let _el of inputElem) {
			_el.addEventListener('focus', (ev) => {
				ev.currentTarget.closest('.sign__form-field').classList.add('is-focus');
			});

			_el.addEventListener('blur', (ev) => {
				let curElemVal = ev.currentTarget.value.trim();

				if(curElemVal === '') {
					ev.currentTarget.closest('.sign__form-field').classList.remove("is-focus");
				}
			});
		}
	};
	/*
	* CALLBACK :: end
	* ============================================= */


	/**
	 * @name initNative
	 *
	 * @description Init all method
	 */
	const initNative = () => {
		// default
		initPreventBehavior();
		// ==========================================

		// lib
		initValidation();
		// ==========================================

		// callback
		inputFocusAnimate();
		// ==========================================
	};
	initNative();
})();
