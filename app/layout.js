import "./globals.css";
import { CardProvider} from "./context/CardContext";

export const metadata = {
  title: "Dev Card Maker",
  description: "Create a developer business card",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CardProvider>{children}</CardProvider>
      </body>
    </html>
  );
}
