"use client"

import { useState, useEffect } from "react"

export default function ContributionGraph() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Contribution Activity</h2>
        <div className="text-sm text-muted-foreground">
          <span className="font-medium">GitHub Activity</span>
        </div>
      </div>

      <div className="border border-border rounded-lg p-4 bg-card">
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
          </div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            {/* GitHub Contribution Graph */}
            <img
              src="https://github-readme-activity-graph.vercel.app/graph?username=Code-Maverick-007&bg_color=0d1117&color=ffffff&line=00e676&point=ffffff&area=true&hide_border=true"
              alt="GitHub Contribution Graph"
              className="w-full max-w-3xl rounded-lg"
            />
          </div>
        )}
      </div>
    </section>
  )
}
