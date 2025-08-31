import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, GitFork, ExternalLink, Github } from "lucide-react"

export default function PinnedRepos() {
  const repos = [
    {
      title: "Mediqo",
      description: "MedQo Smart Healthcare Platform - A next-generation healthcare platform designed to simplify patient-doctor interactions",
      tech: ["React.js", "TypeScript", "Tailwind CSS", "React Router DOM", "Axios", "Vite", "Node.js", "Express", "MongoDB", "Mongoose", "JWT Auth", "Bcrypt", "CORS", "dotenv", "multer"],
      stars: 5,
      forks: 1,
      github: "https://github.com/Code-Maverick-007/Mediqo.git",
      demo: "https://mediqo-nine.vercel.app/",
      color: "bg-blue-600/20",
    },
    {
      title: "🚀 Budget Master",
      description: "Thrilled to showcase my latest personal project: Budget Master, a modern personal finance web app designed to help you take control of your money 💼",
      tech: ["HTML", "CSS", "JavaScript", "Chart.js", "Vercel"],
      stars: 6,
      forks: 1,
      github: "https://github.com/Code-Maverick-007/Buget-Master.git",
      demo: "https://buget-master.vercel.app/",
      color: "bg-purple-600/20",
    },
    {
      title: "JravesAI",
      description: "Welcome to the AI Assistant project! This intelligent assistant can perform a variety of tasks to make your life easier. From opening applications to checking system status, this assistant has got you covered.",
      tech: ["Python 3.6+", "speech_recognition", "pyttsx3", "openai", "psutil"],
      stars: 4,
      forks: 2,
      github: "https://github.com/Code-Maverick-007/AI-Assistant.git",
      demo: "#",
      color: "bg-orange-600/20",
    },
    {
      title: "Notes App",
      description: "A modern notes application for organizing your thoughts and tasks",
      tech: ["React.js", "TypeScript", "Tailwind CSS", "React Router DOM", "Axios", "Vite"],
      stars: 5,
      forks: 2,
      github: "https://github.com/Code-Maverick-007/Notes-app.git",
      demo: "https://notes-app-lac-chi.vercel.app/",
      color: "bg-pink-600/20",
    },
    {
      title: "PortfolioShowcase",
      description: "A showcase of various portfolio templates and designs",
      tech: ["React", "Node.js", "MongoDB"],
      stars: 19,
      forks: 5,
      github: "https://github.com/CodeMaverick-143/Portfolio_Showcase",
      demo: "https://nstsdc-portfolio.netlify.app/",
      color: "bg-green-600/20",
    },
    {
      title: "Qrcodegenerator",
      description: "A simple QR code generator application",
      tech: ["HTML", "CSS", "JavaScript"],
      stars: 1,
      forks: 1,
      github: "https://github.com/Code-Maverick-007/new-qrcodegenerator.git",
      demo: "https://new-qrcodegenerator-7miohyr2r.vercel.app/",
      color: "bg-indigo-600/20",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {repos.map((repo, i) => (
        <Card key={i} className={`border-2 border-border ${repo.color} transition-all hover:shadow-lg flex flex-col h-full`}>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${repo.color}`}></div>
                <CardTitle className="text-lg font-semibold">{repo.title}</CardTitle>
              </div>
              <div className="flex gap-2">
                <a href={repo.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                  <Github className="h-4 w-4" />
                </a>
                <a href={repo.demo} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
            <CardDescription className="line-clamp-2 h-10">{repo.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2 py-2">
            {repo.tech.map((tech, i) => (
              <Badge key={i} variant="secondary" className="px-2 py-0.5 text-xs">
                {tech}
              </Badge>
            ))}
          </CardContent>
          <CardFooter className="pt-2 mt-auto flex justify-between">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Star className="h-4 w-4 mr-1" />
                <span>{repo.stars}</span>
              </div>
              <div className="flex items-center">
                <GitFork className="h-4 w-4 mr-1" />
                <span>{repo.forks}</span>
              </div>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}