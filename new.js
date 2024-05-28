// Function to get URL parameters
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    // Get the value of 'src' parameter from URL
    var srcParameterValue = getParameterByName('src');

    // Set the 'src' attribute of mediaPlayer element
    var mediaPlayer = document.getElementById('mediaPlayer');
    if (srcParameterValue) {
        mediaPlayer.setAttribute('src', srcParameterValue);
    } else {
        // Default src value if 'src' parameter is not provided
        mediaPlayer.setAttribute('src', 'DEFAULT_MEDIA_URL_HERE');
    }
