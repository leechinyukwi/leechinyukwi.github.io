from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Profile, SkillCategory, Project, Experience
from .serializers import (
    ProfileSerializer,
    SkillCategorySerializer,
    ProjectSerializer,
    ExperienceSerializer,
)


class ProfileViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Profile.objects.filter(is_active=True)
    serializer_class = ProfileSerializer


class SkillCategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = SkillCategory.objects.all()
    serializer_class = SkillCategorySerializer


class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Project.objects.filter(is_active=True)
    serializer_class = ProjectSerializer


class ExperienceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer


@api_view(["GET"])
def portfolio_data(request):
    profile = Profile.objects.filter(is_active=True).first()
    skills = SkillCategory.objects.all()
    projects = Project.objects.filter(is_active=True)
    experiences = Experience.objects.all()

    return Response({
        "profile": ProfileSerializer(profile).data if profile else None,
        "skill_categories": SkillCategorySerializer(skills, many=True).data,
        "projects": ProjectSerializer(projects, many=True).data,
        "experiences": ExperienceSerializer(experiences, many=True).data,
    })
