
const modal =
document.getElementById("modal");

const openModal =
document.getElementById("openModal");

const closeModal =
document.getElementById("closeModal");

const saveBtn =
document.getElementById("saveBtn");

const transactionList =
document.getElementById("transactionList");

openModal.onclick = () => {
    modal.classList.add("active");
};

closeModal.onclick = () => {
    modal.classList.remove("active");
};

saveBtn.onclick = () => {

    const title =
    document.getElementById("title").value;

    const amount =
    document.getElementById("amount").value;

    const type =
    document.getElementById("type").value;

    if(!title || !amount){
        alert("Please fill all fields");
        return;
    }

    const div =
    document.createElement("div");

    div.className = "transaction";

    div.innerHTML = `
        <span>${title}</span>
        <span class="${type}">
            ${type === "income" ? "+" : "-"}$${amount}
        </span>
    `;

    transactionList.appendChild(div);

    modal.classList.remove("active");

    document.getElementById("title").value="";
    document.getElementById("amount").value="";
};
