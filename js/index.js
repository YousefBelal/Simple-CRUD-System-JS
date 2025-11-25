let phones = [
  { name: "iPhone x", price: 400, qty: 3 },
  { name: "iPhone 11", price: 500, qty: 5 },
  { name: "iPhone 12", price: 600, qty: 7 },
];

let useEdit = false;

let showPhones = () => {
  let tbody = document.querySelector("table tbody");
  tbody.innerHTML = ""; // console.clear()

  phones.forEach((el, index) => {
    tbody.innerHTML += `
    <tr>
      <td>${index + 1}</td>
      <td>
        <input
          id="Name${index + 1}"
          type="text"
          disabled="true"
          value="${el.name}"
        />
      </td>
      <td>
        <input
          id="Price${index + 1}"
          type="number"
          value="${el.price}"
          disabled="true"
        />
      </td>
      <td>
        <input
          id="Qty${index + 1}"
          type="number"
          value="${el.qty}"
          disabled="true"
        />
      </td>
      <td>${el.price * el.qty} $</td>
      <td>
        <button class="btn btn-warning" onclick="editPhone(${
          index + 1
        })" id="btn${index + 1}">Edit Phone</button>
        <button onclick="removePhone(${index})" class="btn btn-danger">Remove Phone</button>
      </td>
    </tr> 
  `;
  });
};

showPhones();

let removePhone = (index) => {
  let deleteConfirmid = confirm("Are you sure ?");
  if (deleteConfirmid == true) {
    phones.splice(index, 1);
    showPhones();
  }
};

let addNewPhone = () => {
  let phoneName = document.querySelector("#phoneName");
  let phonePrice = document.querySelector("#phonePrice");
  let phoneQty = document.querySelector("#phoneQty");

  let newPhone = {
    name: phoneName.value,
    price: +phonePrice.value,
    qty: +phoneQty.value,
  };

  phones.push(newPhone);
  showPhones();

  phoneName.value = "";
  phonePrice.value = "";
  phoneQty.value = "";
};

let editPhone = (elementIndex) => {
  let editButton = document.querySelector(`#btn${elementIndex}`);
  let phoneName = document.querySelector(`#Name${elementIndex}`);
  let phonePrice = document.querySelector(`#Price${elementIndex}`);
  let phoneQty = document.querySelector(`#Qty${elementIndex}`);
  if (useEdit == false) {
    editButton.innerText = "Done";
    phoneName.disabled = false;
    phoneName.style.border = "1px solid #5088ff";
    phonePrice.disabled = false;
    phonePrice.style.border = "1px solid #5088ff";
    phoneQty.disabled = false;
    phoneQty.style.border = "1px solid #5088ff";
    useEdit = true;
  } else {
    let confirmEdit = confirm("Are you Sure?");
    if (confirmEdit == true) {
      phones[elementIndex - 1].name = phoneName.value;
      phones[elementIndex - 1].price = phonePrice.value;
      phones[elementIndex - 1].qty = phoneQty.value;
    }
    editButton.innerText = "Edit Phone";
    phoneName.disabled = true;
    phoneName.style.border = "none";
    phonePrice.disabled = true;
    phonePrice.style.border = "none";
    phoneQty.disabled = true;
    phoneQty.style.border = "none";
    useEdit = false;
    showPhones();
  }
};
