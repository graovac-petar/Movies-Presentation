var dugme1 = document.querySelector(".posalji");
var ime = document.querySelector(".ime");
var prezime = document.querySelector(".prezime");
var email = document.querySelector(".e-mail");
var forma = document.querySelector(".forma");
var kom = document.querySelector("#kom");
var pol = document.querySelector("#pol");
// const zanr = document.getElementsByClassName("zanr");

async function prijava() {
  if (provera()) {
    alert("Uspesno ste se prijavili");
    const prijava = {
      ime: ime.value,
      prezime: prezime.value,
      email: email.value,
      kom: kom.value,
      pol: pol.options[pol.selectedIndex].value,
    };

    localStorage.setItem("Prijava", JSON.stringify(prijava));
    // myWindow();
    //window.location.reload();

    const result = await fetch("http://localhost:5000/api/prijava", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(prijava),
    });
    const data = await result.json();

    console.log(data);
  }
}

forma.addEventListener("submit", (e) => {
  e.preventDefault();
  prijava();
});
//dugme1.addEventListener("click", prijava);

function provera() {
  console.log(ime);
  console.log(ime.value);
  if (ime.value == "") {
    alert("Popunite ime!");
    return false;
  } else if (prezime.value === "") {
    alert("Popunite prezime!");
    return false;
  } else if (email.value === "") {
    alert("Popunite email!");
    return false;
  } else {
    return true;
  }
}
