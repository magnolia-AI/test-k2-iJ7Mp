'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useToast } from "@/hooks/use-toast"
import { ContactForm } from '@/components/contact-form'
import { MobileNav } from '@/components/mobile-nav'
import { ThemeToggle } from '@/components/theme-toggle'
import { ArrowRight, CheckCircle, Code, Palette, Zap, Shield, Users } from 'lucide-react'

export default function Home() {
  const { toast } = useToast()

  const features = [
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Lightning Fast",
      description: "Built with Next.js 15 and optimized for performance with minimal bundle sizes and fast loading times."
    },
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: "Beautiful Design",
      description: "Elegant chocolate and gold color scheme with professional typography and modern aesthetics."
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Developer Friendly",
      description: "TypeScript support, comprehensive component library, and ready-to-use utilities for rapid development."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Type Safe",
      description: "Full TypeScript integration with strict type checking and comprehensive type definitions."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Community Ready",
      description: "Built with popular open-source tools and best practices for easy collaboration and maintenance."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Production Ready",
      description: "Includes error handling, loading states, responsive design, and accessibility features out of the box."
    }
  ]

  return (
    <div className="min-h-full">
      {/* Navigation Header */}
      <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-bold">Template</span>
            </div>
            
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-foreground hover:text-primary transition-colors">Features</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            </nav>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <MobileNav />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-[900px] mx-auto text-center">
          <h1 className="text-5xl font-bold tracking-tight lg:text-6xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Modern Web Template
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-[700px] mx-auto">
            A production-ready Next.js template with beautiful design, comprehensive components, and best practices built-in. Start your project with confidence.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              View Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight">Everything You Need</h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-[600px] mx-auto">
            Built with modern technologies and best practices to accelerate your development
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight">Built for Excellence</h2>
            <p className="mt-4 text-xl text-muted-foreground">
              This template combines the best tools and practices for modern web development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Why Choose This Template?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Save Development Time</h4>
                    <p className="text-muted-foreground">Skip the setup and configuration. Start building features immediately.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Best Practices Included</h4>
                    <p className="text-muted-foreground">Follows industry standards for performance, accessibility, and SEO.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Fully Customizable</h4>
                    <p className="text-muted-foreground">Adapt every aspect to match your brand and requirements.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-lg p-8 border border-border">
              <h4 className="text-lg font-semibold mb-4">Tech Stack</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Framework</span>
                  <span className="font-medium">Next.js 15+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Language</span>
                  <span className="font-medium">TypeScript</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Styling</span>
                  <span className="font-medium">Tailwind CSS</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Components</span>
                  <span className="font-medium">Shadcn/UI</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Database</span>
                  <span className="font-medium">Drizzle ORM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight">Get In Touch</h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Have questions or need help getting started? We're here to help.
            </p>
          </div>
          
          <Card>
            <CardContent className="p-8">
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-bold">Template</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Built with modern technologies and best practices
            </p>
            <div className="flex justify-center gap-6 mb-8">
              <a href="#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">Features</a>
              <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </div>
            <div className="border-t border-border pt-8">
              <p className="text-sm text-muted-foreground">
                © 2024 Template. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
