"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, CheckCircle, AlertCircle } from "lucide-react"
import { submitContactForm } from "@/actions/contact-form"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    interest: "",
    message: "",
  })
  const [formResponse, setFormResponse] = useState({
    success: false,
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, interest: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormResponse({ success: false, message: "" })

    try {
      // Create FormData object
      const formDataObj = new FormData()
      Object.entries(formData).forEach(([key, value]) => {
        formDataObj.append(key, value)
      })

      // Submit the form using the server action
      const response = await submitContactForm(formDataObj)

      setFormResponse(response)
      setIsSubmitted(response.success)
    } catch (error) {
      console.error("Error submitting form:", error)
      setFormResponse({
        success: false,
        message: "An unexpected error occurred. Please try again later or email us directly.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="rounded-lg border bg-card p-8 text-center shadow-sm">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle className="h-6 w-6 text-primary" />
        </div>
        <h3 className="mb-2 text-xl font-bold">Thank You!</h3>
        <p className="text-muted-foreground">
          {formResponse.message || "Your message has been received. Our team will get back to you shortly."}
        </p>
        <Button
          className="mt-4"
          onClick={() => {
            setIsSubmitted(false)
            setFormData({
              name: "",
              email: "",
              company: "",
              interest: "",
              message: "",
            })
          }}
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Your email"
            required
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="company">Company</Label>
        <Input
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Your company name"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="interest">Interest</Label>
        <Select value={formData.interest} onValueChange={handleSelectChange}>
          <SelectTrigger id="interest">
            <SelectValue placeholder="Select your interest" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="investment">Investment Opportunity</SelectItem>
            <SelectItem value="partnership">Partnership</SelectItem>
            <SelectItem value="technology">Technology Inquiry</SelectItem>
            <SelectItem value="career">Career Opportunity</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message"
          rows={5}
          required
        />
      </div>
      {!formResponse.success && formResponse.message && (
        <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive flex items-start">
          <AlertCircle className="h-4 w-4 mr-2 mt-0.5" />
          <span>{formResponse.message}</span>
        </div>
      )}
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        By submitting this form, you agree to our{" "}
        <Link href="#" className="underline underline-offset-2">
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  )
}
