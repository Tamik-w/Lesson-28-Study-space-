const link = document.createElement('a');
const h1 = document.querySelector('h1');

link.href = 'https://dom.spec.whatwg.org/';
link.appendChild(h1);
document.body.appendChild(link);
link.id = 'link';