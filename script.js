function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

document.addEventListener('DOMContentLoaded', (event) => {
    const mediaPlayer = document.querySelector('media-player');
    const src = getParameterByName('src');
    if (src) {
        mediaPlayer.setAttribute('src', src);
    }
});
// Fungsi untuk decode Base64
function decodeBase64(str) {
    return decodeURIComponent(escape(atob(str)));
}

// Mengambil parameter 'src' dari URL
const srcParam = getParameterByName('src');

// Jika parameter 'src' ada, decode dan setel sebagai atribut src dari iframe
if (srcParam) {
    const decodedSrc = decodeBase64(srcParam);
    document.getElementById('main-iframe').src = decodedSrc;
}
