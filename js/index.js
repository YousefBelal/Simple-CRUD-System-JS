let phoneNameEdit = document.querySelector("#phoneNameEdit");
let phonePriceEdit = document.querySelector("#phonePriceEdit");
let phoneQtyEdit = document.querySelector("#phoneQtyEdit");

let phoneIndexToEdit = null;

let phones = [
  { name: "iPhone x", price: 400, qty: 3 },
  { name: "iPhone 11", price: 500, qty: 5 },
  { name: "iPhone 12", price: 600, qty: 7 },
];

let showPhones = () => {
  let tbody = document.querySelector("table tbody");
  tbody.innerHTML = ""; // console.clear()

  phones.forEach((el, index) => {
    tbody.innerHTML += `
    <tr>
      <td>${index + 1}</td>
      <td><input value="${el.name}" disabled/> </td>
      <td>${el.price} $</td>
      <td>${el.qty} </td>
      <td>${el.price * el.qty} $</td>
      <td>
        <button onclick="openModal(${index})" class="btn btn-warning">Edit Phone</button>
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
  let confirmAddNewPhone = confirm("Are you sure?");
  if (confirmAddNewPhone == true) {
    phones.push(newPhone);
  }
  showPhones();

  phoneName.value = "";
  phonePrice.value = "";
  phoneQty.value = "";
  closeAddModal();
};

let openModal = (indexToEdit) => {
  phoneIndexToEdit = indexToEdit;
  let modal = document.querySelector(".myModal");
  modal.style.display = "flex";
  let phoneWeWantToEdit = phones[indexToEdit];
  phoneNameEdit.value = phoneWeWantToEdit.name;
  phonePriceEdit.value = phoneWeWantToEdit.price;
  phoneQtyEdit.value = phoneWeWantToEdit.qty;
};

let closeModal = () => {
  let modal = document.querySelector(".myModal");
  modal.style.display = "none";
};

let updateData = () => {
  let newPhone = {
    name: phoneNameEdit.value,
    price: phonePriceEdit.value,
    qty: phoneQtyEdit.value,
  };
  phones[phoneIndexToEdit] = newPhone;
  showPhones();
  closeModal();
  alert("Phone Edited Successfuly");
};

let openAddModal = () => {
  let modal = document.querySelector(".addPhoneModal");
  modal.style.display = "flex";
};

let closeAddModal = () => {
  let modal = document.querySelector(".addPhoneModal");
  modal.style.display = "none";
};
