import Head from 'next/head';

export default function CreatePage() {
  return (
    <>
      <Head>
        <title>Create Account</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="container">
        <div className="content">
          <div className="topic">Create Account</div>
          <div className="input_all">
            <div>
              <label>Username:</label>
              <input type="text" />
            </div>
            <div>
              <label>Email:</label>
              <input type="text" />
            </div>
            <div>
              <label>Password:</label>
              <input type="password" />
            </div>
          </div>
          <div className="action">
            <a href="/login">
              <button className="cancle" type="button">ยกเลิก</button>
            </a>
            <button className="create" type="submit">ยืนยัน</button>
          </div>
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

        .container {
          height: 50vw;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .content {
          width: 40vw;
          height: 40vw;
          background-color: rgb(217, 217, 217);
          display: flex;
          flex-direction: column;
          align-items: center;
          border-radius: 20px;
          padding: 3vw;
        }

        .topic {
          font-size: 2vw;
        }

        .input_all {
          width: 100%;
          height: 23vw;
          padding-top: 5vw;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .input_all div {
          display: flex;
          flex-direction: column;
        }

        .input_all label {
          font-size: 1.5vw;
        }

        .input_all input {
          border: none;
          font-size: 1.5vw;
          padding-left: 0.5vw;
          border-radius: 0.5vw;
        }

        .action {
          padding-top: 5vw;
          width: 30vw;
          display: flex;
          justify-content: space-between;
        }

        .action button {
          border: none;
          border-radius: 20px;
          width: 7vw;
          height: 3vw;
          color: white;
          font-size: 1vw;
        }

        .cancle {
          background-color: rgb(255, 67, 67);
          transition-duration: 0.3s;
          transition-property: box-shadow, transform;
        }

        .cancle:hover {
          background-color: rgb(218, 59, 59);
          transform: scale(1.1);
        }

        .create {
          background-color: rgb(104, 177, 245);
          transition-duration: 0.3s;
          transition-property: box-shadow, transform;
        }

        .create:hover {
          background-color: rgb(81, 144, 202);
          transform: scale(1.1);
        }
      `}</style>
    </>
  );
}
