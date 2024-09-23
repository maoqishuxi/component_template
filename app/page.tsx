import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Bread } from "./bread/bread";

import { Nav } from "@/types/nav";
import { Button } from "@/components/ui/button";
import SidePanel from "./sidepanel/sidepanel";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const crumbNavs: Nav[] = [
  {
    title: "home",
    url: "/",
  },
  {
    title: "newest",
    active: true,
  },
];

export default function Home() {
  return (
    <>
      <h1>welcome to you</h1>
      {/* 头像 */}
      <Avatar className="cursor-pointer">
        <AvatarImage src="./dark.png" alt={"images"} />
        <AvatarFallback>nickname</AvatarFallback>
      </Avatar>
      {/* 徽宗 */}
      <Badge className="bg-red-200">abc</Badge>
      {/* 导航栏 */}
      <Bread navs={crumbNavs} />
      {/* 按钮 */}
      <Button
        size="sm"
        className="flex items-center gap-x-1 w-20 bg-base-300 bg-red-100"
      >
        gensong
      </Button>
      {/* 侧边栏 */}
      <SidePanel />
      <Dialog>
        <DialogContent className="w-[80%] py-16 mx-auto bg-base-200 border-base-300 rounded-md">
          <Button className="bg-red-200">abc</Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
