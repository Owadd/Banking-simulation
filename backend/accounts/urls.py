# accounts/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('accounts/', views.AccountListCreate.as_view(), name='account-list-create'),
    path('accounts/<int:pk>/', views.AccountRetrieveUpdateDestroy.as_view(), name='account-detail'),
]
