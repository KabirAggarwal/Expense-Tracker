const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form  = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

const dummyTransactions=[
    {id:1, text:'flower', amount:'-20'},
    {id:2, text:'salary', amount:'300'},
    {id:3, text:'Book', amount:'-10'},
    {id:4, text:'Pen', amount:'+150'}
];

let transactions=dummyTransactions;
//add transaction
// function addT(e){
//     e.preventDefault();
//     if(text.value.trim() === '' || amount.value.trim() === ''){
//         alert("Plz... Add  a text and amount in the given fields..");
//     } 
//     else{
//         const transaction={
//             id:generateID(),
//             text:text.value,
//             amount:+amount.value
//         };
//         console.log(transaction);
//     }

// }

// form.addEventListener('submit',addT);
//Random ID generator
function generateID(){
    return Math.floor(Math.random() * 100000000 );
}

//add trasactions to DOM list
function addTransactionDOM(transaction){
    //Get sign
    const sign=transaction.amount<0 ?'-':'+';

    const item=document.createElement('li');
    //add class on value
    item.classList.add(transaction.amount<0?'minus':'plus');
    item.innerHTML=`
    ${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span> 
    <button class='delete-btn'>x</button>
    `;
    list.appendChild(item);
}
//update the balance,income and expense
function updateValue(){
    const amounts=transactions.map(transaction => transaction.amount);
    //console.log(amounts);
    var total=0;
    function getSum(total, num) {
        return total + Math.round(num);
      }
      function getRem(total, num) {
        return total - Math.round(num);
      }
      total=amounts.reduce(getSum,0);
    //console.log(total);

    const income=amounts
                        .filter(item => item>0)
                        .reduce(getSum,0);
   // console.log(income);

    const expense=amounts
                        .filter(item => item<0)
                        .reduce(getRem,0);
    //console.log(expense);

    balance.innerText=`₹${total}`;
    money_plus.innerText=`₹${income}`;
    money_minus.innerText=`₹${expense}`;
}
//init app
function init(){
    list.innerHTML='';
    transactions.forEach(addTransactionDOM);
    updateValue(); 
}
init();

