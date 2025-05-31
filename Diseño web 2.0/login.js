let progress = 0;
const progressBar = document.getElementById('progressbar');

function doProgress() {
    if (progress<100) {
    progress += 10;
    progressBar.style.width = `${progress}%`;
    progressBar.textContent = `${progress}%`;
    setTimeout(doProgress, 500); // Incrementa cada 0.5 segundos
    }
    else {
        progressBar.textContent = "Carga completa";
    }
}
doProgress();
