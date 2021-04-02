const sideNAv = document.querySelectorAll('.sidenav');
        M.Sidenav.init(sideNAv);

const slider = document.querySelectorAll('.slider');
        M.Slider.init(slider, {
        indicators: false,
        transition: 500,
        interval: 2500
        });

const parallax = document.querySelectorAll('.parallax');
        M.Parallax.init(parallax);

const materialbox = document.querySelectorAll('.materialboxed');
        M.Materialbox.init(materialbox);

const scroll = document.querySelectorAll('.scrollspy');
        M.ScrollSpy.init(scroll, {
                scrollOffset: 50
        });