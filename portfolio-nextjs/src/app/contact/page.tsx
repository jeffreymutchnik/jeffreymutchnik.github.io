import { Metadata } from "next";
import { Mail, Phone, MapPin, Briefcase, Linkedin } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { PageHeader } from "@/components/sections";
import { ContactForm } from "@/components/forms/ContactForm";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { footerNavItems } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Jeffrey Mutchnik - Marketing Technology Manager available for opportunities in B2B healthcare technology.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-20">
        <PageHeader
          overline="Let's Connect"
          title="Get in Touch"
          description="I'd love to hear about opportunities in marketing technology, especially in B2B healthcare."
        />

        <section className="section-py">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="lg:col-span-3">
                <ScrollReveal>
                  <Card className="p-8">
                    <div className="flex items-center gap-3 mb-8">
                      <span className="accent-line" />
                      <h2 className="text-h3 m-0">Send a Message</h2>
                    </div>
                    <ContactForm />
                  </Card>
                </ScrollReveal>
              </div>

              {/* Contact Info */}
              <div className="lg:col-span-2">
                <ScrollReveal delay={0.1}>
                  <Card className="p-8 bg-gradient-hero text-white h-full">
                    <div className="flex items-center gap-3 mb-8">
                      <span className="accent-line" />
                      <h2 className="text-h3 m-0 text-white">
                        Contact Information
                      </h2>
                    </div>

                    <div className="space-y-6">
                      <a
                        href={`mailto:${footerNavItems.contact.email}`}
                        className="flex items-start gap-4 text-white/80 hover:text-white transition-colors"
                      >
                        <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                          <Mail className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-h6 text-white mb-1">Email</h3>
                          <span>{footerNavItems.contact.email}</span>
                        </div>
                      </a>

                      <a
                        href={`tel:${footerNavItems.contact.phone.replace(/[^0-9+]/g, "")}`}
                        className="flex items-start gap-4 text-white/80 hover:text-white transition-colors"
                      >
                        <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                          <Phone className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-h6 text-white mb-1">Phone</h3>
                          <span>{footerNavItems.contact.phone}</span>
                        </div>
                      </a>

                      <div className="flex items-start gap-4 text-white/80">
                        <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                          <MapPin className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-h6 text-white mb-1">Location</h3>
                          <span>{footerNavItems.contact.location}</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 text-white/80">
                        <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                          <Briefcase className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-h6 text-white mb-1">
                            Availability
                          </h3>
                          <span>Open to full-time opportunities</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-10 pt-8 border-t border-white/20">
                      <h3 className="text-h6 text-white mb-4">Connect</h3>
                      <div className="flex gap-3">
                        <Button
                          asChild
                          variant="outline"
                          size="icon"
                          className="border-white/30 text-white hover:bg-white/10 hover:text-white"
                        >
                          <a
                            href={footerNavItems.contact.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                          >
                            <Linkedin className="h-5 w-5" />
                          </a>
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          size="icon"
                          className="border-white/30 text-white hover:bg-white/10 hover:text-white"
                        >
                          <a
                            href={`mailto:${footerNavItems.contact.email}`}
                            aria-label="Email"
                          >
                            <Mail className="h-5 w-5" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
