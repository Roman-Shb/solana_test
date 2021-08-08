import React, { useEffect, useState } from 'react';
import * as web3 from '@solana/web3.js';
import { StyledTitle, StyledHistoryList, StyledPage } from './styles';
import { TransactionCard } from '../../components';

const account = prompt('Введите код аккаунта');

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([]);
  //const account = '8YmMhex5Vd5JPsyNhCwFPDx5vqeedpCuyFE2W7VtRXQT';
  const connection = new web3.Connection('https://api.rpcpool.com/');

  const pbk = new web3.PublicKey(account);
  useEffect(() => {
    async function getTransactions() {
      let transactionsList = await connection.getConfirmedSignaturesForAddress2(pbk);
      setTransactions(transactionsList);
    }
    getTransactions();
  }, []);
  return (
    <React.Fragment>
      <StyledPage>
        <StyledTitle>История транзакций</StyledTitle>
        <StyledHistoryList>
          {transactions.map((transaction, idx) => (
            <TransactionCard transaction={transaction} key={idx} />
          ))}
        </StyledHistoryList>
      </StyledPage>
    </React.Fragment>
  );
};

export default TransactionHistory;
