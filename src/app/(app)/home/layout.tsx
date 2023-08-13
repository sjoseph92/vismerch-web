export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
      <main>
        <div>{children}</div>
      </main>
  );
}
