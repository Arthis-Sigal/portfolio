document.addEventListener("DOMContentLoaded", () => {
    const footerConteneur = document.getElementById('footer-conteneur');

    const footerElement = document.createElement('div');

    footerElement.innerHTML = `
    <footer class="bg-black pt-4">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <h3 class="header-title">Arthis Sigal</h3>
                <a href="https://www.youtube.com/channel/UCyWh5HeySA6P-fe64OvkOSQ" class="text-danger" target="_blank"><img src="assets/icon/youtube.png" alt="lien vers youtube" class="icon"></a>
                <a href="https://www.linkedin.com/in/arthissigal/" class="text-danger" target="_blank"><img src="assets/icon/linkedin.png" alt="lien vers linkedin" class="icon ml-3"></i></a>

            </div>
            <div class="col-lg-6">
                <h3 class="header-title">Contact</h3>
                <a href="mailto:sigalarthis@gmail.com" class="b-5 clicLink">sigalarthis@gmail.com</a>
                <br/>
                <a href="tel:+687 52.98.50" class="t-5 clicLink">+687 52.98.50</a>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-xs-12 text-center">
                <a href="#" class="clicLink" data-bs-toggle="modal" data-bs-target="#mentionsLegalesModal">Mentions légales</a>
            </div>
            <div class="col-md-4 col-xs-12 text-end">
                <p class="text-white">© 2024 Sigal Arthis. All Rights Reserved.</p>
            </div>
        </div>

    </div>

</footer>

<!-- Popup des Mentions Légales -->
<div class="modal fade" id="mentionsLegalesModal" tabindex="-1" aria-labelledby="mentionsLegalesLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <a href="#" class="text-black clicLink" data-bs-toggle="modal" data-bs-target="#mentionsLegalesModal">Mentions légales</a>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <h3>Propriétaire et Éditeur du site</h3>
                <p>
                    <strong>Nom :</strong> Sigal Arthis<br>
                    <strong>Email :</strong> <a href="mailto:sigalarthis@gmail.com">sigalarthis@gmail.com</a><br>
                    <strong>Téléphone :</strong> <a href="tel:+687529850">+687 52.98.50</a>
                </p>

                <h3>Hébergeur du site</h3>
                <p>
                    <strong>Nom :</strong> Netlify, Inc.<br>
                    <strong>Adresse :</strong> 2325 3rd Street, Suite 296, San Francisco, California 94107, USA<br>
                    <strong>Site Web :</strong> <a href="https://www.netlify.com" target="_blank">https://www.netlify.com</a>
                </p>

                <h3>Directeur de la publication</h3>
                <p>Sigal Arthis</p>

                <h3>Propriété intellectuelle</h3>
                <p>
                    L'ensemble des contenus présents sur ce site (textes, images, graphismes, logos, vidéos, etc.) est la propriété exclusive de Sigal Arthis, sauf mention contraire. 
                    Toute reproduction, distribution, modification ou utilisation des éléments du site sans autorisation expresse préalable est interdite et constituerait une contrefaçon.
                </p>

                <h3>Responsabilité</h3>
                <p>
                    Les informations fournies sur ce site sont aussi précises que possible et le site est régulièrement mis à jour. Toutefois, des erreurs ou des omissions peuvent survenir. 
                    Sigal Arthis ne pourra en aucun cas être tenu responsable de tout préjudice résultant de l'utilisation du site ou des informations qu'il contient.<br>
                    Les liens hypertextes vers d'autres sites externes ne sont fournis qu’à titre informatif. Sigal Arthis n’a aucun contrôle sur leur contenu et décline toute responsabilité en cas de contenu illicite ou inapproprié sur ces sites.
                </p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
            </div>
        </div>
    </div>
</div>
    `;

    footerConteneur.appendChild(footerElement);
});
