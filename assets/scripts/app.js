const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "rapping",
				weight: 12.3
			}, {
				text: "comedy",
				weight: 8
			}, {
				text: "kinesiology",
				weight: 14
			}, {
				text: "bitcoin",
				weight: 3
			}, {
				text: "programming",
				weight: 7
			}, {
				text: "jiu-jitsu",
				weight: 10
			}, {
				text: "toastmasters",
				weight: 9
			}, {
				text: "vlogging",
				weight: 15
			}, {
				text: "blogging",
				weight: 7
			}, {
				text: "psychology",
				weight: 7.5
			}, {
				text: "public health",
				weight: 6.5
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a Full-Stack Web Developer.", "late investor in Bitcoin ", "also have a Master's in Kinesiology", "solve problems."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
