const items = loadAllItems();
const promotions = loadPromotions();
function isExsit(itemId) {          //3min
  for (let i = 0; i < items.length; i++) {
    if (itemId == items[i].id)
      return true;
  }
  return false;
}

function getBuyedItems(inputs){    //15min
  let buyedItems = new Array();
  let index = 0;
  for(let i=0;i<inputs.length;i++){
    let inputItem = inputs[i].split("x");
    let itemId = inputItem[0].trim();
    let number = parseInt(inputItem[1].trim());
    buyedItems.push({itemId:itemId,number:number});
  }
  return buyedItems;
}




function bestCharge(selectedItems) {
  return /*TODO*/;
}
