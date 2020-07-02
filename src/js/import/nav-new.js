$( document ).ready(function() {
    var nav = $("nav");
    var main = $("#main")
    var navTranslate = 0;
    var mainPosition = $("nav").width();
    var navPosition = 0;


    function backNav() {
        $(".back").on("click", function(){
            //var submenu = $(this).closest("div.submenu");
            //var navOverlay = $(this).closest(".nav-overlay.nav-covered");

            //navOverlay.toggleClass("nav-overlay nav-covered")

            //mainPosition = mainPosition - navTranslate;
            //navPosition  = navPosition - navTranslate;

            //$(main).css("transform", 'translate3d(-' + mainPosition + 'px,0,0)');
            //$(nav).css("transform", 'translate3d(-' + navPosition + 'px,0,0)');

            //(submenu.hasClass('open')) ? submenu.toggleClass("open") : console.log("");
        });
    }
    function toggleNav(navClass, hamburgerClass) {

        $(hamburgerClass).on("click", function() {
            //$(this).toggleClass("is-active");
            $(navClass).toggleClass("open");

            if(!$(navClass).hasClass('open')) {
                $(navClass).css("transform", 'translateX(-300px)');
                $("#main").css("transform", 'translateX(0)');
                resetNav();
            } else {
                $(navClass).css("transform", 'translateX(0)');
                $("#main").css("transform", 'translateX(0px)');
            }
            $("#main").toggleClass("nav-open")
        })
    }
    function toggleLevels(nav) {

        $(nav).on('click', function(event){
            var $target = event.target;

            if(!isNaN($($target).data('level'))) {
                console.log(navPosition)
                if( $($target).data('level') === 1 ) {
                    navPosition = 40;

                    $($target).toggleClass('nav-overlay nav-covered');
                    $($target).find("div.submenu").toggleClass('open');

                    $(nav).css("transform", 'translate3d(0px,0,0)');
                    $(main).css("transform", 'translateX(0px)');

                    resetNav();

                } else {
                    navPosition = navPosition - navTranslate;
                    mainPosition = mainPosition - navTranslate;
                    //$(nav).css("transform", 'translate3d(-' + navPosition + 'px,0,0)');
                    //$(main).css("transform", 'translate3d(-' + mainPosition + 'px,0,0)');

                    $($target).toggleClass('nav-overlay nav-covered');
                    $($target).find("div.submenu").toggleClass('open');
                }


            };

        })

    }
    function resetNav() {
        mainPosition = $('nav').width();
        navPosition = 0;
        $(".nav-overlay").removeClass("nav-overlay");
        $(".submenu").removeClass("open");
    };
    function checkNavLevel() {
        $(".multilevel-icon").on("click", function(){

            var navLevel = $(this).closest("div.nav-level");

            if($(this).next().hasClass("submenu")) {
                $(this).next().toggleClass("open");

                navLevel.toggleClass("nav-overlay nav-covered");

                mainPosition = mainPosition + navTranslate;
                navPosition  = navPosition + navTranslate;

                //$(main).css("transform", 'translate3d(-' + mainPosition + 'px,0,0)');
                // $(nav).css("transform", 'translate3d(-' + navPosition + 'px,0,0)');
            }

        });
    }

    function sideMenu( el, main, trigger, options ) {
        this.el = el;
        this.main = main;
        this.trigger = trigger;
        this._init();
    }

    sideMenu.prototype = {
        defaults : {
            backClass : '.back',
            navLevel: '.nav-level'
        },
        _init: function() {
            var self = this;
            this.level = 1;
            this.menuOpen = false;
            this.navTranslate = 40;
            this.navPosition = 0;
            this.navWidth = $(this.el).width();

            this._openMenu();
            this._toggleLevels();
            this._toggleBack();
            this._setLevels(this.defaults.navLevel);

        },
        _toggleLevels: function() {
            let self = this;

            $(".multilevel-icon").on("click", function(){
                let navLevel = $(this).closest("div.nav-level");

                if($(this).next().hasClass("submenu")) {

                    $(this).next().toggleClass("open");

                    navLevel.toggleClass("nav-overlay nav-covered");

                    self.navWidth = self.navWidth + self.navTranslate;
                    self.navPosition  = self.navPosition + self.navTranslate;

                    self._transform( self.navWidth, self.main );
                    self._transform( self.navPosition, self.el );

                }
            });
        },
        _toggleBack: function () {

            let self = this,
                back = $(self.defaults.backClass);

            back.on("click", function(){
                let navLevel = $(this).closest(self.defaults.navLevel),
                    navOverlay = $(this).closest(".nav-overlay.nav-covered");
                navOverlay.toggleClass("nav-overlay nav-covered");

                self.navWidth = self.navWidth - self.navTranslate;
                self.navPosition  = self.navPosition - self.navTranslate;

                self._transform( self.navWidth, self.main );
                self._transform( self.navPosition, self.el );

                (navLevel.hasClass('open')) ? navLevel.toggleClass("open") : null;

            });
        },
        _transform: function(value, selector) {
            // $(selector).css("transform", 'translate3d(-' + value + 'px,0,0)');
        },
        _openMenu: function() {
            var self = this;
            $(self.trigger).on("click", function() {
                $(self.trigger).toggleClass("is-active");

                if($(self.trigger).hasClass("is-active")) {
                    self.menuOpen = true;
                    self._resetMenu();
                } else {
                    self.menuOpen = false;
                    self.level = 0;
                };
            });
        },
        _resetMenu: function() {

            this.navWidth = $(this.el).width();
            this.navPosition = 0;
            $(".nav-overlay").removeClass("nav-overlay");
            $(".submenu").removeClass("open");

        },
        _setLevels : function(navLevel) {
            $(navLevel).each(function(i) {
                $(this).attr("data-level" , (i+1));
            });
        }
    }
    new sideMenu( "nav", "#main" , ".hamburger" );
});