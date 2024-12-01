import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CustomCard } from "@/components/dashboard/custom-card";

export function ProfileCard() {
  return (
    <CustomCard>
      <div className="flex flex-col items-center justify-center  space-y-4 sm:space-y-6">
        {/* Avatar et nom - plus petit sur mobile */}
        <div className="flex flex-col items-center space-y-2">
          <Avatar className="h-16 w-16 sm:h-20 sm:w-20">
            <AvatarImage src="/placeholder-avatar.jpg" />
            <AvatarFallback>UN</AvatarFallback>
          </Avatar>
          <div className="text-center">
            <h3 className="text-base sm:text-lg font-semibold">Username</h3>
          </div>
        </div>

        {/* Stats - adaptatif selon la taille */}
        <div className="grid grid-cols-2 w-full justify-center gap-2 sm:gap-4">
          <div className="space-y-0.5  sm:space-y-1 flex flex-col items-center justify-center text-center">
            <p className="text-lg sm:text-2xl font-bold">12K</p>
            <p className="text-[10px] sm:text-xs text-muted-foreground text-center">
              Followers
            </p>
          </div>

          <div className="space-y-0.5 sm:space-y-1 flex flex-col items-center justify-center text-center">
            <p className="text-lg sm:text-2xl font-bold">428</p>
            <p className="text-[10px] sm:text-xs text-muted-foreground">
              Following
            </p>
          </div>
        </div>
      </div>
    </CustomCard>
  );
}
