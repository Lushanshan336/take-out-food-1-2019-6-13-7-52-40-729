const items = loadAllItems();
const promotions = loadPromotions();
function isExsit(itemId) {          //3min
  for (let i = 0; i < items.length; i++) {
    if (itemId == items[i].id)
      return true;
  }
  return false;
}








function bestCharge(selectedItems) {
  return /*TODO*/;
}
