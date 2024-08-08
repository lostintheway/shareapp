export default function DashboardLayout() {
const [isSidebarOpen, setIsSidebarOpen] = useState(true);
return (
<div className="flex min-h-screen w-full flex-col bg-muted/40">
<header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
<Button
size="icon"
variant="outline"
className="sm:hidden"
onClick={() => setIsSidebarOpen(!isSidebarOpen)} >
<MenuIcon className="h-5 w-5" />
<span className="sr-only">Toggle Sidebar</span>
</Button>
<div className="flex-1">
<h1 className="text-lg font-semibold">Dashboard</h1>
</div>
<DropdownMenu>
<DropdownMenuTrigger asChild>
<Button
              variant="ghost"
              size="icon"
              className="overflow-hidden rounded-full"
            >
<img
src="/placeholder.svg"
width={36}
height={36}
alt="Avatar"
className="overflow-hidden rounded-full"
style={{ aspectRatio: "36/36", objectFit: "cover" }}
/>
</Button>
</DropdownMenuTrigger>
<DropdownMenuContent align="end">
<DropdownMenuLabel>My Account</DropdownMenuLabel>
<DropdownMenuSeparator />
<DropdownMenuItem>Settings</DropdownMenuItem>
<DropdownMenuItem>Support</DropdownMenuItem>
<DropdownMenuSeparator />
<DropdownMenuItem>Logout</DropdownMenuItem>
</DropdownMenuContent>
</DropdownMenu>
</header>
<div className="flex flex-1 flex-col sm:gap-4 sm:py-4 sm:pl-14">
<aside
className={`fixed inset-y-0 left-0 z-10 flex w-14 flex-col border-r bg-background transition-all duration-300 ease-in-out sm:static sm:w-auto sm:flex-1 ${
            isSidebarOpen ? "w-64" : "w-14"
          }`} >
<div className="flex h-14 items-center justify-between px-4 sm:px-6">
<Link to="#" className="flex items-center gap-2">
<MountainIcon className="h-6 w-6" />
<span className="text-lg font-semibold">Acme Inc</span>
</Link>
<Button
size="icon"
variant="outline"
className="sm:hidden"
onClick={() => setIsSidebarOpen(!isSidebarOpen)} >
<XIcon className="h-5 w-5" />
<span className="sr-only">Close Sidebar</span>
</Button>
</div>
<nav className="flex flex-1 flex-col items-start gap-4 px-2 py-4 sm:px-6">
<Link
to="#"
className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                isSidebarOpen
                  ? "w-full justify-start"
                  : "w-9 h-9 justify-center"
              }`} >
<HomeIcon className="h-5 w-5" />
<span className={isSidebarOpen ? "block" : "sr-only"}>Home</span>
</Link>
<Link
to="#"
className={`flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary ${
                isSidebarOpen
                  ? "w-full justify-start"
                  : "w-9 h-9 justify-center"
              }`} >
<ShoppingCartIcon className="h-5 w-5" />
<span className={isSidebarOpen ? "block" : "sr-only"}>
Orders
</span>
</Link>
<Link
to="#"
className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                isSidebarOpen
                  ? "w-full justify-start"
                  : "w-9 h-9 justify-center"
              }`} >
<PackageIcon className="h-5 w-5" />
<span className={isSidebarOpen ? "block" : "sr-only"}>
Products
</span>
</Link>
<Link
to="#"
className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                isSidebarOpen
                  ? "w-full justify-start"
                  : "w-9 h-9 justify-center"
              }`} >
<UsersIcon className="h-5 w-5" />
<span className={isSidebarOpen ? "block" : "sr-only"}>
Customers
</span>
</Link>
<Link
to="#"
className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                isSidebarOpen
                  ? "w-full justify-start"
                  : "w-9 h-9 justify-center"
              }`} >
<LineChartIcon className="h-5 w-5" />
<span className={isSidebarOpen ? "block" : "sr-only"}>
Analytics
</span>
</Link>
</nav>
</aside>
<main className="flex flex-1 flex-col gap-4 p-4 sm:gap-8 sm:p-6"></main>
</div>
</div>
);
}
