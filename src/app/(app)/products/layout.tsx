import { ReactNode } from "react";

export default function LocationsLayout({ children }: { children: ReactNode }) {
  return (
    <main className="bg-white py-10 lg:pl-72">
      <div className="bg-white px-4 sm:px-6 lg:px-8">{children}</div>
    </main>
  );
}
