var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 
  var objinCart = {
   
   
   itemName: item,
   itemPrice: Math.floor((Math.random()*100)+1)
   
  };
   
   
cart.push(objinCart);
return `${item} has been added to your cart.`;

}

function viewCart() {
  // write your code here
  
 var myArray=[];
 
  if(cart.length>=1){
    
    var a = ""
    var i;
    var b = ""
    
    for (i=0;i<cart.length;i++){
     
    //for(var property1 in objinCart){
    
    
     a = cart[i]
     
    myArray.push(a)   
      
     
    b = "In your cart, you have " + myArray
    b = b.trim();
    return b 
     
  }
  }
  else {
    return "Your shopping cart is empty."
  }
  
  
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
