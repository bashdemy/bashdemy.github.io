"use client";

type Motif = {
  type: "sprig" | "tulip" | "bloom" | "petal";
  className: string;
  style: React.CSSProperties;
};

const botanicalForms: Motif[] = [
  {
    type: "sprig",
    className:
      "botanical-motif botanical-motif-large botanical-sage botanical-drift-wide",
    style: { left: "4%", top: "16%", animationDelay: "-2s" },
  },
  {
    type: "petal",
    className:
      "botanical-motif botanical-motif-medium botanical-blush botanical-drift-float",
    style: { right: "8%", top: "12%", animationDelay: "-10s" },
  },
  {
    type: "bloom",
    className:
      "botanical-motif botanical-motif-small botanical-rose botanical-drift-orbit",
    style: { left: "18%", bottom: "17%", animationDelay: "-16s" },
  },
  {
    type: "tulip",
    className:
      "botanical-motif botanical-motif-large botanical-plum botanical-drift-reverse",
    style: { right: "12%", bottom: "18%", animationDelay: "-6s" },
  },
  {
    type: "sprig",
    className:
      "botanical-motif botanical-motif-small botanical-lilac botanical-drift-float",
    style: { left: "72%", top: "44%", animationDelay: "-20s" },
  },
  {
    type: "bloom",
    className:
      "botanical-motif botanical-motif-small botanical-blush botanical-drift-orbit",
    style: { left: "38%", top: "13%", animationDelay: "-12s" },
  },
  {
    type: "petal",
    className:
      "botanical-motif botanical-motif-medium botanical-rose botanical-drift-wide",
    style: { left: "7%", top: "68%", animationDelay: "-24s" },
  },
  {
    type: "tulip",
    className:
      "botanical-motif botanical-motif-small botanical-sage botanical-drift-reverse",
    style: { right: "30%", bottom: "9%", animationDelay: "-30s" },
  },
];

function BotanicalSvg({ type }: { type: Motif["type"] }) {
  if (type === "tulip") {
    return (
      <svg viewBox="0 0 120 170" fill="none" aria-hidden="true">
        <path d="M61 156C58 118 62 90 60 62" />
        <path d="M58 65C38 49 31 25 32 10C45 19 55 32 60 51C66 31 77 18 90 10C91 29 84 50 62 65Z" />
        <path d="M60 62C50 42 52 24 60 8C69 25 70 43 60 62Z" />
        <path d="M58 111C45 98 33 94 20 99C31 116 45 121 58 111Z" />
        <path d="M62 128C76 112 91 107 104 112C92 132 76 138 62 128Z" />
      </svg>
    );
  }

  if (type === "bloom") {
    return (
      <svg viewBox="0 0 120 120" fill="none" aria-hidden="true">
        <path d="M60 60C46 42 45 23 60 10C75 23 74 42 60 60Z" />
        <path d="M60 60C42 74 23 75 10 60C23 45 42 46 60 60Z" />
        <path d="M60 60C74 42 93 45 110 60C94 75 75 74 60 60Z" />
        <path d="M60 60C75 76 75 94 60 110C45 94 45 76 60 60Z" />
        <circle cx="60" cy="60" r="9" />
      </svg>
    );
  }

  if (type === "petal") {
    return (
      <svg viewBox="0 0 130 150" fill="none" aria-hidden="true">
        <path d="M64 137C42 101 42 54 67 13C96 51 98 101 64 137Z" />
        <path d="M64 137C64 100 66 64 67 13" />
        <path d="M65 95C58 88 53 85 48 85" />
        <path d="M66 76C73 69 79 67 86 68" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 120 170" fill="none" aria-hidden="true">
      <path d="M62 158C54 112 61 72 58 18" />
      <path d="M57 48C39 32 28 30 16 38C27 56 42 60 57 48Z" />
      <path d="M61 72C79 54 94 51 106 61C94 80 77 85 61 72Z" />
      <path d="M59 101C42 88 29 87 18 96C29 113 44 116 59 101Z" />
      <path d="M63 126C79 109 93 106 103 115C92 132 78 137 63 126Z" />
    </svg>
  );
}

export default function PetalBackground() {
  return (
    <div className="petal-background" aria-hidden="true">
      {botanicalForms.map((form, index) => (
        <span key={index} className={form.className} style={form.style}>
          <BotanicalSvg type={form.type} />
        </span>
      ))}
    </div>
  );
}
