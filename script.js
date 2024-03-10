document.addEventListener('DOMContentLoaded', function(event){
	var movieTitles = ["Up", "The Incredibles", "Cars, and", "The Good Dinosaur"]
	var speed = 100

	function typeWriter(text, i, fnCallback) {
		if (i < text.length) {

			document.getElementById("movies").innerHTML = text.substring(0, i+1);
			setTimeout(function() {
				typeWriter(text, i + 1, fnCallback)
			}, 200);
		}
		else if (typeof fnCallback == 'function') {
			setTimeout(fnCallback, 1200);
		}
	}

	function StartTextAnimation(i) {
		if (typeof movieTitles[i] == 'undefinded'){
			setTimeout(function() {
				StartTextAnimation(0)
			}, 20000);
		}

		if (i < movieTitles.length) {
			typeWriter(movieTitles[i], 0, function(){
			StartTextAnimation(i + 1);
			});
		}

		if (i == 0) {
			document.getElementById("gif").src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWJ3ZWltbW41M2NrcGhjNHpzeXZmNTdwd2tleDk0NTBxZzV6dmhqaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/EkOfv3i9dFb5S/giphy.gif"
		} else if (i == 1) {
			document.getElementById("gif").src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHh0ZmxpdHQzdW4xcDdjbGpjYzQ0d2llcmYzdmR2cm94aDZqZTEwciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/129VQ9xjNsjIVW/giphy.gif"
		} else if (i == 2) {
			document.getElementById("gif").src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGY2ODdwcDY5ejM4aHkzcXlsN2N5cjYycm9tZXJkaWIydmFnOWduayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/B1CrvUCoMxhy8/giphy.gif"
		} else if (i == 3) {
			document.getElementById("gif").src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2VwdHZ3dnZhbTNrMWxidXV6YXlqejBjNGt2NjBnNnptZjQ2NWNpbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o85xAgAZy17UPSL28/giphy.gif"
		}
	}
	StartTextAnimation(0);
});

