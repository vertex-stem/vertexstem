import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Input, Textarea, Select, Checkbox } from "@/components/FormElements";
import { InteractiveForm } from "@/components/InteractiveForm";
import { CTABand } from "@/components/CTABand";
import { ORG_ADDRESS, ORG_EMAIL, ORG_PHONE } from "@/lib/orgInfo";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Vertex STEM Education about programs, camps, and partnerships. We'd love to hear from you.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="font-body">
      <div className="max-w-[640px] mx-auto py-10 md:py-14 px-5 md:px-10">
        <h1 className="text-[2rem] md:text-3xl mb-2.5">Let’s get in touch.</h1>
        <p className="mb-7 text-text-muted">
          We would love to hear from you — leave us a message about programs,
          camps, or partnerships.
        </p>

        <InteractiveForm
          successMessage="Your request was sent! We'll be in touch soon."
          errorMessage="Something went wrong sending your message. Please try again or email us directly."
          dismissLabel="Dismiss"
        >
          <input
            type="text"
            name="_gotcha"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
          />
          <Input label="Parent Name" name="name" placeholder="Jane Doe" required />
          <Input
            label="Email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
          />
          <Select
            label="Interested In"
            name="interest"
            options={[
              "STEM & Coding",
              "Summer Camp",
              "Competition",
              "Partnership",
            ]}
          />
          <Textarea
            label="Message"
            name="message"
            placeholder="Tell us a bit about what you're looking for..."
          />
          <Checkbox label="Send me program updates" name="updates" checked />
          <Button variant="primary">Request Info</Button>
        </InteractiveForm>

        <div className="mt-10 p-6 rounded-[20px] text-sm leading-relaxed bg-slate-50 text-text-body">
          <strong>Visit Us</strong>
          <br />
          {ORG_ADDRESS}
          <br />
          {ORG_PHONE}
          <br />
          {ORG_EMAIL}
        </div>
      </div>

      <CTABand
        heading="Prefer to explore first?"
        subtext="Browse our STEM & coding programs or check out this summer's camp lineup before reaching out."
        primaryLabel="See Programs"
        primaryHref="/programs"
        secondaryLabel="View Camps"
        secondaryHref="/camp"
      />
    </div>
  );
}
