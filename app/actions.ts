"use server"

export async function greetUser(prevState: string | null, formData: FormData) {
  const name = formData.get("name")
  if (typeof name !== "string" || name.trim() === "") {
    return "Please enter a valid name."
  }
  return `Hello ${name}!`
}

