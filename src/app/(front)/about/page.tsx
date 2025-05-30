import Contact01Page from "@/components/contact-01/contact-01";

export default async function About() {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 7f91e2c (Created new)
    const data = await fetch('https://api.codingthailand.com/api/version', { next: {revalidate: 3600}})
    const apiInfo = await data.json()
    return (
        <div>
            <Contact01Page version={apiInfo.data.version} />
            <p style={{ textAlign: 'right', marginRight:'1rem' }}> { apiInfo && apiInfo.data.version }</p>
        </div>
    )
<<<<<<< HEAD
=======
=======
    const data = await fetch('https://api.codingthailand.com/api/version', { next: {revalidate: 3600} });
    const apiInfo = await data.json(); 
    return (
        <>
        {
          apiInfo && <Contact01Page version={apiInfo.data.version} />
        } 
        </>
    );
>>>>>>> 2af5971 (Initial commit)
>>>>>>> 7f91e2c (Created new)
}