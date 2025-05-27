'use client'

export default function Welcome() {
    const text = "welcome to cosci"
    // const currentYear = <p>2025</p>
    const year = 2025
    const isShow = false
    const handleClick = () => {
        alert("Hello sir")
    }
    return (
        <div>
            <p >{text.toLocaleUpperCase()} {year}</p>
            {isShow && <p>Date:10/10/1998</p>}
            <button className="bg-blue-700 text-amber-300 p-3 m-3 rounded-lg " onClick={handleClick}>Click Me</button>
            {/* {isShow ? <p>Hello Next.js</p> : <p>Hello Javascript</p>} */}
            
        </div>
    );
}