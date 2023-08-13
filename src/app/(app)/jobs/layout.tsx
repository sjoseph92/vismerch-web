import { ReactNode } from "react";

export default function JobsLayout({ children }: { children: ReactNode }) {
  return (
    <main className="bg-white h-screen py-10 lg:pl-72">
      <div className="px-4 sm:px-6 lg:px-8">{children}</div>
    </main>
  );
}
