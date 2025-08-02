import { useEffect } from "react";
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import {
  Github,
  Linkedin,
  Mail,
  Code,
  Zap,
  Users,
  Heart,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Badge = ({ children, variant = "default", className = "" }) => {
  const base =
    "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition";
  const colors = {
    default: "bg-gray-200 text-gray-800",
    secondary: "bg-gray-100 text-gray-600",
    outline:
      "border border-gray-300 bg-transparent text-gray-700 dark:text-gray-200",
  };
  return (
    <span className={`${base} ${colors[variant] || colors.default} ${className}`}>
      {children}
    </span>
  );
};

const Card = ({ children, className = "", ...props }) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const CardHeader = ({ children, className = "" }) => (
  <div className={`px-6 py-4 border-b border-gray-200 dark:border-gray-700 ${className}`}>
    {children}
  </div>
);
const CardTitle = ({ children, className = "" }) => (
  <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>
);
const CardContent = ({ children, className = "" }) => (
  <div className={`px-6 py-6 ${className}`}>{children}</div>
);

const Button = ({ children, variant = "solid", size = "md", asChild = false, className = "", ...props }) => {
  const base = "inline-flex items-center justify-center font-medium rounded-full focus:outline-none transition";
  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };
  const variants = {
    solid: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 bg-transparent text-gray-800 hover:bg-gray-100",
    secondary: "bg-gray-800 text-white hover:opacity-90",
  };
  const content = (
    <button
      className={`${base} ${sizes[size] || sizes.md} ${variants[variant] || variants.solid} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
  return asChild ? <div>{content}</div> : content;
};

const AboutDev = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const skills = [
    "React",
    "TypeScript",
    "Node.js",
    "Firebase",
    "Tailwind CSS",
    "Next.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Git",
  ];

  const projects = [
    {
      name: "Discount PRO",
      description:
        "A comprehensive coupon collecting application for Bangladesh's top e-commerce brands",
      tech: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
      status: "Current Project",
    },
    {
      name: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with payment integration and admin dashboard",
      tech: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      status: "Completed",
    },
    {
      name: "Task Management App",
      description:
        "Collaborative task management tool with real-time updates and team features",
      tech: ["React", "Firebase", "Material-UI"],
      status: "Completed",
    },
  ];

   const { user } = useContext(AuthContext);

   if (!user) {
        return (
            <div className="bg-gray-100 min-h-screen flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
                    <h2 className="text-3xl text-red-600 font-bold mb-4">User Not Logged In</h2>
                    <p className="text-lg text-gray-700">Please log in to view your profile.</p>
                </div>
            </div>
        );
    }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-600 py-8">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="relative inline-block mb-6">
            <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 shadow-lg flex items-center justify-center">
              <Code className="h-16 w-16 text-white" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About the Developer
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate full-stack developer dedicated to creating innovative web
            solutions that make a difference in people's lives.
          </p>
        </div>

        {/* Personal Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card data-aos="fade-right">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Heart className="h-5 w-5 text-pink-500" />
                <span className="text-white">About Me</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Hello! I'm a passionate web developer with a strong focus on
                creating user-friendly and efficient web applications. I love
                solving complex problems and turning ideas into reality through
                code.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                With expertise in both frontend and backend technologies, I
                enjoy building full-stack applications that provide seamless
                user experiences. I'm constantly learning new technologies and
                staying updated with the latest industry trends.
              </p>
              <div className="flex space-x-4 pt-4 flex-wrap">
                <div>
                  <Button  size="sm" className="flex items-center gap-2">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                </div>
                <div>
                  <Button  size="sm" className="flex items-center gap-2">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
                <div>
                  <Button size="sm" className="flex items-center gap-2">
                    <a href="mailto:developer@example.com" className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card data-aos="fade-left">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-yellow-500" />
                <span className="text-white">Skills & Technologies</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge
                    key={index}
                    
                    className="text-sm py-1 text-white px-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transition-transform"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white font-medium">Frontend Development</span>
                  <span className="text-sm text-gray-200">95%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 rounded-full"
                    style={{
                      width: "95%",
                      background:
                        "linear-gradient(to right, #3b82f6, #a855f7)",
                    }}
                  ></div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-white font-medium">Backend Development</span>
                  <span className="text-sm text-gray-200">88%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 rounded-full"
                    style={{
                      width: "88%",
                      background:
                        "linear-gradient(to right, #f59e0b, #ef4444)",
                    }}
                  ></div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-white font-medium">Database Design</span>
                  <span className="text-sm text-gray-200">90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 rounded-full"
                    style={{
                      width: "90%",
                      background:
                        "linear-gradient(to right, #10b981, #14b8a6)",
                    }}
                  ></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Projects Section */}
        <div className="mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:scale-105"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-500 transition-colors font-semibold">
                      {project.name}
                    </span>
                    <Badge
                      variant={
                        project.status === "Current Project"
                          ? "default"
                          : "secondary"
                      }
                      className="text-xs bg-[#f59e0b] "
                    >
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          data-aos="fade-up"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
              3+
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              Years Experience
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-yellow-500 mb-2">
              15+
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              Projects Completed
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-500 mb-2">
              50+
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              Happy Clients
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
              24/7
            </div>
            <div className="text-gray-600 dark:text-gray-300">Support</div>
          </div>
        </div>

        {/* Contact CTA */}
        <Card
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
          data-aos="fade-up"
        >
          <CardContent className="text-center py-12">
            <Users className="h-12 w-12 mx-auto mb-4 opacity-90" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Let's Work Together!
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting
              projects, or potential collaborations. Feel free to reach out!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="flex items-center gap-2">
                <a href="mailto:developer@example.com" className="flex items-center gap-2">
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 flex items-center gap-2"
              >
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="h-5 w-5" />
                  View GitHub
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutDev;
