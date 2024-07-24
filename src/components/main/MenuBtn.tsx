import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
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
        <DropdownMenuLabel className="cursor-pointer">
          My Watchlist
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {/* <Link to="/my_watchlist"> */}
        <DropdownMenuItem
          onClick={() => {
            navigate("/my_watchlist");
          }}
        >
          View Watchlist
        </DropdownMenuItem>
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
