function confrimd(){
     var chek = confirm("ایا این پیام را حذف می کنید");
     if (chek == 1){
         document.getElementById('text').innerHTML = '';
         alert("مشکل داری مشکل داری ما اینجا داریم زحمت میکشیم")
         prompt("ایا تو گی هستی");
         alert("پس گی هستی ملک , خوبه  حالا بیا کیرم بخور اون مون سیفد تو نشونم بده جنده ")


     }
     else {
         document.getElementById('text').innerHTML = ' درصورت تائید ای پیام حذف خواهد شد';
         alert("بکیرم")
     }
}