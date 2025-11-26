<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Project;
use App\Models\Skill;
use App\Models\Experience;
use App\Models\Education;
use App\Models\Service;
use App\Models\Testimonial;
use App\Models\Post;
use App\Models\Setting;
use App\Models\Certification;
use Carbon\Carbon;

class PortfolioSeeder extends Seeder
{
    public function run(): void
    {
        // Settings (PersonalInfo, Hero, About, SEO, etc.)
        $settings = [
            'personal_info' => [
                "name" => "Tanbir Ahmed",
                "title" => "Full-Stack Laravel Developer",
                "tagline" => "Crafting Digital Experiences That Matter",
                "bio" => "Full-Stack Laravel Developer with over 3 years of experience delivering complete web solutions from concept to deployment. Passionate about building robust backend systems and modern, responsive frontends that create seamless user experiences.",
                "location" => [
                    "city" => "Uttara",
                    "state" => "Dhaka",
                    "country" => "Bangladesh"
                ],
                "contact" => [
                    "email" => "ahmedtanbir442@gmail.com",
                    "phone" => "+8801876525073"
                ],
                "social" => [
                    "linkedin" => "https://linkedin.com/in/tanbir-ahmed07",
                    "github" => "https://github.com/tdottahmed",
                    "twitter" => "",
                    "website" => ""
                ],
                "profileImage" => "/images/profile.jpg",
                "resumeFile" => "/files/TANBIR-AHMED-Resume.pdf",
                "availability" => [
                    "status" => "open",
                    "message" => "Available for freelance projects and full-time opportunities"
                ]
            ],
            'hero' => [
                "greeting" => "Hi, I'm Tanbir 👋",
                "headline" => "I Build Scalable Web Solutions That Users Love",
                "subheadline" => "Full-Stack Laravel Developer specializing in creating high-performance applications with modern tech stacks",
                "cta" => [
                    [
                        "text" => "View My Work",
                        "link" => "#projects",
                        "type" => "primary"
                    ],
                    [
                        "text" => "Get In Touch",
                        "link" => "#contact",
                        "type" => "secondary"
                    ]
                ],
                "stats" => [
                    [
                        "value" => "3+",
                        "label" => "Years Experience"
                    ],
                    [
                        "value" => "15+",
                        "label" => "Projects Completed"
                    ],
                    [
                        "value" => "98%",
                        "label" => "Client Satisfaction"
                    ],
                    [
                        "value" => "70+",
                        "label" => "Bugs Fixed"
                    ]
                ]
            ],
            'about' => [
                "title" => "About Me",
                "description" => "I'm a passionate Full-Stack Developer who loves turning complex problems into elegant solutions. With expertise in Laravel, React, and modern web technologies, I create applications that are not just functional, but delightful to use.",
                "highlights" => [
                    "🚀 Built 2+ commercial applications for CodeCanyon marketplace",
                    "💼 Developed mission-critical systems for Bangladesh Air Force",
                    "⚡ Reduced load times by 35% through performance optimization",
                    "🎯 Achieved 99.8% system uptime in production environments",
                    "🔐 Implemented secure RBAC systems for military-grade applications",
                    "📈 Increased product ratings by 20% through custom feature development"
                ],
                "expertise" => [
                    [
                        "area" => "Backend Development",
                        "description" => "Expert in building robust, scalable backend systems with Laravel, RESTful APIs, and microservices architecture"
                    ],
                    [
                        "area" => "Frontend Engineering",
                        "description" => "Proficient in creating modern, responsive UIs using React, Vue.js, Inertia.js, and Tailwind CSS"
                    ],
                    [
                        "area" => "DevOps & Deployment",
                        "description" => "Experienced in CI/CD pipelines, Docker containerization, and cloud deployment with AWS"
                    ],
                    [
                        "area" => "Database Design",
                        "description" => "Skilled in designing efficient database architectures with MySQL and PostgreSQL for optimal performance"
                    ]
                ]
            ],
            'seo' => [
                "title" => "Tanbir Ahmed - Full-Stack Laravel Developer | Portfolio",
                "description" => "Full-Stack Laravel Developer with 3+ years of experience building scalable web applications. Specializing in Laravel, React, and modern web technologies.",
                "keywords" => "Laravel Developer, Full-Stack Developer, PHP Developer, React Developer, Web Developer Bangladesh, Tanbir Ahmed",
                "author" => "Tanbir Ahmed",
                "ogImage" => "/images/og-image.jpg",
                "twitterHandle" => "@tanbirahmed"
            ],
            'site_settings' => [
                "theme" => [
                    "defaultMode" => "dark",
                    "allowToggle" => true
                ],
                "animations" => [
                    "enabled" => true,
                    "reducedMotion" => false
                ],
                "contact" => [
                    "showEmail" => true,
                    "showPhone" => true,
                    "showSocial" => true
                ],
                "portfolio" => [
                    "projectsPerPage" => 6,
                    "showFeaturedOnly" => false
                ]
            ]
        ];

        foreach ($settings as $key => $payload) {
            Setting::create([
                'key' => $key,
                'payload' => $payload
            ]);
        }

        // Skills
        $skillCategories = [
            [
                "name" => "Programming Languages",
                "icon" => "Code2",
                "skills" => [
                    [ "name" => "PHP", "level" => 95, "yearsOfExperience" => 3 ],
                    [ "name" => "JavaScript", "level" => 90, "yearsOfExperience" => 3 ],
                    [ "name" => "SQL", "level" => 85, "yearsOfExperience" => 3 ]
                ]
            ],
            [
                "name" => "Frameworks & Libraries",
                "icon" => "Layers",
                "skills" => [
                    [ "name" => "Laravel", "level" => 95, "yearsOfExperience" => 3 ],
                    [ "name" => "React JS", "level" => 85, "yearsOfExperience" => 2 ],
                    [ "name" => "Vue JS", "level" => 80, "yearsOfExperience" => 2 ],
                    [ "name" => "Inertia.js", "level" => 90, "yearsOfExperience" => 2 ],
                    [ "name" => "Tailwind CSS", "level" => 90, "yearsOfExperience" => 2 ],
                    [ "name" => "Bootstrap", "level" => 85, "yearsOfExperience" => 3 ]
                ]
            ],
            [
                "name" => "Databases & Tools",
                "icon" => "Database",
                "skills" => [
                    [ "name" => "MySQL", "level" => 90, "yearsOfExperience" => 3 ],
                    [ "name" => "PostgreSQL", "level" => 80, "yearsOfExperience" => 2 ],
                    [ "name" => "PHPUnit", "level" => 75, "yearsOfExperience" => 2 ],
                    [ "name" => "Composer", "level" => 90, "yearsOfExperience" => 3 ],
                    [ "name" => "Vite", "level" => 85, "yearsOfExperience" => 2 ]
                ]
            ],
            [
                "name" => "DevOps & Version Control",
                "icon" => "GitBranch",
                "skills" => [
                    [ "name" => "Git", "level" => 90, "yearsOfExperience" => 3 ],
                    [ "name" => "Docker", "level" => 75, "yearsOfExperience" => 2 ],
                    [ "name" => "Nginx", "level" => 80, "yearsOfExperience" => 2 ],
                    [ "name" => "Apache", "level" => 80, "yearsOfExperience" => 3 ],
                    [ "name" => "AWS", "level" => 70, "yearsOfExperience" => 1 ]
                ]
            ],
            [
                "name" => "Concepts & Architecture",
                "icon" => "Boxes",
                "skills" => [
                    [ "name" => "MVC Design Architecture", "level" => 95, "yearsOfExperience" => 3 ],
                    [ "name" => "OOP", "level" => 90, "yearsOfExperience" => 3 ],
                    [ "name" => "RESTful APIs", "level" => 90, "yearsOfExperience" => 3 ],
                    [ "name" => "SOLID Principles", "level" => 85, "yearsOfExperience" => 2 ],
                    [ "name" => "JWT Authentication", "level" => 85, "yearsOfExperience" => 2 ]
                ]
            ]
        ];

        foreach ($skillCategories as $category) {
            foreach ($category['skills'] as $skill) {
                Skill::create([
                    'name' => $skill['name'],
                    'category' => $category['name'],
                    'level' => $skill['level'],
                    'years_of_experience' => $skill['yearsOfExperience'],
                    'icon' => $category['icon']
                ]);
            }
        }

        // Experiences
        $experiences = [
            [
                "company" => "Imjol IT",
                "position" => "Software Developer",
                "type" => "Full-time",
                "location" => "Dhaka, Bangladesh",
                "start_date" => "2023-11-01",
                "end_date" => null,
                "current" => true,
                "description" => "Leading development of commercial Laravel applications for CodeCanyon marketplace, maintaining high-quality standards and client satisfaction.",
                "achievements" => [
                    "Built 2+ commercial Laravel applications for CodeCanyon marketplace, adhering to strict quality standards for scalability and security",
                    "Maintained portfolio of 6+ CodeCanyon products with 98% client satisfaction through proactive updates and bug resolution",
                    "Developed custom features including payment gateways, admin panels, and API integrations, increasing product ratings by 20% on average",
                    "Optimized performance of legacy CodeCanyon scripts, reducing load times by 35% through query optimization and caching strategies",
                    "Implemented CI/CD pipelines for automated testing and deployment, streamlining release processes"
                ],
                "technologies" => ["Laravel", "PHP", "React", "MySQL", "Redis", "AWS", "Docker"],
                "highlights" => [
                    "clientSatisfaction" => "98%",
                    "performanceImprovement" => "35%",
                    "ratingIncrease" => "20%"
                ]
            ],
            [
                "company" => "PONDIT",
                "position" => "Software Developer",
                "type" => "Full-time",
                "location" => "Dhaka, Bangladesh",
                "start_date" => "2023-01-01",
                "end_date" => "2023-10-01",
                "current" => false,
                "description" => "Developed mission-critical inventory management systems for Bangladesh Air Force, ensuring high security and reliability standards.",
                "achievements" => [
                    "Developed mission-critical inventory management systems for Bangladesh Air Force with military-grade security",
                    "Collaborated with Air Force development team using Agile methodologies to deliver 3 major features ahead of schedule",
                    "Fixed 70+ critical bugs across frontend (Blade/jQuery) and backend (Laravel), achieving 99.8% system uptime",
                    "Built role-based access control (RBAC) systems ensuring secure data access across military ranks",
                    "Collaborated with team members using Git and Trello for efficient task management and version control",
                    "Followed clean code principles and Laravel best practices to write scalable, maintainable, and well-documented code"
                ],
                "technologies" => ["Laravel", "PHP", "Blade", "jQuery", "MySQL", "Git", "Trello"],
                "highlights" => [
                    "systemUptime" => "99.8%",
                    "bugsFixed" => "70+",
                    "featuresDelivered" => "3 ahead of schedule"
                ]
            ],
            [
                "company" => "Tosfast IT",
                "position" => "Laravel Developer",
                "type" => "Part-time",
                "location" => "Dhaka, Bangladesh",
                "start_date" => "2023-04-01",
                "end_date" => "2023-12-01",
                "current" => false,
                "description" => "Developed and maintained Point of Sale (POS) and Human Resource Management (HRM) systems with comprehensive features.",
                "achievements" => [
                    "Developed and maintained a Point of Sale (POS) system with real-time inventory tracking, sales reporting, and customer management features",
                    "Implemented barcode scanning, product variation handling, and receipt printing for smooth checkout operations",
                    "Built and optimized Human Resource Management (HRM) modules, including employee onboarding, attendance, and payroll systems",
                    "Developed custom reports and dashboards for HR and admin users to monitor employee performance and HR metrics",
                    "Integrated third-party APIs for payment processing and inventory synchronization"
                ],
                "technologies" => ["Laravel", "PHP", "MySQL", "JavaScript", "jQuery", "Bootstrap"],
                "highlights" => [
                    "systemsBuilt" => "2 (POS & HRM)",
                    "featuresImplemented" => "Real-time tracking, Barcode scanning, Reporting"
                ]
            ]
        ];

        foreach ($experiences as $exp) {
            Experience::create($exp);
        }

        // Projects
        $projects = [
            [
                "title" => "MAGIC LMS",
                "subtitle" => "Learning Management System",
                "slug" => "magic-lms",
                "category" => "Web Application",
                "featured" => true,
                "thumbnail" => "/images/projects/magic-lms.jpg",
                "images" => [
                    "/images/projects/magic-lms-1.jpg",
                    "/images/projects/magic-lms-2.jpg",
                    "/images/projects/magic-lms-3.jpg"
                ],
                "description" => "A comprehensive Learning Management System designed for modern education, featuring course management, student enrollment, payment integration, and real-time progress tracking.",
                "long_description" => "MAGIC LMS is a full-featured Learning Management System built with modern web technologies. The platform provides a seamless experience for both instructors and students, with intuitive course creation tools, interactive learning modules, and integrated payment solutions. The system supports multiple payment gateways and offers detailed analytics for tracking student progress and engagement.",
                "technologies" => ["Laravel", "React", "Inertia.js", "MySQL", "Tailwind CSS", "Stripe", "PayPal", "SSLCommerz"],
                "features" => [
                    "Seamless SPA experience with React and Inertia.js",
                    "Multi-gateway payment integration (SSLCommerz, Stripe, PayPal)",
                    "Course enrollment and subscription management",
                    "Real-time progress tracking and analytics",
                    "Interactive quiz and assignment modules",
                    "Student and instructor dashboards",
                    "Certificate generation upon course completion",
                    "Responsive design for mobile and desktop"
                ],
                "achievements" => [
                    "Independently designed and developed the full platform from database architecture to frontend UI/UX",
                    "Integrated multiple payment gateways for smooth course enrollment",
                    "Built reusable React components for scalable development"
                ],
                "links" => [
                    "live" => "",
                    "github" => "",
                    "demo" => ""
                ],
                "status" => "completed",
                "timeline" => [
                    "start" => "2024-01",
                    "end" => "2024-06",
                    "duration" => "6 months"
                ],
                "role" => "Full-Stack Developer & Designer",
                "team_size" => "Solo Project"
            ],
            [
                "title" => "Multivendor E-Commerce Platform",
                "subtitle" => "E-Commerce & POS Management System",
                "slug" => "multivendor-ecommerce",
                "category" => "Web Application",
                "featured" => true,
                "thumbnail" => "/images/projects/multivendor-ecommerce.jpg",
                "images" => [
                    "/images/projects/multivendor-1.jpg",
                    "/images/projects/multivendor-2.jpg",
                    "/images/projects/multivendor-3.jpg"
                ],
                "description" => "A fully featured multivendor e-commerce platform with an integrated Point-of-Sale system, enabling vendors to manage products, sales, inventory, and orders in real time.",
                "long_description" => "This comprehensive multivendor e-commerce solution combines the power of online retail with physical POS capabilities. Vendors can seamlessly manage their inventory across both channels, process orders, handle customer relationships, and track sales performance through detailed analytics dashboards. The platform supports multiple vendors with isolated data management and comprehensive admin controls.",
                "technologies" => ["Laravel", "Blade", "MySQL", "jQuery", "JavaScript", "Bootstrap"],
                "features" => [
                    "Multi-vendor support with separate dashboards",
                    "Integrated POS system for physical stores",
                    "Real-time inventory management across channels",
                    "Product catalog with variations and attributes",
                    "Order workflow automation",
                    "Coupon and discount management",
                    "Dynamic POS cart operations",
                    "Vendor commission and payout system",
                    "Customer management and loyalty programs",
                    "Sales analytics and reporting"
                ],
                "achievements" => [
                    "Designed scalable database architecture for multi-vendor operations",
                    "Optimized backend logic for fast performance",
                    "Implemented secure transaction handling"
                ],
                "links" => [
                    "live" => "",
                    "github" => "",
                    "demo" => ""
                ],
                "status" => "completed",
                "timeline" => [
                    "start" => "2023-06",
                    "end" => "2024-02",
                    "duration" => "8 months"
                ],
                "role" => "Lead Developer",
                "team_size" => "Solo Project"
            ],
            [
                "title" => "Paikari Management App",
                "subtitle" => "Wholesale Business Management SPA",
                "slug" => "paikari-management",
                "category" => "Web Application",
                "featured" => true,
                "thumbnail" => "/images/projects/paikari.jpg",
                "images" => [
                    "/images/projects/paikari-1.jpg",
                    "/images/projects/paikari-2.jpg",
                    "/images/projects/paikari-3.jpg"
                ],
                "description" => "A modern single-page application for wholesale business owners to manage customers, suppliers, inventory, purchases, and sales with a smooth and responsive UI.",
                "long_description" => "Paikari Management App is built specifically for wholesale businesses, providing a comprehensive solution for managing complex business operations. The SPA architecture ensures a fast, app-like experience with no page reloads, while the modern UI makes it easy for users to navigate complex workflows. The system handles everything from supplier management to inventory tracking and sales reporting.",
                "technologies" => ["Laravel", "React", "Inertia.js", "Tailwind CSS", "MySQL"],
                "features" => [
                    "Customer and supplier management",
                    "Inventory tracking with low-stock alerts",
                    "Purchase order management",
                    "Sales and invoice generation",
                    "Payment tracking and reports",
                    "Product variation handling",
                    "Barcode integration",
                    "Multi-currency support",
                    "Advanced filtering and search",
                    "Export to PDF and Excel"
                ],
                "achievements" => [
                    "Engineered scalable API-driven architecture",
                    "Built reusable React components for efficiency",
                    "Optimized database queries for high performance",
                    "Delivered seamless front-to-back workflow without page reloads"
                ],
                "links" => [
                    "live" => "",
                    "github" => "",
                    "demo" => ""
                ],
                "status" => "completed",
                "timeline" => [
                    "start" => "2024-03",
                    "end" => "2024-07",
                    "duration" => "4 months"
                ],
                "role" => "Full-Stack Developer",
                "team_size" => "Solo Project"
            ],
            [
                "title" => "Air Force Inventory System",
                "subtitle" => "Mission-Critical Inventory Management",
                "slug" => "air-force-inventory",
                "category" => "Enterprise Application",
                "featured" => false,
                "thumbnail" => "/images/projects/airforce.jpg",
                "images" => [],
                "description" => "Secure inventory management system for Bangladesh Air Force with role-based access control and military-grade security.",
                "long_description" => "Developed a mission-critical inventory management system for Bangladesh Air Force with stringent security requirements. The system manages sensitive military equipment and supplies with comprehensive audit trails, role-based permissions, and real-time tracking capabilities.",
                "technologies" => ["Laravel", "PHP", "Blade", "MySQL", "jQuery"],
                "features" => [
                    "Role-based access control (RBAC)",
                    "Audit trail and logging",
                    "Real-time inventory tracking",
                    "Equipment maintenance scheduling",
                    "Secure data encryption",
                    "Multi-level approval workflows",
                    "Comprehensive reporting"
                ],
                "achievements" => [
                    "Achieved 99.8% system uptime",
                    "Implemented military-grade security protocols",
                    "Fixed 70+ critical bugs"
                ],
                "links" => [
                    "live" => "",
                    "github" => "",
                    "demo" => ""
                ],
                "status" => "completed",
                "timeline" => [
                    "start" => "2023-01",
                    "end" => "2023-10",
                    "duration" => "10 months"
                ],
                "role" => "Backend Developer",
                "team_size" => "4 members"
            ]
        ];

        foreach ($projects as $proj) {
            Project::create($proj);
        }

        // Education
        $education = [
            [
                "institution" => "IUBAT University",
                "degree" => "Bachelor of Science",
                "field" => "Computer Science & Engineering",
                "location" => "Uttara, Dhaka, Bangladesh",
                "start_date" => "2017-01-01",
                "end_date" => "2022-12-31",
                "gpa" => "3.01",
                "max_gpa" => "4.00",
                "description" => "Focused on software engineering principles, web development, and database management systems.",
                "relevant_coursework" => [
                    "Data Structures & Algorithms",
                    "Computer Architecture",
                    "Web Development",
                    "Database Management Systems",
                    "Object-Oriented Programming (OOP)",
                    "Software Engineering",
                    "Operating Systems",
                    "Computer Networks"
                ],
                "projects" => [
                    [
                        "name" => "School Management System",
                        "description" => "Team project implementing comprehensive school administration features",
                        "technologies" => ["Laravel", "PHP", "MySQL"]
                    ],
                    [
                        "name" => "Shop Inventory Management System",
                        "description" => "Individual project with full CRUD operations and reporting features",
                        "technologies" => ["Laravel", "PHP", "MySQL"]
                    ]
                ]
            ]
        ];

        foreach ($education as $edu) {
            Education::create($edu);
        }

        // Certifications
        if (class_exists(Certification::class)) {
            $certifications = [
                [
                    "title" => "Web Development (Laravel, PHP, JavaScript)",
                    "issuer" => "BASIS-SEIP Training Program",
                    "issue_date" => "2024-04-01",
                    "description" => "Intensive, industry-standard training focused on backend development using Laravel, PHP, and JavaScript. Covered best practices in clean coding, debugging, and project deployment.",
                    "skills" => ["Laravel", "PHP", "JavaScript", "RESTful APIs", "Clean Code", "Project Deployment"]
                ]
            ];
            
            foreach ($certifications as $cert) {
                Certification::create($cert);
            }
        }

        // Services
        $services = [
            [
                "icon" => "Code",
                "title" => "Full-Stack Development",
                "description" => "End-to-end web application development using Laravel, React, and modern tech stacks for scalable solutions.",
                "features" => [
                    "Custom web applications",
                    "RESTful API development",
                    "Database design & optimization",
                    "Third-party integrations"
                ]
            ],
            [
                "icon" => "Smartphone",
                "title" => "SPA Development",
                "description" => "Build lightning-fast single-page applications with React, Vue.js, and Inertia.js for seamless user experiences.",
                "features" => [
                    "Modern SPA architecture",
                    "Responsive design",
                    "State management",
                    "Performance optimization"
                ]
            ],
            [
                "icon" => "ShoppingCart",
                "title" => "E-Commerce Solutions",
                "description" => "Complete e-commerce platforms with payment integration, inventory management, and POS systems.",
                "features" => [
                    "Multi-vendor support",
                    "Payment gateway integration",
                    "Inventory management",
                    "POS system integration"
                ]
            ],
            [
                "icon" => "Server",
                "title" => "API Development",
                "description" => "Robust RESTful APIs with comprehensive documentation for mobile apps and third-party integrations.",
                "features" => [
                    "RESTful API design",
                    "API documentation",
                    "JWT authentication",
                    "Rate limiting & security"
                ]
            ],
            [
                "icon" => "Zap",
                "title" => "Performance Optimization",
                "description" => "Speed up your applications with database optimization, caching strategies, and code refactoring.",
                "features" => [
                    "Query optimization",
                    "Caching implementation",
                    "Code refactoring",
                    "Load time reduction"
                ]
            ],
            [
                "icon" => "Shield",
                "title" => "Maintenance & Support",
                "description" => "Ongoing maintenance, bug fixes, and feature updates to keep your applications running smoothly.",
                "features" => [
                    "Bug fixing",
                    "Security updates",
                    "Feature enhancements",
                    "24/7 support"
                ]
            ]
        ];

        foreach ($services as $service) {
            Service::create($service);
        }

        // Testimonials
        $testimonials = [
            [
                "name" => "CodeCanyon Client",
                "position" => "Business Owner",
                "company" => "E-Commerce Startup",
                "image" => "/images/testimonials/client1.jpg",
                "rating" => 5,
                "text" => "Tanbir delivered an exceptional Laravel application that exceeded our expectations. His attention to detail and commitment to quality is outstanding. The product has been a huge success on CodeCanyon!",
                "project" => "Multivendor E-Commerce Platform"
            ],
            [
                "name" => "Air Force Development Team",
                "position" => "Project Lead",
                "company" => "Bangladesh Air Force",
                "image" => "/images/testimonials/client2.jpg",
                "rating" => 5,
                "text" => "Working with Tanbir on our mission-critical inventory system was a great experience. He understood our complex security requirements and delivered a robust solution that has been running flawlessly.",
                "project" => "Air Force Inventory System"
            ],
            [
                "name" => "Educational Institution",
                "position" => "Director",
                "company" => "Online Learning Platform",
                "image" => "/images/testimonials/client3.jpg",
                "rating" => 5,
                "text" => "The LMS platform Tanbir built for us is incredible. The seamless integration with multiple payment gateways and the intuitive UI have significantly improved our enrollment rates. Highly recommended!",
                "project" => "MAGIC LMS"
            ]
        ];

        foreach ($testimonials as $testimonial) {
            Testimonial::create($testimonial);
        }

        // Blog Posts
        $posts = [
            [
                "title" => "Building Scalable Laravel Applications: Best Practices",
                "slug" => "building-scalable-laravel-applications",
                "excerpt" => "Learn the essential techniques and patterns for building Laravel applications that can handle growth and maintain performance.",
                "content" => "Content placeholder...",
                "featured_image" => "/images/blog/laravel-scalability.jpg",
                "category" => "Laravel",
                "tags" => ["Laravel", "PHP", "Scalability", "Best Practices"],
                "author" => "Tanbir Ahmed",
                "published_at" => "2024-11-15",
                "read_time" => "8 min read",
                "views" => 1250
            ],
            [
                "title" => "React + Inertia.js: The Perfect SPA Solution",
                "slug" => "react-inertiajs-spa-solution",
                "excerpt" => "Discover how combining React with Inertia.js creates the perfect balance between traditional server-side rendering and modern SPAs.",
                "content" => "Content placeholder...",
                "featured_image" => "/images/blog/react-inertia.jpg",
                "category" => "Frontend",
                "tags" => ["React", "Inertia.js", "SPA", "JavaScript"],
                "author" => "Tanbir Ahmed",
                "published_at" => "2024-11-01",
                "read_time" => "10 min read",
                "views" => 980
            ],
            [
                "title" => "Database Optimization Techniques for High Traffic Applications",
                "slug" => "database-optimization-techniques",
                "excerpt" => "Practical strategies for optimizing database queries and improving application performance under heavy load.",
                "content" => "Content placeholder...",
                "featured_image" => "/images/blog/database-optimization.jpg",
                "category" => "Performance",
                "tags" => ["MySQL", "Performance", "Optimization", "Database"],
                "author" => "Tanbir Ahmed",
                "published_at" => "2024-10-20",
                "read_time" => "12 min read",
                "views" => 1500
            ]
        ];

        foreach ($posts as $post) {
            Post::create($post);
        }
    }
}
