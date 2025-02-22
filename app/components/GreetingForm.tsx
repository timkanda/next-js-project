"use client"

import { useState } from "react"
import { greetUser } from "../actions"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function GreetingForm() {
  const [greeting, setGreeting] = useState<string | null>(null)

  // Handle form submission
  const handleSubmit = async (formData: FormData) => {
    const result = await greetUser(formData)
    setGreeting(result)
  }

  return (
    <Card className="mb-6">
      <CardContent className="pt-6">
        <form action={handleSubmit} className="space-y-4">
          <Input type="text" name="name" placeholder="Enter your name" required />
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
        {greeting && <p className="mt-4 text-lg font-semibold text-center">{greeting}</p>}
      </CardContent>
    </Card>
  )
}