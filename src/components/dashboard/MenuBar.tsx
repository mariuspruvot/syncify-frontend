import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Settings2 } from "lucide-react";

export function DashBoardMenuBar() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
          <Settings2 className="w-5 h-5" />
        </MenubarTrigger>
        <MenubarContent>
          <MenubarSub>
            <MenubarSubTrigger>Theme</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>System</MenubarItem>
              <MenubarItem>Light</MenubarItem>
              <MenubarItem>Dark</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
