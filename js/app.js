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
      logData: function(){
        return data;
      }
    }

})();

//UI Controller
const UICtrl = (function(){
  //Public methods
  return{

  }
})();

//App Controller
const App = (function(ItemCtrl, UICtrl){
  
  
  //Public Methods
  return {
    init: function(){
      console.log('Initializing App.....')
    }
  }
})(ItemCtrl, UICtrl);

App.init();