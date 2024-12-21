export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-screen justify-between ">
      <nav>Navigation</nav>
      {children}
      <footer>Footer</footer>
    </div>
  );
}
