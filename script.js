fetch("https://striveschool-api.herokuapp.com/books")
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Errore repierimento dati");
    }
  })

  .then(userData => {
    console.log("UD: ", userData);

    let cardBody = document.getElementById("container-card");

    userData.forEach(element => {
      let col = document.createElement("div");
      col.classList.add("col-sm-6", "col-md-4", "col-lg-3", "col-xl-2", "justify-content-center", "align-items-center");

      let container = document.createElement("div");
      container.classList.add("card", "h-100");

      let divImg = document.createElement("div");
      divImg.style = "height: 20rem; overflow: hidden;";

      let img = document.createElement("img");
      img.classList.add("card-img-top");

      img.src = element.img;
      img.alt = element.asin;
      img.style = "object-fit: cover; width: 100%; height: 100%;";

      let divBody = document.createElement("div");
      divBody.classList.add("card-body", "d-flex", "justify-content-between", "flex-column");

      let title = document.createElement("h6");
      title.classList.add("card-title");

      title.innerText = element.title;

      let price = document.createElement("p");
      price.classList.add("card-text");

      price.innerText = element.price + " " + "€";

      let removeBtn = document.createElement("button");
      removeBtn.classList.add("btn", "btn-primary");

      removeBtn.innerText = "Scarta";

      removeBtn.onclick = () => {
        col.remove(container);
      };

      divImg.appendChild(img);
      divBody.append(title, price, removeBtn);
      container.append(divImg, divBody);
      col.appendChild(container);
      cardBody.appendChild(col);
    });
  });
