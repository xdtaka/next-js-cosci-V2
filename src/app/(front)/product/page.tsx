import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import db from "@/db";
import { product } from "@/db/schema";
import { desc } from "drizzle-orm";
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 7f91e2c (Created new)
import CartButton from "../components/cartButton";

const productPage = async () => {

  const products = await db.query.product.findMany({orderBy: [desc(product.id)]})

  return (
    
    <div className="max-w-screen-xl mx-auto py-16 px-6 xl:px-0">
      <div className="flex items-end justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Products</h2>
<<<<<<< HEAD
=======
=======
import CartButton from "../components/CartButton";

const Product = async () => {
  const products = await db.query.product.findMany({
    orderBy: [desc(product.id)]
  });

  return (
    <div className="max-w-screen-xl mx-auto py-16 px-6 xl:px-0">
      <div className="flex items-end justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Posts</h2>
>>>>>>> 2af5971 (Initial commit)
>>>>>>> 7f91e2c (Created new)
        <Select defaultValue="recommended">
          <SelectTrigger className="w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recommended">Recommended</SelectItem>
            <SelectItem value="latest">Latest</SelectItem>
            <SelectItem value="popular">Popular</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((i) => (
          <Card key={i.id} className="shadow-none overflow-hidden rounded-md">
            <CardHeader className="p-0">
              <div className="aspect-video bg-muted w-full border-b" />
            </CardHeader>
            <CardContent className="py-6">
              <div className="flex items-center gap-3">
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 7f91e2c (Created new)
                <Badge className="p-5 bg-primary/5 text-primary hover:bg-primary/5 shadow-none">
                  {i.price} บาท
                </Badge>

              </div>

              <h3 className="mt-4 text-[1.35rem] font-semibold tracking-tight">
                {i.title}
              </h3>
              <p className="mt-2 text-muted-foreground">
                ซื้อทีได้โปรด
              </p>

              <CartButton product={i}></CartButton>   
              
<<<<<<< HEAD
=======
=======
                <Badge className="bg-primary/5 text-primary hover:bg-primary/5 shadow-none">
                  ราคา {i.price} บาท
                </Badge>
              </div>

              <h2 className="mt-4 text-[1.35rem] font-semibold tracking-tight">
                {i.title}
              </h2>

              <CartButton product={i} />

>>>>>>> 2af5971 (Initial commit)
>>>>>>> 7f91e2c (Created new)
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default productPage;
=======
<<<<<<< HEAD
export default productPage;
=======
export default Product;
>>>>>>> 2af5971 (Initial commit)
>>>>>>> 7f91e2c (Created new)
