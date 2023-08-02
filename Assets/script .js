
let texts = document.getElementById('text');
let quan = document.getElementById('quan');
let price = document.getElementById('price');

let forItems = document.querySelector(".forItem");
let forPrice = document.querySelector(".forPrice");
let forQuan = document.querySelector(".forQuan");
let forTotal = document.querySelector(".total");

let rows = document.querySelector(".row");

let bill = 0;
let buttons;
// let bill = "";
let ul;
let li;
let p ;
let t;

function addToCart() {
    if (texts.value !== "" && quan.value !== "" && price.value !== "") {

         ul = document.createElement("li");
        ul.innerText = texts.value;
        forItems.appendChild(ul);

         li = document.createElement("ul");
        li.innerText = price.value;
        forPrice.appendChild(li);


         p = document.createElement("p");
        p.innerText = quan.value;
        forQuan.appendChild(p);


         t = document.createElement("ul");
        let a = price.value;
        let b = quan.value;
        let multi = a * b;

        t.value = multi;
        t.innerText = t.value;
        forTotal.appendChild(t);

        
        texts.value = " ";
        price.value = " ";
        quan.value = " ";


        bill = Number(bill + t.value);
        let btn = document.querySelector(".btn");
        btn.innerHTML = bill;

     
    }
    else{
        alert("Please Enter All Fields");
    }

}


 

 



