document.addEventListener("DOMContentLoaded", () => {
    fetch('bdd/projet.json')
        .then(response => response.json())
        .then(data => {
            const portfolioTitlesContainer = document.getElementById('portfolio-titles');
            const imageDisplayContainer = document.getElementById('image-display');
            const projets = data.projets;

            if (projets.length > 0) {
                displayImageWithOverlay(projets[0]);
            }

            projets.forEach((item, index) => {
                const titleElement = document.createElement('a');
                titleElement.href = `fiche.html#${item.link}`;
                titleElement.classList.add('list-group-item', 'list-group-item-action', 'project-title');
                titleElement.innerHTML = `<span class="arrow">➜</span> <span class="title-text">${item.titre}</span>`;

                titleElement.addEventListener('mouseover', (e) => {
                    e.preventDefault();
                    displayImageWithOverlay(item);
                });

                portfolioTitlesContainer.appendChild(titleElement);
            });

            function displayImageWithOverlay(item) {
                const firstImage = item.images[0];
                imageDisplayContainer.innerHTML = `
                    <div class="image-container">
                        <img src="bdd/images_project/${item.prefix}/${firstImage}" alt="${item.titre}" class="img-fluid">
                        <div class="overlay">
                            <a href="fiche.html#${item.link}">En savoir plus</a>
                        </div>
                    </div>
                `;
            }
        })
        .catch(error => console.error('Erreur lors du chargement du fichier JSON:', error));
});
