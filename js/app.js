// Storage Controller


//Item Controller
const ItemCtrl = (function(){
  //Item Constructor
  const Item = function(id, name, calories){
    this.id = id;
    this.name = name;
    this.calories = calories;
  }


  //Data Structure / State
  const data = {
    items: [
      {id: 0, name: 'Steak Dinner', calories: 1200},
      {id: 1, name: 'Chicken Dinner', calories: 900},
      {id: 2, name: 'Fruit', calories: 200},
    ],
    currentItem: null,
    totalCalories: 0
  }
  //Public Methods
    return{
      getItems: function(){
        return data.items;
      },
      logData: function(){
        return data;
      }
    }

})();


//UI Controller
const UICtrl = (function(){
  const UISelectors = {
    itemList: '#item-list'
  }

  //Public methods
  return{
    populateItemList: function(items){
      let html = '';

      items.forEach(function(item){
        html += `<li class="collection-item" id="item-${item.id}">
        <strong>${item.name}: </strong> <em>${item.calories}</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
      </li>`;
      })
      //Insert list items
      document.querySelector(UISelectors.itemList).innerHTML = html;
    }
  }
})();


//App Controller
const App = (function(ItemCtrl, UICtrl){
  
  
  //Public Methods
  return {
    init: function(){
      //Fetch items from data Structure
      const items = ItemCtrl.getItems();
      
      //Populate list with items
      UICtrl.populateItemList(items)
    }
  }
})(ItemCtrl, UICtrl);

App.init();