import { CustomCard } from "@/components/dashboard/custom-card";
import { ProfileCard } from "@/components/dashboard/ProfileCard";
import { ModeToggle } from "@/components/themes/mode-toggle";

export default function Dashboard() {
  return (
    <div className="min-h-screen w-full bg-background">
      {/* Navigation */}
      <div className="fixed top-0 left-0 right-0 bg-background z-50 h-14 sm:h-16">
        <div className="w-full h-full flex items-center px-8 ">
          <ModeToggle />
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full pt-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-4 ">
          {/* Sidebar */}
          <div className="col-span-1 md:col-span-3 h-[200px] md:h-[calc(100vh-7rem)]">
            <ProfileCard />
          </div>

          {/* Main Area */}
          <div className="col-span-1 md:col-span-9 grid grid-cols-1 gap-6 h-full">
            {/* Top Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
              <CustomCard title="Statistics" description="Your listening stats">
                Stats content
              </CustomCard>

              <CustomCard title="Playlists" description="Your recent playlists">
                Playlists content
              </CustomCard>
            </div>

            {/* Bottom Card */}
            <CustomCard title="Activity" description="Your recent activity">
              Activity content
            </CustomCard>
          </div>
        </div>
      </div>
    </div>
  );
}
