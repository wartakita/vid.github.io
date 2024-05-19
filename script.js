        function getParameterByName(name, url = window.location.href) {
            name = name.replace(/[\[\]]/g, '\\$&');
            let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, ' '));
        }

        function base64Decode(str) {
            try {
                return atob(str);
            } catch (e) {
                console.error('Failed to decode Base64 string', e);
                return '';
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            const srcBase64 = getParameterByName('src');
            const posterBase64 = getParameterByName('poster');

            const src = srcBase64 ? base64Decode(srcBase64) : '';
            const poster = posterBase64 ? base64Decode(posterBase64) : '';

            const mediaPlayer = document.getElementById('mediaPlayer');
            if (src) {
                mediaPlayer.setAttribute('src', src);
            }
            if (poster) {
                mediaPlayer.setAttribute('poster', poster);
            }
        });
