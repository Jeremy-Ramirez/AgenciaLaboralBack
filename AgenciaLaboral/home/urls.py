from django.urls import path
from django.conf.urls import url
from . import views
urlpatterns = [
    path('', views.index),
    path('main', views.index),


    path('register', views.index),


    path('aspirante/registroAspirante', views.index),
    path('aspirante/registroFullAspirante', views.index),
    path('empresa/registroEmpresa', views.index),
    path('empresa/registroFullEmpresa', views.index),
    path('empresa/registroAdministrador', views.index),



    path('aspirante/sesionAspirante', views.index),
    path('aspirante/sesionAspirante/perfilAspirante', views.index),
    path('aspirante/sesionAspirante/aspiranteProfesional', views.index),
    path('aspirante/sesionAspirante/sugerencias', views.index),
    path('aspirante/sesionAspirante/ofertaEmpleo', views.index),



    path('empresa/sesionEmpresa', views.index),
    path('empresa/sesionEmpresa/informacionEmpresa', views.index),
    path('empresa/sesionEmpresa/registroRepresentante', views.index),
    path('empresa/sesionEmpresa/perfilEmpresa', views.index),
    path('empresa/sesionEmpresa/sugerencias', views.index),


    path('administrador/sesionAdministrador', views.index),
    path('administrador/sesionAdministrador/aspirantesAceptados', views.index),
    path('administrador/sesionAdministrador/aspirantesNuevos', views.index),
    path('administrador/sesionAdministrador/asignarAspirante', views.index),
    path('administrador/sesionAdministrador/perfilAdministrador', views.index),
    path('administrador/sesionAdministrador/perfilAspirante', views.index),
    #path(r'^administrador/sesionAdministrador/perfilAspirante/\d+/$', views.index, name='perfil'),
    path('administrador/sesionAdministrador/perfilEmpresa', views.index),
    path('administrador/sesionAdministrador/empresas', views.index),
    path('administrador/sesionAdministrador/revisarempresas', views.index),
    path('administrador/sesionAdministrador/sugerencias', views.index),
    path('administrador/sesionAdministrador/autorizarEmpresas', views.index),
    path('administrador/sesionAdministrador/paquetePago', views.index),



    path('representante/sesionRepresentante', views.index),
    path('representante/sesionRepresentante/registroFullRepresentante', views.index),
    path('representante/sesionRepresentante/perfilRepresentante', views.index),
    path('representante/sesionRepresentante/showSolicitudes', views.index),
    path('representante/sesionRepresentante/solicitudesRepresentante', views.index),
    path('representante/sesionRepresentante/sugerencias', views.index),
    path('representante/sesionRepresentante/consultarSolicitudes', views.index),


]

#path('aspirante/sesionAspirante/aspiranteProfesional/<int:id>', views.index),