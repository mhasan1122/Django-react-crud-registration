from django.urls import path
from . import views

urlpatterns = [
    path('', views.apiOverview, name='api-overview'),
    path('registration-create/', views.registrationCreate, name='registration-create'),
    path('registration-list/', views.registrationList, name='registration-list'),
    path('registration-list/<int:pk>/', views.registrationDetail, name='registration-detail'),
    path('registration-update/<int:pk>/', views.registrationUpdate, name='registration-update'),
    path('registration-delete/<int:pk>/', views.registrationDelete, name='registration-delete'),
]