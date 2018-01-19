		$(document).keyup(function(e) {
			if (e.keyCode === 27) hide(); // 27 == escape key
			// if (e.keyCode === 13) show(".scannable");
		});

		function show(div) {
			toggleZIndex();
    		
    	$(div).css("display", "block");
    	$(".close").css("display", "block");

    	toggleWhiteOpacity();

    	storeScrollPosition();

    	$("#content > *").css("transition", "opacity 0.2s");
		  $(div).css("opacity", "1");
		  $(".close").css("opacity", "1");

		$("#wrapper").css("display", "none");
		}

		// everything happens in reverse order of show
		function hide() {
				$("#wrapper").css("display", "block");

				$("#content > *").css("transition", "opacity 0.1s");
	    		$("#content").children().css("opacity", "0");

	    		setTimeout(function(){restoreScrollPosition();}, 100);

	    		setTimeout(function(){toggleWhiteOpacity();}, 100);

	    		setTimeout(function(){$("#content").children().css("display", "none");}, 110);
	    		
	    		// give fade time to finish, don't want changing z-index to interrupt it. 410 bc white takes 400 to animate
	    		setTimeout(function(){toggleZIndex();}, 110);
		}

		function toggleZIndex() {
			if ($("#white").css("z-index") == "-1") {
				$("#white").css("z-index", "1");
				$("#content").css("z-index", "2");
			}
			else if ($("#white").css("z-index") == "1") {
				$("#content").css("z-index", "-1");
				$("#white").css("z-index", "-1");
			}
		}

		function toggleWhiteOpacity() {
			if ($("#white").css("opacity") == "0") {
				$("#white").css("opacity", "1");
			}
			else if ($("#white").css("opacity") == "1") {
				$("#white").css("opacity", "0");
			}
		}

		var scrollPosition;

		function storeScrollPosition() {
			scrollPosition = $(window).scrollTop().toString();
    		$(window).scrollTop(0);
		}

		function restoreScrollPosition() {
			$(window).scrollTop(scrollPosition);
		}

    $(document).ready(function(){
      // Add smooth scrolling to all links
      $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
       
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });
    });

      $(function() {

          $(window).scroll(function() {
          
          var distanceScrolled = Math.max(0, $(window).scrollTop());
          var $navbar = $('nav');
          var $navbarWrapper = $('.navbar-wrapper')

          var pinPoint = $navbarWrapper.offset().top;

          if (distanceScrolled >= pinPoint) {
            
            $navbar.addClass('pinned');

          } else {
            $navbar.removeClass('pinned');

          }
        });
          
        $('a[href*="#"]').click(function(e) {
          e.preventDefault();
          var $target = $($(this).attr('href'));
          var scrollTop = $target.offset().top;
          $('html, body').animate({'scrollTop': scrollTop}, 500);
        });

      });

    window.onscroll = function(ev) {
        if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
          // you're at the bottom of the page
          console.log("Bottom of page");
          $(".arrow").fadeOut(500);
        }else{
          $(".arrow").fadeIn(500);
        }
    };
