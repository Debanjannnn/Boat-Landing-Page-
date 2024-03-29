document.addEventListener('DOMContentLoaded', function () {
    const videos = document.querySelectorAll('video');

    videos.forEach(video => {
        video.addEventListener('mouseenter', function () {
            this.play();
        });

        video.addEventListener('mouseleave', function () {
            this.pause();
            this.currentTime = 0.02;
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const videos = document.querySelectorAll('.video-hover');

    videos.forEach(video => {
        video.addEventListener('mouseenter', function () {
            this.play();
        });

        video.addEventListener('mouseleave', function () {
            this.pause();
            this.currentTime = 0;
        });
    });
});

