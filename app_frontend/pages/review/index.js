import Head from 'next/head';
import { useEffect } from 'react';

export default function ReviewPage() {
  useEffect(() => {
    window.showSidebar = function () {
      document.querySelector('.sidebar').style.display = 'flex';
    };
    window.hideSidebar = function () {
      document.querySelector('.sidebar').style.display = 'none';
    };
    window.logout = function () {
      alert('Logged out!');
      // ใส่ logout logic ที่นี่ เช่นล้าง token, redirect, etc.
    };
  }, []);

  return (
    <>
      <Head>
        <title>Review</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <nav>
        <ul className="sidebar">
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
          <li className="menu-button" onClick={() => window.showSidebar()}>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#5f6368">
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
              </svg>
            </a>
          </li>
        </ul>
      </nav>

      <div className="BoxForumMain">
        <div className="Forum">
          <table id="myTable" className="section-room">
            <thead>
              <tr><th>ความคิดเห็นทั้งหมด</th></tr>
            </thead>
            <tbody>
              {[
                "ข้าวอร่อยห้องน้ำสะอาด",
                "Halloween จุ๊กกรู๊ววว",
                "Soap land ประเทศไทย",
                "งานพรีเมี่ยม",
                "กลิ่นหอม รสชาติโอเคครับ",
                "ติดใจครับ",
                "คุ้มค่าครับ บริการเหนือความคาดหวังผมชื่อ",
                "ahh",
                "เตียงนิ่ม"
              ].map((text, index) => (
                <tr key={index}><td>{text}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <style jsx>{`
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
          height: 70px;
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

        nav a:hover {
          background-color: rgb(255, 218, 34);
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

        .BoxForumMain {
          padding: 5vw;
          display: flex;
          justify-content: center;
        }

        .Forum {
          width: 50vw;
          height: 30vw;
          background-color: rgb(217, 217, 217);
          padding: 1vw;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          overflow: auto;
        }

        .section-room {
          width: 100%;
          border-collapse: separate;
          border-spacing: 1vw;
        }

        .section-room th,
        .section-room td {
          text-align: left;
          padding: 1vw;
          font-size: 1vw;
        }

        .section-room th {
          text-align: center;
          font-size: 1.5vw;
        }

        thead th,
        tbody td {
          border-radius: 20px;
        }

        tbody tr:hover {
          background-color: #f1f1f1;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        ::-webkit-scrollbar {
          background-color: transparent;
          width: 0.5vw;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(#21d4fd, #d721ff);
          border-radius: 100px;
        }
      `}</style>
    </>
  );
}
