import PropTypes from "prop-types"
import cssTrnsaction from "../transactionHistory/Transaction.module.css"

export const TransactionHistory = ({ transactionHistory }) => {
    return (
        <table className={cssTrnsaction["transaction-history"]}>
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>

            <tbody className={cssTrnsaction["transaction-heder"]}>
                {transactionHistory.map((item) => (
                    <tr kay={item.id} className={cssTrnsaction["transaction-item"]}>
                            {item.type}
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                    </tr>
                )) }
            </tbody>
        </table>
    )
}

    TransactionHistory.propTypes = {
    transactionHistory: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
        })
    ).isRequired,
    };