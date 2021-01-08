import { useRouter } from 'next/router'

export default function Item({item}){
    const router = useRouter()
    const { id } = router.query
    return <h1>{item.name}</h1>
}

//------ STATIC INFO FROM LOCAL FILES ----------//
export async function getStaticProps({params}){
    
    console.log("mostrando--> "+params.id);
    const req = await fetch(`http://localhost:3000/${params.id}.json`);
    const data = await req.json();

    return {
        props:{
            item:data
        },
    }
}

export async function getStaticPaths(){
    
    const req = await fetch(`http://localhost:3000/items.json`);
    const data = await req.json();
    const paths = data.map(item=>{
        return { params: { id: item.id }}
    })

    return {
        paths,
        fallback:false
    };
}