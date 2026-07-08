const financeData = [
    {
        title:"Balance",
        value:12480,
        trend:"+12.5%",
        positive:true
    },
    {
        title:"Income",
        value:18900,
        trend:"+8.2%",
        positive:true
    },
    {
        title:"Expenses",
        value:6420,
        trend:"-4.1%",
        positive:false
    },
    {
        title:"Savings",
        value:6480,
        trend:"+15.7%",
        positive:true
    }
];

const cards =
document.getElementById("cards");

financeData.forEach(item=>{

    cards.innerHTML += `
        <div class="card">
            <p class="label">
                ${item.title}
            </p>

            <h2>
                $${item.value.toLocaleString()}
            </h2>

            <p class="
                trend
                ${item.positive
                    ? "up"
                    : "down"
                }
            ">
                ${item.trend}
                this month
            </p>
        </div>
    `;
});