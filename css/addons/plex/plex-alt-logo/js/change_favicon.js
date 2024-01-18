/*!
 * Dynamically changing favicons with JavaScript
 * Works in all A-grade browsers except Safari and Internet Explorer
 * Demo: http://mathiasbynens.be/demo/dynamic-favicons
 */

// HTML5™, baby! http://mathiasbynens.be/notes/document-head

document.head = document.head || document.getElementsByTagName('head')[0];
fav_path = document.querySelector("head > link:nth-child(11)")

var link = document.createElement('link'),
link.id = 'dynamic-favicon';
link.rel = 'shortcut icon';
link.href = 'http://www.google.com/favicon.ico';

document.head.removeChild(fav_path);
document.head.appendChild(link);
