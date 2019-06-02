window.onload = function() {
    // Close Drawer after menu item click
    var btnsNL = document.querySelectorAll('#menu li a')
    var btns = Array.prototype.slice.call(btnsNL)
    var dwCtrl = document.querySelector('#drawer-control')
    btns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            dwCtrl.checked = false
        })
    })
}

// Google Analytics
window.dataLayer = window.dataLayer || []
function gtag() {
    dataLayer.push(arguments)
}
gtag('js', new Date())
gtag('config', 'UA-58594179-3')
