import React from 'react';
import { StyledListItem, StyledLink, StyledWrapper, StyledText, StyledBoldText } from './styles';
import { Card, Typography, Space, Row, Col } from 'antd';

const { Text, Link } = Typography;

//Функция для возврата времени в читаемом значении
function timeConverter(UNIX_timestamp) {
  let a = new Date(UNIX_timestamp * 1000);
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let year = a.getFullYear();
  let month = months[a.getMonth()];
  let date = a.getDate();
  let hour = a.getHours();
  let min = a.getMinutes();
  let sec = a.getSeconds();
  let time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
  return time;
}

const TransactionCard = ({ transaction }) => {
  return (
    // <StyledListItem>
    //   <StyledLink to={`/transaction/${transaction.signature}`}>
    //     <StyledWrapper>
    //       <StyledBoldText>Дата транзакции: </StyledBoldText>
    //       <StyledText>{timeConverter(transaction.blockTime)}</StyledText>
    //     </StyledWrapper>
    //     <StyledWrapper>
    //       <StyledBoldText>Сигнатура: </StyledBoldText>
    //       <StyledText>{transaction.signature}</StyledText>
    //     </StyledWrapper>
    //     <StyledWrapper>
    //       <StyledBoldText>Слот: </StyledBoldText>
    //       <StyledText>{transaction.slot}</StyledText>
    //     </StyledWrapper>
    //   </StyledLink>
    // </StyledListItem>

    <Row style={{ justifyContent: 'center' }}>
      <Col span={15}>
        <Card
          title={
            <Text strong style={{ color: '#9cbbb2' }}>
              Информация о транзакции
            </Text>
          }
          extra={
            <StyledLink to={`/transaction/${transaction.signature}`}>
              <Text strong style={{ color: '#9cbbb2' }}>
                Подробная информация
              </Text>
            </StyledLink>
          }
          style={{
            backgroundColor: '#121313',
            borderColor: '#036454',
            margin: 12,
            overflow: 'hidden',
          }}
        >
          <Space direction='vertical'>
            <Text strong style={{ color: '#9cbbb2' }}>
              ДАТА ТРАНЗАКЦИИ: {timeConverter(transaction.blockTime)}
            </Text>
            <Text strong style={{ color: '#9cbbb2', wordBreak: 'break-all' }}>
              СИГНАТУРА: {transaction.signature}
            </Text>
            <Text strong style={{ color: '#9cbbb2' }}>
              СЛОТ: {transaction.slot}
            </Text>
          </Space>
        </Card>
      </Col>
    </Row>
  );
};

export default TransactionCard;
