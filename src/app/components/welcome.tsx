export default function Welcome() {
    const text = "welcome to cosci"
    // const currentYear = <p>2025</p>
    const year = 2025
    const isShow = false
    return (
        <div>
            <p>{text.toLocaleUpperCase()} {year}</p>
            {/* {currentYear} */}
            {isShow && <p>Date:10/10/1998</p>}
            {isShow ? <p>Hello Next.js</p> : <p>Hello Javascript</p> }
        </div>
    );
}