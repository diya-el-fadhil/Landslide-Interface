window.onload = function() {
    const times = ['morning', 'evening', 'night'];
    let currentIndex = 0;
    
    const container = document.createElement('div');
    container.className = 'background-container';
    document.body.appendChild(container);
    
    times.forEach(time => {
        const overlay = document.createElement('div');
        overlay.className = `overlay ${time}`;
        container.appendChild(overlay);
    });

    function changeBackground() {
        const overlays = document.querySelectorAll('.overlay');
        const images = document.querySelectorAll('.background-image');
        
        overlays.forEach(overlay => overlay.style.opacity = '0');
        images.forEach(img => img.style.opacity = '0');
        
        overlays[currentIndex].style.opacity = '1';
        images[currentIndex].style.opacity = '1';

        document.body.setAttribute('data-time', times[currentIndex]);
        
        currentIndex = (currentIndex + 1) % times.length;
    }

    setInterval(changeBackground, 10000);
    changeBackground();
}

window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.querySelector('.loader');
        const loaderContainer = document.querySelector('.loader-container');
        const contentContainer = document.querySelector('.content-container');
        if (loader && loaderContainer) {
            loader.classList.add('expand');

            setTimeout(() => {
                loaderContainer.style.opacity = '0';
                if (contentContainer) contentContainer.style.opacity = '1';
                setTimeout(() => {
                    loaderContainer.style.display = 'none';
                }, 500);
            }, 1000);
        }
    }, 2000);
    //     loader.classList.add('expand');
        
    //     setTimeout(() => {
    //         loaderContainer.style.opacity = '0';
    //         contentContainer.style.opacity = '1';
    //         setTimeout(() => {
    //             loaderContainer.style.display = 'none';
    //         }, 500);
    //     }, 1000);
    // }, 2000);
});