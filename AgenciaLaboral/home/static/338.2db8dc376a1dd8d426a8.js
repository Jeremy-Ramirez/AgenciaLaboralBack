(self.webpackChunkapp=self.webpackChunkapp||[]).push([[338],{338:(t,o,e)=>{"use strict";e.r(o),e.d(o,{AdministradorModule:()=>j});var i=e(3679),n=e(8583),r=e(5072),a=e(2522),s=e(1095),c=e(4490),p=e(6627),u=e(9992),d=e(9763),g=e(7716),l=e(1841);function m(t,o){if(1&t&&(g.TgZ(0,"div"),g._uU(1),g.TgZ(2,"button",1),g._uU(3," Ver Perfil "),g.qZA(),g.qZA()),2&t){const t=o.$implicit;g.xp6(1),g.hij(" Usuario: ",t.nombreusuario," ")}}let h=(()=>{class t{constructor(t,o){this.http=t,this.rutaActiva=o,this.usuarios=[],this.getUsuarios()}getUsuarios(){this.http.get("https://agencialaboralproyecto.pythonanywhere.com/api/usuarios/").subscribe(t=>{this.usuarios=t,console.log(this.usuarios)})}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)(g.Y36(l.eN),g.Y36(d.gz))},t.\u0275cmp=g.Xpm({type:t,selectors:[["app-aspirantes-aceptados"]],decls:9,vars:1,consts:[[4,"ngFor","ngForOf"],["type","button","routerLink","/administrador/sesionAdministrador/perfilAspirante",1,"btn","btn-primary","float-end"]],template:function(t,o){1&t&&(g.TgZ(0,"div"),g.TgZ(1,"section"),g.TgZ(2,"h1"),g._uU(3,"Aspirantes Aceptados"),g.qZA(),g.qZA(),g.TgZ(4,"section"),g._UZ(5,"br"),g._UZ(6,"br"),g._UZ(7,"br"),g.YNc(8,m,4,1,"div",0),g.qZA(),g.qZA()),2&t&&(g.xp6(8),g.Q6J("ngForOf",o.usuarios))},directives:[n.sg,d.rH],styles:[""]}),t})();var Z=e(8002),f=e(2888);function A(t,o){if(1&t){const t=g.EpF();g.TgZ(0,"button",11),g.NdJ("click",function(){return g.CHM(t),g.oxw(),g.MAs(2).toggle()}),g.TgZ(1,"mat-icon",12),g._uU(2,"menu"),g.qZA(),g.qZA()}}let b=(()=>{class t{constructor(t){this.breakpointObserver=t,this.aspirantesAceptados=!1,this.sesionAspirante=!1,this.isHandset$=this.breakpointObserver.observe(r.u3.Handset).pipe((0,Z.U)(t=>t.matches),(0,f.d)())}showAspirantesAceptados(){this.aspirantesAceptados=!0,this.sesionAspirante=!1}showSesionAspirante(){this.sesionAspirante=!0,this.aspirantesAceptados=!1}}return t.\u0275fac=function(o){return new(o||t)(g.Y36(r.Yg))},t.\u0275cmp=g.Xpm({type:t,selectors:[["app-menu-lateral"]],decls:37,vars:12,consts:[[1,"sidenav-container"],["fixedInViewport","",1,"sidenav",3,"mode","opened"],["drawer",""],[1,"nav","nav-pills","nav-stacked"],["mat-list-item","","routerLink","/administrador/sesionAdministrador/aspirantesNuevos"],["mat-list-item","","routerLink","/administrador/sesionAdministrador/aspirantesAceptados"],["mat-list-item","","routerLink","/administrador/sesionAdministrador/empresas"],["mat-list-item","","routerLink","/administrador/sesionAdministrador/sugerencias"],["mat-list-item","","routerLink","/administrador/sesionAdministrador/configuracion"],["type","button","aria-label","Toggle sidenav","mat-icon-button","",3,"click",4,"ngIf"],["href","#",1,"navbar-brand","scroll-top"],["type","button","aria-label","Toggle sidenav","mat-icon-button","",3,"click"],["aria-label","Side nav toggle icon"]],template:function(t,o){1&t&&(g.TgZ(0,"mat-sidenav-container",0),g.TgZ(1,"mat-sidenav",1,2),g.ALo(3,"async"),g.ALo(4,"async"),g.ALo(5,"async"),g.TgZ(6,"mat-toolbar"),g._uU(7,"Menu"),g.qZA(),g.TgZ(8,"mat-nav-list"),g.TgZ(9,"h4"),g._uU(10,"Tu Perfil"),g.qZA(),g.TgZ(11,"ul",3),g.TgZ(12,"li"),g.TgZ(13,"a",4),g._uU(14,"Nuevos Aspirantes"),g.qZA(),g.qZA(),g.TgZ(15,"li"),g.TgZ(16,"a",5),g._uU(17,"Aspirantes Aceptados"),g.qZA(),g.qZA(),g.TgZ(18,"li"),g.TgZ(19,"a",6),g._uU(20,"Empresas"),g.qZA(),g.qZA(),g.TgZ(21,"li"),g.TgZ(22,"a",7),g._uU(23,"Sugerencias"),g.qZA(),g.qZA(),g.TgZ(24,"li"),g.TgZ(25,"a",8),g._uU(26,"Configuraci\xf3n"),g.qZA(),g.qZA(),g.qZA(),g._UZ(27,"br"),g.qZA(),g.qZA(),g.TgZ(28,"mat-sidenav-content"),g.TgZ(29,"mat-toolbar"),g.YNc(30,A,3,0,"button",9),g.ALo(31,"async"),g.TgZ(32,"a",10),g.TgZ(33,"em"),g._uU(34,"Agencia"),g.qZA(),g._uU(35,"Laboral"),g.qZA(),g.qZA(),g._UZ(36,"router-outlet"),g.qZA(),g.qZA()),2&t&&(g.xp6(1),g.Q6J("mode",g.lcZ(4,6,o.isHandset$)?"over":"side")("opened",!1===g.lcZ(5,8,o.isHandset$)),g.uIk("role",g.lcZ(3,4,o.isHandset$)?"dialog":"navigation"),g.xp6(29),g.Q6J("ngIf",g.lcZ(31,10,o.isHandset$)))},directives:[c.TM,c.JX,a.Ye,u.Hk,u.Tg,d.yS,c.Rh,n.O5,d.lC,s.lW,p.Hw],pipes:[n.Ov],styles:[".sidenav-container[_ngcontent-%COMP%]{height:100%}.sidenav[_ngcontent-%COMP%]{width:250px}.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%]{background:inherit}.mat-toolbar.mat-primary[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1}.row.content[_ngcontent-%COMP%]{height:1500px}.container-fluid[_ngcontent-%COMP%]{padding-top:80px}.sidenav[_ngcontent-%COMP%]{background-color:#f1f1f1;padding:15px}footer[_ngcontent-%COMP%]{background-color:#555;color:#fff;padding:15px}@media screen and (max-width: 767px){.sidenav[_ngcontent-%COMP%]{padding:15px}.row.content[_ngcontent-%COMP%], .sidenav[_ngcontent-%COMP%]{height:auto}}"]}),t})(),v=(()=>{class t{constructor(){this.aspirantesAceptados=!1,this.sesionAspirante=!1}ngOnInit(){}showAspirantesAceptados(){this.aspirantesAceptados=!0,this.sesionAspirante=!1}showSesionAspirante(){this.sesionAspirante=!0,this.aspirantesAceptados=!1}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=g.Xpm({type:t,selectors:[["app-sesion-administrador"]],decls:1,vars:0,template:function(t,o){1&t&&g._UZ(0,"app-menu-lateral")},directives:[b],styles:[".row.content[_ngcontent-%COMP%]{height:1500px}.container-fluid[_ngcontent-%COMP%]{padding-top:80px}.sidenav[_ngcontent-%COMP%]{background-color:#f1f1f1;padding:15px}footer[_ngcontent-%COMP%]{background-color:#555;color:#fff;padding:15px}@media screen and (max-width: 767px){.sidenav[_ngcontent-%COMP%]{padding:15px}.row.content[_ngcontent-%COMP%], .sidenav[_ngcontent-%COMP%]{height:auto}}"]}),t})();function x(t,o){if(1&t&&(g.TgZ(0,"div"),g._uU(1),g.qZA()),2&t){const t=o.$implicit;g.xp6(1),g.hij(" Usuario: ",t.nombreusuario," ")}}let _=(()=>{class t{constructor(t,o){this.http=t,this.rutaActiva=o,this.aspirantesNuevos=[],this.representantes=[],this.getRepresentantes(),this.getAspirantesNuevos()}getRepresentantes(){this.http.get("https://agencialaboralproyecto.pythonanywhere.com/api/representantes/").subscribe(t=>{this.representantes=t,console.log(this.representantes)})}getAspirantesNuevos(){this.http.get("https://agencialaboralproyecto.pythonanywhere.com/api/usuarios/").subscribe(t=>{t.forEach(t=>{this.representantes.forEach(o=>{console.log("usuario",t.idusuario),console.log("representante",o.usuario_idusuario),t.idusuario===o.usuario_idusuario&&(this.aspirantesNuevos.push(t),console.log(this.aspirantesNuevos))})})})}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)(g.Y36(l.eN),g.Y36(d.gz))},t.\u0275cmp=g.Xpm({type:t,selectors:[["app-aspirantes-nuevos"]],decls:9,vars:1,consts:[[4,"ngFor","ngForOf"]],template:function(t,o){1&t&&(g.TgZ(0,"div"),g.TgZ(1,"section"),g.TgZ(2,"h1"),g._uU(3,"Aspirantes Nuevos"),g.qZA(),g.qZA(),g.TgZ(4,"section"),g._UZ(5,"br"),g._UZ(6,"br"),g._UZ(7,"br"),g.YNc(8,x,2,1,"div",0),g.qZA(),g.qZA()),2&t&&(g.xp6(8),g.Q6J("ngForOf",o.aspirantesNuevos))},directives:[n.sg],styles:[""]}),t})(),q=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=g.Xpm({type:t,selectors:[["app-revisar-empresas"]],decls:2,vars:0,template:function(t,o){1&t&&(g.TgZ(0,"p"),g._uU(1,"revisar-empresas works!"),g.qZA())},styles:[""]}),t})(),T=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=g.Xpm({type:t,selectors:[["app-revisar-sugerencias"]],decls:2,vars:0,template:function(t,o){1&t&&(g.TgZ(0,"p"),g._uU(1,"revisar-sugerencias works!"),g.qZA())},styles:[""]}),t})();function U(t,o){if(1&t&&(g.TgZ(0,"div"),g.TgZ(1,"p"),g._uU(2),g.qZA(),g.qZA()),2&t){const t=g.oxw().$implicit;g.xp6(2),g.AsE(" ",t.nombre," ",t.apellido,"")}}function y(t,o){if(1&t&&(g.TgZ(0,"div"),g.YNc(1,U,3,2,"div",15),g.qZA()),2&t){const t=o.$implicit;g.xp6(1),g.Q6J("ngIf",1==t.idusuario)}}function O(t,o){if(1&t&&(g.TgZ(0,"div"),g.TgZ(1,"p"),g._uU(2),g.qZA(),g.TgZ(3,"p"),g._uU(4),g.qZA(),g.TgZ(5,"p"),g._uU(6),g.qZA(),g.TgZ(7,"p"),g._uU(8),g.qZA(),g.qZA()),2&t){const t=g.oxw().$implicit;g.xp6(2),g.hij("N\xfamero documento: ",t.nodocumento,""),g.xp6(2),g.hij("Correo: ",t.correo,""),g.xp6(2),g.hij("Tel\xe9fono: ",t.telefono,""),g.xp6(2),g.hij("Direcci\xf3n: ",t.direccion,"")}}function w(t,o){if(1&t&&(g.TgZ(0,"div",16),g.YNc(1,O,9,4,"div",15),g.qZA()),2&t){const t=o.$implicit;g.xp6(1),g.Q6J("ngIf",1==t.idusuario)}}function C(t,o){if(1&t&&(g.TgZ(0,"div"),g.TgZ(1,"p"),g._uU(2),g.qZA(),g.TgZ(3,"p"),g._uU(4),g.qZA(),g.TgZ(5,"p"),g._uU(6),g.qZA(),g.TgZ(7,"p"),g._uU(8),g.qZA(),g.TgZ(9,"p"),g._uU(10),g.qZA(),g.TgZ(11,"p"),g._uU(12),g.qZA(),g.TgZ(13,"div",5),g.TgZ(14,"div",7),g._UZ(15,"video",17),g.qZA(),g.qZA(),g.qZA()),2&t){const t=g.oxw(2).$implicit;g.xp6(2),g.hij("N\xfamero de hijos: ",t.numerohijos,""),g.xp6(2),g.hij("Experiencia Laboral: ",t.experiencialaboral,""),g.xp6(2),g.hij("Experticia: ",t.experticia,""),g.xp6(2),g.hij("A\xf1os de experiencia: ",t.aniosexperiencia,""),g.xp6(2),g.hij("Fecha de Nacimiento: ",t.fechanacimiento,""),g.xp6(2),g.hij("Posibilidad de viajar: ",t.posibilidadviajar,""),g.xp6(3),g.MGl("src","http://localhost:8000/",t.videopresentacion,"",g.LSH)}}function M(t,o){if(1&t&&(g.TgZ(0,"div"),g.YNc(1,C,16,7,"div",15),g.qZA()),2&t){const t=o.$implicit,e=g.oxw().$implicit;g.xp6(1),g.Q6J("ngIf",e.idaspirante==t.idusuario)}}function P(t,o){if(1&t&&(g.TgZ(0,"div",16),g.YNc(1,M,2,1,"div",2),g.qZA()),2&t){const t=g.oxw();g.xp6(1),g.Q6J("ngForOf",t.usuarios)}}function k(t,o){1&t&&(g.TgZ(0,"span",18),g._uU(1," Campo Requerido "),g.qZA())}function N(t,o){if(1&t&&(g.TgZ(0,"option",19),g._uU(1),g.qZA()),2&t){const t=o.$implicit;g.s9C("value",t.idcategoriadocumento),g.xp6(1),g.hij(" ",t.descripcion," ")}}function F(t,o){1&t&&(g.TgZ(0,"span",18),g._uU(1," Campo Requerido "),g.qZA())}function I(t,o){1&t&&(g.TgZ(0,"span",18),g._uU(1," Campo Requerido "),g.qZA())}const J=[{path:"",children:[{path:"sesionAdministrador",component:v,children:[{path:"aspirantesAceptados",component:h},{path:"aspirantesNuevos",component:_},{path:"perfilAspirante",component:(()=>{class t{constructor(t,o,e){this.http=t,this.fb=o,this.rutaActiva=e,this.aspirantes=[],this.usuarios=[],this.categoria=[],this.profesiones=[],this.id="",this.miFormulario=this.fb.group({nombredocumento:["",[i.kI.required]],categoriaDocumento_idcategoriadocumento:["",[i.kI.required]],archivo:["",[i.kI.required]],fechacreacion:["",[i.kI.required]],aspirante_idaspirante:1,usuario_idusuario:1})}ngOnInit(){this.rutaActiva.params.subscribe(t=>{this.id=t.id}),this.getAspirantes(),this.getUsuarios(),this.getCategoria()}getAspirantes(){this.http.get("https://agencialaboralproyecto.pythonanywhere.com/api/aspirantes/").subscribe(t=>{this.aspirantes=t,console.log(this.aspirantes)})}getUsuarios(){this.http.get("https://agencialaboralproyecto.pythonanywhere.com/api/usuarios/").subscribe(t=>{this.usuarios=t,console.log(this.usuarios)})}campoEsValido(t){return this.miFormulario.controls[t].errors&&this.miFormulario.controls[t].touched}getCategoria(){this.http.get("https://agencialaboralproyecto.pythonanywhere.com/api/categoriadocumento/").subscribe(t=>{this.categoria=t,console.log(this.categoria)})}handleFileInput(t){this.file=t.target.files[0],console.log("archivo",this.file)}subirArchivo(){let t=new FormData;t.append("nombredocumento",this.miFormulario.controls.nombredocumento.value),t.append("categoriaDocumento_idcategoriadocumento",this.miFormulario.controls.categoriaDocumento_idcategoriadocumento.value),t.append("fechacreacion",this.miFormulario.controls.fechacreacion.value),t.append("aspirante_idaspirante",this.miFormulario.controls.aspirante_idaspirante.value),t.append("usuario_idusuario",this.miFormulario.controls.usuario_idusuario.value),t.append("archivo",this.file),console.log(this.miFormulario.value),this.http.post("https://agencialaboralproyecto.pythonanywhere.com/api/archivosaspirante/",t).subscribe(t=>console.log(t),t=>console.log(t))}}return t.\u0275fac=function(o){return new(o||t)(g.Y36(l.eN),g.Y36(i.qu),g.Y36(d.gz))},t.\u0275cmp=g.Xpm({type:t,selectors:[["app-vista-perfil-aspirante"]],decls:42,vars:8,consts:[[1,"contenedor"],[1,"imgperfil"],[4,"ngFor","ngForOf"],["class","contenedorInformacion",4,"ngFor","ngForOf"],["autocomplete","off","enctype","multipart/form-data",3,"formGroup"],[1,"mb-3","row"],[1,"col-sm-3","col-form-label"],[1,"col-sm-9"],["type","text","formControlName","nombredocumento","placeholder","",1,"form-control"],["class","form-text text-danger",4,"ngIf"],["name","doc","id","doc","formControlName","categoriaDocumento_idcategoriadocumento"],[3,"value",4,"ngFor","ngForOf"],["type","file","id","archivo","formControlName","archivo","placeholder","",1,"form-control",3,"change"],["type","date","formControlName","fechacreacion","placeholder","",1,"form-control"],["type","submit",1,"btn","btn-primary","float-end",3,"click"],[4,"ngIf"],[1,"contenedorInformacion"],["controls","",3,"src"],[1,"form-text","text-danger"],[3,"value"]],template:function(t,o){1&t&&(g.TgZ(0,"p"),g._uU(1,"perfil-aspirante works!"),g.qZA(),g.TgZ(2,"div",0),g._UZ(3,"div",1),g.YNc(4,y,2,1,"div",2),g.TgZ(5,"h1"),g._uU(6,"Datos Personales"),g.qZA(),g.YNc(7,w,2,1,"div",3),g.TgZ(8,"h1"),g._uU(9,"Datos Profesionales"),g.qZA(),g.YNc(10,P,2,1,"div",3),g.TgZ(11,"h2"),g._uU(12,"Agregar Archivos"),g.qZA(),g.TgZ(13,"form",4),g.TgZ(14,"div",5),g.TgZ(15,"label",6),g._uU(16,"Documento"),g.qZA(),g.TgZ(17,"div",7),g._UZ(18,"input",8),g.YNc(19,k,2,0,"span",9),g.qZA(),g.qZA(),g.TgZ(20,"div",5),g.TgZ(21,"label",6),g._uU(22,"Categor\xeda"),g.qZA(),g.TgZ(23,"div",7),g.TgZ(24,"select",10),g.YNc(25,N,2,2,"option",11),g.qZA(),g.YNc(26,F,2,0,"span",9),g.qZA(),g.qZA(),g.TgZ(27,"div",5),g.TgZ(28,"label",6),g._uU(29,"archivo"),g.qZA(),g.TgZ(30,"div",7),g.TgZ(31,"input",12),g.NdJ("change",function(t){return o.handleFileInput(t)}),g.qZA(),g.qZA(),g.qZA(),g.TgZ(32,"div",5),g.TgZ(33,"label",6),g._uU(34,"Fecha Ingreso"),g.qZA(),g.TgZ(35,"div",7),g._UZ(36,"input",13),g.YNc(37,I,2,0,"span",9),g.qZA(),g.qZA(),g.TgZ(38,"button",14),g.NdJ("click",function(){return o.subirArchivo()}),g._uU(39," Guardar "),g.qZA(),g.qZA(),g._UZ(40,"br"),g._UZ(41,"br"),g.qZA()),2&t&&(g.xp6(4),g.Q6J("ngForOf",o.usuarios),g.xp6(3),g.Q6J("ngForOf",o.usuarios),g.xp6(3),g.Q6J("ngForOf",o.aspirantes),g.xp6(3),g.Q6J("formGroup",o.miFormulario),g.xp6(6),g.Q6J("ngIf",o.campoEsValido("nombredocumento")),g.xp6(6),g.Q6J("ngForOf",o.categoria),g.xp6(1),g.Q6J("ngIf",o.campoEsValido("categoriaDocumento_idcategoriadocumento")),g.xp6(11),g.Q6J("ngIf",o.campoEsValido("fechacreacion")))},directives:[n.sg,i._Y,i.JL,i.sg,i.Fj,i.JJ,i.u,n.O5,i.EJ,i.YN,i.Kr],styles:['*[_ngcontent-%COMP%]{box-sizing:border-box;margin:2px}input[type=text][_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{width:100%;padding:8px;border:1px solid #ccc;border-radius:4px;resize:vertical}label[_ngcontent-%COMP%]{padding:8px 8px 0 0;display:inline-block}input[type=submit][_ngcontent-%COMP%]{background-color:#77d4fd;width:50%;color:#fff;padding:12px 20px;border:none;border-radius:4px;margin-right:300px;margin-left:auto;margin-top:20px;cursor:pointer;float:right;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px}#lower[_ngcontent-%COMP%]{background:#ecf2f5;width:100%;height:69px;margin-top:20px;box-shadow:inset 0 1px 1px #fff;border-top:1px solid #ccc;border-bottom-right-radius:3px;border-bottom-left-radius:3px}input[type=submit][_ngcontent-%COMP%]:hover{background-color:#77d4fd}#container[_ngcontent-%COMP%]{width:auto;height:auto;top:auto;left:auto;margin:20px;background:#fff;border:1px solid #ccc;box-shadow:0 1px 2px #0000001a;border-radius:5px;background-color:#f2f2f2;padding:20px;-webkit-border-radius:5px;-moz-border-radius:5px;-ms-border-radius:5px;-o-border-radius:5px}.col-25[_ngcontent-%COMP%]{width:25%}.col-25[_ngcontent-%COMP%], .col-75[_ngcontent-%COMP%]{float:left;margin-top:6px}.col-75[_ngcontent-%COMP%]{width:75%}.row[_ngcontent-%COMP%]:after{content:"";display:table;clear:both}@media screen and (max-width: 600px){.col-25[_ngcontent-%COMP%], .col-75[_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%]{width:100%;margin-top:0}}']}),t})()},{path:"empresas",component:q},{path:"sugerencias",component:T}]},{path:"**",redirectTo:"sesionAdministrador"}]}];let Y=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=g.oAB({type:t}),t.\u0275inj=g.cJS({imports:[[d.Bz.forChild(J)]]}),t})(),j=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=g.oAB({type:t}),t.\u0275inj=g.cJS({imports:[[n.ez,i.UX,r.xu,a.g0,s.ot,c.SJ,p.Ps,u.ie,Y,d.Bz]]}),t})()}}]);