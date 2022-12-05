var dugme1 = document.querySelector(".posalji");
var ime = document.getElementsByClassName("ime");
var prezime = document.getElementsByClassName("prezime");
var email = document.getElementsByClassName("e-mail");
// const zanr = document.getElementsByClassName("zanr");

function prijava() {
  if (provera()) {
    alert("Uspesno ste se prijavili");
    // myWindow();
    window.location.reload();
  }
}

dugme1.addEventListener("click", prijava);

function provera() {
  if (ime.value === "") {
    alert("Popunite sva polja!");
    return false;
  } else if (prezime.value === "") {
    alert("Popunite sva polja!");
    return false;
  } else if (email.value === "") {
    alert("Popunite sva polja!");
    return false;
  } else {
    return true;
  }
}
