# ScrollTopButton.js
Plugin to control "scroll-to-top" custom button

## install and usage
1. add script and stylesheets to your page
```
<link rel="stylesheet" href="css/scroll-top-plugin.css">
<script src="js/scroll-top-plugin.js"></script>
```
2. add new scroll-to-top button or use existing (use 'scroll-top-btn' class for button)
```
<div class="scroll-top-btn">
    <img src="img/scroll-top-btn.png">
</div>
```
3. init plugin and define maxPixels (if you scrolled more than maxPixels, the button will appear)
```
<script>
    var scroller = new ScrollTopButton(500); // 500px from top of browser window
</script>
```
### feel free to customize!
p.s. sample build inside
