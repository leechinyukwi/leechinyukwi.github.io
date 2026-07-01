from rest_framework import serializers
from .models import Profile, SkillCategory, Skill, Project, Experience


class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ["id", "name", "proficiency", "order"]


class SkillCategorySerializer(serializers.ModelSerializer):
    skills = SkillSerializer(many=True, read_only=True)

    class Meta:
        model = SkillCategory
        fields = ["id", "name", "order", "skills"]


class ProjectSerializer(serializers.ModelSerializer):
    feature_list = serializers.ReadOnlyField()

    class Meta:
        model = Project
        fields = [
            "id", "title", "tech_stack", "description", "features",
            "feature_list", "image", "github_link", "live_link",
            "order", "created_at",
        ]


class ExperienceSerializer(serializers.ModelSerializer):
    responsibility_list = serializers.ReadOnlyField()

    class Meta:
        model = Experience
        fields = [
            "id", "title", "company", "start_date", "end_date",
            "is_current", "responsibilities", "responsibility_list", "order",
        ]


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = [
            "id", "name", "title", "short_intro", "about_summary",
            "career_objective", "profile_image", "email", "phone",
            "github_url", "linkedin_url", "cv_file", "updated_at",
        ]
