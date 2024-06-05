document.addEventListener('DOMContentLoaded', () => {
    const markers = document.querySelectorAll('.star-marker');
    const popup = document.getElementById('popup');
    const closeBtn = document.querySelector('.close-btn');
    const popupTitle = document.getElementById('popup-title');
    const popupArtist = document.getElementById('popup-artist');
    const popupCover = document.getElementById('popup-cover');
    const popupEmbed = document.getElementById('popup-embed');

    markers.forEach(marker => {
        marker.addEventListener('click', () => {
            const title = marker.getAttribute('data-title');
            const artist = marker.getAttribute('data-artist');
            const cover = marker.getAttribute('data-cover');
            const embed = marker.getAttribute('data-embed');

            popupTitle.textContent = title;
            popupArtist.textContent = artist;
            popupCover.src = cover;
            popupEmbed.innerHTML = embed;

            popup.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
        popupEmbed.innerHTML = '';
    });

    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
            popupEmbed.innerHTML = '';
        }
    });
});
