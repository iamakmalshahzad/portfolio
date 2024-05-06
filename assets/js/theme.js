var videoSources = [
    "./assets/images/video1.mp4",
    "./assets/images/video2.mp4",
    "./assets/images/video3.mp4",
    "./assets/images/video4.mp4",
    "./assets/images/video5.mp4",
    ""
];

function changeVideoSource(index) {
    var videoElement = document.getElementById('overlayVideo');
    var videoSourceElement = document.getElementById('videoSource');
    
    videoSourceElement.src = videoSources[index];
    videoElement.load();
    videoElement.play();

    // Remove 'active' class from all <li> elements
    var liElements = document.querySelectorAll('.themes li');
    liElements.forEach(function(li) {
        li.classList.remove('active');
    });

    // Add 'active' class to the clicked <li> element
    liElements[index].classList.add('active');
}