$(() => {
  const backgroundImages = [
  "imgs/woods1.jpeg",
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
  //query for html elements
  const $pcInfo = $(`#pcInfo`);
  const $options = $(`#options`);
  const $narrative = $(`#narrative`);
  const $name = $(`#pcname`);
  const $health = $(`#health`);
  const $hunger = $(`#hunger`);
  const $food = $(`#food`);
  const $items = $(`#items`);
  const $cryptids = $(`#cryptids`);
  const $titleScreen = $(`#titlescreen`);
  const $foodItem = $("<li>").text(food);
  const $food = $(`#food`);
  const $foodList = $("<ul>");
  for (const food of playerCharacter.items.foodItems) {
    const $foodItem = $("<li>").text(food);
    $foodList.append($foodItem);
  }
  $food.append($foodList);
  const $items = $(`#items`);
  const $healthItemList = $("<ul>");
  for (const healthItem of playerCharacter.items.healthItems) {
    const $health = $("<li>").text(healthItem);
    $healthItemList.append($health);
  }
  $items.append($healthItemList);
  // $pcInfo.hide().delay(9000).show()
  // $options.hide().delay(9000).show()
  // $narrative.hide().delay(9000).show()
  $titleScreen
    .hide()
    .fadeIn(3000)
    .delay(3000)
    .fadeOut(3000);
$("body").css("background-image", `url(${getRandomImgURL()})`);
});
