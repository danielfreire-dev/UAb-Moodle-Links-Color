// ==UserScript==
// @name         UAB eLearning - Blue Underlined Links
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  Force all Moodle links (and their inner spans) to be blue and underlined
// @author       Daniel Freire
// @homepageURL  https://daniel-freire.com/?utm_source=greasyfork
// @match        https://elearning.uab.pt/*
// @grant        GM_addStyle
// @version      1.0
// @namespace    https://github.com/danielfreire-dev
// @homepageURL  https://github.com/danielfreire-dev/UAb-Moodle-Links-Color
// @supportURL   https://github.com/danielfreire-dev/UAb-Moodle-Links-Color/issues
// @downloadURL  https://raw.githubusercontent.com/danielfreire-dev/UAb-Moodle-Links-Color/main/app.user.js
// @updateURL    https://raw.githubusercontent.com/danielfreire-dev/UAb-Moodle-Links-Color/main/app.user.js
// ==/UserScript==

(function () {
	"use strict";

	GM_addStyle(`
        /* Link itself: blue + underline, all states */
        html body a,
        html body a:link,
        html body a:visited,
        html body a:hover,
        html body a:active,
        html body a:focus {
            color: #0000EE !important;
            text-decoration: underline !important;
            border-bottom: none !important;
        }

        /* Inner spans (e.g. .instancename) — color only.
           text-decoration already propagates from the <a>. */
        html body a span,
        html body a .instancename,
        html body a:hover span,
        html body a:hover .instancename {
            color: #0000EE !important;
            text-decoration: underline !important;
            border-bottom: none !important;
        }
        html body .navbar a,
        html body .navbar a * {
            color: inherit !important;
            text-decoration: none !important;
            border-bottom: none !important;
}
    `);
})();
