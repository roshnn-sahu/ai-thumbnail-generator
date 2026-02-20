import { Upload, Sparkles, Download } from "lucide-react";

const steps = [
  {
    icon: <Upload />,
    title: "Upload",
    desc: "Upload your image or type your video idea",
  },
  {
    icon: <Sparkles />,
    title: "Generate",
    desc: "AI creates thumbnails, keywords & hashtags instantly",
  },
  {
    icon: <Download />,
    title: "Download",
    desc: "Export and upload to YouTube or Instagram",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-muted/40">
      <div className="container text-center max-w-6xl mx-auto px-5">
        <h2 className="text-3xl md:text-5xl font-bold mb-14">How it works</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <div key={i} className="p-8 rounded-xl bg-background border">
              <div className="w-12 h-12 mx-auto mb-5 flex items-center justify-center rounded-full bg-muted">
                {step.icon}
              </div>
              <h3 className="font-semibold text-lg">{step.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
