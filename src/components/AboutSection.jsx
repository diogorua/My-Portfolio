import { Code, ArrowDown, Bitcoin, Speech } from "lucide-react"

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative min-h-screen">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4-xl font-bold mb-12 text-center">
                    About
                    <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Developing my skills in both frontend and backend
                        </h3>

                        <p className="text-muted-foreground">
                            I started my journey back at home before attending university, where I decided to take a step into the world of programming. Since then, I'm loving every moment of it.
                        </p>
                        <p className="text-muted-foreground">
                            I joined to NET at the university, which is a Student's Association of Technology that represents three Bachelor's and three Master's degrees in Computer Science and Business Management, Computer Engineering, and Telecommunications and Computer Engineering. In this moment, I'm the Head of the IT department.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center ">

                            <a href="#contact" className="cosmic-button">
                                Get in Touch
                            </a>
                            
                            <a href="/Resume_DiogoRua.pdf" download="Resume_DiogoRua.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Download CV
                            </a>

                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6w-6 text-primary"/>
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Coding
                                    </h4>
                                    <p className="text-muted-foreground">
                                        My main focus is to improve my skills in both frontend and backend development, in order to know which path I want to follow, so I watch tutorials and build projects. 
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Speech className="h-6w-6 text-primary"/>
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Learning new Languages
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Besides my deep interest in coding, I recently discovered that I like learning new languages. Now I'm learning Swedish so "Välkommen till min portfolio!".
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Bitcoin className="h-6w-6 text-primary"/>
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Investments
                                    </h4>
                                    <p className="text-muted-foreground">
                                        I also like to read books about this subject. I started to have interest since I read the book "Comeca Ja" by Pedro Andersson. It helped me to understand the importance of financial education and how to manage my money wisely. I recommend it!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <a href="#skills"><ArrowDown className="h-5 w-5 text-primary" /></a>
            </div>  
        </section>
    )
}