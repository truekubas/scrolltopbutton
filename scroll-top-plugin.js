var ScrollTopButton = function(pixels) {
    this.scrolledPixels = 0;
    this.maxPixels = pixels;
    this.scrollTopButton = document.getElementsByClassName('scroll-top-btn')[0];
    
    this.scrollTopButton.addEventListener('click', scrollTop);
    
    var self = this;
    
    function checkButtonVisible() {
        return self.scrollTopButton.classList.contains('scroll-top-btn--visible');
    }
    
    function showButton() {
        self.scrollTopButton.classList.add('scroll-top-btn--visible');
    }
    
    function hideButton() {
        self.scrollTopButton.classList.remove('scroll-top-btn--visible');
    }
    
    function scrollTop() {
        var scrollStep = -window.scrollY / (500 / 15),
            scrollInterval = setInterval(function(){
                if ( window.scrollY != 0 ) {
                    window.scrollBy( 0, scrollStep );
                } else clearInterval(scrollInterval);
            }, 15);
    }
    
    function ButtonController() {
        self.scrolledPixels = window.pageYOffset || document.documentElement.scrollTop;
        
        if (self.scrolledPixels > self.maxPixels) {
            if (!checkButtonVisible()) showButton();
        } else {
            if (checkButtonVisible()) hideButton();
        }
    }
    
    window.onscroll = function() {
        return ButtonController();
    };
}