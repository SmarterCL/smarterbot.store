export default function ClawLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="claw-theme">
      {children}
      <style jsx global>{`
        body {
            background-color: #050505 !important;
        }
        main {
            padding: 0 !important;
        }
      `}</style>
    </div>
  );
}
