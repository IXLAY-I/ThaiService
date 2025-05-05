import Head from 'next/head';
import { useState, useEffect } from 'react';

export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await fetch(`http://localhost:3342/api/product/${id}/`);
  const product = await res.json();
  const pricePerHour = product.price;
  return {
    props: {
      pricePerHour,
      product,
    },
  };
}

export default function DetailsPage({ product, pricePerHour }) {
  const [duration, setDuration] = useState(0);
  const [location, setLocation] = useState("สถานที่จัดเตรียมไว้");
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let price = duration * pricePerHour;
    if (location === "บ้านคุณ(+1000฿)") {
      price += 1000;
    }
    setTotalPrice(price);
  }, [duration, location, pricePerHour]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderData = {
      location,
      duration,
      totalPrice,
    };

    try {
      const res = await fetch('/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData),
      });

      if (!res.ok) throw new Error("ส่งข้อมูลล้มเหลว");
      alert('ส่งข้อมูลสำเร็จแล้ว!');
    } catch (error) {
      console.error(error);
      alert('เกิดข้อผิดพลาดในการส่งข้อมูล');
    }
  };

  return (
    <>
      <Head>
        <title>Details</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main>
        <form onSubmit={handleSubmit}>
          <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <div className="w-[55vw] h-[40vw] bg-gray-300 rounded-[20px] flex p-[3vw]">
              <div className="w-1/2 pr-4">
                <img src={product.image} alt={product.product_name} className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="w-1/2 flex flex-col justify-between">
              <h1 className="text-[2vw] text-center font-semibold">{product.product_name}</h1>

                <div className="px-[4vw] text-[1vw] flex flex-col gap-2">
                  <div>
                    <label>นิสัย:</label>
                    <p>น่ารัก, เอาใจเก่ง, ไม่งี้เง่า, อารมณ์ดี</p>
                  </div>
                  <div>
                    <label>สิ่งที่ชอบ:</label>
                    <p>ของหวาน, อ่านนิยาย</p>
                  </div>
                  <div>
                    <label>ความสามารถ:</label>
                    <p>ทำงานบ้านได้, ทำอาหารอร่อย</p>
                  </div>
                  <div>
                    <label>สถานที่:</label>
                    <div className="flex flex-col gap-1 mt-1">
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          className="w-[1.2vw] h-[1.2vw] accent-blue-500 mr-[1vw]"
                          name="location"
                          value="สถานที่จัดเตรียมไว้"
                          checked={location === "สถานที่จัดเตรียมไว้"}
                          onChange={(e) => setLocation(e.target.value)}
                        />
                        สถานที่จัดเตรียมไว้
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          className="w-[1.2vw] h-[1.2vw] accent-blue-500 mr-[1vw]"
                          name="location"
                          value="บ้านคุณ(+1000฿)"
                          checked={location === "บ้านคุณ(+1000฿)"}
                          onChange={(e) => setLocation(e.target.value)}
                        />
                        บ้านคุณ(+1000฿)
                      </label>
                    </div>
                  </div>
                  <div>
                    <label>เลือกระยะเวลา:</label>
                    <select
                      name="duration"
                      required
                      value={duration}
                      onChange={(e) => setDuration(Number(e.target.value))}
                      className="border rounded px-[0.5vw] py-[0.3vw] w-[15vw] h-[2vw] text-[1vw] mt-[0.5vw]"
                    >
                      <option value="">-- เลือกระยะเวลา --</option>
                      {[...Array(8)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1} ชั่วโมง
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="px-[4vw] text-[1vw] mt-2">
                  <label>ราคารวม:</label> <span>{totalPrice} ฿</span>
                </div>

                <div className="px-[4vw] mt-4 flex justify-between">
                  <a href="/homepage">
                    <button
                      type="button"
                      className="bg-red-500 hover:bg-red-600 text-white text-[1vw] w-[5vw] h-[3vw] rounded-[20px] transition transform hover:scale-110"
                    >
                      ยกเลิก
                    </button>
                  </a>
                  <button
                    type="submit"
                    className="bg-blue-400 hover:bg-blue-500 text-white text-[1vw] w-[5vw] h-[3vw] rounded-[20px] transition transform hover:scale-110"
                  >
                    ยืนยัน
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </main>
    </>
  );
}