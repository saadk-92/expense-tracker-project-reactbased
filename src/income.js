import React, { useContext, useState } from 'react';
import { TransactionContext } from './transContext';



function Income(){ 
    let { transactions, addTransaction } = useContext(TransactionContext);
    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState(0);
    const handleAddition = (event) => {
        event.preventDefault();
        if (Number(newAmount) === 0) {
            alert("Please enter correct value");
            return false;
        }
        addTransaction({
            amount: Number(newAmount),
            desc: newDesc
        });

        setDesc('');
        setAmount(0)
    }

    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0)
                income = income + transactions[i].amount
        }
        return income;
    }

    const getExpense = () => {
        let expense = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0)
                expense += transactions[i].amount
        }
        return expense;
    }

    return(

        <div className='box'>
            <h1 className='text-center'>Expense Tracker</h1><br/>
            <h3>Your Balance <br/>${getIncome() + getExpense()}</h3>
            <div className='text-box'>
                <h3>Income <br/>${getIncome()}</h3>
                <h3>Expense <br/>${getIncome()}</h3>
           </div>
                <h3>History</h3>
                <hr/>
                <br/>
                <ul className="transaction-list">
                {transactions.map((transObj, ind) => {
                    return (<li key={ind}>
                        <span>{transObj.desc}</span>
                        <span>${transObj.amount}</span>
                    </li>
                    )
                })}

            </ul>
                
                <h3>Add New Transaction</h3>
                <hr/>
                <form className="transaction-form" onSubmit={handleAddition}>
                    <label>
                        Enter Description<br/>
                        <input type="text" value={newDesc} placeholder="Description" onChange={(ev)=> 
                            setDesc(ev.target.value)} required/>
                    </label>
                    <br/>
                    <label>
                        Enter Amount<br/>
                        <input type = "number"  value={newAmount}
                        placeholder="Amount"
                        onChange={(ev) => setAmount(ev.target.value)} required/>
                    </label >
                    <br/>
                    <input className="Add-Transaction"  type = "submit" value = "Add Transaction"/>
                </form>
        </div>
    )
}
export default Income;