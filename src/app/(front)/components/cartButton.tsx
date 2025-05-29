"use client"

import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/cart-store";
import { ChevronRight } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function CartButton({ product }: any) {
    const addItem = useCartStore((state) => state.addItem)
    const handleAddItem = () => {
        addItem({
            productId: product.id,
            title: product.title,
            price: product.price,
            qty: 1
        })
    }
  return (
    <main>
        <Button onClick={handleAddItem} className="mt-6 shadow-none">
            หยิบใส่ตะกร้า <ChevronRight />
        </Button>  
    </main>
  );
}