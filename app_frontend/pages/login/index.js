import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
export default function Login() {
    const router = useRouter();
    async function onLogin(event) {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const response = await fetch('http://localhost:3342/api/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: formData.get("username"),
                password: formData.get("password")
            })
        });
        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('jwt_access', data.access);
            alert("Login success!");
            router.push('/homepage');
        } else {
            alert("Your username/password are incorrect!");
        }
    }

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Login</title>
            </Head>

            <main>
                <form onSubmit={onLogin} className="w-screen h-screen flex justify-center items-center">
                    <div className="content">
                        <div className="topic">Login</div>
                        <div className="input_all">
                            <div>
                                <label>Email:</label>
                                <input name="username" type="text" required />
                            </div>
                            <div>
                                <label>Password:</label>
                                <input name="password" type="password" required />
                            </div>                          
                        </div>
                        <div className="action">
                            <button className="login" type="submit">เข้าสู่ระบบ</button>
                            <a href="/create">
                                <button className="create" type="button">สร้างบัญชีใหม่</button>
                            </a>
                        </div>
                    </div>
                </form>
            </main>

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

                form {
                    width: 100vw;
                    height: 100vh;
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
                    height: 17vw;
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
                    padding-top: 7vw;
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

                .login {
                    background-color: rgb(69, 192, 63);
                    transition-duration: .3s;
                    transition-property: box-shadow, transform;
                }

                .login:hover {
                    background-color: rgb(57, 160, 53);
                    transform: scale(1.1);
                }

                .create {
                    background-color: rgb(104, 177, 245);
                    transition-duration: .3s;
                    transition-property: box-shadow, transform;
                }

                .create:hover {
                    transform: scale(1.1);
                    background-color: rgb(81, 144, 202);
                }
            `}</style>
        </>
    );
}
