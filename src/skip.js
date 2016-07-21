function checkForRedirect(url) {
    var waitTimer = document.getElementById('sm_dl_wait'),
        nextUrl;

    if (waitTimer !== null && document.domain === 'imslp.org') {
        nextUrl = waitTimer.getAttribute('data-id');
        window.location.href = nextUrl;
    }
};

checkForRedirect(window.location.href);
