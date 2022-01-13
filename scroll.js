"use strict";

const header = document.getElementById("header");
const headerSize = header.clientHeight;
const navs = document.querySelectorAll('a[href^="#"]');
const navsArr = Array.prototype.slice.call(navs);

navsArr.forEach(nav => {
    nav.addEventListener('click', (e) => {
        e.preventDefault();
        const contentId = nav.hash;
        const content = document.querySelector(contentId);
        const pageYOffset = window.pageYOffset; // スクロール位置
        const contentNowTop = content.getBoundingClientRect().top; // ターゲット要素の、現在のウィンドウトップからの位置
        const offsetTop = pageYOffset + contentNowTop - headerSize;
        window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
        });
    });
});
