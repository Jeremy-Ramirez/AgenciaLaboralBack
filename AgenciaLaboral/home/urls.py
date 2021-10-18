from django.urls import path
from . import views
urlpatterns = [
    path('', views.index),
    path('register', views.index),
    path('aspirante/registroAspirante', views.index),
    path('aspirante/registroFullAspirante', views.index),
    path('aspirante/sesionAspirante', views.index),
    path('aspirante/sesionAspirante/perfilAspirante', views.index),

]

#path('aspirante/sesionAspirante/aspiranteProfesional/<int:id>', views.index),