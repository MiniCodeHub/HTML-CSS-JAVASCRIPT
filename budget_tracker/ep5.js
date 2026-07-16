
let transactions = [
{
    title:"Salary",
    category:"salary",
    type:"income",
    amount:5000
},
{
    title:"Rent",
    category:"rent",
    type:"expense",
    amount:1200
},
{
    title:"Burger",
    category:"food",
    type:"expense",
    amount:20
}
];

function render(){

    const table =
    document.getElementById("tableBody");

    table.innerHTML="";

    transactions.forEach((t,index)=>{

        table.innerHTML += `
        <tr>
            <td>${t.title}</td>

            <td>
                <span class="badge ${t.category}">
                    ${t.category}
                </span>
            </td>

            <td class="${t.type}">
                ${t.type}
            </td>

            <td class="${t.type}">
                ${t.type==="income" ? "+" : "-"}$${t.amount}
            </td>

            <td>
                <button
                    class="edit"
                    onclick="editTransaction(${index})"
                >
                    Edit
                </button>

                <button
                    class="delete"
                    onclick="deleteTransaction(${index})"
                >
                    Delete
                </button>
            </td>
        </tr>
        `;
    });
}

function addTransaction(){

    const title =
    prompt("Transaction Title");

    if(!title) return;

    const category =
    prompt("Category (salary/rent/food)") || "food";

    const type =
    prompt("Type (income/expense)") || "expense";

    const amount =
    Number(prompt("Amount"));

    transactions.push({
        title,
        category,
        type,
        amount
    });

    render();
}

function editTransaction(index){

    const title =
    prompt(
        "New Title",
        transactions[index].title
    );

    if(!title) return;

    transactions[index].title = title;

    render();
}

function deleteTransaction(index){

    transactions.splice(index,1);

    render();
}

render();