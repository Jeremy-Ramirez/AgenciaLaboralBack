(self.webpackChunkapp=self.webpackChunkapp||[]).push([[851],{1851:(i,t,e)=>{"use strict";e.r(t),e.d(t,{AdministradorModule:()=>K});var o=e(3679),n=e(8583),s=e(5072),r=e(2522),a=e(1095),c=e(4490),p=e(6627),u=e(9992),d=e(9763),l=e(7716),g=e(1841);function h(i,t){if(1&i&&(l.TgZ(0,"div"),l._UZ(1,"br"),l._uU(2),l.TgZ(3,"button",2),l._uU(4," Ver Perfil "),l.qZA(),l._UZ(5,"div",3),l.qZA()),2&i){const i=l.oxw().$implicit;l.xp6(2),l.hij(" Usuario: ",i.nombreusuario," "),l.xp6(1),l.MGl("routerLink","/administrador/sesionAdministrador/perfilAspirante/",i.idusuario,"")}}function m(i,t){if(1&i&&(l.TgZ(0,"div"),l.YNc(1,h,6,2,"div",1),l._UZ(2,"br"),l.qZA()),2&i){const i=t.$implicit;l.xp6(1),l.Q6J("ngIf",2==i.rol_idrol)}}let f=(()=>{class i{constructor(i,t){this.http=i,this.rutaActiva=t,this.usuarios=[],this.aspirantes=[],this.getUsuarios(),console.log("ASP",this.idAspirante)}getUsuarios(){}ngOnInit(){this.http.get("https://agencialaboralproyecto.pythonanywhere.com/api/usuarios/").subscribe(i=>{this.usuarios=i,console.log(this.usuarios)}),this.http.get("https://agencialaboralproyecto.pythonanywhere.com/api/aspirantes/").subscribe(i=>{this.aspirantes=i,console.log(this.usuarios)})}mostrar(i){console.log("NUEVOID",i),this.idAspirante=i,setTimeout(function(){document.getElementsByClassName("hey")[0].innerHTML=`<app-vista-perfil-aspirante [idAspirante]="${i}"></app-vista-perfil-aspirante>\n    `},3e3)}}return i.\u0275fac=function(t){return new(t||i)(l.Y36(g.eN),l.Y36(d.gz))},i.\u0275cmp=l.Xpm({type:i,selectors:[["app-aspirantes-aceptados"]],decls:9,vars:1,consts:[[4,"ngFor","ngForOf"],[4,"ngIf"],["type","button",1,"btn","btn-primary","float-end",3,"routerLink"],[1,"aspiranteIndividual"]],template:function(i,t){1&i&&(l.TgZ(0,"div"),l.TgZ(1,"section"),l.TgZ(2,"h1"),l._uU(3,"Aspirantes Aceptados"),l.qZA(),l.qZA(),l.TgZ(4,"section"),l._UZ(5,"br"),l._UZ(6,"br"),l._UZ(7,"br"),l.YNc(8,m,3,1,"div",0),l.qZA(),l.qZA()),2&i&&(l.xp6(8),l.Q6J("ngForOf",t.usuarios))},directives:[n.sg,n.O5,d.rH],styles:[".aspiranteIndividual[_ngcontent-%COMP%]{border:2px solid #000}"]}),i})();var Z=e(8002),v=e(2888);function A(i,t){if(1&i){const i=l.EpF();l.TgZ(0,"button",11),l.NdJ("click",function(){return l.CHM(i),l.oxw(),l.MAs(2).toggle()}),l.TgZ(1,"mat-icon",12),l._uU(2,"menu"),l.qZA(),l.qZA()}}let b=(()=>{class i{constructor(i){this.breakpointObserver=i,this.aspirantesAceptados=!1,this.sesionAspirante=!1,this.isHandset$=this.breakpointObserver.observe(s.u3.Handset).pipe((0,Z.U)(i=>i.matches),(0,v.d)())}showAspirantesAceptados(){this.aspirantesAceptados=!0,this.sesionAspirante=!1}showSesionAspirante(){this.sesionAspirante=!0,this.aspirantesAceptados=!1}}return i.\u0275fac=function(t){return new(t||i)(l.Y36(s.Yg))},i.\u0275cmp=l.Xpm({type:i,selectors:[["app-menu-lateral"]],decls:37,vars:12,consts:[[1,"sidenav-container"],["fixedInViewport","",1,"sidenav",3,"mode","opened"],["drawer",""],[1,"nav","nav-pills","nav-stacked"],["mat-list-item","","routerLink","/administrador/sesionAdministrador/aspirantesNuevos"],["mat-list-item","","routerLink","/administrador/sesionAdministrador/aspirantesAceptados"],["mat-list-item","","routerLink","/administrador/sesionAdministrador/empresas"],["mat-list-item","","routerLink","/administrador/sesionAdministrador/sugerencias"],["mat-list-item","","routerLink","/administrador/sesionAdministrador/configuracion"],["type","button","aria-label","Toggle sidenav","mat-icon-button","",3,"click",4,"ngIf"],["href","#",1,"navbar-brand","scroll-top"],["type","button","aria-label","Toggle sidenav","mat-icon-button","",3,"click"],["aria-label","Side nav toggle icon"]],template:function(i,t){1&i&&(l.TgZ(0,"mat-sidenav-container",0),l.TgZ(1,"mat-sidenav",1,2),l.ALo(3,"async"),l.ALo(4,"async"),l.ALo(5,"async"),l.TgZ(6,"mat-toolbar"),l._uU(7,"Menu"),l.qZA(),l.TgZ(8,"mat-nav-list"),l.TgZ(9,"h4"),l._uU(10,"Tu Perfil"),l.qZA(),l.TgZ(11,"ul",3),l.TgZ(12,"li"),l.TgZ(13,"a",4),l._uU(14,"Nuevos Aspirantes"),l.qZA(),l.qZA(),l.TgZ(15,"li"),l.TgZ(16,"a",5),l._uU(17,"Aspirantes Aceptados"),l.qZA(),l.qZA(),l.TgZ(18,"li"),l.TgZ(19,"a",6),l._uU(20,"Empresas"),l.qZA(),l.qZA(),l.TgZ(21,"li"),l.TgZ(22,"a",7),l._uU(23,"Sugerencias"),l.qZA(),l.qZA(),l.TgZ(24,"li"),l.TgZ(25,"a",8),l._uU(26,"Configuraci\xf3n"),l.qZA(),l.qZA(),l.qZA(),l._UZ(27,"br"),l.qZA(),l.qZA(),l.TgZ(28,"mat-sidenav-content"),l.TgZ(29,"mat-toolbar"),l.YNc(30,A,3,0,"button",9),l.ALo(31,"async"),l.TgZ(32,"a",10),l.TgZ(33,"em"),l._uU(34,"Agencia"),l.qZA(),l._uU(35,"Laboral"),l.qZA(),l.qZA(),l._UZ(36,"router-outlet"),l.qZA(),l.qZA()),2&i&&(l.xp6(1),l.Q6J("mode",l.lcZ(4,6,t.isHandset$)?"over":"side")("opened",!1===l.lcZ(5,8,t.isHandset$)),l.uIk("role",l.lcZ(3,4,t.isHandset$)?"dialog":"navigation"),l.xp6(29),l.Q6J("ngIf",l.lcZ(31,10,t.isHandset$)))},directives:[c.TM,c.JX,r.Ye,u.Hk,u.Tg,d.yS,c.Rh,n.O5,d.lC,a.lW,p.Hw],pipes:[n.Ov],styles:[".sidenav-container[_ngcontent-%COMP%]{height:100%}.sidenav[_ngcontent-%COMP%]{width:250px}.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%]{background:inherit}.mat-toolbar.mat-primary[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1}.row.content[_ngcontent-%COMP%]{height:1500px}.container-fluid[_ngcontent-%COMP%]{padding-top:80px}.sidenav[_ngcontent-%COMP%]{background-color:#f1f1f1;padding:15px}footer[_ngcontent-%COMP%]{background-color:#555;color:#fff;padding:15px}@media screen and (max-width: 767px){.sidenav[_ngcontent-%COMP%]{padding:15px}.row.content[_ngcontent-%COMP%], .sidenav[_ngcontent-%COMP%]{height:auto}}"]}),i})(),x=(()=>{class i{constructor(){this.aspirantesAceptados=!1,this.sesionAspirante=!1}ngOnInit(){}showAspirantesAceptados(){this.aspirantesAceptados=!0,this.sesionAspirante=!1}showSesionAspirante(){this.sesionAspirante=!0,this.aspirantesAceptados=!1}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=l.Xpm({type:i,selectors:[["app-sesion-administrador"]],decls:1,vars:0,template:function(i,t){1&i&&l._UZ(0,"app-menu-lateral")},directives:[b],styles:[".row.content[_ngcontent-%COMP%]{height:1500px}.container-fluid[_ngcontent-%COMP%]{padding-top:80px}.sidenav[_ngcontent-%COMP%]{background-color:#f1f1f1;padding:15px}footer[_ngcontent-%COMP%]{background-color:#555;color:#fff;padding:15px}@media screen and (max-width: 767px){.sidenav[_ngcontent-%COMP%]{padding:15px}.row.content[_ngcontent-%COMP%], .sidenav[_ngcontent-%COMP%]{height:auto}}"]}),i})();function _(i,t){if(1&i&&(l.TgZ(0,"div",2),l._UZ(1,"br"),l._uU(2),l._UZ(3,"br"),l.qZA()),2&i){const i=l.oxw().$implicit;l.xp6(2),l.lnq(" Usuario: ",i.nombreusuario," Nombres: ",i.nombre," ",i.apellido," ")}}function q(i,t){if(1&i&&(l.TgZ(0,"div"),l.YNc(1,_,4,3,"div",1),l.qZA()),2&i){const i=t.$implicit;l.xp6(1),l.Q6J("ngIf",2==i.rol_idrol)}}let T=(()=>{class i{constructor(i,t){this.http=i,this.rutaActiva=t,this.aspirantesNuevos=[],this.representantes=[],this.usuarios=[],this.getRepresentantes(),this.getAspirantesNuevos()}getRepresentantes(){this.http.get("https://agencialaboralproyecto.pythonanywhere.com/api/representantes/").subscribe(i=>{this.representantes=i,console.log(this.representantes)})}getAspirantesNuevos(){this.http.get("https://agencialaboralproyecto.pythonanywhere.com/api/usuarios/").subscribe(i=>{this.usuarios=i,console.log(this.usuarios)})}ngOnInit(){}}return i.\u0275fac=function(t){return new(t||i)(l.Y36(g.eN),l.Y36(d.gz))},i.\u0275cmp=l.Xpm({type:i,selectors:[["app-aspirantes-nuevos"]],decls:9,vars:1,consts:[[4,"ngFor","ngForOf"],["class","aspiranteIndividual",4,"ngIf"],[1,"aspiranteIndividual"]],template:function(i,t){1&i&&(l.TgZ(0,"div"),l.TgZ(1,"section"),l.TgZ(2,"h1"),l._uU(3,"Aspirantes Nuevos"),l.qZA(),l.qZA(),l.TgZ(4,"section"),l._UZ(5,"br"),l._UZ(6,"br"),l._UZ(7,"br"),l.YNc(8,q,2,1,"div",0),l.qZA(),l.qZA()),2&i&&(l.xp6(8),l.Q6J("ngForOf",t.usuarios))},directives:[n.sg,n.O5],styles:[".aspiranteIndividual[_ngcontent-%COMP%]{border:1px solid #000}"]}),i})(),y=(()=>{class i{constructor(){}ngOnInit(){}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=l.Xpm({type:i,selectors:[["app-revisar-empresas"]],decls:2,vars:0,template:function(i,t){1&i&&(l.TgZ(0,"p"),l._uU(1,"revisar-empresas works!"),l.qZA())},styles:[""]}),i})();function w(i,t){if(1&i&&(l.TgZ(0,"div"),l._uU(1),l.qZA()),2&i){const i=l.oxw().$implicit;l.xp6(1),l.AsE(" Nombres: ",i.nombre," ",i.apellido," ")}}function U(i,t){if(1&i&&(l.TgZ(0,"div"),l.YNc(1,w,2,2,"div",4),l.qZA()),2&i){const i=t.$implicit,e=l.oxw().$implicit;l.xp6(1),l.Q6J("ngIf",i.idusuario==e.usuario_idusuario)}}function O(i,t){if(1&i&&(l.TgZ(0,"div",1),l.YNc(1,U,2,1,"div",2),l._uU(2),l.TgZ(3,"div"),l._UZ(4,"img",3),l.qZA(),l.qZA()),2&i){const i=t.$implicit,e=l.oxw();l.xp6(1),l.Q6J("ngForOf",e.usuarios),l.xp6(1),l.hij(" Descripci\xf3n: ",i.descripcion," "),l.xp6(2),l.MGl("src","https://agencialaboralproyecto.pythonanywhere.com",i.imagen,"",l.LSH)}}function I(i,t){if(1&i&&(l.TgZ(0,"div"),l._uU(1),l.qZA()),2&i){const i=l.oxw().$implicit;l.xp6(1),l.hij(" Nombres: ",i.nombrecomercial," ")}}function C(i,t){if(1&i&&(l.TgZ(0,"div"),l.YNc(1,I,2,1,"div",4),l.qZA()),2&i){const i=t.$implicit,e=l.oxw().$implicit;l.xp6(1),l.Q6J("ngIf",i.idusuario==e.usuario_idusuario)}}function N(i,t){if(1&i&&(l.TgZ(0,"div"),l.TgZ(1,"div"),l._UZ(2,"img",3),l.qZA(),l.qZA()),2&i){const i=l.oxw().$implicit;l.xp6(2),l.MGl("src","https://agencialaboralproyecto.pythonanywhere.com",i.imagen,"",l.LSH)}}function M(i,t){if(1&i&&(l.TgZ(0,"div",1),l.YNc(1,C,2,1,"div",2),l._uU(2),l.YNc(3,N,3,1,"div",4),l.qZA()),2&i){const i=t.$implicit,e=l.oxw();l.xp6(1),l.Q6J("ngForOf",e.empresas),l.xp6(1),l.hij(" Descripci\xf3n: ",i.descripcion," "),l.xp6(1),l.Q6J("ngIf",null!=i.imagen)}}let P=(()=>{class i{constructor(i){this.http=i,this.sugerencias=[],this.sugerenciasEmpresa=[],this.usuarios=[],this.empresas=[]}ngOnInit(){this.http.get("https://agencialaboralproyecto.pythonanywhere.com/api/usuarios/").subscribe(i=>{this.usuarios=i,console.log(this.usuarios)}),this.http.get("https://agencialaboralproyecto.pythonanywhere.com/api/sugerencias/").subscribe(i=>{this.sugerencias=i,console.log(this.sugerencias)}),this.http.get("https://agencialaboralproyecto.pythonanywhere.com/api/empresas/").subscribe(i=>{this.empresas=i,console.log(this.empresas)}),this.http.get("https://agencialaboralproyecto.pythonanywhere.com/api/sugerenciasEmpresa/").subscribe(i=>{this.sugerenciasEmpresa=i,console.log(this.sugerenciasEmpresa)})}}return i.\u0275fac=function(t){return new(t||i)(l.Y36(g.eN))},i.\u0275cmp=l.Xpm({type:i,selectors:[["app-revisar-sugerencias"]],decls:6,vars:2,consts:[["class","aspiranteIndividual",4,"ngFor","ngForOf"],[1,"aspiranteIndividual"],[4,"ngFor","ngForOf"],[1,"imgsug",3,"src"],[4,"ngIf"]],template:function(i,t){1&i&&(l.TgZ(0,"p"),l._uU(1,"revisar-sugerencias works!"),l.qZA(),l.TgZ(2,"div"),l.YNc(3,O,5,3,"div",0),l.qZA(),l.TgZ(4,"div"),l.YNc(5,M,4,3,"div",0),l.qZA()),2&i&&(l.xp6(3),l.Q6J("ngForOf",t.sugerencias),l.xp6(2),l.Q6J("ngForOf",t.sugerenciasEmpresa))},directives:[n.sg,n.O5],styles:[".imgsug[_ngcontent-%COMP%]{height:200px;width:200px}.aspiranteIndividual[_ngcontent-%COMP%]{border:1px solid #000}"]}),i})();var k=e(9765),F=e(3342);let J=(()=>{class i{constructor(i){this.http=i,this._refresh$=new k.xQ,this.API_archivosAspirante="https://agencialaboralproyecto.pythonanywhere.com/api/archivosaspirante/"}get refresh$(){return this._refresh$}getArchivosAspirante(){return this.http.get(this.API_archivosAspirante)}postArchivosAspirante(i){return this.http.post(this.API_archivosAspirante,i).pipe((0,F.b)(()=>{console.log("Enttr\xf3 a tap"),this._refresh$.next()}))}deleteArchivosAspirante(i){return this.http.delete(this.API_archivosAspirante+i).pipe((0,F.b)(()=>{console.log("Enttr\xf3 a tap"),this._refresh$.next()}))}}return i.\u0275fac=function(t){return new(t||i)(l.LFG(g.eN))},i.\u0275prov=l.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();function Y(i,t){if(1&i&&(l.TgZ(0,"div"),l.TgZ(1,"p"),l._uU(2),l.qZA(),l.qZA()),2&i){const i=l.oxw().$implicit;l.xp6(2),l.AsE(" ",i.nombre," ",i.apellido,"")}}function $(i,t){if(1&i&&(l.TgZ(0,"div"),l.YNc(1,Y,3,2,"div",15),l.qZA()),2&i){const i=t.$implicit,e=l.oxw();l.xp6(1),l.Q6J("ngIf",i.idusuario==e.idAspirante)}}function Q(i,t){if(1&i){const i=l.EpF();l.TgZ(0,"div"),l.TgZ(1,"a",18),l._uU(2),l.qZA(),l.TgZ(3,"mat-icon",19),l.NdJ("click",function(){l.CHM(i);const t=l.oxw().$implicit;return l.oxw(4).eliminarArchivo(t.idarchivosaspirante)}),l._uU(4,"delete"),l.qZA(),l.qZA()}if(2&i){const i=l.oxw().$implicit;l.xp6(1),l.MGl("href","https://agencialaboralproyecto.pythonanywhere.com",i.archivo,"",l.LSH),l.xp6(1),l.hij(" ",i.nombredocumento,"")}}function E(i,t){if(1&i&&(l.TgZ(0,"div"),l.YNc(1,Q,5,2,"div",15),l.qZA()),2&i){const i=t.$implicit,e=l.oxw(3).$implicit;l.xp6(1),l.Q6J("ngIf",e.idaspirante==i.aspirante_idaspirante)}}function j(i,t){if(1&i&&(l.TgZ(0,"div"),l.TgZ(1,"p"),l._uU(2),l.qZA(),l.TgZ(3,"p"),l._uU(4),l.qZA(),l.TgZ(5,"p"),l._uU(6),l.qZA(),l.TgZ(7,"p"),l._uU(8),l.qZA(),l.TgZ(9,"p"),l._uU(10),l.qZA(),l.TgZ(11,"p"),l._uU(12),l.qZA(),l.TgZ(13,"div",5),l.TgZ(14,"div",7),l._UZ(15,"video",17),l.qZA(),l.qZA(),l.YNc(16,E,2,1,"div",2),l._UZ(17,"br"),l._UZ(18,"br"),l.qZA()),2&i){const i=l.oxw(2).$implicit,t=l.oxw();l.xp6(2),l.hij("N\xfamero de hijos: ",i.numerohijos,""),l.xp6(2),l.hij("Experiencia Laboral: ",i.experiencialaboral,""),l.xp6(2),l.hij("Experticia: ",i.experticia,""),l.xp6(2),l.hij("A\xf1os de experiencia: ",i.aniosexperiencia,""),l.xp6(2),l.hij("Fecha de Nacimiento: ",i.fechanacimiento,""),l.xp6(2),l.hij("Posibilidad de viajar: ",i.posibilidadviajar,""),l.xp6(3),l.MGl("src","https://agencialaboralproyecto.pythonanywhere.com",i.videopresentacion,"",l.LSH),l.xp6(1),l.Q6J("ngForOf",t.archivos)}}function L(i,t){if(1&i&&(l.TgZ(0,"div"),l.YNc(1,j,19,8,"div",15),l.qZA()),2&i){const i=l.oxw().$implicit;l.xp6(1),l.Q6J("ngIf",null!=i.experiencialaboral)}}function S(i,t){if(1&i&&(l.TgZ(0,"div",16),l.YNc(1,L,2,1,"div",15),l.qZA()),2&i){const i=t.$implicit,e=l.oxw();l.xp6(1),l.Q6J("ngIf",i.usuario_idusuario==e.id)}}function H(i,t){1&i&&(l.TgZ(0,"span",20),l._uU(1," Campo Requerido "),l.qZA())}function D(i,t){if(1&i&&(l.TgZ(0,"option",21),l._uU(1),l.qZA()),2&i){const i=t.$implicit;l.s9C("value",i.idcategoriadocumento),l.xp6(1),l.hij(" ",i.descripcion," ")}}function z(i,t){1&i&&(l.TgZ(0,"span",20),l._uU(1," Campo Requerido "),l.qZA())}function V(i,t){1&i&&(l.TgZ(0,"span",20),l._uU(1," El archivo debe ser un pdf o word "),l.qZA())}function G(i,t){1&i&&(l.TgZ(0,"span",20),l._uU(1," El archivo supera los 6Mb. "),l.qZA())}function X(i,t){1&i&&(l.TgZ(0,"span",20),l._uU(1," Campo Requerido "),l.qZA())}const B=[{path:"",children:[{path:"sesionAdministrador",component:x,children:[{path:"aspirantesAceptados",component:f},{path:"aspirantesNuevos",component:T},{path:"perfilAspirante/:id",component:(()=>{class i{constructor(i,t,e,n){this.http=i,this.fb=t,this.rutaActiva=e,this.archivosAspiranteService=n,this.aspirantes=[],this.usuarios=[],this.categoria=[],this.profesiones=[],this.archivos=[],this.id="",this.archivoValido=!0,this.miFormulario=this.fb.group({nombredocumento:["",[o.kI.required]],categoriaDocumento_idcategoriadocumento:["",[o.kI.required]],archivo:["",[o.kI.required,o.kI.pattern("^.*.(pdf|docx)$")]],fechacreacion:["",[o.kI.required]],aspirante_idaspirante:1,usuario_idusuario:1}),console.log("hereda",this.idAspirante)}ngOnInit(){this.rutaActiva.params.subscribe(i=>{this.id=i.id}),this.getAspirantes(),this.getUsuarios(),this.getCategoria(),this.getUsuariosId(),this.getArchivos(),this.suscription=this.archivosAspiranteService.refresh$.subscribe(()=>{this.getArchivos()})}ngOnDestroy(){this.suscription.unsubscribe(),console.log("Observable cerrado")}getAspirantes(){this.http.get("https://agencialaboralproyecto.pythonanywhere.com/api/aspirantes/").subscribe(i=>{this.aspirantes=i,console.log(this.aspirantes)})}getUsuarios(){this.http.get("https://agencialaboralproyecto.pythonanywhere.com/api/usuarios/").subscribe(i=>{this.usuarios=i,console.log(this.usuarios)})}getUsuariosId(){this.http.get("https://agencialaboralproyecto.pythonanywhere.com/api/usuarios/"+this.id).subscribe(i=>{this.usuariosId=i,console.log(this.usuariosId)})}getArchivos(){this.archivosAspiranteService.getArchivosAspirante().subscribe(i=>{this.archivos=i,console.log(this.archivos)})}campoEsValido(i){return this.miFormulario.controls[i].errors&&this.miFormulario.controls[i].touched}getCategoria(){this.http.get("https://agencialaboralproyecto.pythonanywhere.com/api/categoriadocumento/").subscribe(i=>{this.categoria=i,console.log(this.categoria)})}handleFileInput(i){i.target.files[0].size>2e6?this.archivoValido=!1:(this.archivoValido=!0,this.file=i.target.files[0],console.log("archivo",this.file))}subirArchivo(){for(let i of this.aspirantes)if(i.usuario_idusuario==this.id){let t=new FormData;t.append("nombredocumento",this.miFormulario.controls.nombredocumento.value),t.append("categoriaDocumento_idcategoriadocumento",this.miFormulario.controls.categoriaDocumento_idcategoriadocumento.value),t.append("fechacreacion",this.miFormulario.controls.fechacreacion.value),t.append("aspirante_idaspirante",i.idaspirante),t.append("usuario_idusuario",this.id),t.append("archivo",this.file),console.log(this.miFormulario.value),this.archivosAspiranteService.postArchivosAspirante(t).subscribe(i=>{console.log("Datos del post",i),alert("Archivo Guardado"),this.miFormulario.reset()})}}eliminarArchivo(i){if(confirm("\xbfSeguro desea eliminar el archivo?"))for(let t of this.archivos)t.idarchivosaspirante==i&&(this.archivos.splice(this.archivos.findIndex(t=>t.idarchivosaspirante===i),1),this.archivosAspiranteService.deleteArchivosAspirante(i).subscribe(i=>{alert("Archivo Borrado")}))}}return i.\u0275fac=function(t){return new(t||i)(l.Y36(g.eN),l.Y36(o.qu),l.Y36(d.gz),l.Y36(J))},i.\u0275cmp=l.Xpm({type:i,selectors:[["app-vista-perfil-aspirante"]],inputs:{idAspirante:"idAspirante"},decls:49,vars:14,consts:[[1,"contenedor"],[1,"imgperfil"],[4,"ngFor","ngForOf"],["class","contenedorInformacion",4,"ngFor","ngForOf"],["autocomplete","off","enctype","multipart/form-data",3,"formGroup"],[1,"mb-3","row"],[1,"col-sm-3","col-form-label"],[1,"col-sm-9"],["type","text","formControlName","nombredocumento","placeholder","",1,"form-control"],["class","form-text text-danger",4,"ngIf"],["name","doc","id","doc","formControlName","categoriaDocumento_idcategoriadocumento"],[3,"value",4,"ngFor","ngForOf"],["type","file","id","archivo","formControlName","archivo","placeholder","",1,"form-control",3,"change"],["type","date","formControlName","fechacreacion","placeholder","",1,"form-control"],["type","submit",1,"btn","btn-primary","float-end",3,"disabled","click"],[4,"ngIf"],[1,"contenedorInformacion"],["controls","",3,"src"],["download","A.pdf",3,"href"],[1,"field-icon",3,"click"],[1,"form-text","text-danger"],[3,"value"]],template:function(i,t){1&i&&(l.TgZ(0,"div",0),l._UZ(1,"div",1),l.YNc(2,$,2,1,"div",2),l.TgZ(3,"h1"),l._uU(4,"Datos Personales"),l.qZA(),l.TgZ(5,"p"),l._uU(6),l.qZA(),l.TgZ(7,"p"),l._uU(8),l.qZA(),l.TgZ(9,"p"),l._uU(10),l.qZA(),l.TgZ(11,"p"),l._uU(12),l.qZA(),l.TgZ(13,"h1"),l._uU(14,"Datos Profesionales"),l.qZA(),l.YNc(15,S,2,1,"div",3),l.TgZ(16,"h2"),l._uU(17,"Agregar Archivos"),l.qZA(),l.TgZ(18,"form",4),l.TgZ(19,"div",5),l.TgZ(20,"label",6),l._uU(21,"Documento"),l.qZA(),l.TgZ(22,"div",7),l._UZ(23,"input",8),l.YNc(24,H,2,0,"span",9),l.qZA(),l.qZA(),l.TgZ(25,"div",5),l.TgZ(26,"label",6),l._uU(27,"Categor\xeda"),l.qZA(),l.TgZ(28,"div",7),l.TgZ(29,"select",10),l.YNc(30,D,2,2,"option",11),l.qZA(),l.YNc(31,z,2,0,"span",9),l.qZA(),l.qZA(),l.TgZ(32,"div",5),l.TgZ(33,"label",6),l._uU(34,"archivo"),l.qZA(),l.TgZ(35,"div",7),l.TgZ(36,"input",12),l.NdJ("change",function(i){return t.handleFileInput(i)}),l.qZA(),l.YNc(37,V,2,0,"span",9),l.YNc(38,G,2,0,"span",9),l.qZA(),l.qZA(),l.TgZ(39,"div",5),l.TgZ(40,"label",6),l._uU(41,"Fecha Ingreso"),l.qZA(),l.TgZ(42,"div",7),l._UZ(43,"input",13),l.YNc(44,X,2,0,"span",9),l.qZA(),l.qZA(),l.TgZ(45,"button",14),l.NdJ("click",function(){return t.subirArchivo()}),l._uU(46," Guardar "),l.qZA(),l.qZA(),l._UZ(47,"br"),l._UZ(48,"br"),l.qZA()),2&i&&(l.xp6(2),l.Q6J("ngForOf",t.usuarios),l.xp6(4),l.hij("N\xfamero documento: ",t.usuariosId.nodocumento,""),l.xp6(2),l.hij("Correo: ",t.usuariosId.correo,""),l.xp6(2),l.hij("Tel\xe9fono: ",t.usuariosId.telefono,""),l.xp6(2),l.hij("Direcci\xf3n: ",t.usuariosId.direccion,""),l.xp6(3),l.Q6J("ngForOf",t.aspirantes),l.xp6(3),l.Q6J("formGroup",t.miFormulario),l.xp6(6),l.Q6J("ngIf",t.campoEsValido("nombredocumento")),l.xp6(6),l.Q6J("ngForOf",t.categoria),l.xp6(1),l.Q6J("ngIf",t.campoEsValido("categoriaDocumento_idcategoriadocumento")),l.xp6(6),l.Q6J("ngIf",t.campoEsValido("archivo")),l.xp6(1),l.Q6J("ngIf",!t.archivoValido),l.xp6(6),l.Q6J("ngIf",t.campoEsValido("fechacreacion")),l.xp6(1),l.Q6J("disabled",t.miFormulario.invalid||!t.archivoValido))},directives:[n.sg,o._Y,o.JL,o.sg,o.Fj,o.JJ,o.u,n.O5,o.EJ,p.Hw,o.YN,o.Kr],styles:['*[_ngcontent-%COMP%]{box-sizing:border-box;margin:2px}input[type=text][_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{width:100%;padding:8px;border:1px solid #ccc;border-radius:4px;resize:vertical}label[_ngcontent-%COMP%]{padding:8px 8px 0 0;display:inline-block}input[type=submit][_ngcontent-%COMP%]{background-color:#77d4fd;width:50%;color:#fff;padding:12px 20px;border:none;border-radius:4px;margin-right:300px;margin-left:auto;margin-top:20px;cursor:pointer;float:right;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px}#lower[_ngcontent-%COMP%]{background:#ecf2f5;width:100%;height:69px;margin-top:20px;box-shadow:inset 0 1px 1px #fff;border-top:1px solid #ccc;border-bottom-right-radius:3px;border-bottom-left-radius:3px}input[type=submit][_ngcontent-%COMP%]:hover{background-color:#77d4fd}#container[_ngcontent-%COMP%]{width:auto;height:auto;top:auto;left:auto;margin:20px;background:#fff;border:1px solid #ccc;box-shadow:0 1px 2px #0000001a;border-radius:5px;background-color:#f2f2f2;padding:20px;-webkit-border-radius:5px;-moz-border-radius:5px;-ms-border-radius:5px;-o-border-radius:5px}.col-25[_ngcontent-%COMP%]{width:25%}.col-25[_ngcontent-%COMP%], .col-75[_ngcontent-%COMP%]{float:left;margin-top:6px}.col-75[_ngcontent-%COMP%]{width:75%}.row[_ngcontent-%COMP%]:after{content:"";display:table;clear:both}@media screen and (max-width: 600px){.col-25[_ngcontent-%COMP%], .col-75[_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%]{width:100%;margin-top:0}}']}),i})()},{path:"empresas",component:y},{path:"sugerencias",component:P}]},{path:"**",redirectTo:"sesionAdministrador"}]}];let R=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=l.oAB({type:i}),i.\u0275inj=l.cJS({imports:[[d.Bz.forChild(B)]]}),i})(),K=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=l.oAB({type:i}),i.\u0275inj=l.cJS({imports:[[n.ez,o.UX,s.xu,r.g0,a.ot,c.SJ,p.Ps,u.ie,R,d.Bz]]}),i})()}}]);