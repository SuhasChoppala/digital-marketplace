import Wrapper from "./wrapper";

const Navbar = async () => {
  return (
    <div className="sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative">
        <Wrapper>
          <div className="border border-border">
            <div className="flex h-16 center"></div>
          </div>
        </Wrapper>
      </header>
    </div>
  );
};

export default Navbar;
