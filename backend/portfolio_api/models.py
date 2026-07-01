from django.db import models


class Profile(models.Model):
    name = models.CharField(max_length=200)
    title = models.CharField(max_length=300)
    short_intro = models.TextField()
    about_summary = models.TextField()
    career_objective = models.TextField()
    profile_image = models.ImageField(upload_to="profile/", blank=True, null=True)
    email = models.EmailField()
    phone = models.CharField(max_length=50)
    github_url = models.URLField(blank=True)
    linkedin_url = models.URLField(blank=True)
    cv_file = models.FileField(upload_to="cv/", blank=True, null=True)
    is_active = models.BooleanField(default=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Profile"
        verbose_name_plural = "Profiles"

    def __str__(self):
        return self.name


class SkillCategory(models.Model):
    name = models.CharField(max_length=100)
    order = models.IntegerField(default=0)

    class Meta:
        verbose_name_plural = "Skill categories"
        ordering = ["order"]

    def __str__(self):
        return self.name


class Skill(models.Model):
    category = models.ForeignKey(
        SkillCategory, on_delete=models.CASCADE, related_name="skills"
    )
    name = models.CharField(max_length=100)
    proficiency = models.IntegerField(
        default=0, help_text="Percentage 0-100"
    )
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return self.name


class Project(models.Model):
    title = models.CharField(max_length=200)
    tech_stack = models.CharField(max_length=300)
    description = models.TextField(blank=True)
    features = models.TextField(blank=True, help_text="Comma-separated list of features")
    image = models.ImageField(upload_to="projects/", blank=True, null=True)
    github_link = models.URLField(blank=True)
    live_link = models.URLField(blank=True)
    order = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return self.title

    def feature_list(self):
        return [f.strip() for f in self.features.split(",") if f.strip()]


class Experience(models.Model):
    title = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    is_current = models.BooleanField(default=False)
    responsibilities = models.TextField(help_text="One per line")
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ["-start_date"]

    def __str__(self):
        return f"{self.title} at {self.company}"

    def responsibility_list(self):
        return [r.strip() for r in self.responsibilities.split("\n") if r.strip()]
