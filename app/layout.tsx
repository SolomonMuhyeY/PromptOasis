import Nav from "@components/Nav";
import "@styles/globals.css";

export const metadata = {
  title: "PromptOasis",
  description: "Discover and Share AI Prompts",
};
import React, { ReactNode } from "react";

const RootLayout = ({ children }: { children: Readonly<ReactNode> }) => {
  return (
    <html lang='en'>
      <body>
        <div className='main'>
          <div className='gradient'></div>
        </div>
        <main className='app'>
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
