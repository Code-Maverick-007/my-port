'use client'
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import PinnedRepos from "@/components/pinned-repos"
import ContributionGraph from "@/components/contribution-graph"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Hero />
        <PinnedRepos />
        <ContributionGraph />
        <Skills />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
