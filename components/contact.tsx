// components/contact.tsx
'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Github, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  const contactItems = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "omkarshewale205@gmail.com",
      href: "mailto:omkarshewale205@gmail.com",
      buttonText: "Send Email"
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      value: "@Code-Maverick-007",
      href: "https://github.com/Code-Maverick-007",
      buttonText: "View Profile"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      value: "omkar-shewale-oo7",
      href: "https://www.linkedin.com/in/omkar-shewale-oo7/",
      buttonText: "Connect"
    }
  ]

  return (
    <section id="contact" className="py-12">
      <Card>
        <CardHeader>
          <CardTitle>Get in Touch</CardTitle>
          <CardDescription>
            Feel free to reach out through any of these platforms
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {contactItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-full bg-secondary">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </div>
                <Button asChild variant="outline">
                  <Link href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.buttonText}
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}