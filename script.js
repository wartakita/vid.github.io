function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    var paramValue = decodeURIComponent(results[2].replace(/\+/g, ' '));
    // Encode the parameter value with Base64
    var base64EncodedValue = btoa(paramValue);
    return base64EncodedValue;
}
document.addEventListener('DOMContentLoaded', (event) => {
    const mediaPlayer = document.querySelector('media-player');
    const src = getParameterByName('src');
    if (src) {
        mediaPlayer.setAttribute('src', src);
    }
});
