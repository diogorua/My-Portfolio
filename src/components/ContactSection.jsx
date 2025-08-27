import {
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Send,
    Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
  

export const ContactSection = () => {
    return (
        <section id="contact" className="py-24 px-4 relative min-h-screen bg-secondary/30">
            <div className="container max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary"> Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    I'm open to new opportunities and collaborations. Whether you have a question, a project idea, or just want to say hello, feel free to reach out!
                </p>

                <div className="flex items-center justify-center gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                
                                <div>
                                    <h4 className="font-medium">E-mail</h4>
                                    <span className="text-muted-foreground">diogorua316@gmail.com</span>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                
                                <div>
                                    <h4 className="font-medium">Phone</h4>
                                    <span className="text-muted-foreground">+351 932 584 943</span>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                
                                <div>
                                    <h4 className="font-medium">Location</h4>
                                    <span className="text-muted-foreground">Amadora, Lisboa, Portugal</span>
                                </div>
                            </div>

                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect With Me</h4>

                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/diogorua/" target="_blank" className="hover:text-primary">
                                    <Linkedin />
                                </a>
                                <a href="https://www.instagram.com/diogorua11/" target="_blank" className="hover:text-primary">
                                    <Instagram />
                                </a>
                                <a href="https://x.com/diogorua11" target="_blank" className="hover:text-primary">
                                    <Twitter />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};