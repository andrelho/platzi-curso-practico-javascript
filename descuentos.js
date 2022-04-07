

 function calcularPrecioConDescuento(precio, descuento){
     const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    

     return precioConDescuento;
 }

//  function onClickButtonPriceDiscount(){
//          const inputPrice = document.getElementById("InputPrice");
//         const priceValue = inputPrice.value;

//         const inputCoupon = document.getElementById("InputCoupon")
//          const couponValue = inputDiscount.value;

//         const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

//         const resultP = document.getElementById("ResultP");
//        resultP.innerText =  "El precio es : $" + precioConDescuento;

//  }

const coupons = [
    "Cupon 15",
    "Cupon 20",
    "Cupon 25"
];

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;
    
    let descuento;

    switch(couponValue){
        case coupons[0]: // "cupon 15"
        descuento = 15;
        break;
        case coupons[1]: // "cupon 20"
        descuento = 20;
        break;
        case coupons[2]: // "cupon 25"]
        descuento = 25;
        break;
    }
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    
    const resultP = document.getElementById("ResultP");
    resultP.innerText =  "El precio es : $" + precioConDescuento;
}




