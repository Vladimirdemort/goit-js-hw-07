const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const imgMaker = images => {
  const { url, alt } = images;
  return `<li class="img-style">
        <img src="${url}" alt="${alt}"  width="240px">
      </li>`
      
}
const imgCreator = document.querySelector("#gallery");
const imgStringMaker = images.map(imgMaker).join('');

imgCreator.insertAdjacentHTML('beforeend', imgStringMaker);
console.log(imgStringMaker)

console.log(typeof imgStringMaker)
// const imgArr = images.map(option => {
//   const imgEl = document.createElement('img');
//   imgEl.src = option.url;
//   imgEl.alt = option.alt;
//   imgEl.width = 240;

//   return imgEl
// });

// imgCreator.append(...imgArr);

