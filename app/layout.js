import './globals.css';

export const metadata = {
  title: 'Concierge Restaurants',
  description: 'AI-powered restaurant concierge with AEO optimization',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
