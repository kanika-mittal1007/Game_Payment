import React from 'react';
import { useParams } from 'react-router-dom';
import './PaymentPage.css'; // Assuming you have some CSS for styling

const PaymentPage = () => {
  const { amount } = useParams();
  const receiverDetails = {
    name: 'Tushar Ghai',
    bank: 'Bank of Baroda',
    upiId:'charughai54@oksbi'
  };

  const qrImageUrl = '/QRPay.jpeg'; // Correct path to your QR code image

  return (
    <div className="payment-container">
      <div className="details-and-qr">
        <div className="receiver-details">
          <h2>Receiver's Details</h2>
          <p><strong>Name:</strong> {receiverDetails.name}</p>
          <p><strong>Bank:</strong> {receiverDetails.bank}</p>
          <p><strong>UPIID:</strong> {receiverDetails.upiId}</p>
        </div>
        <div className="qr-code">
          <h2>Scan to Pay</h2>
          <img src={qrImageUrl} alt="QR Code" />
        </div>
      </div>
      <div className="payment-instruction">
        <h2>Payment Instruction</h2>
        <p>After payment, please send a screenshot to the below link.</p>
        <p><a href='https://wa.me/+917073440915'>This is my payment screenshot</a></p>
      </div>
    </div>
  );
};

export default PaymentPage;
