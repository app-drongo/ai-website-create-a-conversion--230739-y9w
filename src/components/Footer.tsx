// Footer Component
// Generated: 2025-08-30T10:53:50.248Z
// Template: footer-c001
// Context: layout
// Position: layout.footer.0

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
  Settings,
  Database,
  Cog
} from "lucide-react"

export default function Footer() {
  const footerSections = [
    {
      title: "SAP Services",
      links: [
        { name: "ERP Integration", href: "#features" },
        { name: "Manufacturing Modules", href: "#manufacturing" },
        { name: "Supply Chain", href: "#supply-chain" },
        { name: "Quality Management", href: "#quality" },
        { name: "Plant Maintenance", href: "#maintenance" },
        { name: "Production Planning", href: "#planning" }
      ]
    },
    {
      title: "Solutions",
      links: [
        { name: "Implementation", href: "#implementation" },
        { name: "Migration Services", href: "#migration" },
        { name: "System Optimization", href: "#optimization" },
        { name: "Training Programs", href: "#training" },
        { name: "Support & Maintenance", href: "#support" },
        { name: "Consulting", href: "#consulting" }
      ]
    },
    {
      title: "Industries",
      links: [
        { name: "Automotive", href: "#automotive" },
        { name: "Aerospace", href: "#aerospace" },
        { name: "Electronics", href: "#electronics" },
        { name: "Chemical", href: "#chemical" },
        { name: "Food & Beverage", href: "#food" },
        { name: "Pharmaceuticals", href: "#pharma" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Case Studies", href: "#case-studies" },
        { name: "White Papers", href: "#whitepapers" },
        { name: "Best Practices", href: "#best-practices" },
        { name: "ROI Calculator", href: "#roi" },
        { name: "Implementation Guide", href: "#guide" },
        { name: "Compliance", href: "#compliance" }
      ]
    }
  ]

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
    { name: "GitHub", icon: Github, href: "https://github.com" }
  ]

  return (
    <footer className="bg-background border-t border-border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <Settings className="text-background size-5" />
                </div>
                <span className="font-bold text-xl text-foreground">ManufactureTech Solutions</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Leading SAP ERP integration specialists for manufacturing enterprises. 
                Transform your operations with our proven implementation methodology and industry expertise.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">solutions@manufacturetech.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+1 (555) 789-0123</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">2500 Industrial Blvd, Suite 400</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-foreground">Manufacturing Insights</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-foreground"
                />
                <Button size="sm" className="px-3 bg-primary hover:bg-primary/90 text-background">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Get SAP updates, manufacturing trends, and implementation best practices.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm text-foreground">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 ManufactureTech Solutions. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Powered by <Database className="size-3 text-accent" /> SAP expertise
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Connect:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-border/30">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="/security" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Security & Compliance
            </Link>
            <Link href="/partnerships" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              SAP Partnership
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}