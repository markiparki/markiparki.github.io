'use strict';

function navigateTo(id) {
    switch(id) {
        case 'about':
            document.getElementById('about').style.display = 'block';
            document.getElementById('projects').style.display = 'none';
            document.getElementById('contact').style.display = 'none';
            break;
        case 'projects':
            document.getElementById('about').style.display = 'none';
            document.getElementById('projects').style.display = 'block';
            document.getElementById('contact').style.display = 'none';
            break;
        case 'contact':
            document.getElementById('about').style.display = 'none';
            document.getElementById('projects').style.display = 'none';
            document.getElementById('contact').style.display = 'block';
            break;
    }
}
