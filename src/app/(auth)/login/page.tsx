"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
<<<<<<< HEAD
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
=======
<<<<<<< HEAD
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
=======
import { authClient } from "@/lib/auth-client";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
>>>>>>> 2af5971 (Initial commit)
>>>>>>> 7f91e2c (Created new)
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 7f91e2c (Created new)
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

const Login01Page = () => {
<<<<<<< HEAD
=======
=======
  email: z.string().email("รูปแบบอีเมลไม่ถูกต้อง"),
  password: z.string().min(6, "รหัสผ่านต้องอย่างน้อย 6 ตัวอักษร"),
});

const Login01Page = () => {
  const router = useRouter();
  
>>>>>>> 2af5971 (Initial commit)
>>>>>>> 7f91e2c (Created new)
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(formSchema),
  });

<<<<<<< HEAD
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
=======
<<<<<<< HEAD
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
=======
  const onSubmit = async (form: z.infer<typeof formSchema>) => {
          await authClient.signIn.email({
                  email: form.email,
                  password: form.password,
              }, {
                  onRequest: (ctx) => {
                    //show loading
                    console.log(ctx.body);
                  },
                  onSuccess: (ctx) => {
                    //redirect to the dashboard or sign in page
                    console.log(ctx.data);
                    router.replace('/dashboard');
                  },
                  onError: (ctx) => {
                      // display the error message
                      alert(ctx.error.message);
                  },
          });
>>>>>>> 2af5971 (Initial commit)
>>>>>>> 7f91e2c (Created new)
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-xs w-full flex flex-col items-center">
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 7f91e2c (Created new)
        <p className="mt-4 text-xl font-bold tracking-tight">
          Log in to Shadcn UI Blocks
        </p>

        <Button className="mt-8 w-full gap-3">
          <GoogleLogo />
          Continue with Google
        </Button>

        <div className="my-7 w-full flex items-center justify-center overflow-hidden">
          <Separator />
          <span className="text-sm px-2">OR</span>
          <Separator />
<<<<<<< HEAD
=======
=======
        
        <p className="mt-4 text-xl font-bold tracking-tight">
          เข้าสู่ระบบขายสินค้าออนไลน์ CoSci
        </p>

        <div className="my-7 w-full flex items-center justify-center overflow-hidden">
          <Separator />
>>>>>>> 2af5971 (Initial commit)
>>>>>>> 7f91e2c (Created new)
        </div>

        <Form {...form}>
          <form
            className="w-full space-y-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Email"
                      className="w-full"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Password"
                      className="w-full"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="mt-4 w-full">
<<<<<<< HEAD
              Continue with Email
=======
<<<<<<< HEAD
              Continue with Email
=======
              Log In
>>>>>>> 2af5971 (Initial commit)
>>>>>>> 7f91e2c (Created new)
            </Button>
          </form>
        </Form>

        <div className="mt-5 space-y-5">
          <Link
            href="#"
            className="text-sm block underline text-muted-foreground text-center"
          >
            Forgot your password?
          </Link>
          <p className="text-sm text-center">
            Don&apos;t have an account?
<<<<<<< HEAD
            <Link href="#" className="ml-1 underline text-muted-foreground">
=======
<<<<<<< HEAD
            <Link href="#" className="ml-1 underline text-muted-foreground">
=======
            <Link href="/signup" className="ml-1 underline text-muted-foreground">
>>>>>>> 2af5971 (Initial commit)
>>>>>>> 7f91e2c (Created new)
              Create account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 7f91e2c (Created new)
const GoogleLogo = () => (
  <svg
    width="1.2em"
    height="1.2em"
    id="icon-google"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="inline-block shrink-0 align-sub text-[inherit] size-lg"
  >
    <g clipPath="url(#clip0)">
      <path
        d="M15.6823 8.18368C15.6823 7.63986 15.6382 7.0931 15.5442 6.55811H7.99829V9.63876H12.3194C12.1401 10.6323 11.564 11.5113 10.7203 12.0698V14.0687H13.2983C14.8122 12.6753 15.6823 10.6176 15.6823 8.18368Z"
        fill="#4285F4"
      ></path>
      <path
        d="M7.99812 16C10.1558 16 11.9753 15.2915 13.3011 14.0687L10.7231 12.0698C10.0058 12.5578 9.07988 12.8341 8.00106 12.8341C5.91398 12.8341 4.14436 11.426 3.50942 9.53296H0.849121V11.5936C2.2072 14.295 4.97332 16 7.99812 16Z"
        fill="#34A853"
      ></path>
      <path
        d="M3.50665 9.53295C3.17154 8.53938 3.17154 7.4635 3.50665 6.46993V4.4093H0.849292C-0.285376 6.66982 -0.285376 9.33306 0.849292 11.5936L3.50665 9.53295Z"
        fill="#FBBC04"
      ></path>
      <path
        d="M7.99812 3.16589C9.13867 3.14825 10.241 3.57743 11.067 4.36523L13.3511 2.0812C11.9048 0.723121 9.98526 -0.0235266 7.99812 -1.02057e-05C4.97332 -1.02057e-05 2.2072 1.70493 0.849121 4.40932L3.50648 6.46995C4.13848 4.57394 5.91104 3.16589 7.99812 3.16589Z"
        fill="#EA4335"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="15.6825" height="16" fill="white"></rect>
      </clipPath>
    </defs>
  </svg>
);
<<<<<<< HEAD
=======
=======
>>>>>>> 2af5971 (Initial commit)
>>>>>>> 7f91e2c (Created new)

export default Login01Page;
