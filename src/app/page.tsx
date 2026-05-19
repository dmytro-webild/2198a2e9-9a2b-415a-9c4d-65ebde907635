"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardFive from '@/components/sections/pricing/PricingCardFive';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="medium"
        sizing="mediumLarge"
        background="none"
        cardStyle="glass-depth"
        primaryButtonStyle="flat"
        secondaryButtonStyle="glass"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Philosophy",
          id: "system",
        },
        {
          name: "Mentorship",
          id: "features",
        },
        {
          name: "Pricing",
          id: "pricing",
        },
        {
          name: "Success",
          id: "testimonials",
        },
      ]}
      brandName="Apex Futures Academy"
      button={{
        text: "Apply Now",
        href: "#contact",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardCarousel
      background={{
        variant: "gradient-bars",
      }}
      title="Institutional Futures Trading Academy"
      description="Master the markets through data-driven methodology, rigorous risk management, and professional discipline. Built for serious learners seeking long-term consistency over gambling."
      buttons={[
        {
          text: "Start Learning",
          href: "#features",
        },
        {
          text: "Book Strategy Call",
          href: "#contact",
        },
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/modern-home-with-pc-monitor-ready-online-stock-trading-forex-analysis_482257-126333.jpg",
          imageAlt: "Trading Desk 1",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/sun-shining-hallway-modern-building-designed-with-colorful-windows_181624-54975.jpg",
          imageAlt: "Trading Desk 2",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/empty-luxurious-corporate-high-end-office-designed-ceo-leader_482257-124753.jpg",
          imageAlt: "Trading Desk 3",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/digital-tablet-online-learning_53876-97299.jpg",
          imageAlt: "Trading Desk 4",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/high-tech-office-ready-stock-trading_482257-121465.jpg",
          imageAlt: "Trading Desk 5",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/important-investor-making-notes-calculations-briefing-meeting_482257-122861.jpg",
          imageAlt: "Trading Desk 6",
        },
      ]}
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "CME Group",
        "ICE",
        "Interactive Brokers",
        "TradeStation",
        "NinjaTrader",
        "TradingView",
        "Topstep",
      ]}
      title="Trusted by Traders Globally"
      description="Our alumni are actively trading across major global exchanges."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "Advanced Market Analysis",
          description: "Learn to read order flow, volume profile, and market structure with precision.",
          imageSrc: "http://img.b2bpic.net/free-photo/zoom-out-home-office-with-monitors-stock-market_482257-29630.jpg",
        },
        {
          title: "Professional Discipline",
          description: "Rigorous journaling and data-backed performance tracking to eliminate overtrading.",
          imageSrc: "http://img.b2bpic.net/free-photo/worker-holding-device-with-greenscreen_482257-76711.jpg",
        },
        {
          title: "Community Mentorship",
          description: "Daily live trading sessions with seasoned professionals in a high-focus environment.",
          imageSrc: "http://img.b2bpic.net/free-photo/mock-up-animation-financial-stock-market-data-software-with-different-diagrams-graphs_482257-26904.jpg",
        },
      ]}
      title="A System-Based Approach"
      description="We remove the emotional noise, replacing it with structured institutional processes that prioritize capital preservation and consistent performance."
    />
  </div>

  <div id="system" data-section="system">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",
          content: "The Transformation Engine",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/african-american-man-working-with-forex-market-exchange-multi-monitors-workstation-analyzing-stock-funds-capital-banking-sales-buy-sell-profit-money-financial-growth_482257-43071.jpg",
          alt: "Trading Desk",
        },
      ]}
      buttons={[
        {
          text: "Discover our Framework",
          href: "#features",
        },
      ]}
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "pro-trader",
          tag: "Standard",
          price: "$299",
          period: "/mo",
          description: "Foundations, community access, and daily market briefs.",
          button: {
            text: "Get Started",
            href: "#contact",
          },
          featuresTitle: "Included Features",
          features: [
            "Foundations Course",
            "Daily Briefs",
            "Community Access",
            "Risk Framework",
          ],
        },
        {
          id: "elite-mentorship",
          tag: "Most Popular",
          price: "$999",
          period: "/mo",
          description: "Elite program featuring live sessions and 1-on-1 performance review.",
          button: {
            text: "Apply Now",
            href: "#contact",
          },
          featuresTitle: "Everything in Pro plus",
          features: [
            "Live Trading Sessions",
            "1-on-1 Reviews",
            "Advanced Analytics",
            "Priority Support",
          ],
        },
      ]}
      title="Membership Programs"
      description="Choose your path to professional consistency."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Alex R.",
          handle: "@trader",
          testimonial: "The institutional approach completely changed my results.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-festive-plump-male-eyeglasses-bow-tie-dark-grey-background_613910-13747.jpg",
        },
        {
          id: "2",
          name: "Sarah K.",
          handle: "@futurespro",
          testimonial: "Finally, a real trading education that isn't just fluff.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-businesswoman-office_23-2148452705.jpg",
        },
        {
          id: "3",
          name: "Marcus D.",
          handle: "@tradingflow",
          testimonial: "The risk management framework is invaluable.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-woman-posing-with-blue-jacket_23-2149020770.jpg",
        },
        {
          id: "4",
          name: "Elena M.",
          handle: "@analytics",
          testimonial: "Highly professional environment, the data-driven focus is key.",
          imageSrc: "http://img.b2bpic.net/free-photo/positive-middle-aged-business-leader-window_1262-5388.jpg",
        },
        {
          id: "5",
          name: "James L.",
          handle: "@marketwatch",
          testimonial: "Consistency became possible thanks to their discipline systems.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-confident-senior-man-holding-digital-tablet-his-hand_23-2147859808.jpg",
        },
      ]}
      title="Verified Student Results"
      description="Focus, discipline, and consistent performance across our global community."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "Is this beginner friendly?",
          content: "Yes, our foundations module is built for those starting from scratch.",
        },
        {
          id: "f2",
          title: "How much capital do I need?",
          content: "We recommend at least $2,500 to start properly with risk management.",
        },
        {
          id: "f3",
          title: "How long to see results?",
          content: "Consistent results depend on individual dedication and practice.",
        },
        {
          id: "f4",
          title: "What platforms do you support?",
          content: "We support all major platforms like NinjaTrader and TradingView.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/graph-business-financial-investment-risk-word_53876-14479.jpg"
      mediaAnimation="slide-up"
      title="Frequently Asked Questions"
      description="Common questions about our academy and futures trading."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      text="Ready to master institutional futures trading? Start your journey today."
      buttons={[
        {
          text: "Apply for Membership",
          href: "#application",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#",
            },
            {
              label: "Philosophy",
              href: "#",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Apex Academy"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
