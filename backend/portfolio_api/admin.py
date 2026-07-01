from django.contrib import admin
from .models import Profile, SkillCategory, Skill, Project, Experience


class SkillInline(admin.TabularInline):
    model = Skill
    extra = 1


@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ["name", "title", "email", "is_active", "updated_at"]


@admin.register(SkillCategory)
class SkillCategoryAdmin(admin.ModelAdmin):
    inlines = [SkillInline]
    list_display = ["name", "order"]


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ["title", "tech_stack", "order", "is_active"]


@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = ["title", "company", "start_date", "end_date", "is_current"]
