import Link from 'next/link';

const Home=()=>{
    return(
        <div>
        <Link href="/about"><a>about</a></Link>
        <div>Hello, Next!</div>
        </div>
    );
};


export default Home;