import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../theme-provider";

const MenuBtn = () => {
  const navigate = useNavigate();
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          <HamburgerMenuIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </DropdownMenuItem>
        {/* <Link to="/my_watchlist"> */}
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            navigate("/my_watchlist");
          }}
        >
          My Watchlist
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            navigate("/add_watchlist");
          }}
        >
          Add Watchlist
        </DropdownMenuItem>
        {/* </Link> */}
        {/* ⇧⌘Q */}
        {/* <DropdownMenuItem>Support</DropdownMenuItem> */}
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          Set {theme === "dark" ? "Light" : "Dark"} Mode
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MenuBtn;
