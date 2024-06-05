import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import Link from "next/link";
import { Icons } from "./icons";

const Sidebar = () => {
  return (
    <Command className=" bg-secondary rounded-none">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <Icons.dashboard className="w-4 h-4 mr-2" />
            <Link href="/">Dashboard</Link>
          </CommandItem>
          <CommandItem>
            <Icons.newspaper className="w-4 h-4 mr-2" />
            <Link href="/posts">Post</Link>
          </CommandItem>
          <CommandItem>
            <Icons.folders className="w-4 h-4 mr-2" />
            <Link href="#">Category</Link>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <Icons.user className="w-4 h-4 mr-2" />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Icons.creditCard className="w-4 h-4 mr-2" />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Icons.settings className="w-4 h-4 mr-2" />
            <span>Setting</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

export default Sidebar;
