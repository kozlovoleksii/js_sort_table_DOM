for(var e=document.querySelector("tbody"),r=Array.from(e.querySelectorAll("tr")),t=document.querySelector("thead tr"),a=[],n=0;n<r.length;n++){var o=r[n];a.push(o)}t.addEventListener("click",function(r){if("TH"===r.target.tagName){var t;t=Array.from(r.target.parentElement.children).indexOf(r.target),a.sort(function(e,r){var a=e.children[t].innerText.toLowerCase(),n=r.children[t].innerText.toLowerCase();return 2===t||3===t?parseFloat(a.replace(/[^0-9.-]+/g,""))-parseFloat(n.replace(/[^0-9.-]+/g,"")):a<n?-1:a>n?1:0}),a.forEach(function(r){return e.appendChild(r)})}});
//# sourceMappingURL=index.6e187506.js.map
