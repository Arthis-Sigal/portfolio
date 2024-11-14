document.addEventListener("DOMContentLoaded", () => {
    const headerConteneur = document.getElementById('header-conteneur');

    const headerElement = document.createElement('div');

    headerElement.innerHTML = `
    <header class="header">
        <div class="container">
        <span onclick="window.location.href='/'">
            <div class="header-content pointerClick">
                <h4 class="header-subtitle" >Bonjour, je suis</h4>
                <h1 class="header-title">Arthis Sigal</h1>
                <h6 class="header-mono"><span id="animated-text"></span>_</h6>
            </div>
        </span>

        </div>
        <canvas id="matrix"></canvas>

    </header>
    <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-black" data-spy="affix" data-offset-top="510">
        <div class="container">
            <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse mt-sm-20 navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a href="#portfolio" class="nav-link">Portfolio</a>
                    </li>
                </ul>
                <ul class="navbar-nav brand">
                    <a href="/">
                        <img src="assets/logo.jpg" alt="" class="brand-img">
                    </a>
                </ul>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a href="#resume" class="nav-link">Resumé</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    `;

    headerConteneur.appendChild(headerElement);

    // Charger le script matrix.js après l'injection du HTML
    const scriptElement = document.createElement('script');
    scriptElement.src = 'js/matrix.js';
    document.body.appendChild(scriptElement);
});
