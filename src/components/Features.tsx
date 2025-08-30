// Features Component
// Generated: 2025-08-30T10:53:50.249Z
// Template: features-c001
// Context: Homepage
// Position: pages.0.sections.1

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Database, 
  Shield, 
  Cog, 
  BarChart3, 
  Clock, 
  Users,
  Zap,
  CheckCircle,
  Settings
} from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Database,
      title: "Real-Time Data Sync",
      description: "Seamless bi-directional data flow between SAP ERP and manufacturing systems with millisecond precision.",
      badge: "Integration"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 Type II compliant with advanced encryption and role-based access controls for sensitive manufacturing data.",
      badge: "Security"
    },
    {
      icon: Cog,
      title: "Production Optimization",
      description: "AI-driven insights to optimize production schedules, reduce waste, and improve overall equipment effectiveness.",
      badge: "Optimization"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Real-time dashboards and KPI tracking for production metrics, inventory levels, and operational performance.",
      badge: "Analytics"
    },
    {
      icon: Clock,
      title: "Zero-Downtime Migration",
      description: "Phased implementation approach ensures continuous operations during SAP integration and system upgrades.",
      badge: "Implementation"
    },
    {
      icon: Users,
      title: "Expert Support Team",
      description: "Dedicated SAP-certified consultants and manufacturing specialists available 24/7 for critical operations.",
      badge: "Support"
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Streamline procurement, inventory management, and quality control with intelligent automation rules.",
      badge: "Automation"
    },
    {
      icon: CheckCircle,
      title: "Compliance Ready",
      description: "Built-in compliance frameworks for FDA, ISO 9001, and other manufacturing industry standards.",
      badge: "Compliance"
    },
    {
      icon: Settings,
      title: "Custom Integrations",
      description: "Flexible API architecture supports integration with MES, WMS, and other manufacturing execution systems.",
      badge: "Customization"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Enterprise Solutions
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Complete SAP Integration for
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Modern Manufacturing
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive enterprise software solutions designed to accelerate digital transformation 
            and optimize manufacturing operations at scale.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to transform your manufacturing operations?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Request Assessment
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Download ROI Calculator
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}