import './globals.css';

export const metadata = {
  title: 'Ангийн Удирдлага',
  description: 'Classroom Management System',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="mn">
      <body>{children}</body>
    </html>
  );
}