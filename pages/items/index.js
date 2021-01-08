import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function ListaDeItems({item}){  
    const list = [];
    item.forEach(element => {
        const link = `http://localhost:3000/items/${element.name}`
        list.push(<h2><li> <a href={link}>{element.name}</a> </li></h2>)
    });
    
    return  (
        <main className={styles.main}>
            <h1>Mi lista</h1>
            {list}
        </main>
    )
}
//------ DYNAMIC INFO ----------//
export async function getServerSideProps(){
    
    const req = await fetch(`http://localhost:3000/items.json`);
    const data = await req.json();

    return {
        props:{
            item:data
        },
    }
}