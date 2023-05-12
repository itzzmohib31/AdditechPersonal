import Link from "next/link";

const Error404=()=>{
return(
    <div className="hero h-screen bg-Matte p-20 m-auto" >
        <div>
        <h2 className="m-4 text-White text-6xl ">Error 404!</h2>
        <p className="m-4 text-Gray text-xl">Page You Are Looking For Doesn't Exist</p>
        <Link href={'/'} className="m-4 bg-White rounded shadow p-2">Go Home</Link>
        </div>
       
    </div>
)
}

export default Error404;