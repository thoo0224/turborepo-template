import "@cfxstore/ui/styles/styles.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
