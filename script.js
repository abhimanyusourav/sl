// DATABASE
const mapper = {
    'abhimanyu': 'https://abhimanyusourav.github.io/resume/',
    'lb-04': 'https://omrajsharma.notion.site/LB-Nov-MERN-3d2b1c5f7d394a43a0ab0e023e7ae7c2'
}

const urlParams = new URLSearchParams(window.location.search);  // ?q=abhimanyu => {q: 'abhimanyu'}
const query = urlParams.get('q');   // abhimanyu

if (mapper[query]) {
    window.location.href = mapper[query];
}