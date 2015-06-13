// THIS IS WHERE THE MAGIC HAPPENS
		$(function() {
			$('nav a').click(function(e) {
				$("#loading").show();
				href = $(this).attr("href");
				
				loadContent(href);
				
				// HISTORY.PUSHSTATE
				history.pushState('', 'New URL: '+href, href);
				e.preventDefault();
				
				
			});
			
			// THIS EVENT MAKES SURE THAT THE BACK/FORWARD BUTTONS WORK AS WELL
			window.onpopstate = function(event) {
				$("#loading").show();
				console.log("pathname: "+location.pathname);
				loadContent(location.pathname);
			};

		});
	
		function loadContent(url){
			// USES JQUERY TO LOAD THE CONTENT
			$.getJSON("content.php", {cid: url, format: 'json'}, function(json) {
					// THIS LOOP PUTS ALL THE CONTENT INTO THE RIGHT PLACES
					$.each(json, function(key, value){
						$(key).html(value);
					});
					$("#loading").hide();
				});
			
			// THESE TWO LINES JUST MAKE SURE THAT THE NAV BAR REFLECTS THE CURRENT URL
			$('li').removeClass('current');
			$('a[href="'+url+'"]').parent().addClass('current');
			
		}