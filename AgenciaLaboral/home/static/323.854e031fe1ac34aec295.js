(self.webpackChunkapp=self.webpackChunkapp||[]).push([[323],{6323:(i,o,t)=>{"use strict";t.r(o),t.d(o,{AspiranteModule:()=>W});var e=t(3679),n=t(8583),r=t(5072),a=t(2522),s=t(1095),c=t(4490),l=t(6627),d=t(9992),p=t(9763),u=t(7716),g=t(1841),m=t(8002),h=t(2888),f=t(4219);function b(i,o){if(1&i){const i=u.EpF();u.TgZ(0,"button",13),u.NdJ("click",function(){return u.CHM(i),u.oxw(),u.MAs(2).toggle()}),u.TgZ(1,"mat-icon",14),u._uU(2,"menu"),u.qZA(),u.qZA()}}let Z=(()=>{class i{constructor(i,o,t){this.breakpointObserver=i,this.rutaActiva=o,this.http=t,this.authenticated=!1,this.isHandset$=this.breakpointObserver.observe(r.u3.Handset).pipe((0,m.U)(i=>i.matches),(0,h.d)())}ngOnInit(){f.Y.authEmitter.subscribe(i=>{this.authenticated=i},this.getUsuarioActual())}getUsuarioActual(){console.log(this.usuarioActual),this.http.get("https://agencialaboralproyecto.pythonanywhere.com/api/userusuario/",{withCredentials:!0}).subscribe(i=>{console.log(i),this.id=i.idusuario,f.Y.authEmitter.emit(!0)},i=>{f.Y.authEmitter.emit(!1)})}logout(){this.http.post("https://agencialaboralproyecto.pythonanywhere.com/api/logoutusuario/",{},{withCredentials:!0}).subscribe(()=>this.authenticated=!1)}}return i.\u0275fac=function(o){return new(o||i)(u.Y36(r.Yg),u.Y36(p.gz),u.Y36(g.eN))},i.\u0275cmp=u.Xpm({type:i,selectors:[["app-menu-lateral"]],decls:39,vars:12,consts:[[1,"sidenav-container"],["fixedInViewport","",1,"sidenav",3,"mode","opened"],["drawer",""],[1,"nav","nav-pills","nav-stacked"],["mat-list-item","","routerLink","/aspirante/sesionAspirante/perfilAspirante"],["mat-list-item","","routerLink","/aspirante/sesionAspirante/aspiranteProfesional"],["mat-list-item","","routerLink","/aspirante/sesionAspirante/sugerencias"],[1,"active"],["mat-list-item","","routerLink","/aspirante/sesionAspirante/ofertaEmpleo"],["mat-list-item",""],["mat-list-item","","routerLink","/",3,"click"],["color","primary"],["type","button","aria-label","Toggle sidenav","mat-icon-button","",3,"click",4,"ngIf"],["type","button","aria-label","Toggle sidenav","mat-icon-button","",3,"click"],["aria-label","Side nav toggle icon"]],template:function(i,o){1&i&&(u.TgZ(0,"mat-sidenav-container",0),u.TgZ(1,"mat-sidenav",1,2),u.ALo(3,"async"),u.ALo(4,"async"),u.ALo(5,"async"),u.TgZ(6,"mat-toolbar"),u._uU(7,"Menu"),u.qZA(),u.TgZ(8,"mat-nav-list"),u.TgZ(9,"ul",3),u.TgZ(10,"li"),u.TgZ(11,"a",4),u._uU(12,"Perfil"),u.qZA(),u.qZA(),u.TgZ(13,"li"),u.TgZ(14,"a",4),u._uU(15,"Datos Personales"),u.qZA(),u.qZA(),u.TgZ(16,"li"),u.TgZ(17,"a",5),u._uU(18,"Datos Profesionales"),u.qZA(),u.qZA(),u.TgZ(19,"li"),u.TgZ(20,"a",6),u._uU(21,"Enviar Sugerencias"),u.qZA(),u.qZA(),u.TgZ(22,"li",7),u.TgZ(23,"a",8),u._uU(24,"Ofertas de empleo"),u.qZA(),u.qZA(),u.TgZ(25,"li"),u.TgZ(26,"a",9),u._uU(27,"Configuraci\xf3n"),u.qZA(),u.qZA(),u.TgZ(28,"li"),u.TgZ(29,"a",10),u.NdJ("click",function(){return o.logout()}),u._uU(30,"Salir"),u.qZA(),u.qZA(),u.qZA(),u._UZ(31,"br"),u.qZA(),u.qZA(),u.TgZ(32,"mat-sidenav-content"),u.TgZ(33,"mat-toolbar",11),u.YNc(34,b,3,0,"button",12),u.ALo(35,"async"),u.TgZ(36,"span"),u._uU(37,"app"),u.qZA(),u.qZA(),u._UZ(38,"router-outlet"),u.qZA(),u.qZA()),2&i&&(u.xp6(1),u.Q6J("mode",u.lcZ(4,6,o.isHandset$)?"over":"side")("opened",!1===u.lcZ(5,8,o.isHandset$)),u.uIk("role",u.lcZ(3,4,o.isHandset$)?"dialog":"navigation"),u.xp6(33),u.Q6J("ngIf",u.lcZ(35,10,o.isHandset$)))},directives:[c.TM,c.JX,a.Ye,d.Hk,d.Tg,p.yS,c.Rh,n.O5,p.lC,s.lW,l.Hw],pipes:[n.Ov],styles:[".sidenav-container[_ngcontent-%COMP%]{height:100%}.sidenav[_ngcontent-%COMP%]{width:200px}.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%]{background:inherit}.mat-toolbar.mat-primary[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1}"]}),i})(),x=(()=>{class i{constructor(i){this.http=i,this.id=""}ngOnInit(){}}return i.\u0275fac=function(o){return new(o||i)(u.Y36(g.eN))},i.\u0275cmp=u.Xpm({type:i,selectors:[["app-sesion-aspirante"]],decls:1,vars:0,template:function(i,o){1&i&&u._UZ(0,"app-menu-lateral")},directives:[Z],styles:[".row.content[_ngcontent-%COMP%]{height:1500px}.container-fluid[_ngcontent-%COMP%]{padding-top:80px}.sidenav[_ngcontent-%COMP%]{background-color:#f1f1f1;padding:15px}footer[_ngcontent-%COMP%]{background-color:#555;color:#fff;padding:15px}@media screen and (max-width: 767px){.sidenav[_ngcontent-%COMP%]{padding:15px}.row.content[_ngcontent-%COMP%], .sidenav[_ngcontent-%COMP%]{height:auto}}"]}),i})();function _(i,o){1&i&&(u.TgZ(0,"small",23),u._uU(1," Campo Requerido "),u.qZA())}function v(i,o){if(1&i&&(u.TgZ(0,"option",24),u._uU(1),u.qZA()),2&i){const i=o.$implicit;u.s9C("value",i.idtipodocumento),u.xp6(1),u.hij(" ",i.descripcion," ")}}function A(i,o){1&i&&(u.TgZ(0,"small",23),u._uU(1," Campo Requerido "),u.qZA())}function q(i,o){1&i&&(u.TgZ(0,"small",23),u._uU(1," Escriba un n\xfamero de documento v\xe1lido "),u.qZA())}function T(i,o){1&i&&(u.TgZ(0,"small",23),u._uU(1," Campo requerido "),u.qZA())}function y(i,o){1&i&&(u.TgZ(0,"small",23),u._uU(1," Campo requerido "),u.qZA())}function C(i,o){1&i&&(u.TgZ(0,"small",23),u._uU(1," Ingrese un tel\xe9fono v\xe1lido "),u.qZA())}function w(i,o){1&i&&(u.TgZ(0,"small",23),u._uU(1," Campo requerido "),u.qZA())}function O(i,o){if(1&i&&(u.TgZ(0,"option",24),u._uU(1),u.qZA()),2&i){const i=o.$implicit;u.s9C("value",i.idciudad),u.xp6(1),u.hij(" ",i.nombreciudad," ")}}function k(i,o){1&i&&(u.TgZ(0,"small",23),u._uU(1," Seleccione una ciudad "),u.qZA())}function U(i,o){if(1&i&&(u.TgZ(0,"option",24),u._uU(1),u.qZA()),2&i){const i=o.$implicit;u.s9C("value",i.idprovincia),u.xp6(1),u.hij(" ",i.nombreprovincia," ")}}function P(i,o){1&i&&(u.TgZ(0,"small",23),u._uU(1," Seleccione una provincia "),u.qZA())}function N(i,o){1&i&&(u.TgZ(0,"small",23),u._uU(1," Escriba un correo v\xe1lido "),u.qZA())}function M(i,o){1&i&&(u.TgZ(0,"small",23),u._uU(1," Campo requerido "),u.qZA())}function I(i,o){if(1&i&&(u.TgZ(0,"option",24),u._uU(1),u.qZA()),2&i){const i=o.$implicit;u.MGl("value"," ",i.idgenero,""),u.xp6(1),u.hij(" ",i.genero," ")}}function F(i,o){1&i&&(u.TgZ(0,"small",23),u._uU(1," Campo requerido "),u.qZA())}let Y=(()=>{class i{constructor(i,o){this.http=i,this.fb=o,this.hide=!0,this.generos=[],this.provincias=[],this.ciudades=[],this.tipoDocumento=[],this.miFormulario=this.fb.group({nombreusuario:["",[e.kI.required]],contrasenia:["",[e.kI.required]],tipodocumento_idtipodocumento:["",e.kI.required],nodocumento:["",[e.kI.required,e.kI.pattern("^[0-9]{10}$")]],nombre:["",[e.kI.required]],apellido:["",[e.kI.required]],correo:["",[e.kI.required,e.kI.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+[.][a-z]{2,3}$")]],telefono:["",[e.kI.required,e.kI.pattern("^[0-9-+]{9,10}$"),e.kI.maxLength(10)]],direccion:["",[e.kI.required]],estadoCuenta:null,ciudad_idciudad:["",[e.kI.required]],estadocivil_idestadocivil:1,genero_idgenero:["",[e.kI.required]],provincia_idprovincia:["",[e.kI.required]],rol_idrol:2}),this.getGenero(),this.getProvincias(),this.getCiudades(),this.getTipodocumento()}ngOnInit(){}get tipoDocumentoNoValido(){return this.miFormulario.get("tipodocumento_idtipodocumento").invalid&&this.miFormulario.get("tipodocumento_idtipodocumento").touched}get usuarioNoValido(){return this.miFormulario.get("nombreusuario").invalid&&this.miFormulario.get("nombreusuario").touched}get telefonoNoValido(){return this.miFormulario.get("telefono").invalid&&this.miFormulario.get("telefono").touched}get direccionNoValido(){return this.miFormulario.get("direccion").invalid&&this.miFormulario.get("direccion").touched}get numDocumentoNoValido(){return this.miFormulario.get("nodocumento").invalid&&this.miFormulario.get("nodocumento").touched}get nombresNoValido(){return this.miFormulario.get("nombre").invalid&&this.miFormulario.get("nombre").touched}get apellidosNoValido(){return this.miFormulario.get("apellido").invalid&&this.miFormulario.get("apellido").touched}get provinciaNoValido(){return this.miFormulario.get("provincia_idprovincia").invalid&&this.miFormulario.get("provincia_idprovincia").touched}get ciudadNoValido(){return this.miFormulario.get("ciudad_idciudad").invalid&&this.miFormulario.get("ciudad_idciudad").touched}get correoNoValido(){return this.miFormulario.get("correo").invalid&&this.miFormulario.get("correo").touched}get contraseniaNoValido(){return this.miFormulario.get("contrasenia").invalid&&this.miFormulario.get("contrasenia").touched}get confirmacionNoValido(){return this.miFormulario.get("confirmacion").invalid&&this.miFormulario.get("confirmacion").touched}get generoNoValido(){return this.miFormulario.get("genero_idgenero").invalid&&this.miFormulario.get("genero_idgenero").touched}getTipodocumento(){this.http.get("https://agencialaboralproyecto.pythonanywhere.com/api/tipodocumento/").subscribe(i=>{this.tipoDocumento=i,console.log(this.tipoDocumento)})}getGenero(){this.http.get("https://agencialaboralproyecto.pythonanywhere.com/api/genero/").subscribe(i=>{this.generos=i,console.log(this.generos)})}getProvincias(){this.http.get("https://agencialaboralproyecto.pythonanywhere.com/api/provincias/").subscribe(i=>{this.provincias=i,console.log(this.provincias)})}getCiudades(){this.http.get("https://agencialaboralproyecto.pythonanywhere.com/api/ciudades/").subscribe(i=>{this.ciudades=i,console.log(this.ciudades)})}guardar(){if(this.miFormulario.invalid)return Object.values(this.miFormulario.controls).forEach(i=>{i.markAsTouched()});console.log(this.miFormulario.value),this.http.post("https://agencialaboralproyecto.pythonanywhere.com/api/usuarios/",this.miFormulario.value).subscribe(i=>console.log(i),i=>console.log(i)),alert("USUARIO CREADO"),window.location.href="/aspirante/registroAspirante"}mostrarPassword(){const i=document.getElementById("password");i.type="password"==i.type?"text":"password"}show(){this.hide=!this.hide}}return i.\u0275fac=function(o){return new(o||i)(u.Y36(g.eN),u.Y36(e.qu))},i.\u0275cmp=u.Xpm({type:i,selectors:[["app-registro-full-aspirante"]],decls:91,vars:43,consts:[["id","container"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"mb-3","row"],[1,"col-sm-3","col-form-label"],[1,"col-sm-9"],["type","text","formControlName","nombreusuario","placeholder","Ingrese un nombre de usuario",1,"form-control"],["class","text-danger",4,"ngIf"],["name","doc","id","doc","formControlName","tipodocumento_idtipodocumento"],["value","","disabled","","selected",""],[3,"value",4,"ngFor","ngForOf"],["type","text","formControlName","nodocumento","placeholder","Ingrese el n\xfamero de su documento",1,"form-control"],["type","text","formControlName","nombre","placeholder","Ingrese sus nombres completos",1,"form-control"],["type","text","formControlName","apellido","placeholder","Ingrese sus apellidos completos",1,"form-control"],["type","text","formControlName","telefono","placeholder","Ingrese su n\xfamero de tel\xe9fono",1,"form-control"],["type","text","formControlName","direccion","placeholder","Ingrese la direcci\xf3n de su domicilio",1,"form-control"],["formControlName","ciudad_idciudad"],["formControlName","provincia_idprovincia"],["type","text","formControlName","correo","placeholder","Ingrese su correo electr\xf3nico",1,"form-control"],["formControlName","contrasenia","placeholder","Ingrese una contrase\xf1a","id","password","type","password",1,"form-control",3,"type"],[1,"field-icon",3,"click"],["formControlName","genero_idgenero"],["id","lower"],["type","submit",1,"btn","btn-primary","float-end"],[1,"text-danger"],[3,"value"]],template:function(i,o){1&i&&(u.TgZ(0,"div",0),u.TgZ(1,"form",1),u.NdJ("ngSubmit",function(){return o.guardar()}),u.TgZ(2,"div",2),u.TgZ(3,"label",3),u._uU(4,"Usuario"),u.qZA(),u.TgZ(5,"div",4),u._UZ(6,"input",5),u.YNc(7,_,2,0,"small",6),u.qZA(),u.qZA(),u.TgZ(8,"div",2),u.TgZ(9,"label",3),u._uU(10,"Tipo de Documento"),u.qZA(),u.TgZ(11,"div",4),u.TgZ(12,"select",7),u.TgZ(13,"option",8),u._uU(14,"Seleccione un documento"),u.qZA(),u.YNc(15,v,2,2,"option",9),u.qZA(),u.YNc(16,A,2,0,"small",6),u.qZA(),u.qZA(),u.TgZ(17,"div",2),u.TgZ(18,"label",3),u._uU(19,"No de Documento"),u.qZA(),u.TgZ(20,"div",4),u._UZ(21,"input",10),u.YNc(22,q,2,0,"small",6),u.qZA(),u.qZA(),u.TgZ(23,"div",2),u.TgZ(24,"label",3),u._uU(25,"Nombres Completos"),u.qZA(),u.TgZ(26,"div",4),u._UZ(27,"input",11),u.YNc(28,T,2,0,"small",6),u.qZA(),u.qZA(),u.TgZ(29,"div",2),u.TgZ(30,"label",3),u._uU(31,"Apellidos Completos"),u.qZA(),u.TgZ(32,"div",4),u._UZ(33,"input",12),u.YNc(34,y,2,0,"small",6),u.qZA(),u.qZA(),u.TgZ(35,"div",2),u.TgZ(36,"label",3),u._uU(37,"Tel\xe9fono"),u.qZA(),u.TgZ(38,"div",4),u._UZ(39,"input",13),u.YNc(40,C,2,0,"small",6),u.qZA(),u.qZA(),u.TgZ(41,"div",2),u.TgZ(42,"label",3),u._uU(43,"Direcci\xf3n"),u.qZA(),u.TgZ(44,"div",4),u._UZ(45,"input",14),u.YNc(46,w,2,0,"small",6),u.qZA(),u.qZA(),u.TgZ(47,"div",2),u.TgZ(48,"label",3),u._uU(49,"Ciudad "),u.qZA(),u.TgZ(50,"div",4),u.TgZ(51,"select",15),u.TgZ(52,"option",8),u._uU(53,"Seleccione una ciudad"),u.qZA(),u.YNc(54,O,2,2,"option",9),u.qZA(),u.YNc(55,k,2,0,"small",6),u.qZA(),u.qZA(),u.TgZ(56,"div",2),u.TgZ(57,"label",3),u._uU(58,"Povincia"),u.qZA(),u.TgZ(59,"div",4),u.TgZ(60,"select",16),u.TgZ(61,"option",8),u._uU(62,"Seleccione una provincia"),u.qZA(),u.YNc(63,U,2,2,"option",9),u.qZA(),u.YNc(64,P,2,0,"small",6),u.qZA(),u.qZA(),u.TgZ(65,"div",2),u.TgZ(66,"label",3),u._uU(67,"Correo "),u.qZA(),u.TgZ(68,"div",4),u._UZ(69,"input",17),u.YNc(70,N,2,0,"small",6),u.qZA(),u.qZA(),u.TgZ(71,"div",2),u.TgZ(72,"label",3),u._uU(73,"Contrase\xf1a "),u.qZA(),u.TgZ(74,"div",4),u._UZ(75,"input",18),u.TgZ(76,"mat-icon",19),u.NdJ("click",function(){return o.show()}),u._uU(77),u.qZA(),u.YNc(78,M,2,0,"small",6),u.qZA(),u.qZA(),u.TgZ(79,"div",2),u.TgZ(80,"label",3),u._uU(81,"G\xe9nero "),u.qZA(),u.TgZ(82,"div",4),u.TgZ(83,"select",20),u.TgZ(84,"option",8),u._uU(85,"Seleccione un g\xe9nero"),u.qZA(),u.YNc(86,I,2,2,"option",9),u.qZA(),u.YNc(87,F,2,0,"small",6),u.qZA(),u.qZA(),u.TgZ(88,"div",21),u.TgZ(89,"button",22),u._uU(90," Registrarse "),u.qZA(),u.qZA(),u.qZA(),u.qZA()),2&i&&(u.xp6(1),u.Q6J("formGroup",o.miFormulario),u.xp6(5),u.ekj("is-invalid",o.usuarioNoValido),u.xp6(1),u.Q6J("ngIf",o.usuarioNoValido),u.xp6(5),u.ekj("is-invalid",o.tipoDocumentoNoValido),u.xp6(3),u.Q6J("ngForOf",o.tipoDocumento),u.xp6(1),u.Q6J("ngIf",o.tipoDocumentoNoValido),u.xp6(5),u.ekj("is-invalid",o.numDocumentoNoValido),u.xp6(1),u.Q6J("ngIf",o.numDocumentoNoValido),u.xp6(5),u.ekj("is-invalid",o.nombresNoValido),u.xp6(1),u.Q6J("ngIf",o.nombresNoValido),u.xp6(5),u.ekj("is-invalid",o.apellidosNoValido),u.xp6(1),u.Q6J("ngIf",o.apellidosNoValido),u.xp6(5),u.ekj("is-invalid",o.telefonoNoValido),u.xp6(1),u.Q6J("ngIf",o.telefonoNoValido),u.xp6(5),u.ekj("is-invalid",o.direccionNoValido),u.xp6(1),u.Q6J("ngIf",o.direccionNoValido),u.xp6(5),u.ekj("is-invalid",o.ciudadNoValido),u.xp6(3),u.Q6J("ngForOf",o.ciudades),u.xp6(1),u.Q6J("ngIf",o.ciudadNoValido),u.xp6(5),u.ekj("is-invalid",o.provinciaNoValido),u.xp6(3),u.Q6J("ngForOf",o.provincias),u.xp6(1),u.Q6J("ngIf",o.provinciaNoValido),u.xp6(5),u.ekj("is-invalid",o.correoNoValido),u.xp6(1),u.Q6J("ngIf",o.correoNoValido),u.xp6(5),u.ekj("is-invalid",o.contraseniaNoValido),u.Q6J("type",o.hide?"password":"text"),u.xp6(2),u.Oqu(o.hide?"visibility_off":"visibility"),u.xp6(1),u.Q6J("ngIf",o.contraseniaNoValido),u.xp6(5),u.ekj("is-invalid",o.generoNoValido),u.xp6(3),u.Q6J("ngForOf",o.generos),u.xp6(1),u.Q6J("ngIf",o.generoNoValido))},directives:[e._Y,e.JL,e.sg,e.Fj,e.JJ,e.u,n.O5,e.EJ,e.YN,e.Kr,n.sg,l.Hw],styles:['*[_ngcontent-%COMP%]{box-sizing:border-box;margin:2px}label[_ngcontent-%COMP%]{padding:8px 8px 0 0;display:inline-block}input[type=submit][_ngcontent-%COMP%]{background-color:#77d4fd;width:50%;color:#fff;padding:12px 20px;border:none;border-radius:4px;margin-right:300px;margin-left:auto;margin-top:20px;cursor:pointer;float:right;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px}#lower[_ngcontent-%COMP%]{background:#ecf2f5;width:100%;height:69px;margin-top:20px;box-shadow:inset 0 1px 1px #fff;border-top:1px solid #ccc;border-bottom-right-radius:3px;border-bottom-left-radius:3px}input[type=submit][_ngcontent-%COMP%]:hover{background-color:#77d4fd}#container[_ngcontent-%COMP%]{width:auto;height:auto;top:auto;left:auto;margin:20px;background:#fff;border:1px solid #ccc;box-shadow:0 1px 2px #0000001a;border-radius:5px;background-color:#f2f2f2;padding:20px;-webkit-border-radius:5px;-moz-border-radius:5px;-ms-border-radius:5px;-o-border-radius:5px}.col-25[_ngcontent-%COMP%]{width:25%}.col-25[_ngcontent-%COMP%], .col-75[_ngcontent-%COMP%]{float:left;margin-top:6px}.col-75[_ngcontent-%COMP%]{width:75%}.row[_ngcontent-%COMP%]:after{content:"";display:table;clear:both}@media screen and (max-width: 600px){.col-25[_ngcontent-%COMP%], .col-75[_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%]{width:100%;margin-top:0}}.field-icon[_ngcontent-%COMP%]{float:right;margin-right:15px;margin-top:-30px;position:relative;z-index:2}input[type=text][_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{width:100%;padding:8px;border:1px solid #ccc;border-radius:4px;resize:vertical}']}),i})(),J=(()=>{class i{constructor(i){this.httpClient=i,this.getAspirantessolicitados()}getAspirantessolicitados(){return this.httpClient.get("https://agencialaboralproyecto.pythonanywhere.com/api/aspirantessolicitados/")}}return i.\u0275fac=function(o){return new(o||i)(u.LFG(g.eN))},i.\u0275prov=u.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),j=(()=>{class i{constructor(i){this.httpClient=i,this.getSolicitudes()}getSolicitudes(){return this.httpClient.get("https://agencialaboralproyecto.pythonanywhere.com/api/solicitudes/")}loginUsuario(){return this.httpClient.get("https://agencialaboralproyecto.pythonanywhere.com/api/userusuario/",{withCredentials:!0})}}return i.\u0275fac=function(o){return new(o||i)(u.LFG(g.eN))},i.\u0275prov=u.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();const V=["empleos"];let z=(()=>{class i{constructor(i,o){this._aspirantessolicitadosService=i,this._solicitudesService=o,this.aspirantessolicitados=[],this.aspirantessolicitados2=[],this.idAspirante="",this.inner=""}ngOnInit(){this._aspirantessolicitadosService.getAspirantessolicitados().subscribe(i=>{this.aspirantessolicitados=i,this.aspirantessolicitados2=i,this._solicitudesService.loginUsuario().subscribe(i=>{this.byid(i),this.addhtml()})})}addhtml(){for(let i=0;i<this.aspirantessolicitados2.length;i++)this.aspirantessolicitados2[i].aspirante_idaspirante.idaspirante==this.idAspirante&&(this.inner+=`\n        <div class="empleo" >        \n        <div class="card">\n        <div class="card-body"> \n            <h2 class="card-title">Cargo: ${this.aspirantessolicitados2[i].solicitud_idsolicitud.cargo}</h2>\n            <h3>${this.aspirantessolicitados2[i].solicitud_idsolicitud.profesion}</h3> \n            <p></p>\n            <ul>\n              <li >Descripci\xf3n: ${this.aspirantessolicitados2[i].solicitud_idsolicitud.descripcioncargo}</li>\n              <p></p>\n              <li >Educacion minima: ${this.aspirantessolicitados2[i].solicitud_idsolicitud.educacion_minima}</li>\n              <li >Jornada:  ${this.aspirantessolicitados2[i].solicitud_idsolicitud.jornada} </li>\n              <li >Licencia: ${this.aspirantessolicitados2[i].solicitud_idsolicitud.licencia}</li>\n              <li >Idiomas: ${this.aspirantessolicitados2[i].solicitud_idsolicitud.idiomas}</li>\n              <li >Personas con discapacidad: ${this.aspirantessolicitados2[i].solicitud_idsolicitud.discapacidad}</li>\n              <li >Disponibilidad de viajar: ${this.aspirantessolicitados2[i].solicitud_idsolicitud.disponibilidad_viajar} </li>              \n              <li >Disponibilidad de cambio de residencia: ${this.aspirantessolicitados2[i].solicitud_idsolicitud.disponibilidad_viajar} </li>\n            </ul>\n            <p class="card-text">Empresa: ${this.aspirantessolicitados2[i].solicitud_idsolicitud.representante_idrepresentante.empresa_idempresa.nombrecomercial}</p>\n            <ul>\n              <li>Fecha de inicio ${this.aspirantessolicitados2[i].solicitud_idsolicitud.fechainicio}</li>\n              <li>Fecha de cierre ${this.aspirantessolicitados2[i].solicitud_idsolicitud.fechacierre}</li>\n            </ul>\n            \n            <button type="button">Aceptar</button>            \n            <button type="button">Eliminar</button>\n        </div>\n        </div>\n    </div>\n  \n    `);this.aspirantessolicitadosHt.nativeElement.innerHTML=this.inner}byid(i){for(let o=0;o<this.aspirantessolicitados.length;o++)this.aspirantessolicitados[o].aspirante_idaspirante.usuario_idusuario.idusuario==i.idusuario&&(this.idAspirante=this.aspirantessolicitados[o].aspirante_idaspirante.idaspirante)}}return i.\u0275fac=function(o){return new(o||i)(u.Y36(J),u.Y36(j))},i.\u0275cmp=u.Xpm({type:i,selectors:[["app-oferta-empleo"]],viewQuery:function(i,o){if(1&i&&u.Gf(V,5),2&i){let i;u.iGM(i=u.CRH())&&(o.aspirantessolicitadosHt=i.first)}},decls:10,vars:0,consts:[[1,"col-sm-9"],[1,"inner-addon","right-addon"],[1,"glyphicon","glyphicon-search"],["type","text","placeholder","Search",1,"form-control"],[1,"contenedor-empleo"],[1,"empleo"],["empleos",""]],template:function(i,o){1&i&&(u.TgZ(0,"div",0),u.TgZ(1,"h4"),u.TgZ(2,"small"),u._uU(3,"OFERTAS DE EMPLEO"),u.qZA(),u.qZA(),u.TgZ(4,"div",1),u._UZ(5,"i",2),u._UZ(6,"input",3),u.qZA(),u.TgZ(7,"div",4),u._UZ(8,"div",5,6),u.qZA(),u.qZA())},styles:[".inner-addon[_ngcontent-%COMP%]{position:relative}.inner-addon[_ngcontent-%COMP%]   .glyphicon[_ngcontent-%COMP%]{position:absolute;padding:10px;pointer-events:none}.left-addon[_ngcontent-%COMP%]   .glyphicon[_ngcontent-%COMP%]{left:0}.right-addon[_ngcontent-%COMP%]   .glyphicon[_ngcontent-%COMP%]{right:0}.left-addon[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding-left:30px}.right-addon[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding-right:30px}.empleo[_ngcontent-%COMP%]{border:30px;padding:20px;background-color:#cfe4f1;border-radius:20px;-webkit-border-radius:20px;-moz-border-radius:20px;-ms-border-radius:20px;-o-border-radius:20px}.empleo[_ngcontent-%COMP%]:first-child{margin:10px0}.card-text[_ngcontent-%COMP%]{border:30px;padding:20px;background-color:rgrgb(19,100,151)}"]}),i})();var E=t(8248);let Q=(()=>{class i{constructor(i,o,t,e){this.fb=i,this.http=o,this.rutaActiva=t,this.router=e,this.id="",this.hide=!0,this.httpOptions={headers:new g.WM({"Content-Type":"Application/json"})}}ngOnInit(){this.miFormulario=this.fb.group({correo:["",e.kI.required],contrasenia:["",[e.kI.required]]})}getDecodedAccessToken(i){try{return(0,E.Z)(i)}catch(o){return null}}login(){console.log(this.miFormulario.value),this.http.post("https://agencialaboralproyecto.pythonanywhere.com/api/loginusuario/",this.miFormulario.getRawValue(),{withCredentials:!0}).subscribe(i=>{console.log(i.jwt),console.log(this.getDecodedAccessToken(i.jwt)),this.id=this.getDecodedAccessToken(i.jwt).id,this.router.navigate(["/aspirante/sesionAspirante/perfilAspirante"])})}logout(){localStorage.removeItem("currentUser")}show(){this.hide=!this.hide}}return i.\u0275fac=function(o){return new(o||i)(u.Y36(e.qu),u.Y36(g.eN),u.Y36(p.gz),u.Y36(p.F0))},i.\u0275cmp=u.Xpm({type:i,selectors:[["app-registro-aspirante"]],decls:20,vars:3,consts:[["id","container"],["type","button","routerLink","/register","aria-label","Close",1,"close"],["aria-hidden","true"],["autocomplete","off","enctype","multipart/form-data",3,"formGroup"],["for","name"],["type","name","formControlName","correo"],["for","username"],[1,"col"],["href","#"],["type","password","formControlName","contrasenia","placeholder","password",1,"form-control",3,"type"],[1,"field-icon",3,"click"],["id","lower"],["type","submit","value","Login ",3,"click"],["type","submit","routerLink","/aspirante/registroFullAspirante","value","Register"]],template:function(i,o){1&i&&(u.TgZ(0,"div",0),u.TgZ(1,"button",1),u.TgZ(2,"span",2),u._uU(3,"\xd7"),u.qZA(),u.qZA(),u.TgZ(4,"form",3),u.TgZ(5,"label",4),u._uU(6,"Correo electr\xf3nico:"),u.qZA(),u._UZ(7,"input",5),u.TgZ(8,"label",6),u._uU(9,"Contrase\xf1a:"),u.qZA(),u.TgZ(10,"div",7),u.TgZ(11,"p"),u.TgZ(12,"a",8),u._uU(13,"Olvidaste tu contrase\xf1a?"),u.qZA(),u._UZ(14,"input",9),u.TgZ(15,"mat-icon",10),u.NdJ("click",function(){return o.show()}),u._uU(16),u.qZA(),u.qZA(),u.qZA(),u.TgZ(17,"div",11),u.TgZ(18,"input",12),u.NdJ("click",function(){return o.login()}),u.qZA(),u._UZ(19,"input",13),u.qZA(),u.qZA(),u.qZA()),2&i&&(u.xp6(4),u.Q6J("formGroup",o.miFormulario),u.xp6(10),u.Q6J("type",o.hide?"password":"text"),u.xp6(2),u.Oqu(o.hide?"visibility_off":"visibility"))},directives:[p.rH,e._Y,e.JL,e.sg,e.Fj,e.JJ,e.u,l.Hw],styles:["body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{width:100%;height:100%;font-family:sans-serif;color:#444;-webkit-font-smoothing:antialiased;background:#f0f0f0}#container[_ngcontent-%COMP%]{position:fixed;width:340px;height:280px;top:50%;left:50%;margin-top:-140px;margin-left:-170px;background:#fff;border-radius:3px;border:1px solid #ccc;box-shadow:0 1px 2px #0000001a;-webkit-animation-name:bounceIn;-webkit-animation-fill-mode:both;-webkit-animation-duration:1s;-webkit-animation-iteration-count:1;-webkit-animation-timing-function:linear;-moz-animation-name:bounceIn;-moz-animation-fill-mode:both;-moz-animation-duration:1s;-moz-animation-iteration-count:1;-moz-animation-timing-function:linear;animation-name:bounceIn;animation-fill-mode:both;animation-duration:1s;animation-iteration-count:1;animation-timing-function:linear}form[_ngcontent-%COMP%]{margin:20px auto 0}label[_ngcontent-%COMP%]{color:#555;display:inline-block;margin-left:18px;padding-top:10px;font-size:14px}p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:11px;color:#aaa;float:right;margin-top:-13px;margin-right:20px;transition:all .4s ease}p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#555}input[_ngcontent-%COMP%]{font-family:sans-serif;font-size:12px;outline:none}input[type=name][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%]{color:#777;padding-left:10px;margin:12px 10px 10px 18px;width:290px;height:35px;border:1px solid #c7d0d2;border-radius:2px;box-shadow:inset 0 1.5px 3px #bebebe66,0 0 0 5px #f5f7f8;transition:all .4s ease}input[type=name][_ngcontent-%COMP%]:hover, input[type=password][_ngcontent-%COMP%]:hover{border:1px solid #b6bfc0;box-shadow:inset 0 1.5px 3px #bebebeb3,0 0 0 5px #f5f7f8}input[type=name][_ngcontent-%COMP%]:focus, input[type=password][_ngcontent-%COMP%]:focus{border:1px solid #a8c9e4;box-shadow:inset 0 1.5px 3px #bebebe66,0 0 0 5px #e6f2f9}#lower[_ngcontent-%COMP%]{background:#ecf2f5;width:100%;height:69px;margin-top:20px;box-shadow:inset 0 1px 1px #fff;border-top:1px solid #ccc;border-bottom-right-radius:3px;border-bottom-left-radius:3px}input[type=checkbox][_ngcontent-%COMP%]{margin-left:20px;margin-top:30px}.check[_ngcontent-%COMP%]{margin-left:3px;font-size:11px;color:#444;text-shadow:0 1px 0 #fff}input[type=submit][_ngcontent-%COMP%]{float:right;margin-right:20px;margin-top:20px;width:80px;height:30px;font-size:14px;font-weight:700;color:#77d4fd;background-image:linear-gradient(top left 90deg,#77d4fd 0,#6ec2e8);border-radius:30px;border:1px solid #66add6;box-shadow:0 1px 2px #0000004d,inset 0 1px 0 #77d4fd80;cursor:pointer}input[type=submit][_ngcontent-%COMP%]:hover{background-image:linear-gradient(top left 90deg,#b6e2ff 0,#6ec2e8)}input[type=submit][_ngcontent-%COMP%]:active{background-image:linear-gradient(top left 90deg,#6ec2e8 0,#b6e2ff)}button[_ngcontent-%COMP%]{float:right;margin-right:20px;margin-top:20px;width:80px;height:30px;font-size:14px;font-weight:700;border-radius:30px;border:1px solid #66add6;box-shadow:0 1px 2px #0000004d,inset 0 1px 0 #77d4fd80;cursor:pointer}.field-icon[_ngcontent-%COMP%]{float:right;margin-right:35px;margin-top:-42px;position:relative;z-index:2}"]}),i})();function S(i,o){if(1&i&&(u.TgZ(0,"div"),u.TgZ(1,"a",9),u._uU(2),u.qZA(),u.qZA()),2&i){const i=u.oxw().$implicit;u.xp6(1),u.MGl("href","https://agencialaboralproyecto.pythonanywhere.com",i.archivo,"",u.LSH),u.xp6(1),u.hij(" ",i.nombredocumento,"")}}function $(i,o){if(1&i&&(u.TgZ(0,"div"),u.YNc(1,S,3,2,"div",4),u.qZA()),2&i){const i=o.$implicit,t=u.oxw(2).$implicit;u.xp6(1),u.Q6J("ngIf",t.idaspirante==i.aspirante_idaspirante)}}function D(i,o){if(1&i&&(u.TgZ(0,"div"),u.TgZ(1,"p"),u._uU(2),u.qZA(),u.TgZ(3,"p"),u._uU(4),u.qZA(),u.TgZ(5,"p"),u._uU(6),u.qZA(),u.TgZ(7,"p"),u._uU(8),u.qZA(),u.TgZ(9,"p"),u._uU(10),u.qZA(),u.TgZ(11,"p"),u._uU(12),u.qZA(),u.TgZ(13,"div",5),u.TgZ(14,"div",6),u._UZ(15,"video",7),u.qZA(),u.qZA(),u._UZ(16,"br"),u._UZ(17,"br"),u.YNc(18,$,2,1,"div",8),u._UZ(19,"br"),u._UZ(20,"br"),u.qZA()),2&i){const i=u.oxw().$implicit,o=u.oxw();u.xp6(2),u.hij("N\xfamero de hijos: ",i.numerohijos,""),u.xp6(2),u.hij("Experiencia Laboral: ",i.experiencialaboral,""),u.xp6(2),u.hij("Experticia: ",i.experticia,""),u.xp6(2),u.hij("A\xf1os de experiencia: ",i.aniosexperiencia,""),u.xp6(2),u.hij("Fecha de Nacimiento: ",i.fechanacimiento,""),u.xp6(2),u.hij("Posibilidad de viajar: ",i.posibilidadviajar,""),u.xp6(3),u.MGl("src","https://agencialaboralproyecto.pythonanywhere.com",i.videopresentacion,"",u.LSH),u.xp6(3),u.Q6J("ngForOf",o.archivos)}}function L(i,o){if(1&i&&(u.TgZ(0,"div",3),u.YNc(1,D,21,8,"div",4),u.qZA()),2&i){const i=o.$implicit,t=u.oxw();u.xp6(1),u.Q6J("ngIf",i.usuario_idusuario==t.usuarioActual.idusuario)}}function H(i,o){1&i&&(u.TgZ(0,"span",11),u._uU(1," Campo Requerido "),u.qZA())}function G(i,o){1&i&&(u.TgZ(0,"span",11),u._uU(1," Campo Requerido "),u.qZA())}function R(i,o){1&i&&(u.TgZ(0,"span",11),u._uU(1," Campo Requerido "),u.qZA())}const X=[{path:"",children:[{path:"sesionAspirante",component:x,children:[{path:"aspiranteProfesional",component:t(8476).A},{path:"ofertaEmpleo",component:z},{path:"perfilAspirante",component:(()=>{class i{constructor(i,o,t){this.http=i,this.fb=o,this.rutaActiva=t,this.id="",this.message="",this.aspirantes=[],this.usuarios=[],this.archivos=[],this.miFormulario=this.fb.group({numerohijos:["",[e.kI.required]],experiencialaboral:["",[e.kI.required]],campolaboral:["",[e.kI.required]],experticia:["",[e.kI.required]],videopresentacion:["",[e.kI.required]],aniosexperiencia:["",[e.kI.required]],fechanacimiento:["",[e.kI.required]],posibilidadviajar:["",[e.kI.required]],profesiones_idprofesiones:["",[e.kI.required]],usuario_idusuario:this.id})}ngOnInit(){this.http.get("https://agencialaboralproyecto.pythonanywhere.com/api/userusuario/",{withCredentials:!0}).subscribe(i=>{this.message=`Hi ${i.idusuario}`,this.id=i.idusuario,this.usuarioActual=i,f.Y.authEmitter.emit(!0)},i=>{this.message="You are not logged in",f.Y.authEmitter.emit(!1)}),this.getAspirantes(),this.getUsuarios(),this.getAspirantes(),this.getArchivos()}getAspirantes(){this.http.get("https://agencialaboralproyecto.pythonanywhere.com/api/aspirantes/").subscribe(i=>{this.aspirantes=i,console.log(this.aspirantes)})}getUsuarios(){this.http.get("https://agencialaboralproyecto.pythonanywhere.com/api/usuarios/").subscribe(i=>{this.usuarios=i,console.log(this.usuarios)})}getArchivos(){this.http.get("https://agencialaboralproyecto.pythonanywhere.com/api/archivosaspirante/").subscribe(i=>{this.archivos=i,console.log(this.archivos)})}}return i.\u0275fac=function(o){return new(o||i)(u.Y36(g.eN),u.Y36(e.qu),u.Y36(p.gz))},i.\u0275cmp=u.Xpm({type:i,selectors:[["app-perfil-aspirante"]],decls:19,vars:7,consts:[[1,"contenedor"],[1,"imgperfil"],["class","contenedorInformacion",4,"ngFor","ngForOf"],[1,"contenedorInformacion"],[4,"ngIf"],[1,"mb-3","row"],[1,"col-sm-9"],["controls","",3,"src"],[4,"ngFor","ngForOf"],["download","A.pdf",3,"href"]],template:function(i,o){1&i&&(u.TgZ(0,"p"),u._uU(1,"perfil-aspirante works!"),u.qZA(),u.TgZ(2,"div",0),u._UZ(3,"div",1),u.TgZ(4,"p"),u._uU(5),u.qZA(),u.TgZ(6,"h1"),u._uU(7,"Datos Personales"),u.qZA(),u.TgZ(8,"p"),u._uU(9),u.qZA(),u.TgZ(10,"p"),u._uU(11),u.qZA(),u.TgZ(12,"p"),u._uU(13),u.qZA(),u.TgZ(14,"p"),u._uU(15),u.qZA(),u.TgZ(16,"h1"),u._uU(17,"Datos Profesionales"),u.qZA(),u.YNc(18,L,2,1,"div",2),u.qZA()),2&i&&(u.xp6(5),u.AsE(" ",o.usuarioActual.nombre," ",o.usuarioActual.apellido,""),u.xp6(4),u.hij("N\xfamero documento: ",o.usuarioActual.nodocumento,""),u.xp6(2),u.hij("Correo: ",o.usuarioActual.correo,""),u.xp6(2),u.hij("Tel\xe9fono: ",o.usuarioActual.telefono,""),u.xp6(2),u.hij("Direcci\xf3n: ",o.usuarioActual.direccion,""),u.xp6(3),u.Q6J("ngForOf",o.aspirantes))},directives:[n.sg,n.O5],styles:[".contenedor[_ngcontent-%COMP%]{border:1px solid #000}.imgperfil[_ngcontent-%COMP%]{width:100px;height:100px;border-radius:50%;background:#5cb855}.contenedorInformacion[_ngcontent-%COMP%]{border:1px solid #000}"]}),i})()},{path:"sugerencias",component:(()=>{class i{constructor(i,o,t){this.fb=i,this.http=o,this.rutaActiva=t,this.sugerencias=[],this.correo="",this.message="",this.miFormulario=this.fb.group({titulo:["",e.kI.required],descripcion:["",e.kI.required],usuario_idusuario:1,imagen:["",e.kI.required]})}ngOnInit(){this.http.get("https://agencialaboralproyecto.pythonanywhere.com/api/userusuario/",{withCredentials:!0}).subscribe(i=>{this.message=`Hi ${i.idusuario}`,this.id=i.idusuario,f.Y.authEmitter.emit(!0)},i=>{this.message="You are not logged in",f.Y.authEmitter.emit(!1)})}campoEsValido(i){return this.miFormulario.controls[i].errors&&this.miFormulario.controls[i].touched}handleFileInput(i){this.file=i.target.files[0],console.log("archivo",this.file)}createSugerencia(){console.log(this.miFormulario.value),console.log(this.miFormulario.controls.imagen.value);let i={headers:new g.WM({Accept:"application/json"})},o=new FormData;o.append("titulo",this.miFormulario.controls.titulo.value),o.append("descripcion",this.miFormulario.controls.descripcion.value),o.append("imagen",this.file),o.append("usuario_idusuario",this.id),this.http.post("https://agencialaboralproyecto.pythonanywhere.com/api/sugerencias/",o,i).subscribe(i=>console.log(i),i=>console.log(i)),alert("SUGERENCIA ENVIADA"),this.miFormulario.reset()}}return i.\u0275fac=function(o){return new(o||i)(u.Y36(e.qu),u.Y36(g.eN),u.Y36(p.gz))},i.\u0275cmp=u.Xpm({type:i,selectors:[["app-sugerencias-comentarios"]],decls:27,vars:5,consts:[[1,"row"],[1,"col"],["autocomplete","off","enctype","multipart/form-data",3,"formGroup"],[1,"mb-3","row"],[1,"col-sm-3","col-form-label"],[1,"col-sm-9"],["type","text","formControlName","titulo","placeholder","t\xedtulo",1,"form-control"],["class","form-text text-danger",4,"ngIf"],["type","text","formControlName","descripcion","placeholder","Ingresa la sugerencia...","name","","id","","cols","30","rows","10","maxlength","30",1,"form-control",3,"maxlength"],["type","file","id","cambioImagen","formControlName","imagen","placeholder","Nombres Completos",1,"form-control",3,"change"],["type","submit",1,"btn","btn-primary","float-end",3,"click"],[1,"form-text","text-danger"]],template:function(i,o){1&i&&(u.TgZ(0,"div",0),u.TgZ(1,"div",1),u.TgZ(2,"form",2),u.TgZ(3,"div",3),u.TgZ(4,"h1"),u._uU(5,"Sugerencias y Comentarios"),u.qZA(),u.qZA(),u.TgZ(6,"div",3),u.TgZ(7,"label",4),u._uU(8,"T\xedtulo"),u.qZA(),u.TgZ(9,"div",5),u._UZ(10,"input",6),u.YNc(11,H,2,0,"span",7),u.qZA(),u.qZA(),u.TgZ(12,"div",3),u.TgZ(13,"div",5),u.TgZ(14,"textarea",8),u._uU(15,"                    "),u.qZA(),u.YNc(16,G,2,0,"span",7),u.qZA(),u.qZA(),u.TgZ(17,"div",3),u.TgZ(18,"label",4),u._uU(19,"Suba una imagen"),u.qZA(),u.TgZ(20,"div",5),u.TgZ(21,"input",9),u.NdJ("change",function(i){return o.handleFileInput(i)}),u.qZA(),u.YNc(22,R,2,0,"span",7),u.qZA(),u.qZA(),u.TgZ(23,"div",0),u.TgZ(24,"div",1),u.TgZ(25,"button",10),u.NdJ("click",function(){return o.createSugerencia()}),u._uU(26," Guardar "),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA()),2&i&&(u.xp6(2),u.Q6J("formGroup",o.miFormulario),u.xp6(9),u.Q6J("ngIf",o.campoEsValido("titulo")),u.xp6(3),u.Q6J("maxlength",30),u.xp6(2),u.Q6J("ngIf",o.campoEsValido("descripcion")),u.xp6(6),u.Q6J("ngIf",o.campoEsValido("imagen")))},directives:[e._Y,e.JL,e.sg,e.Fj,e.JJ,e.u,n.O5,e.nD],styles:['*[_ngcontent-%COMP%]{box-sizing:border-box;margin:2px}input[type=text][_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{width:100%;padding:8px;border:1px solid #ccc;border-radius:4px;resize:vertical}label[_ngcontent-%COMP%]{padding:8px 8px 0 0;display:inline-block}input[type=submit][_ngcontent-%COMP%]{background-color:#77d4fd;width:50%;color:#fff;padding:12px 20px;border:none;border-radius:4px;margin-right:300px;margin-left:auto;margin-top:20px;cursor:pointer;float:right;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px}#lower[_ngcontent-%COMP%]{background:#ecf2f5;width:100%;height:69px;margin-top:20px;box-shadow:inset 0 1px 1px #fff;border-top:1px solid #ccc;border-bottom-right-radius:3px;border-bottom-left-radius:3px}input[type=submit][_ngcontent-%COMP%]:hover{background-color:#77d4fd}#container[_ngcontent-%COMP%]{width:auto;height:auto;top:auto;left:auto;margin:20px;background:#fff;border:1px solid #ccc;box-shadow:0 1px 2px #0000001a;border-radius:5px;background-color:#f2f2f2;padding:20px;-webkit-border-radius:5px;-moz-border-radius:5px;-ms-border-radius:5px;-o-border-radius:5px}.col-25[_ngcontent-%COMP%]{width:25%}.col-25[_ngcontent-%COMP%], .col-75[_ngcontent-%COMP%]{float:left;margin-top:6px}.col-75[_ngcontent-%COMP%]{width:75%}.row[_ngcontent-%COMP%]:after{content:"";display:table;clear:both}@media screen and (max-width: 600px){.col-25[_ngcontent-%COMP%], .col-75[_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%]{width:100%;margin-top:0}}']}),i})()}]},{path:"registroAspirante",component:Q},{path:"registroFullAspirante",component:Y},{path:"**",redirectTo:"sesionAspirante"}]}];let B=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=u.oAB({type:i}),i.\u0275inj=u.cJS({imports:[[p.Bz.forChild(X)]]}),i})(),W=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=u.oAB({type:i}),i.\u0275inj=u.cJS({imports:[[n.ez,e.UX,e.u5,r.xu,a.g0,s.ot,c.SJ,l.Ps,d.ie,B,p.Bz]]}),i})()}}]);