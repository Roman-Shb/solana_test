import React, { useEffect, useState } from 'react';
import * as web3 from '@solana/web3.js';
import {
  StyledTitle,
  StyledPage,
  StyledSignature,
  StyledBlock,
  StyledBoldText,
  StyledText,
} from './styles';

const Transaction = ({ signature }) => {
  const [transactionInfo, setTransactionInfo] = useState({});
  const connection = new web3.Connection('https://api.rpcpool.com/');
  useEffect(() => {
    async function getTransactionInfo() {
      let info = await connection.getTransaction(signature);
      setTransactionInfo(info);
    }
    getTransactionInfo();
  }, [signature]);
  // if (transactionInfo.meta) {
  //   console.log(transactionInfo.meta.status);
  // }

  const renderStatus = () => {
    if (Object.keys(transactionInfo).length) {
      return Object.keys(transactionInfo.meta.status).includes('Ok') ? 'УСПЕШНО' : 'НЕУДАЧА';
    }
  };

  return (
    <StyledPage>
      <StyledTitle>
        Расширенная информация о транзакции
        <StyledSignature>{signature}</StyledSignature>
      </StyledTitle>
      {Object.keys(transactionInfo).length && (
        <StyledBlock>
          <p>
            <StyledBoldText>HASH:</StyledBoldText>
            <StyledText>{transactionInfo.transaction.message.recentBlockhash}</StyledText>
          </p>
          <p>
            <StyledBoldText>СТАТУС:</StyledBoldText>
            <StyledText>{renderStatus()}</StyledText>
          </p>
          <p>
            <StyledBoldText>БАЛАНС ДО:</StyledBoldText>
            <StyledText>{transactionInfo.meta.preBalances[0]}</StyledText>
          </p>
          <p>
            <StyledBoldText>БАЛАНС ПОСЛЕ:</StyledBoldText>
            <StyledText>{transactionInfo.meta.postBalances[0]}</StyledText>
          </p>
          <p>
            <StyledBoldText>ИЗМЕНЕНИЕ БАЛАНСА:</StyledBoldText>
            <StyledText>{transactionInfo.meta.preBalances[0]}</StyledText>
          </p>
        </StyledBlock>
      )}
    </StyledPage>
  );
};

export default Transaction;
