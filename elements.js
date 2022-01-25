$(() => {
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

  $(window).on(`load` function ()) {
    $titleScreen
      .fadeIn(3000)
      .delay(3000)
      .fadeOut(3000);
  }

});
