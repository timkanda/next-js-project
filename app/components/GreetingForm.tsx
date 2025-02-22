import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ExplanationSection() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="server-actions">
        <AccordionTrigger>How Server Actions Work</AccordionTrigger>
        <AccordionContent>
          Server Actions process the input on the server-side. When the form is submitted, the &apos;greetUser&apos; function is
          called with the form data. It extracts the name and returns a greeting message, which is then displayed on the
          client without a full page reload.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="shadcn-ui">
        <AccordionTrigger>Shadcn UI Components Used</AccordionTrigger>
        <AccordionContent>
          This demo uses several Shadcn UI components: Input, Button, Card, and Accordion. These components provide a
          consistent and modern look while being fully customizable and accessible.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="nextjs-features">
        <AccordionTrigger>Key Next.js 15.1 Features</AccordionTrigger>
        <AccordionContent>
          This application leverages Next.js 15.1 features such as Server Actions for form processing, the App Router
          for simplified routing, and Server Components for improved performance. It also uses the new &apos;use client&apos;
          directive for client-side interactivity.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}