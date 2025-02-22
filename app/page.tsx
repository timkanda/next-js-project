import { Suspense } from "react"
import GreetingForm from "./components/GreetingForm"
import ExplanationSection from "./components/ExplanationSection"

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Next.js Server Action Demo</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <GreetingForm />
      </Suspense>
      <ExplanationSection />
    </main>
  )
}