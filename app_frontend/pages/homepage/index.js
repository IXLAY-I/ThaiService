import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/homepage.module.css';
import { useState } from 'react';

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');

  const tableData = [
    { img: '/img/somchai.png', name: 'สมชาย', status: 'ไม่ว่าง', review: '5/5', price: '5000฿' },
    { img: '/img/sommai.png', name: 'สมหมาย', status: 'ว่าง', review: '5/5', price: '2000฿' },
  ];

  const filteredData = tableData.filter(row =>
    Object.values(row).some(val => val.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <>
      <Head>
        <title>Homepage</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        />
      </Head>
      <nav>
        <ul className={styles.sidebar}> {/* ใช้ class จาก CSS Module */}
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
        </ul>
        <ul>
          <li><a>ThaiService</a></li>
          <li><a className="hidetext" href="/homepage">Homepage</a></li>
          <li><a className="hidetext" href="/review">Review</a></li>
          <li><a className="hidetext" onClick={() => window.logout()} href="/login">Log out</a></li>
          <li className={styles.menuButton} onClick={() => window.showSidebar()}>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#5f6368">
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
              </svg>
            </a>
          </li>
        </ul>
      </nav>

      <main className="container mt-5">
        <div className="row mb-5">
          <div className={`col-md-4 ${styles.bgLight} p-4 rounded`}>
            <h3>ติดต่อสอบถามเพิ่มเติม</h3>
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
            <h2>บริการที่เหนือความคาดหวัง คือกุญแจสู่หัวใจลูกค้า</h2>
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

        <div className="my-5">
          <h1>Top Employees</h1>
          <div className="d-flex justify-content-between">
            {[1,2,3,4,5].map(i => (
              <Image key={i} src={`/img/top${i}.png`} width={100} height={100} className="rounded-circle" alt={`Top ${i}`} />
            ))}
          </div>
        </div>

        <div className="my-5">
          <div className={`bg-light p-3 rounded ${styles.bgLight}`}>
            <input
              type="search"
              className="form-control mb-3"
              placeholder="Search For Topics..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
            <table className="table text-center table-bordered">
              <thead className="table-dark">
                <tr>
                  <th>รูป</th>
                  <th>ชื่อ</th>
                  <th>สถานะ</th>
                  <th>รีวิว</th>
                  <th>ราคาต่อ ชม.</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((row, idx) => (
                  <tr key={idx}>
                    <td><Image src={row.img} width={40} height={40} className="rounded-circle" alt={row.name} /></td>
                    <td>{row.name}</td>
                    <td>{row.status}</td>
                    <td>{row.review}</td>
                    <td>{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}
