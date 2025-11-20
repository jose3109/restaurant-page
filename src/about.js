

export const loadAbout = (content) => {
 
    const aboutDiv = document.createElement('div');
    aboutDiv.classList.add('aboutPage')
    const about = document.createElement('p');
    const aboutTitle = document.createElement('h1');
    about.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam orci vitae tempor rutrum. In tempor ut diam eu pharetra. Etiam sapien erat, mattis sed lacus et, malesuada...'
    aboutTitle.textContent = 'Sharvy\'s has a long history...';

    content.appendChild(aboutDiv);
    aboutDiv.append(aboutTitle, about);
}