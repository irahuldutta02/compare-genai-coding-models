import "./globals.css";

export const metadata = {
  title: "Compare GenAI Coding Models",
  description: "Compare GenAI Coding Models",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
