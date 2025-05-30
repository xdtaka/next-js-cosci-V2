import Features05Page from "@/components/features-05/features-05";

export default async function Course() {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 7f91e2c (Created new)

    const data = await  fetch('https://api.codingthailand.com/api/course', {cache: 'no-cache'})
    const courses = await data.json()

  return (
    <main>
         {courses && <Features05Page courses={courses.data} /> } 
    </main>
<<<<<<< HEAD
=======
=======
  const data = await fetch('https://api.codingthailand.com/api/course', { cache: 'no-store' });
  const courses = await data.json();

  return (
    <>
        {
          courses && <Features05Page courses={courses.data} />
        }
    </>
>>>>>>> 2af5971 (Initial commit)
>>>>>>> 7f91e2c (Created new)
  );
}