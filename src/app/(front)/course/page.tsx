import Features05Page from "@/components/features-05/features-05";

export default async function Course() {

    const data = await  fetch('https://api.codingthailand.com/api/course')
    const courses = await data.json()

  return (
    <main>
          <Features05Page courses={courses} />
    </main>
  );
}