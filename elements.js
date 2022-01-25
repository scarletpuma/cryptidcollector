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
  const $hp = $(`#hp`);
  const $hunger = $(`#hunger`);
  const $titleScreen = $(`#titlescreen`);

  const $foodItem = $("<li>").text(food);
  const $food = $(`#food`);
  const $foodList = $("<ul>");
  for (const food of playerCharacter.items.foodItems) {
    const $foodItem = $("<li>").text(food);
    $foodList.append($foodItem);
  }
  $food.append($foodList);

  const $healthItem = $("<li>").text(health);
  const $health = $(`#healthitems`);
  const $healthList = $("<ul>");
  for (const health of playerCharacter.items.healthItems) {
    const $healthItem = $("<li>").text(health);
    $healthList.append($healthItem);
  }
  $health.append($healthList);

  const $sentimentalItem = $("<li>").text(sentimental);
  const $sentimental = $(`#sentimental`);
  const $sentimentalList = $("<ul>");
  for (const sentimental of playerCharacter.items.sentimentalItems) {
    const $sentimentalItem = $("<li>").text(sentimental);
    $sentimentalList.append($sentimentalItem);
  }
  $sentimental.append($sentimentalList);

  const $cryptids = $("<li>").text(cryptid);
  const $cryptid = $(`#cryptids`);
  const $cryptidList = $("<ul>");
  for (const cryptid of playerCharacter.cryptids) {
    const $cryptids = $("<li>").text(cryptid);
    $cryptidList.append($cryptid);
  }
  $cryptid.append($cryptidList);

  // $pcInfo.hide().delay(9000).show()
  // $options.hide().delay(9000).show()
  // $narrative.hide().delay(9000).show()
  // $titleScreen.hide().fadeIn(3000).delay(3000).fadeOut(3000);
$("body").css("background-image", `url(${getRandomImgURL()})`);
});
