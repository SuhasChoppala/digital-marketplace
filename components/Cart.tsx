import { ShoppingCartIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetTitle,
} from "./ui/sheet";
import { Separator } from "./ui/separator";

export const Cart = () => {
  const itemCount = 2;
  return (
    <Sheet>
      <SheetTrigger className="group -m-2 flex items-center p-2 cursor-pointer">
        <ShoppingCartIcon
          aria-hidden="true"
          className="h-6 w-6 flex-shrink-0 text-muted-foreground group-hover:text-foreground"
        />
        <span className="ml-2 text-sm font-medium text-muted-foreground group-hover:text-foreground">
          0
        </span>
      </SheetTrigger>

      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle>Cart (0)</SheetTitle>
        </SheetHeader>
        {itemCount > 0 ? (
          <>
            <div className="flex w-full flex-col p-6">
              {/* Cart logic */}
              Cart Items
            </div>
            <div className="space-y-4 p-6">
              <Separator />
              <div className="space-y-1.5 text-sm">
                <div className="flex">
                  <span className="flex-1">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex">
                  <span className="flex-1">Transaction fee</span>
                  <span>1</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </SheetContent>
    </Sheet>
  );
};
