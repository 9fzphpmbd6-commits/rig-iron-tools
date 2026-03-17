import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Mail, HelpCircle, Package, RotateCcw, ShieldCheck } from "lucide-react";

const sections = [
  {
    icon: HelpCircle,
    title: "General Questions",
    description: "Have a question about our products, pricing, or anything else? We're happy to help.",
    subject: "General Question",
  },
  {
    icon: Package,
    title: "Order Status",
    description: "Need an update on your order? Include your order number and we'll get you sorted.",
    subject: "Order Status Inquiry",
  },
  {
    icon: RotateCcw,
    title: "Returns & Exchanges",
    description: "Need to return or exchange a product? We offer 14-day free returns and 50% refund on returns up to 45 days.",
    subject: "Return/Exchange Request",
  },
  {
    icon: ShieldCheck,
    title: "Warranty Claims",
    description: "All Unibor products carry a manufacturer warranty. Include your order number and description of the issue.",
    subject: "Warranty Claim",
  },
];

export default function Support() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
      <Breadcrumbs items={[{ label: "Customer Support" }]} />

      <h1 className="font-display text-2xl font-bold mt-4 mb-2">Customer Support</h1>
      <p className="text-sm text-muted-foreground mb-8">
        We're here to help. Email us at the address below with the relevant subject line and we'll get back to you within 1–2 business days.
      </p>

      <div className="bg-card border border-card-border rounded-xl p-5 flex items-center gap-4 mb-8">
        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
          <Mail className="w-5 h-5 text-primary" />
        </div>
        <div>
          <p className="text-sm font-semibold">Email Us</p>
          <a href="mailto:texasholemakers@gmail.com" className="text-sm text-primary hover:underline">
            texasholemakers@gmail.com
          </a>
        </div>
      </div>

      <div className="space-y-4">
        {sections.map((section) => (
          <div key={section.title} className="bg-card border border-card-border rounded-lg p-5 flex gap-4">
            <section.icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div>
              <h2 className="font-semibold text-sm">{section.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mt-1">{section.description}</p>
              <p className="text-xs text-muted-foreground mt-2">
                Subject line: <span className="font-medium text-foreground">{section.subject}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
