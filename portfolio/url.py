# portfolio/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import StockViewSet, PortfolioViewSet, TransactionViewSet, UserProfileViewSet

router = DefaultRouter()
router.register(r'stocks', StockViewSet)
router.register(r'portfolios', PortfolioViewSet)
router.register(r'transactions', TransactionViewSet)
router.register(r'user-profiles', UserProfileViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
