const balance = document.querySelector(".balance");
const income = document.querySelector(".income");
const expense = document.querySelector(".expense");
const modal = document.querySelector(".modal");
const transactionList = document.querySelector(".transaction-list");

const addTransaction = document.querySelector(".transaction-btn");
const save = document.querySelector(".save");
const cancel = document.querySelector(".cancel");
const remove = document.querySelector(".trash-btn")

const description = document.querySelector(".description");
const amount = document.querySelector(".amount");
const type = document.querySelector(".type");
const category = document.querySelector(".category");

let totalBalance = 0;
let totalIncome = 0;
let totalExpense = 0;

// console.log(
//   balance.innerText,
//   income.innerText,
//   expense.innerText,
//   transactionList.innerHTML
// );

addTransaction.addEventListener("click", function (e) {
  modal.classList.add("is-active");
});

cancel.addEventListener("click", function (e) {
  modal.classList.remove("is-active");
});

save.addEventListener("click", function (e) {
//   console.log(description.value, amount.value, type.value, category.value);
  modal.classList.remove("is-active");

  if (type.value == "income") {
    totalBalance += Number(amount.value);
    totalIncome += Number(amount.value);
    income.innerText = "$" + totalIncome;
    transactionList.innerHTML += `<li class="plus">
                                    <p>${description.value}</p>
                                    <p>${"+$" + amount.value}</p>
                                  </li>`;
  } else {
    totalBalance -= Number(amount.value);
    totalExpense += Number(amount.value);
    expense.innerText = "$" + totalExpense;
    transactionList.innerHTML += `<li class="minus">
                                    <p>${description.value}</p> 
                                    <p>${"-$" + amount.value}</p>
                                  </li>`;
  }

  // Reset Form
  description.value = ""
  amount.value = ""
  type.value = "income"
  category.value = "default";

  balance.innerText = "$" + totalBalance;
//   console.log(transactionList.innerHTML);
});

