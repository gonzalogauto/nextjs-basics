import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function Home(){
    return (
        <div className={styles.container}>
            <Head>
                <title>Login</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
            <main className={styles.main}>
                <body>
                    <form  className="form-signin">
                        <img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"></img>
                        <h1>Ingresa tus datos</h1>
                        <label>Correo</label>
                        <input  type="email" id="inputEmail" class="form-control" placeholder='Ingresa tu correo'></input>
                        <label>Contraseña</label>
                        <input type="password" id="inputPassword" class="form-control" placeholder='Ingresa tu clave'></input>
                        <div class="checkbox mb-3"></div>
                        <button class="btn btn-lg btn-primary btn-block" type="submit">Ingresar</button>
                    </form>
                </body>
            </main>
        </div>
    )
}