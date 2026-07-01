from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r"profiles", views.ProfileViewSet)
router.register(r"skill-categories", views.SkillCategoryViewSet)
router.register(r"projects", views.ProjectViewSet)
router.register(r"experiences", views.ExperienceViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path("portfolio/", views.portfolio_data, name="portfolio-data"),
]
