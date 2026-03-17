import { useState } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Check } from "lucide-react";
import { SITE } from "@/data/siteConfig";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    toast({ title: "Message sent", description: "We'll get back to you within 1–2 business days." });
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
      <Breadcrumbs items={[{ label: "Contact" }]} />

      <h1 className="font-display text-2xl font-bold mt-4 mb-6">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact info */}
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium">Email</p>
              <p className="text-sm text-muted-foreground">{SITE.contact.email}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium">Location</p>
              <p className="text-sm text-muted-foreground">Texas, USA</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground pt-4">
            We typically respond within 1–2 business days.
          </p>
        </div>

        {/* Form */}
        <div className="md:col-span-2 bg-card border border-card-border rounded-xl p-6">
          {submitted ? (
            <div className="text-center py-12 space-y-3">
              <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-7 h-7 text-green-600 dark:text-green-400" />
              </div>
              <p className="font-semibold">Got it.</p>
              <p className="text-sm text-muted-foreground">We'll be in touch within 1–2 business days.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input required className="w-full px-3 py-2 bg-background border border-border rounded-md text-sm" data-testid="input-contact-name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input type="email" required className="w-full px-3 py-2 bg-background border border-border rounded-md text-sm" data-testid="input-contact-email" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Subject</label>
                <select className="w-full px-3 py-2 bg-background border border-border rounded-md text-sm">
                  <option>Product question</option>
                  <option>Order status</option>
                  <option>Yard Crew membership</option>
                  <option>Featured Builds submission</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea required rows={5} className="w-full px-3 py-2 bg-background border border-border rounded-md text-sm" data-testid="input-contact-message" />
              </div>
              <Button type="submit" className="w-full sm:w-auto" data-testid="button-contact-submit">
                Send Message
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
