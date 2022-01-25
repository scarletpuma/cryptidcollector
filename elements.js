const backgroundImages = [
  "imgs/woods1.jpeg",
  "imgs/woods2.jpeg",
  "imgs/woods3.jpeg",
  "imgs/woods4.jpeg",
  "imgs/woods5.jpeg",
  "imgs/woods6.jpeg",
  "imgs/woods7.jpeg",
  "imgs/woods8.jpeg",
  "imgs/woods9.jpeg",
  "imgs/woods10.jpeg",
  "imgs/woods11.jpeg",
  "imgs/woods12.jpeg",
  "imgs/woods13.jpeg",
];

const getRandomImgURL = () => {
  const randomIndex = Math.floor(Math.random() * backgroundImages.length);
  return backgroundImages[randomIndex];
};

$(() => {
  //quert for html elements
  const $pcInfo = $(`#pcInfo`);
  const $options = $(`#options`);
  const $narrative = $(`#narrative`);
  const $name = $(`#pcname`);
  const $health = $(`#health`);
  const $hunger = $(`#hunger`);
  const $food = $(`#food`);
  const $items = $(`#items`);
  const $cryptids = $(`#cryptids`);
  $("body").css("background-image", `url(${getRandomImgURL()})`);
  //$name.text(`${pcName}`)
});
