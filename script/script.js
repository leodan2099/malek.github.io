function confrimd(){
     var chek = confirm("ایا مطمئن هستی که  می خوای کون ملک بزاری");
     if (chek == 1){
         document.getElementById('text').innerHTML = '';
         alert("خوبه پس کاندوم یادت نره");
         prompt("لطفا سن خود را وارد کنید");
          alert("کاندوم ورداشتی  راستی وازلین بردار البته برنداری هم مهم نیست خشک میکنیش");
         alert(" هم اینک اقای ملمه با شما عقد دائم کرده و کون سفیدش از ان شماست لذت ببرید"):


     }
     else {
         document.getElementById('text').innerHTML = ' درصورت تائید ای پیام حذف خواهد شد';
         alert("بکیرم")
     }
}
