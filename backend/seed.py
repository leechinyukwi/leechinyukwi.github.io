import os
import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "portfolio_backend.settings")
django.setup()

from portfolio_api.models import Profile, SkillCategory, Skill, Project, Experience
from django.utils import timezone
from datetime import date


def seed():
    # --- Profile ---
    Profile.objects.all().delete()
    profile = Profile.objects.create(
        name="Linda Chinyukwi",
        title="Computer Science Graduate | Aspiring Software Developer",
        short_intro=(
            "Hi, I'm Linda Chinyukwi, a Computer Science graduate with experience "
            "in software development, web applications, database management, and "
            "system support. I enjoy building scalable and user-friendly applications "
            "using modern technologies such as React, ASP.NET Core, Django, and Flutter."
        ),
        about_summary=(
            "Computer Science graduate passionate about building modern web applications, "
            "mobile apps, and backend systems. Proficient in React, ASP.NET Core MVC, "
            "Django, Flutter, HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, Python, PHP, "
            "WordPress, RESTful APIs, Git, SQL Server, MySQL, PostgreSQL, and Docker. "
            "Strong analytical and problem-solving abilities with a passion for innovation "
            "and continuous learning."
        ),
        career_objective=(
            "To secure a role as a Web/Software Developer where I can apply my skills in "
            "modern web technologies to build impactful and scalable applications. My goal "
            "is to continuously grow as a developer and contribute to innovative solutions "
            "that solve real-world problems."
        ),
        email="chinyukwilinda@gmail.com",
        phone="0783260188",
        github_url="https://github.com/leechinyukwi",
        linkedin_url="https://www.linkedin.com/in/linda-chinyukwi",
    )

    # --- Skill Categories ---
    SkillCategory.objects.all().delete()
    cat_lang = SkillCategory.objects.create(name="Programming Languages", order=1)
    cat_frontend = SkillCategory.objects.create(name="Frontend Development", order=2)
    cat_backend = SkillCategory.objects.create(name="Backend Development", order=3)
    cat_mobile = SkillCategory.objects.create(name="Mobile Development", order=4)
    cat_db = SkillCategory.objects.create(name="Databases", order=5)
    cat_tools = SkillCategory.objects.create(name="Tools & Technologies", order=6)

    skills_data = [
        (cat_lang, ["Python", "C#", "JavaScript", "R"]),
        (cat_frontend, ["React", "Tailwind CSS", "HTML5", "CSS3", "Bootstrap"]),
        (cat_backend, ["ASP.NET Core MVC", "Django", "PHP", "Laravel"]),
        (cat_mobile, ["Flutter"]),
        (cat_db, ["SQL Server", "MySQL", "PostgreSQL"]),
        (cat_tools, ["Git", "GitHub", "Docker", "Visual Studio", "Visual Studio Code"]),
    ]

    for category, skills in skills_data:
        for i, skill_name in enumerate(skills):
            Skill.objects.create(category=category, name=skill_name, proficiency=85, order=i)

    # --- Projects ---
    Project.objects.all().delete()
    projects_data = [
        {
            "title": "E-Commerce Platform",
            "tech_stack": "React, Django, PostgreSQL",
            "description": "A full-featured e-commerce platform with product catalog, shopping cart, checkout, and admin dashboard.",
            "features": "Product catalog with search & filters, Shopping cart & checkout flow, User authentication & profiles, Admin dashboard for orders & inventory",
            "github_link": "https://github.com/leechinyukwi/ecommerce-platform",
            "order": 1,
        },
        {
            "title": "Student Management System",
            "tech_stack": "Django, MySQL",
            "description": "A system for managing student records, courses, and results.",
            "features": "Student registration, Course management, Results management",
            "github_link": "https://github.com/leechinyukwi/student-management",
            "order": 2,
        },
        {
            "title": "Inventory Management System",
            "tech_stack": "ASP.NET Core MVC, SQL Server",
            "description": "An inventory management solution for tracking products and stock levels.",
            "features": "Product tracking, Stock monitoring, Reports generation",
            "github_link": "https://github.com/leechinyukwi/inventory-system",
            "order": 3,
        },
        {
            "title": "Personal Finance Tracker",
            "tech_stack": "React, Tailwind CSS",
            "description": "A personal finance tracking application with budget planning and analytics.",
            "features": "Expense tracking, Budget planning, Dashboard analytics",
            "github_link": "https://github.com/leechinyukwi/finance-tracker",
            "order": 4,
        },
        {
            "title": "Flutter Mobile App",
            "tech_stack": "Flutter, Firebase",
            "description": "A cross-platform mobile application with real-time data synchronization.",
            "features": "User login, Data synchronization, Responsive mobile interface",
            "github_link": "https://github.com/leechinyukwi/flutter-app",
            "order": 5,
        },
    ]

    for proj in projects_data:
        Project.objects.create(**proj)

    # --- Experience ---
    Experience.objects.all().delete()
    Experience.objects.create(
        title="Graduate Trainee – Software Developer",
        company="Zimbabwe Ezekiel Guti University",
        start_date=date(2025, 7, 1),
        is_current=True,
        responsibilities=(
            "Develop C#, Python, and Java applications with backend integration and database connectivity using Microsoft SQL Server (SSMS).\n"
            "Write, execute, and optimize SQL queries to manage data, correct anomalies, and support system reporting.\n"
            "Design and implement RESTful APIs for seamless communication between frontend and backend services.\n"
            "Perform database administration tasks including data validation, troubleshooting, and ensuring data integrity.\n"
            "Support system integration between application modules and backend database services.\n"
            "Handle student and staff system-related issues, providing technical support and resolving application errors.\n"
            "Monitor, maintain, and troubleshoot system performance and data-related issues in production environments.\n"
            "Assist in deployment, maintenance, and continuous improvement of enterprise applications.\n"
            "Collaborate with cross-functional teams to gather requirements and deliver software solutions on time.\n"
            "Write and maintain technical documentation for system architecture, APIs, and deployment processes.\n"
            "Participate in code reviews to ensure code quality, best practices, and adherence to standards.\n"
            "Implement unit and integration tests to ensure software reliability and reduce production defects."
        ),
        order=1,
    )
    Experience.objects.create(
        title="ICT Support Intern",
        company="Masvingo City Council",
        start_date=date(2022, 8, 1),
        end_date=date(2023, 8, 1),
        is_current=False,
        responsibilities=(
            "Assisted in software testing and bug reporting.\n"
            "Supported ERP system administration and maintenance.\n"
            "Generated reports using system and database data.\n"
            "Performed SQL-based data validation and updates.\n"
            "Assisted in system upgrades and enhancements.\n"
            "Monitored software performance and resolved issues.\n"
            "Maintained system documentation and user records.\n"
            "Supported users on ERP and billing systems.\n"
            "Assisted with database management and data integrity.\n"
            "Participated in system implementation and testing."
        ),
        order=2,
    )

    print("Seed data created successfully!")


if __name__ == "__main__":
    seed()
