import buffet from './buffet.jpg';
export const loadHome = (content) => {
    const homeContainer = document.createElement('div');
      homeContainer.classList.add('homePage');
    const leftSide = document.createElement('div');
    leftSide.classList.add('left');
    const rightSide = document.createElement('div');
    rightSide.classList.add('right');
  
    const buffetImage = document.createElement('img');
        buffetImage.src = buffet;
             buffetImage.alt = 'A variety of food';
    const title = document.createElement('h1');
        title.textContent = 'Welcome to Sharvy\'s buffet';
    const introTitle = document.createElement('h2');
            introTitle.textContent = ' Sharvy\'s has the best buffet in the entire United states!!'
    const introText = document.createElement('p');
            introText.textContent = ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam orci vitae tempor rutrum. In tempor ut diam eu pharetra. Etiam sapien erat, mattis sed lacus et, malesuada...';
content.append( homeContainer);
homeContainer.append(leftSide, rightSide);
leftSide.append(title,buffetImage);
rightSide.append(introTitle, introText);

}