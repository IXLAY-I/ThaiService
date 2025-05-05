import { useState } from 'react';
import Image from 'next/image';

export default function Payment() {
  const [selectedMethod, setSelectedMethod] = useState('promptpay');

  const paymentMethods = [
    { id: 'visa', name: 'Visa', icon: '/visa.png' },
    { id: 'mastercard', name: 'Mastercard', icon: '/mastercard.png' },
    { id: 'mobile', name: 'Mobile Banking', icon: '/mobile.png' },
    { id: 'promptpay', name: 'PromptPay', icon: '/promptpay.png' },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">ชำระเงิน</h1>

      <div className="flex flex-col md:flex-row gap-4 w-full max-w-4xl">
        <div className="bg-white rounded-lg shadow-md p-4 w-full md:w-1/3">
          <h2 className="text-lg font-semibold text-white bg-blue-600 p-2 rounded-t-lg">เลือกวิธีการชำระเงิน</h2>
          <ul>
            {paymentMethods.map((method) => (
              <li
                key={method.id}
                onClick={() => setSelectedMethod(method.id)}
                className={`flex items-center p-2 cursor-pointer rounded-lg ${
                  selectedMethod === method.id ? 'bg-gray-200' : 'hover:bg-gray-100'
                }`}
              >
                <Image src={method.icon} alt={method.name} width={40} height={40} className="mr-2" />
                <span className="flex-1">{method.name}</span>
                <span>{'>'}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 w-full md:w-2/3 flex justify-center items-center">
          {selectedMethod === 'promptpay' && (
            <div className="flex flex-col items-center w-full max-w-md">
              <div className="flex justify-between items-center bg-blue-600 text-white p-2 rounded-t-lg w-full">
                <h2 className="text-lg font-semibold">พร้อมเพย์</h2>
                <Image src="/promptpay.png" alt="PromptPay" width={80} height={30} />
              </div>
              <div className="border border-gray-300 rounded-b-lg w-full">
                <div className="bg-blue-600 text-white p-2 rounded-t-lg text-center">
                  <p>THAI QR PAYMENT</p>
                </div>
                <div className="flex justify-center p-4">
                  <Image src="/img/qr_code.png" width={200} height={200} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-between items-center w-full max-w-4xl mt-4">
        <p className="text-xl font-semibold">ยอดชำระ: 7,000฿</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">ย้อนกลับ</button>
      </div>
    </div>
  );
}