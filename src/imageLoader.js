import imgSrc from '@assets/imgs/3.png'

console.log('imgSrc :>> ', imgSrc);
const img = document.createElement('img')

img.src = imgSrc

document.body.appendChild(img)