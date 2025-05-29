import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import Link from "next/link";
import { ShoppingBasket } from "lucide-react";
import { Badge } from "../ui/badge";
import CountCartItem from "@/app/(front)/components/countCartItem";

const Navbar01Page = () => {
  return (
    <div className="bg-amber-50">
      <nav className="h-16 bg-background border-b">
        <div className="h-full flex items-center justify-between max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <Logo />

          {/* Desktop Menu */}
          <NavMenu className="hidden md:block" />

          <div className="flex items-center gap-3">

            
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

export default Navbar01Page;
