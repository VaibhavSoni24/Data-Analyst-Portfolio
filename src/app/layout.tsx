import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vaibhav Soni | Data Analyst Portfolio",
  description: "Data Analyst focused Computer Science student skilled in SQL, Excel, Power BI, and data-driven decision making. Explore my projects, dashboards, and analytics work.",
  keywords: ["Data Analyst", "SQL", "Power BI", "Excel", "Tableau", "Python", "Portfolio", "Vaibhav Soni"],
  authors: [{ name: "Vaibhav Soni" }],
  openGraph: {
    title: "Vaibhav Soni | Data Analyst Portfolio",
    description: "Turning raw data into actionable insights. SQL · Excel · Power BI · Tableau",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="grid-bg">
          <div className="dot-grid" />
        </div>
        {children}
      </body>
    </html>
  );
}
