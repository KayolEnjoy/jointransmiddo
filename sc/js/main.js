// Page loading animation
$(window).on('load', function() {

	$('#js-preloader').addClass('loaded');

});
;(function () {
	
	'use strict';

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
				
	    	}
	    
	    	
	    }
		});

	};


	var offcanvasMenu = function() {

		$('#page').prepend('<div id="fh5co-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#fh5co-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#fh5co-offcanvas').append(clone2);

		$('#fh5co-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#fh5co-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function(){
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');				
		}).mouseleave(function(){

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');				
		});


		$(window).resize(function(){

			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
				
	    	}
		});
	};


	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){
			var $this = $(this);


			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};
	

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};


	var dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};


	// Loading page
	var loaderPage = function() {
		$(".fh5co-loader").fadeOut("slow");
	};

	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};


	var counterWayPoint = function() {
		if ($('#fh5co-counter').length > 0 ) {
			$('#fh5co-counter').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

	var sliderMain = function() {
		
	  	$('#fh5co-hero .flexslider').flexslider({
			animation: "fade",
			slideshowSpeed: 5000,
			directionNav: true,
			start: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			},
			before: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			}

	  	});

	};



	$(function(){
		mobileMenuOutsideClick();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		sliderMain();
		dropdown();
		goToTop();
		loaderPage();
		counterWayPoint();
	});


}());

