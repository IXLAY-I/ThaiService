import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link'; 

export default function HomePage() {
const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    // ดึงข้อมูลจาก Django API
    fetch('http://localhost:3342/api/product/')  // ปรับ URL ตามจริง
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

const filteredData = products.filter(emp =>
    emp.product_name && emp.product_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>Homepage</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" defer></script>
      </Head>

      <nav>
        {/* <ul className="sidebar">
          <li onClick={() => window.hideSidebar()}>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#5f6368">
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
              </svg>
            </a>
          </li>
          <li><a href="/homepage">Homepage</a></li>
          <li><a href="/review">Review</a></li>
          <li><a onClick={() => window.logout()} href="/login">Log out</a></li>
        </ul> */}
        <ul>
          <li><a>ThaiService</a></li>
          <li><a className="hidetext" href="/homepage">Homepage</a></li>
          <li><a className="hidetext" href="/review">Review</a></li>
          <li><a className="hidetext" onClick={() => window.logout()} href="/login">Log out</a></li>
          {/* <li className="menu-button" onClick={() => window.showSidebar()}>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#5f6368">
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
              </svg>
            </a>
          </li> */}
        </ul>
      </nav>

      <main className="container mt-5">
        <div className="row mb-5">
          <div className="col-md-4 bg-light p-4 rounded">
            <h3 style={{ fontSize: '1.5vw' }}>ติดต่อสอบถามเพิ่มเติม</h3>
            <p>เช่าบริการได้ง่าย เริ่มต้นเพียง 1,000 บาท</p>
            <input className="form-control mb-2" placeholder="เขียนรีวิวของคุณ" />
            <button className="btn btn-primary w-100">
              <i className="bi bi-envelope"></i> ส่งรีวิว
            </button>
            <ul className="list-unstyled mt-3">
              <li>ที่อยู่: รังสิต</li>
              <li>เวลาเปิดทำการ: 20:00-04:00</li>
              <li>Line: @ThaiService</li>
              <li>เบอร์: 099-999-9999</li>
            </ul>
          </div>
          <div className="col-md-8">
            <h2 style={{ fontSize: '2vw' }}>บริการที่เหนือความคาดหวัง คือกุญแจสู่หัวใจลูกค้า</h2>
            <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <Image src="/img/Banner1.png" width={800} height={200} className="d-block w-100" alt="Banner1" />
                </div>
                <div className="carousel-item">
                  <Image src="/img/Banner2.png" width={800} height={200} className="d-block w-100" alt="Banner2" />
                </div>
                <div className="carousel-item">
                  <Image src="/img/Banner3.png" width={800} height={200} className="d-block w-100" alt="Banner3" />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>
          </div>
        </div>

        <div className="middle">
            <h1>Top Employees</h1>
            <div className="pic_top">
                <div>
                    <img src="/img/top1.png" style={{ width: '8vw' }} />
                </div>
                <div>
                    <img src="/img/top2.png" style={{ width: '8vw' }} />
                </div>
                <div>
                    <img src="/img/top3.png" style={{ width: '8vw' }} />
                </div>
                <div>
                    <img src="/img/top4.png" style={{ width: '8vw' }} />
                </div>
                <div>
                    <img src="/img/top5.png" style={{ width: '8vw' }} />
                </div>
            </div>
        </div>

          <div className="Main_Banner">
            <div id="MainBanner" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#MainBanner" data-slide-to="0" className="active"></li>
                    <li data-target="#MainBanner" data-slide-to="1"></li>
                    <li data-target="#MainBanner" data-slide-to="2"></li>
                </ol>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/img/main1.png" style={{ width: '100%', height: '8vw' }} />
                    </div>
                    <div className="carousel-item">
                        <img src="/img/main2.png" style={{ width: '100%', height: '8vw' }} />
                    </div>
                    <div className="carousel-item">
                        <img src="/img/main3.png" style={{ width: '100%', height: '8vw' }} />
                    </div>
                </div>

                <a className="carousel-control-prev" href="#MainBanner" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#MainBanner" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>

          <div className="Product">
          <div className="BoxSearch">
            <input
              type="search"
              placeholder="Search For Topics...."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="BoxForumMain">
            <div className="Forum">
              <table id="myTable" className="section-room">
                <thead>
                  <tr>
                    <th>รูป</th>
                    <th>ชื่อ</th>
                    <th>สถานะ</th>
                    <th>รีวิว</th>
                    <th>ราคาต่อ ชม.</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((product, index) => ( //this here                        
                    <tr key={index}> 
                    <Link key={index} href={`/details/${product.id}`}>  {/* Link to product detail page */}             
                      <td><img className="list_image" src={`http://127.0.0.1:3342${product.image}`} alt={product.product_name} /></td>
                      </Link>
                      <td>{product.product_name}</td>
                      <td>{product.status ? "ว่าง" : "ไม่ว่าง"}</td>
                      <td>{product.latest_rating ?? "ยังไม่มีรีวิว"}</td>
                      <td>{product.price}</td>                           
                    </tr>                            
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          overflow-x: hidden;
        }

        nav {
          background-color: rgb(217, 217, 217);
          box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
        }

        nav ul {
          width: 100%;
          list-style: none;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding: 0;
        }

        nav li {
          height: 7vh;
        }

        nav a {
          height: 100%;
          padding: 0 30px;
          text-decoration: none;
          display: flex;
          align-items: center;
          color: black;
          font-size: clamp(1.5rem, 1.2vw, 3rem);
        }

        nav ul:first-child a:hover {
          background-color: #f0f0f076;
        }

        nav li:first-child {
          margin-right: auto;
        }

        .sidebar {
            position: fixed;
            top: 0;
            right: 0;
            height: 100vh;
            width: 300px;
            z-index: 999;
            background-color: rgba(255, 255, 255, 0.445);
            backdrop-filter: blur(10px);
            box-shadow: -10px 0 10px rgba(0, 0, 0, 0.1);
            display: none;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
        }

        .sidebar li {
            width: 100%;
        }

        .sidebar a {
            width: 100%;
        }

        .content {
            margin-top: 5vw;
            margin-inline: 15vw;
        }

        .head {
            height: 20vw;
        }

        .contact {
            background-color: rgb(245, 245, 245);
            border: 0.15vw solid rgb(99, 99, 99);
            border-radius: 20px;
            width: 1vw;
            color: black;
        }

        .contact p {
            font-size: 1vw;
        }

        .contact_input {
            display: flex;
            flex-direction: column;
            font-size: 1vw;
        }

        .contact_input input {
            margin: 0.3vw;
            border: 0.1vw solid black;
            border-radius: 10px;
        }

        .contact_input button {
            height: 2vw;
            width: 3vw;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .contact_input i {
            font-size: 1vw;
        }

        .contact ul {
            margin-top: 0.5vw;
            list-style: none;
            padding: 0;
            font-size: 1vw;
        }

        .carousel-inner {
            border-radius: 20px;
        }

        .left, .right {
            border-radius: 20px;
        }

        .middle {
            padding-top: 5vw;
        }

        .middle h1 {
            margin-bottom: 2vw;
            font-size: 2vw;
        }

        .pic_top {
            display: flex;
            justify-content: space-between;
        }

        .pic_top img {
            border-radius: 20px;
        }

        .Main_Banner {
            padding-top: 5vw;
        }

        .Product {
            padding-top: 5vw;
            display: flex;
            /* background-color: red; */
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        .BoxSearch {
            width: 40vw;
            background-color: rgb(217, 217, 217);
            padding: 1vw 1vw;
            border-radius: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .BoxSearch input {
            border: none;
            width: 100%;
            padding-left: 0.5vw;
            outline: none;
            background: transparent;
            font-size: 1vw;
        }

        .BoxForumMain {
            padding: 5vw;
        }

        .Forum {
            width: 70vw;
            height: 30vw;
            background-color: rgb(217, 217, 217);
            padding: 1vw;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            overflow: auto;
        }

        .section-room {
            width: 100%;
            text-align: center;
            border-collapse: collapse;
        }

        ::-webkit-scrollbar {
            background-color: transparent;
            width: 0.5vw;
        }

        ::-webkit-scrollbar-thumb {
            background: linear-gradient(#21d4fd, #d721ff);
            border-radius: 100px;
        }

        .section-room th,
        .section-room td {
            padding: 1vw;
            font-size: 1vw;
        }

        tbody tr {
            --delay: .1s;
            transition: .5s ease-in-out var(--delay), background-color 0s;
        }

        thead th, tbody td {
            text-align: center;
        }

        tbody tr:hover {
            background-color: #f1f1f1;
            cursor: pointer;
            transition: background-color 0.3s ease;
            border-radius: 20px;
        }

        tbody tr.hide {
            opacity: 0;
            transform: translateX(100%);
        }
          
        tbody tr td,
        tbody tr td img,
        tbody tr td a {
            transition: .2s ease-in-out;
        }
          
        tbody tr.hide td,
        tbody tr.hide td a {
            padding: 0;
            font: 0 / 0 sans-serif;
            transition: .2s ease-in-out;
        }
          
        tbody tr.hide td img {
            width: 0;
            height: 0;
            transition: .2s ease-in-out;
        }

        .list_image {
            width: 2.5vw;
            border-radius: 20vw;
        }

        @media (max-width: 768px) {
            .content {
                flex-direction: column;
            }
          
            .contact, .Banner {
                flex: 0 0 100%;
            }
        }
      `}</style>
    </>
  );
}
