"use client"

import { useCartStore } from "@/lib/cart-store";
import { useEffect, useState } from "react";

export default function CountCartItem() {

    const totalItems = useCartStore((state) => state.totalItems())
    const text = totalItems > 1 ? "Items" : "Item"
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    },[])

    if (!isMounted) return null;
    return (
        <main>
            <span>{totalItems} {text}</span>
        </main>
    );
}