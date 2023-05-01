function add(){
    value = document.getElementById("prods").value;
    value++;
    document.getElementById("prods").value = value;
    document.getElementById("item-num").textContent = value;
    updatecost()
}

function deduct(){
    if (value > 0){
        value = document.getElementById("prods").value;
        value--;
        document.getElementById("prods").value = value;
        document.getElementById("item-num").textContent = value;
        updatecost()
    }
}

function updatecost(){
    //ITEMS
    price = 15.97;
    prods = parseFloat(document.getElementById("prods").value);
    itemCost = prods * price;
    document.getElementById("cost").innerHTML = "$" + itemCost.toFixed(2);

    //TOTAL BEFORE TAX
    fee = parseFloat(document.getElementById("fee").value);
    beforeTax = itemCost + fee;
    document.getElementById("tbTax").innerHTML = "$" + beforeTax.toFixed(2);

    //ESTIMATED TAX
    tax = Math.round(parseFloat(beforeTax)*10)/100;
    document.getElementById("tax").innerHTML = "$" + tax.toFixed(2);

    //TOTAL ORDER
    total = beforeTax + tax;
    document.getElementById("total").innerHTML = "$" + total.toFixed(2);

    //SHIPPING
    shipping = parseFloat(document.getElementById("fee").value);
    document.getElementById("fee1").innerHTML = "$" + shipping.toFixed(2);
}