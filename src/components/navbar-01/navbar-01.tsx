import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import Link from "next/link";
import { ShoppingBasket } from "lucide-react";
import { Badge } from "../ui/badge";
<<<<<<< HEAD
import CountCartItem from "@/app/(front)/components/countCartItem";

const Navbar01Page = () => {
  return (
    <div className="bg-amber-50">
=======
import CountCartItem from "@/app/(front)/components/CountCartItem";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";


const Navbar01Page = async () => {
  const session = await auth.api.getSession({
    headers: await headers()
  });
  return (
    <div className="bg-muted">
>>>>>>> 7f91e2c (Created new)
      <nav className="h-16 bg-background border-b">
        <div className="h-full flex items-center justify-between max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <Logo />

          {/* Desktop Menu */}
          <NavMenu className="hidden md:block" />

          <div className="flex items-center gap-3">
<<<<<<< HEAD

            
            <Link href="/cart">
              <Badge className="p-2 text-sm flex items-center gap-2">
                <ShoppingBasket />
                <CountCartItem></CountCartItem>
              </Badge>
            </Link>


            <Button variant="outline" className="hidden sm:inline-flex" asChild>
              <Link href="/login">เข้าสู่ระบบ</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">สมัครสมาชิก</Link>
            </Button>

=======
            
            
            <Link href="/cart">
              <Badge className="p-2 text-sm"><ShoppingBasket className="" /><CountCartItem></CountCartItem> item(s)</Badge>    
            </Link>
              {!session && (
                <>
                  <Button asChild variant="outline" className="hidden sm:inline-flex">
                    <Link href="/login">เข้าสู่ระบบหรอจ้ะ</Link>
                  </Button>
                    <Button asChild>
                      <Link href="/signup">อยากสมัครสมาชิกหรอ</Link>
                  </Button>
                </>
              )}

              {
              session && (
                <>
                <div className="flex items-center">
                  Hello,{session.user.name}
                </div>
                <Button className="bg-blue-500 hover:bg-blue-400 text-white" asChild>
                  <Link href="/dashboard">Dashboard</Link>
                 </Button>
                </>
              )
             }
>>>>>>> 7f91e2c (Created new)
            {/* Mobile Menu */}
            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

<<<<<<< HEAD
export default Navbar01Page;
=======
export default Navbar01Page;
>>>>>>> 7f91e2c (Created new)
