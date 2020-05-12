
const release = document.querySelector ('.release');
const containerCatalogues = document.querySelector ('.container-catalogues');

const handleClick = () => {
    release.classList.toggle('release-active');
    containerCatalogues.classList.toggle('container-catalogues-active');
}
release.addEventListener('click', handleClick);
