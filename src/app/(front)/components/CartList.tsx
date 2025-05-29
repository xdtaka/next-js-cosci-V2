/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useCartStore } from "@/lib/cart-store";
import { TrashIcon } from "lucide-react";

export default function CartList() {
    const items = useCartStore((state) => state.items)
    const removeItem = useCartStore((state) => state.removeItem)
    const clearCart = useCartStore((state) => state.clearCart)
    const totalPrice = useCartStore((state) => state.totalPrice())

    if (items.length === 0) {
        return (
            <div className="text-3xl text-center mx-auto max-w-4xl mt-20">
                ไม่เจอสินค้าแม้แต่นิดเดียว
            </div>
        )
    }

  return (
    <div className="mx-auto max-w-4xl mt-20">
          <h1 className="text-2xl mb-4">ตระกร้าสินค้า</h1>
          <Table>
              <TableHeader>
                  <TableRow>
                      <TableHead>รหัสสินค้า</TableHead>
                      <TableHead>ชื่อสินค้า</TableHead>
                      <TableHead>ราคา</TableHead>
                      <TableHead>จำนวน</TableHead>
                      <TableHead>รวม</TableHead>
                      <TableHead>เครื่องมือ</TableHead>
                  </TableRow>
              </TableHeader>
              <TableBody>
                {
                    items.map((i) => (
                    <TableRow key={i.productId}>
                      <TableCell>{i.productId}</TableCell>
                      <TableCell>{i.title}</TableCell>
                      <TableCell>{i.price}</TableCell>
                      <TableCell>{i.qty}</TableCell>
                      <TableCell>{(i.price * i.qty).toFixed(2)}</TableCell>
                            <TableCell>
                                <Button variant="secondary" onClick={() => {
                                    removeItem(i.productId)
                                }}>
                                    <TrashIcon />
                                </Button>
                            </TableCell>
                    </TableRow>
                    ))
                }
              </TableBody>
          </Table>

          <div className="mt-5 text-xl flex flex-row justify-between items-center">
              <div>
                  รวมทั้งหมด: <span className="font-bold">{totalPrice.toFixed(2)}</span> บาท
              </div>
              <div className="mr-15">
                  <Button variant="destructive" onClick={() => { clearCart() }}>ลบสินค้าทั้งหมด</Button>
                  <Button variant="outline" className="ml-5" onClick={() => {  }}>ยืนยันการซื้อสินค้า</Button>
              </div>
        </div>
    </div>
  );
}