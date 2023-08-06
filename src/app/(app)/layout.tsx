import SideBar from "@/components/SideBar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row">
      <SideBar />
      {children}
    </div>
  );
}
