/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

type Features05PageProps = {
  courses: any[]
}

<<<<<<< HEAD

const Features05Page = ({courses}:Features05PageProps) => {
=======
<<<<<<< HEAD

const Features05Page = ({courses}:Features05PageProps) => {
=======
const Features05Page = ({courses} : Features05PageProps) => {
>>>>>>> 2af5971 (Initial commit)
>>>>>>> 7f91e2c (Created new)
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-screen-lg w-full py-10 px-6">
        <h2 className="text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight sm:max-w-xl sm:text-center sm:mx-auto">
<<<<<<< HEAD
          หลักสูตรที่กระผมมี
=======
<<<<<<< HEAD
          หลักสูตรที่กระผมมี
=======
          รายการหลักสูตรฟรีที่เปิดสอน
>>>>>>> 2af5971 (Initial commit)
>>>>>>> 7f91e2c (Created new)
        </h2>
        <div className="mt-8 w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {courses.map((course) => (
            <Card
              key={course.id}
              className="flex flex-col border rounded-xl overflow-hidden shadow-none"
            >
              <CardHeader>
                <h4 className="!mt-3 text-xl font-semibold tracking-tight">
                  {course.title}
                </h4>
                <p className="mt-1 text-muted-foreground text-[17px]">
                  {course.detail}
                </p>
              </CardHeader>
              <CardContent className="mt-auto px-0 pb-0">
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 7f91e2c (Created new)
                <Image src={course.picture} alt={course.detail}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 250 }}
                  priority />
<<<<<<< HEAD
=======
=======
                <Image 
                  src={course.picture} 
                  alt={course.detail} 
                  width={0} 
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 150 }}
                  priority 
                />
>>>>>>> 2af5971 (Initial commit)
>>>>>>> 7f91e2c (Created new)
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features05Page;
