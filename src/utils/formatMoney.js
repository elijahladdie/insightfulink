import React from 'react'

const formatMoney = (money) => {
  if (!money) {
    return;
  }
  const recievedAmount = parseInt(money);
  return recievedAmount
    .toLocaleString("en-US", {
      minimumFractionDigits: 0,
    })
    .replace(/,/g, ",");
}

export default formatMoney