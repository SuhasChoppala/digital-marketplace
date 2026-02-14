import { Icons } from "./ui/Icons";
import Wrapper from "./wrapper";
import Link from "next/link";
import { NavItems } from "./NavItems";

const Navbar = async () => {
  return (
    <div className="bg-background sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-background border-b border-border">
        <Wrapper>
          <div className="flex h-16 items-center">
            {/* Mobile nav */}
            <div className="ml-4 flex lg:ml-0">
              <Link href="/">
                <Icons.logo className="h-10 w-10" />
              </Link>
            </div>

            <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
              <NavItems />
            </div>
          </div>
        </Wrapper>
      </header>
    </div>
  );
};

export default Navbar;
