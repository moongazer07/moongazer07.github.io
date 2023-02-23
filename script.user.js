// ==UserScript==
// @name        remove datawagon lol
// @namespace   Violentmonkey Scripts
// @match       https://computernewb.com/collab-vm/classic/
// @grant       none
// @version     1.0
// @author      -
// @description 22/02/2023, 18:34:24
// ==/UserScript==

var elmDeleted = document.getElementById("dw-ad"); elmDeleted.parentNode.removeChild(elmDeleted);
