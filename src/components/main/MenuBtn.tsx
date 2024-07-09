import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";

const MenuBtn = () => {
  return (
    <div>
      <Button>
        <HamburgerMenuIcon />
      </Button>
    </div>
  );
};

export default MenuBtn;
