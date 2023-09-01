function mudarString(n) {
  if (n == "1"){
    rate.innerHTML = n;
 }
 else if (n == "2"){
  rate.innerHTML = n;
 }
 else if (n == "3"){
   rate.innerHTML = n;
 }
 else if (n == "4"){
    rate.innerHTML = n;
 }else  if (n == "5"){
   rate.innerHTML = n;
 } else if (!n){
   alert("Invalido");
 }

}

function submmit(){
  const rating1 = document.querySelector(".rating1");
  const rating2 = document.querySelector(".rating2");

  rating1.style.display = "none";
  rating2.style.display = "grid";
}