// Array kutipan dan tokoh
const quotes = [
	{
		quote: "Tidak ada yang lebih dalam dan lebih dalam dari pengetahuan Allah, yang lebih luas dan lebih luas dari kebijaksanaan Allah. Apa pun yang kamu peroleh, kau akan menemukan lebih banyak lagi, dan seberapa banyak yang kau peroleh, kamu akan melihat bahwa kamu belum mencapai apa pun.",
		tokoh: "Ali bin Abi Thalib"
	},
	{
		quote: "Jangan menunda-nunda amal kebaikan. Melakukan sedikit kebaikan hari ini lebih baik daripada bermimpi tentang melakukan banyak kebaikan besok.",
		tokoh: "Umar bin Khattab"
	},
	{
	  quote: "Tidak ada yang lebih dalam dan lebih dalam dari pengetahuan Allah, yang lebih luas dan lebih luas dari kebijaksanaan Allah. Apa pun yang kamu peroleh, kau akan menemukan lebih banyak lagi, dan seberapa banyak yang kau peroleh, kamu akan melihat bahwa kamu belum mencapai apa pun.",
	  tokoh: "Ali bin Abi Thalib"
	},
	{
		quote: "Jangan menunda-nunda amal kebaikan. Melakukan sedikit kebaikan hari ini lebih baik daripada bermimpi tentang melakukan banyak kebaikan besok.",
		tokoh: "Umar bin Khattab"
	},
	{
		quote: "Mencari ilmu itu wajib bagi setiap muslim laki-laki maupun perempuan.",
		tokoh: "KH. Ahmad Dahlan"
	},
	{
		quote: "Ajarilah anak-anakmu sejak dini untuk berani berjuang dan berkarya.",
		tokoh: "KH. Ahmad Dahlan"
	},
	{
		quote: "Agar bertambah ilmu, harus membaca, dan agar jelas faham, harus bertanya.",
		tokoh: "KH. Ahmad Dahlan"
	},
	{
		quote: "Ketika hati telah tertanam kecintaan kepada ilmu, ia tak akan pernah lelah belajar.",
		tokoh: "KH. Ahmad Dahlan"
	},
	{
		quote: "Jangan menjadi umat yang pincang. Beriman harus diiringi dengan ilmu dan amal.",
		tokoh: "KH. Ahmad Dahlan"
	},
	{
		quote: "Menuntut ilmu akan memudahkan rezeki, membuka pintu-pintu keberkahan.",
		tokoh: "KH. Ahmad Dahlan"
	},
	{
		quote: "Kalau kamu sudah beriman, jangan terpengaruh oleh nafsu dan hawa nafsu.",
		tokoh: "KH. Ahmad Dahlan"
	},
	{
		quote: "Ketahuilah bahwa pemimpin yang zalim lebih berbahaya daripada seribu musuh.",
		tokoh: "KH. Ahmad Dahlan"
	},
	{
		quote: "Janganlah berhenti berjuang, karena berhenti berjuang sama artinya dengan kalah.",
		tokoh: "KH. Ahmad Dahlan"
	},
	{
		quote: "Siapapun dia, jika ada kesalahan, maka nasihatilah, jangan kau benci.",
		tokoh: "KH. Ahmad Dahlan"
	},
	{
		quote: "Janganlah engkau membenci kebenaran hanya karena orang yang mengatakannya berbeda denganmu.",
		tokoh: "KH. Ahmad Dahlan"
	},
	{
		quote: "Berbahagialah orang yang bisa hidup sederhana, tapi tetap bisa menolong orang lain.",
		tokoh: "KH. Ahmad Dahlan"
	},
	{
		quote: "Pada hakikatnya, keberhasilan itu adalah hasil dari kerja keras, kesabaran, dan doa.",
		tokoh: "KH. Ahmad Dahlan"
	},
	{
		quote: "Menjaga persatuan dan kesatuan, itu lebih mulia daripada meraih kekayaan dunia.",
		tokoh: "KH. Ahmad Dahlan"
	},
	{
		quote: "Jadilah orang yang selalu bersyukur, karena orang yang bersyukur akan selalu mendapatkan lebih banyak.",
		tokoh: "KH. Ahmad Dahlan"
	},
	{
		quote: "Kita bisa menyebarkan kebaikan dengan cara mengajak yang lainnya untuk berbuat baik.",
		tokoh: "KH. Ahmad Dahlan"
	},
	{
		quote: "Bekerja keraslah dan berdoalah, karena tidak ada yang pasti di dunia ini selain usaha dan doa.",
		tokoh: "KH. Ahmad Dahlan"
	},
	{
		quote: "Hidup ini hanya sementara, jadi manfaatkanlah waktu sebaik mungkin untuk berbuat kebaikan.",
		tokoh: "KH. Ahmad Dahlan"
	},
	{
		quote: "Ketika kita memberi maaf, itu bukan berarti kita lemah, tapi justru menunjukkan kebesaran hati.",
		tokoh: "KH. Ahmad Dahlan"
	},
	{
		quote: "Janganlah engkau merasa lebih baik daripada orang lain, karena kita semua sama di mata Allah.",
		tokoh: "KH. Ahmad Dahlan"
	},
	{
		quote: "Keikhlasan dalam beribadah akan membuat kita semakin dekat dengan Allah.",
		tokoh: "KH. Ahmad Dahlan"
	},
	{
		quote: "Allah tidak memandang bentuk fisik kita, tapi Dia melihat hati dan amal perbuatan kita.",
		tokoh: "KH. Ahmad Dahlan"
	},
	{
		quote: "Hidup ini bagaikan perjalanan, jangan terlalu fokus pada tujuan, tapi nikmatilah setiap langkahnya.",
		tokoh: "KH. Ahmad Dahlan"
	},
	{
		quote: "Ketika kita memiliki iman yang kuat, kita akan mampu melewati segala rintangan dengan lapang dada.",
		tokoh: "KH. Ahmad Dahlan"
	},
	{
		quote: "Janganlah kamu mengeluhkan kekurangan yang kamu miliki, tapi syukurilah segala nikmat yang sudah diberikan.",
		tokoh: "KH. Ahmad Dahlan"
	},
	{
	  quote: "Ketahuilah bahwa dunia itu tidak abadi, dan kematian itu pasti datang.",
	  tokoh: "Umar bin Khattab"
	},
	{
		quote: "Berbuat baiklah kepada orang lain, sebelum kebaikan itu jauh darimu.",
		tokoh: "Ali bin Abi Thalib"
	},
	{
		quote: "Bersabarlah dalam menghadapi segala cobaan, karena sesungguhnya setiap kesabaran pasti akan dibalas oleh Allah.",
		tokoh: "Abu Bakar Ash-Shiddiq"
	},
	{
		quote: "Sungguh benar bahwa harta itu penawar hati yang paling baik. Tetapi penyembuhnya hanyalah bagi hati yang tak tertarik olehnya.",
		tokoh: "Ali bin Abi Thalib"
	},
	{
		quote: "Tidak ada keberhasilan tanpa kesabaran, kebaikan tanpa keikhlasan, dan kemenangan tanpa pengorbanan.",
		tokoh: "Umar bin Khattab"
	},
	{
		quote: "Tidak ada keindahan yang lebih sempurna daripada akhlak yang mulia.",
		tokoh: "Ali bin Abi Thalib"
	},
	{
		quote: "Sesungguhnya diantara tanda kebaikan seseorang itu adalah dia menyerahkan dirinya kepada kehendak Allah.",
		tokoh: "Ali bin Abi Thalib"
	},
	{
		quote: "Tidak ada hakim yang lebih adil daripada akal sehat dan tidak ada pedang yang lebih tajam daripada kebenaran.",
		tokoh: "Ali bin Abi Thalib"
	},
	{
		quote: "Tidak ada perasaan yang lebih indah daripada hati yang tulus ikhlas dalam beribadah kepada Allah.",
		tokoh: "Ustadz Abdul Somad"
	},
	{
		quote: "Sesungguhnya dalam kesulitan itu ada kemudahan.",
		tokoh: "Al-Qur'an (Al-Insyirah: 5-6)"
	},
	{
		quote: "Kita akan mendapatkan apa yang kita tanam. Jika kita menanam benih kebaikan, kita akan menuai kebaikan.",
		tokoh: "Ustadz Felix Siauw"
	},
	{
		quote: "Harta yang paling berharga adalah hati yang penuh cinta dan iman kepada Allah.",
		tokoh: "Ustadz Yusuf Mansur"
	},
	{
		quote: "Keikhlasan adalah kunci kesuksesan yang sejati.",
		tokoh: "Ustadz Hanan Attaki"
	},
	{
		quote: "Keberhasilan yang sesungguhnya adalah ketika kita bisa mengendalikan hawa nafsu dan menjaga hati tetap bersih.",
		tokoh: "Ustadz Syafiq Riza Basalamah"
	},
	{
		quote: "Jangan pernah menyerah dalam menghadapi cobaan, karena setiap ujian adalah peluang untuk mendekatkan diri kepada Allah.",
		tokoh: "Ustadz Abdul Somad"
	},
	{
		quote: "Kebahagiaan sejati adalah ketika kita bisa merasa tenang di dalam hati meskipun berada di tengah kesulitan.",
		tokoh: "Ustadz Hanan Attaki"
	},
	{
		quote: "Sesungguhnya di balik kesulitan pasti ada kemudahan.",
		tokoh: "Al-Qur'an (Al-Insyirah: 5-6)"
	},
	{
		quote: "Ketika kita berserah diri kepada Allah, maka Allah akan membuka jalan untuk kita dari arah yang tidak kita sangka-sangka.",
		tokoh: "Ustadz Syafiq Riza Basalamah"
	},
	{
		quote: "Kebaikan yang dilakukan kepada orang lain adalah investasi terbaik yang bisa kita lakukan untuk masa depan.",
		tokoh: "Ustadz Yusuf Mansur"
	},
	{
		quote: "Sesungguhnya Allah tidak akan mengubah nasib suatu kaum kecuali kaum itu sendiri yang mau berusaha untuk mengubahnya.",
		tokoh: "Al-Qur'an (Ar-Ra'd: 11)"
	},
	{
		quote: "Kesabaran adalah kunci keberhasilan yang sejati.",
		tokoh: "Ustadz Hanan Attaki"
	},
	{
		quote: "Jangan pernah merasa sendirian, karena Allah selalu bersama orang-orang yang sabar.",
		tokoh: "Ustadz Abdul Somad"
	},
	{
		quote: "Ketika kita merasa lelah dalam perjuangan, ingatlah bahwa Allah selalu menyertai kita dalam setiap langkah.",
		tokoh: "Ustadz Felix Siauw"
	},
	{
		quote: "Keikhlasan dalam beribadah adalah kunci untuk mendapatkan ridha Allah.",
		tokoh: "Ustadz Syafiq Riza Basalamah"
	},
	{
		quote: "Harta yang paling berharga adalah ketakwaan kepada Allah.",
		tokoh: "Ustadz Yusuf Mansur"
	},
	{
		quote: "Ketika kita merasa lemah, ingatlah bahwa Allah adalah tempat kita bersandar dan bermohon pertolongan.",
		tokoh: "Ustadz Hanan Attaki"
	},
	{
	  quote: "Keikhlasan adalah kunci untuk meraih kebahagiaan sejati.",
	  tokoh: "Ustadz Adi Hidayat"
	},
	{
	  quote: "Berbuat baiklah kepada sesama tanpa mengharapkan balasan dari mereka.",
	  tokoh: "Ustadz Adi Hidayat"
	},
	{
	  quote: "Kesabaran adalah pelita yang menerangi jalan di tengah kegelapan.",
	  tokoh: "Ustadz Adi Hidayat"
	},
	{
	  quote: "Hiduplah sesuai dengan ajaran agama, dan kamu akan meraih kedamaian batin.",
	  tokoh: "Ustadz Adi Hidayat"
	},
	{
	  quote: "Jadilah orang yang selalu bersyukur atas segala nikmat yang diberikan Allah.",
	  tokoh: "Ustadz Adi Hidayat"
	},
	{
	  quote: "Tetaplah teguh pada prinsipmu meskipun orang lain tidak memahaminya.",
	  tokoh: "Ustadz Adi Hidayat"
	},
	{
	  quote: "Hiduplah dengan rendah hati, karena rendah hati adalah kunci kesuksesan.",
	  tokoh: "Ustadz Adi Hidayat"
	},
	{
	  quote: "Janganlah kamu menyia-nyiakan waktu, karena waktu adalah karunia terbesar dari Allah.",
	  tokoh: "Ustadz Adi Hidayat"
	},
	{
	  quote: "Setiap kesulitan pasti ada jalan keluarnya, percayalah pada kekuatan Allah.",
	  tokoh: "Ustadz Adi Hidayat"
	},
	{
	  quote: "Kebaikan yang kita lakukan akan kembali kepada kita dengan berlipat ganda.",
	  tokoh: "Ustadz Adi Hidayat"
	},
	{
	  quote: "Janganlah menyalahkan orang lain atas kesalahan yang kita buat, belajarlah untuk bertanggung jawab.",
	  tokoh: "Ustadz Adi Hidayat"
	},
	{
	  quote: "Ketika kita mencintai Allah, kita akan mencintai sesama makhluk-Nya.",
	  tokoh: "Ustadz Adi Hidayat"
	},
	{
	  quote: "Tetaplah berdoa meskipun segala sesuatunya terasa sulit, karena doa adalah kuncinya.",
	  tokoh: "Ustadz Adi Hidayat"
	},
	{
	  quote: "Hidup ini singkat, jangan sia-siakan waktu dengan hal yang tidak bermanfaat.",
	  tokoh: "Ustadz Adi Hidayat"
	},
	{
	  quote: "Sesungguhnya dalam kesabaran itu ada kekuatan yang besar.",
	  tokoh: "Ustadz Adi Hidayat"
	},
	{
	  quote: "Janganlah terlalu terpaku pada dunia, ingatlah bahwa akhiratlah yang sebenarnya.",
	  tokoh: "Ustadz Adi Hidayat"
	},
	{
	  quote: "Tetaplah optimis meskipun dalam keadaan sulit, karena optimisme adalah kunci kesuksesan.",
	  tokoh: "Ustadz Adi Hidayat"
	},
	{
	  quote: "Berkat kesabaranlah seseorang bisa meraih kesuksesan yang diinginkannya.",
	  tokoh: "Ustadz Adi Hidayat"
	},
	{
	  quote: "Janganlah kita menyerah begitu saja, percayalah bahwa Allah selalu menyertai kita.",
	  tokoh: "Ustadz Adi Hidayat"
	},
	{
	  quote: "Hiduplah dengan penuh keikhlasan, karena keikhlasan akan membawa kita kepada kebahagiaan.",
	  tokoh: "Ustadz Adi Hidayat"
	},
	{
	  quote: "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan-pasangan dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir.",
	  tokoh: "Al-Qur'an (Ar-Rum: 21)"
	},
	{
	  quote: "Dan jika kamu menghitung nikmat Allah, niscaya kamu tidak dapat menghitungnya. Sesungguhnya Allah benar-benar Maha Pengampun lagi Maha Penyayang.",
	  tokoh: "Al-Qur'an (An-Nahl: 18)"
	},
	{
	  quote: "Sesungguhnya Allah tidak akan mengubah keadaan suatu kaum sehingga mereka mengubah keadaan yang ada pada diri mereka sendiri.",
	  tokoh: "Al-Qur'an (Ar-Ra'd: 11)"
	},
	{
	  quote: "Dan berpeganglah kamu semuanya kepada tali (agama) Allah, dan janganlah kamu bercerai berai. Dan ingatlah akan nikmat Allah kepadamu ketika kamu dahulu (masa jahiliyah) bermusuh-musuhan, maka Allah mempersatukan hatimu, lalu menjadilah kamu karena nikmat Allah, orang-orang yang bersaudara; dan kamu telah berada di tepi jurang neraka, lalu Allah menyelamatkan kamu dari padanya. Demikianlah Allah menjelaskan ayat-ayat-Nya kepadamu, agar kamu mendapat petunjuk.",
	  tokoh: "Al-Qur'an (Ali Imran: 103)"
	},
	{
	  quote: "Orang mukmin yang paling sempurna imannya adalah yang paling baik akhlaknya. Dan sebaik-baik kalian adalah yang baik terhadap wanita.",
	  tokoh: "Hadis Riwayat Tirmidzi"
	},
	{
	  quote: "Barangsiapa yang beriman kepada Allah dan hari akhir, hendaklah dia berkata yang baik atau diam.",
	  tokoh: "Hadis Riwayat Bukhari dan Muslim"
	},
	{
	  quote: "Sesungguhnya di dalam tubuh ada segumpal daging, jika baik maka baik pula seluruh tubuh, dan jika rusak maka rusak pula seluruh tubuh. Ketahuilah, itulah hati.",
	  tokoh: "Hadis Riwayat Bukhari dan Muslim"
	},
	{
	  quote: "Orang yang paling aku cintai di antara kalian adalah yang paling baik akhlaknya.",
	  tokoh: "Hadis Riwayat Bukhari dan Muslim"
	},
	{
	  quote: "Dan sesungguhnya, kamu benar-benar akan diberi pahala yang tidak terhingga.",
	  tokoh: "Al-Qur'an (Az-Zumar: 10)"
	},
	{
	  quote: "Sesungguhnya, bersama kesulitan ada kemudahan.",
	  tokoh: "Al-Qur'an (Al-Insyirah: 5)"
	},
	{
	  quote: "Sesungguhnya, setiap amal (perbuatan) itu bergantung pada niatnya.",
	  tokoh: "Hadis Riwayat Bukhari dan Muslim"
	},
	{
	  quote: "Barangsiapa yang menutup aib seorang muslim, maka Allah akan menutup aibnya di dunia dan akhirat.",
	  tokoh: "Hadis Riwayat Muslim"
	},
	{
	  quote: "Sesungguhnya Allah tidak akan mengubah keadaan suatu kaum sehingga mereka mengubah keadaan yang ada pada diri mereka sendiri.",
	  tokoh: "Al-Qur'an (Ar-Ra'd: 11)"
	},
	{
	  quote: "Sesungguhnya, Allah bersama orang yang sabar.",
	  tokoh: "Al-Qur'an (Al-Baqarah: 153)"
	},
	{
	  quote: "Jika kamu bersyukur, pasti Kami akan menambah (nikmat) kepadamu, dan jika kamu mengingkari (nikmat-Ku), maka sesungguhnya azab-Ku sangat pedih.",
	  tokoh: "Al-Qur'an (Ibrahim: 7)"
	},
	{
	  quote: "Orang yang paling dicintai oleh Allah adalah orang yang paling bermanfaat bagi orang lain.",
	  tokoh: "Hadis Riwayat Ahmad"
	},
	{
	  quote: "Berpeganglah kamu semuanya kepada tali (agama) Allah, dan janganlah kamu bercerai berai.",
	  tokoh: "Al-Qur'an (Ali Imran: 103)"
	},
	{ 
	  quote: "Barangsiapa yang beriman kepada Allah dan hari akhir, hendaklah dia berkata yang baik atau diam.",
	  tokoh: "Hadis Riwayat Bukhari dan Muslim"
	},
	{
	  quote: "Dan janganlah kamu berjalan di muka bumi ini dengan sombong. Sesungguhnya kamu sekali-kali tidak dapat menembus bumi dan sekali-kali kamu tidak akan sampai setinggi gunung.",
	  tokoh: "Al-Qur'an (Al-Isra: 37)"
	},
	{
	  quote: "Sesungguhnya, dengan kesulitan ada kemudahan.",
	  tokoh: "Al-Qur'an (Asy-Syarh: 5-6)"
	},
	{
	  quote: "Orang mukmin yang paling sempurna imannya adalah yang paling baik akhlaknya.",
	  tokoh: "Hadis Riwayat Tirmidzi"
	},
	{
	  quote: "Barangsiapa yang menunjukkan suatu kebaikan, maka dia akan mendapatkan pahala seperti orang yang melakukannya.",
	  tokoh: "Hadis Riwayat Muslim"
	},
	{
	  quote: "Dan hendaklah kamu berlaku baik kepada orang tua kedua ibu-bapamu.",
	  tokoh: "Al-Qur'an (Al-Isra: 23)"
	},
	{
	  quote: "Sesungguhnya, setiap perkataan itu ada kebohongannya, kecuali tiga perkara.",
	  tokoh: "Hadis Riwayat Abu Daud"
	},
	{
	  quote: "Dan janganlah kamu memakan harta sesamamu dengan jalan yang batil.",
	  tokoh: "Al-Qur'an (Al-Baqarah: 188)"
	},
	{
	  quote: "Janganlah kamu memandang sepele suatu kebaikan, walaupun itu bertemu dengan saudaramu dengan wajah yang senang.",
	  tokoh: "Hadis Riwayat Muslim"
	},
	{
	  quote: "Katakanlah kepada orang-orang yang beriman: \"Hendaklah mereka menahan pandangannya dan memelihara kemaluannya; yang demikian itu adalah lebih suci bagi mereka. Sesungguhnya Allah Maha Mengetahui apa yang mereka perbuat.",
	  tokoh: "Al-Qur'an (An-Nur: 30)"
	},
	{
	  quote: "Tidak akan masuk surga orang yang memutuskan silaturahmi.",
	  tokoh: "Hadis Riwayat Muslim"
	}
  ];
  
  // Fungsi untuk mengubah kutipan secara acak
  function changeQuote() {
	const randomNumber = Math.floor(Math.random() * quotes.length); // Menghasilkan nomor acak
	const quote = quotes[randomNumber].quote;
	const tokoh = quotes[randomNumber].tokoh;
  
	document.getElementById("quote-text").innerText = `"${quote}"`; // Menampilkan kutipan yang dipilih secara acak
	document.getElementById("tokoh").innerText = `~ ${tokoh} ~`; // Menampilkan nama tokoh
  }
  
  // Panggil fungsi pertama kali untuk menampilkan kutipan awal
  changeQuote();
  
  // Ganti kutipan setiap 13 detik
  setInterval(changeQuote, 13000);
  