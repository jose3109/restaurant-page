
export const loadMenu = (content) => {
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menuPage')
    const menu = document.createElement('p');
    const menuTitle = document.createElement('h1');
    menu.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam orci vitae tempor rutrum. In tempor ut diam eu pharetra. Etiam sapien erat, mattis sed lacus et, malesuada...'
    menuTitle.textContent = 'Sharvy\'s menu';

    content.appendChild(menuDiv);
    menuDiv.append(menuTitle, menu);
}