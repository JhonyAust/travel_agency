import '@/styles/globals.css';

export const metadata = {
  title: 'Mahnoor Holidays',
  description: 'Mahnoor Holidays',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
