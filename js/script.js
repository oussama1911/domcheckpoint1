var addBtns = document.getElementsByClassName("fas fa-plus-circle");
var subBtns = document.getElementsByClassName("fas fa-minus-circle");
var likeBtn = document.getElementsByClassName("fas fa-heart")
var trashBtn = document.getElementsByClassName("fas fa-trash-alt")
var total = document.querySelector(".total")


function add() {
    var parent = this.parentElement;
    var span = parent.querySelector("span");
    span.innerText ++;

    //total
    var grandParent = parent.parentElement;
    var price = grandParent.querySelector(".unit-price");
    var priceValue = parseInt(price.innerText.slice(0,price.innerText.length - 2))
    total.innerText = parseInt(total.innerText) + priceValue + "$"
    
}
function moin() {
    var parent = this.parentElement;
    var span = parent.querySelector("span")
    if( parseInt(span.innerText) > 0){
        span.innerText --;
    
    
        //total
    
    var grandParent = parent.parentElement;
    var price = grandParent.querySelector(".unit-price");
    var priceValue = parseInt(price.innerText.slice(0,price.innerText.length - 2))
    total.innerText = parseInt(total.innerText) - priceValue + "$"
    
    }

}
function heartbtn() {
   if(this.style.color == "black"){ 
    this.style.color = 'red'   
}else{
    this.style.color = "black"
}
}
function trash() {
    var product = this.parentElement.parentElement.parentElement.parentElement;
    var list = document.querySelector(".list-products");
    var unitPrice = document.querySelector(".unit-price").innerText;
    var unitPriceValue = parseInt(unitPrice.slice(0, unitPrice.length - 2));
    var quantity = parseInt(product.querySelector(".quantity").innerText);
    total.innerText = parseInt(total.innerText) - unitPriceValue * quantity + "$"
    list.removeChild(product);
}

for(var elem of trashBtn){
    elem.addEventListener("click",trash)
}

for(var elem of likeBtn){
    elem.addEventListener("click", heartbtn)
}

for( var elem of subBtns){
    elem.addEventListener("click" , moin)
}

for(var elem of addBtns){
    elem.addEventListener("click" , add)
}