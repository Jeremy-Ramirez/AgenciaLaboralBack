(self.webpackChunkapp=self.webpackChunkapp||[]).push([[711],{5711:(o,t,i)=>{"use strict";i.r(t),i.d(t,{AspiranteModule:()=>K});var e=i(3679),n=i(8583),r=i(5072),a=i(2522),s=i(1095),c=i(4490),p=i(6627),l=i(9992),d=i(9763),u=i(7716),g=i(1841),m=i(8002),h=i(2888),f=i(4219);function b(o,t){if(1&o){const o=u.EpF();u.TgZ(0,"button",13),u.NdJ("click",function(){return u.CHM(o),u.oxw(),u.MAs(2).toggle()}),u.TgZ(1,"mat-icon",14),u._uU(2,"menu"),u.qZA(),u.qZA()}}let Z=(()=>{class o{constructor(o,t,i){this.breakpointObserver=o,this.rutaActiva=t,this.http=i,this.authenticated=!1,this.isHandset$=this.breakpointObserver.observe(r.u3.Handset).pipe((0,m.U)(o=>o.matches),(0,h.d)())}ngOnInit(){f.Y.authEmitter.subscribe(o=>{this.authenticated=o},this.getUsuarioActual())}getUsuarioActual(){console.log(this.usuarioActual),this.http.get("https://agencialaboralproyecto.pythonanywhere.com/api/userusuario/",{withCredentials:!0}).subscribe(o=>{console.log(o),this.id=o.idusuario,f.Y.authEmitter.emit(!0)},o=>{f.Y.authEmitter.emit(!1)})}logout(){this.http.post("https://agencialaboralproyecto.pythonanywhere.com/api/logoutusuario/",{},{withCredentials:!0}).subscribe(()=>this.authenticated=!1)}}return o.\u0275fac=function(t){return new(t||o)(u.Y36(r.Yg),u.Y36(d.gz),u.Y36(g.eN))},o.\u0275cmp=u.Xpm({type:o,selectors:[["app-menu-lateral"]],decls:39,vars:12,consts:[[1,"sidenav-container"],["fixedInViewport","",1,"sidenav",3,"mode","opened"],["drawer",""],[1,"nav","nav-pills","nav-stacked"],["mat-list-item","","routerLink","/aspirante/sesionAspirante/perfilAspirante"],["mat-list-item","","routerLink","/aspirante/sesionAspirante/aspiranteProfesional"],["mat-list-item","","routerLink","/aspirante/sesionAspirante/sugerencias"],[1,"active"],["mat-list-item","","routerLink","/aspirante/sesionAspirante/ofertaEmpleo"],["mat-list-item",""],["mat-list-item","","routerLink","/",3,"click"],["color","primary"],["type","button","aria-label","Toggle sidenav","mat-icon-button","",3,"click",4,"ngIf"],["type","button","aria-label","Toggle sidenav","mat-icon-button","",3,"click"],["aria-label","Side nav toggle icon"]],template:function(o,t){1&o&&(u.TgZ(0,"mat-sidenav-container",0),u.TgZ(1,"mat-sidenav",1,2),u.ALo(3,"async"),u.ALo(4,"async"),u.ALo(5,"async"),u.TgZ(6,"mat-toolbar"),u._uU(7,"Menu"),u.qZA(),u.TgZ(8,"mat-nav-list"),u.TgZ(9,"ul",3),u.TgZ(10,"li"),u.TgZ(11,"a",4),u._uU(12,"Perfil"),u.qZA(),u.qZA(),u.TgZ(13,"li"),u.TgZ(14,"a",4),u._uU(15,"Datos Personales"),u.qZA(),u.qZA(),u.TgZ(16,"li"),u.TgZ(17,"a",5),u._uU(18,"Datos Profesionales"),u.qZA(),u.qZA(),u.TgZ(19,"li"),u.TgZ(20,"a",6),u._uU(21,"Enviar Sugerencias"),u.qZA(),u.qZA(),u.TgZ(22,"li",7),u.TgZ(23,"a",8),u._uU(24,"Ofertas de empleo"),u.qZA(),u.qZA(),u.TgZ(25,"li"),u.TgZ(26,"a",9),u._uU(27,"Configuraci\xf3n"),u.qZA(),u.qZA(),u.TgZ(28,"li"),u.TgZ(29,"a",10),u.NdJ("click",function(){return t.logout()}),u._uU(30,"Salir"),u.qZA(),u.qZA(),u.qZA(),u._UZ(31,"br"),u.qZA(),u.qZA(),u.TgZ(32,"mat-sidenav-content"),u.TgZ(33,"mat-toolbar",11),u.YNc(34,b,3,0,"button",12),u.ALo(35,"async"),u.TgZ(36,"span"),u._uU(37,"app"),u.qZA(),u.qZA(),u._UZ(38,"router-outlet"),u.qZA(),u.qZA()),2&o&&(u.xp6(1),u.Q6J("mode",u.lcZ(4,6,t.isHandset$)?"over":"side")("opened",!1===u.lcZ(5,8,t.isHandset$)),u.uIk("role",u.lcZ(3,4,t.isHandset$)?"dialog":"navigation"),u.xp6(33),u.Q6J("ngIf",u.lcZ(35,10,t.isHandset$)))},directives:[c.TM,c.JX,a.Ye,l.Hk,l.Tg,d.yS,c.Rh,n.O5,d.lC,s.lW,p.Hw],pipes:[n.Ov],styles:[".sidenav-container[_ngcontent-%COMP%]{height:100%}.sidenav[_ngcontent-%COMP%]{width:200px}.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%]{background:inherit}.mat-toolbar.mat-primary[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1}"]}),o})(),x=(()=>{class o{constructor(o){this.http=o,this.id=""}ngOnInit(){}}return o.\u0275fac=function(t){return new(t||o)(u.Y36(g.eN))},o.\u0275cmp=u.Xpm({type:o,selectors:[["app-sesion-aspirante"]],decls:1,vars:0,template:function(o,t){1&o&&u._UZ(0,"app-menu-lateral")},directives:[Z],styles:[".row.content[_ngcontent-%COMP%]{height:1500px}.container-fluid[_ngcontent-%COMP%]{padding-top:80px}.sidenav[_ngcontent-%COMP%]{background-color:#f1f1f1;padding:15px}footer[_ngcontent-%COMP%]{background-color:#555;color:#fff;padding:15px}@media screen and (max-width: 767px){.sidenav[_ngcontent-%COMP%]{padding:15px}.row.content[_ngcontent-%COMP%], .sidenav[_ngcontent-%COMP%]{height:auto}}"]}),o})();function v(o,t){1&o&&(u.TgZ(0,"small",21),u._uU(1," Campo Requerido "),u.qZA())}function _(o,t){if(1&o&&(u.TgZ(0,"option",22),u._uU(1),u.qZA()),2&o){const o=t.$implicit;u.s9C("value",o.idtipodocumento),u.xp6(1),u.hij(" ",o.descripcion," ")}}function A(o,t){1&o&&(u.TgZ(0,"small",21),u._uU(1," Campo Requerido "),u.qZA())}function q(o,t){1&o&&(u.TgZ(0,"small",21),u._uU(1," Escriba un n\xfamero de documento v\xe1lido "),u.qZA())}function T(o,t){1&o&&(u.TgZ(0,"small",21),u._uU(1," Campo requerido "),u.qZA())}function y(o,t){1&o&&(u.TgZ(0,"small",21),u._uU(1," Campo requerido "),u.qZA())}function C(o,t){1&o&&(u.TgZ(0,"small",21),u._uU(1," Campo requerido "),u.qZA())}function w(o,t){1&o&&(u.TgZ(0,"small",21),u._uU(1," Campo requerido "),u.qZA())}function O(o,t){if(1&o&&(u.TgZ(0,"option",22),u._uU(1),u.qZA()),2&o){const o=t.$implicit;u.s9C("value",o.idprovincia),u.xp6(1),u.hij(" ",o.nombreprovincia," ")}}function k(o,t){1&o&&(u.TgZ(0,"small",21),u._uU(1," Seleccione una provincia "),u.qZA())}function U(o,t){if(1&o&&(u.TgZ(0,"option",22),u._uU(1),u.qZA()),2&o){const o=t.$implicit;u.s9C("value",o.idciudad),u.xp6(1),u.hij(" ",o.nombreciudad," ")}}function N(o,t){1&o&&(u.TgZ(0,"small",21),u._uU(1," Seleccione una ciudad "),u.qZA())}function P(o,t){1&o&&(u.TgZ(0,"small",21),u._uU(1," Escriba un correo v\xe1lido "),u.qZA())}function M(o,t){if(1&o&&(u.TgZ(0,"option",22),u._uU(1),u.qZA()),2&o){const o=t.$implicit;u.MGl("value"," ",o.idgenero,""),u.xp6(1),u.hij(" ",o.genero," ")}}let I=(()=>{class o{constructor(o,t){this.http=o,this.fb=t,this.generos=[],this.provincias=[],this.ciudades=[],this.tipoDocumento=[],this.miFormulario=this.fb.group({nombreusuario:["",[e.kI.required]],contrasenia:["",[e.kI.required]],tipodocumento_idtipodocumento:["",e.kI.required],nodocumento:["",[e.kI.required,e.kI.minLength(10)]],nombre:["",[e.kI.required]],apellido:["",[e.kI.required]],correo:["",[e.kI.required,e.kI.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+[.][a-z]{2,3}$")]],telefono:["",[e.kI.required,e.kI.minLength(10)]],direccion:["",[e.kI.required]],estadoCuenta:null,ciudad_idciudad:["",[e.kI.required]],estadocivil_idestadocivil:1,genero_idgenero:["",[e.kI.required]],provincia_idprovincia:["",[e.kI.required]],rol_idrol:2}),this.getGenero(),this.getProvincias(),this.getCiudades(),this.getTipodocumento()}ngOnInit(){}get tipoDocumentoNoValido(){return this.miFormulario.get("tipoDocumento").invalid&&this.miFormulario.get("tipoDocumento").touched}get usuarioNoValido(){return this.miFormulario.get("nombreusuario").invalid&&this.miFormulario.get("nombreusuario").touched}get telefonoNoValido(){return this.miFormulario.get("telefono").invalid&&this.miFormulario.get("telefono").touched}get direccionNoValido(){return this.miFormulario.get("direccion").invalid&&this.miFormulario.get("direccion").touched}get numDocumentoNoValido(){return this.miFormulario.get("nodocumento").invalid&&this.miFormulario.get("nodocumento").touched}get nombresNoValido(){return this.miFormulario.get("nombre").invalid&&this.miFormulario.get("nombre").touched}get apellidosNoValido(){return this.miFormulario.get("apellido").invalid&&this.miFormulario.get("apellido").touched}get provinciaNoValido(){return this.miFormulario.get("provincia_idprovincia").invalid&&this.miFormulario.get("provincia_idprovincia").touched}get ciudadNoValido(){return this.miFormulario.get("ciudad_idciudad").invalid&&this.miFormulario.get("ciudad_idciudad").touched}get correoNoValido(){return this.miFormulario.get("correo").invalid&&this.miFormulario.get("correo").touched}get"contrase\xf1aNoValido"(){return this.miFormulario.get("contrasenia").invalid&&this.miFormulario.get("contrasenia").touched}get confirmacionNoValido(){return this.miFormulario.get("confirmacion").invalid&&this.miFormulario.get("confirmacion").touched}get generoNoValido(){return this.miFormulario.get("genero_idgenero").invalid&&this.miFormulario.get("genero_idgenero").touched}getTipodocumento(){this.http.get("https://agencialaboralproyecto.pythonanywhere.com/api/tipodocumento/").subscribe(o=>{this.tipoDocumento=o,console.log(this.tipoDocumento)})}getGenero(){this.http.get("https://agencialaboralproyecto.pythonanywhere.com/api/genero/").subscribe(o=>{this.generos=o,console.log(this.generos)})}getProvincias(){this.http.get("https://agencialaboralproyecto.pythonanywhere.com/api/provincias/").subscribe(o=>{this.provincias=o,console.log(this.provincias)})}getCiudades(){this.http.get("https://agencialaboralproyecto.pythonanywhere.com/api/ciudades/").subscribe(o=>{this.ciudades=o,console.log(this.ciudades)})}guardar(){if(this.miFormulario.invalid)return Object.values(this.miFormulario.controls).forEach(o=>{o.markAsTouched()});console.log(this.miFormulario.value),this.http.post("https://agencialaboralproyecto.pythonanywhere.com/api/usuarios/",this.miFormulario.value).subscribe(o=>console.log(o),o=>console.log(o)),alert("USUARIO CREADO"),window.location.href="/aspirante/registroAspirante"}}return o.\u0275fac=function(t){return new(t||o)(u.Y36(g.eN),u.Y36(e.qu))},o.\u0275cmp=u.Xpm({type:o,selectors:[["app-registro-full-aspirante"]],decls:79,vars:33,consts:[["id","container"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"mb-3","row"],[1,"col-sm-3","col-form-label"],[1,"col-sm-9"],["type","text","formControlName","nombreusuario","placeholder","Numero",1,"form-control"],["class","text-danger",4,"ngIf"],["name","doc","id","doc","formControlName","tipodocumento_idtipodocumento"],[3,"value",4,"ngFor","ngForOf"],["type","text","formControlName","nodocumento","placeholder","Numero",1,"form-control"],["type","text","formControlName","nombre","placeholder","Nombres Completos",1,"form-control"],["type","text","formControlName","apellido","placeholder","Apellidos",1,"form-control"],["type","text","formControlName","telefono","placeholder","Tel\xe9fono",1,"form-control"],["type","text","formControlName","direccion","placeholder","Direcci\xf3n",1,"form-control"],["formControlName","provincia_idprovincia"],["formControlName","ciudad_idciudad"],["type","text","formControlName","correo","placeholder","correo",1,"form-control"],["type","password","formControlName","contrasenia","placeholder","contrase\xf1a",1,"form-control"],["formControlName","genero_idgenero"],["id","lower"],["type","submit",1,"btn","btn-primary","float-end"],[1,"text-danger"],[3,"value"]],template:function(o,t){1&o&&(u.TgZ(0,"div",0),u.TgZ(1,"form",1),u.NdJ("ngSubmit",function(){return t.guardar()}),u.TgZ(2,"div",2),u.TgZ(3,"label",3),u._uU(4,"Usuario"),u.qZA(),u.TgZ(5,"div",4),u._UZ(6,"input",5),u.YNc(7,v,2,0,"small",6),u.qZA(),u.qZA(),u.TgZ(8,"div",2),u.TgZ(9,"label",3),u._uU(10,"Tipo de Documento"),u.qZA(),u.TgZ(11,"div",4),u.TgZ(12,"select",7),u.YNc(13,_,2,2,"option",8),u.qZA(),u.YNc(14,A,2,0,"small",6),u.qZA(),u.qZA(),u.TgZ(15,"div",2),u.TgZ(16,"label",3),u._uU(17,"No de Documento"),u.qZA(),u.TgZ(18,"div",4),u._UZ(19,"input",9),u.YNc(20,q,2,0,"small",6),u.qZA(),u.qZA(),u.TgZ(21,"div",2),u.TgZ(22,"label",3),u._uU(23,"Nombres Completos"),u.qZA(),u.TgZ(24,"div",4),u._UZ(25,"input",10),u.YNc(26,T,2,0,"small",6),u.qZA(),u.qZA(),u.TgZ(27,"div",2),u.TgZ(28,"label",3),u._uU(29,"Apellidos Completos"),u.qZA(),u.TgZ(30,"div",4),u._UZ(31,"input",11),u.YNc(32,y,2,0,"small",6),u.qZA(),u.qZA(),u.TgZ(33,"div",2),u.TgZ(34,"label",3),u._uU(35,"Tel\xe9fono"),u.qZA(),u.TgZ(36,"div",4),u._UZ(37,"input",12),u.YNc(38,C,2,0,"small",6),u.qZA(),u.qZA(),u.TgZ(39,"div",2),u.TgZ(40,"label",3),u._uU(41,"Direcci\xf3n"),u.qZA(),u.TgZ(42,"div",4),u._UZ(43,"input",13),u.YNc(44,w,2,0,"small",6),u.qZA(),u.qZA(),u.TgZ(45,"div",2),u.TgZ(46,"label",3),u._uU(47,"Povincia"),u.qZA(),u.TgZ(48,"div",4),u.TgZ(49,"select",14),u.YNc(50,O,2,2,"option",8),u.qZA(),u.YNc(51,k,2,0,"small",6),u.qZA(),u.qZA(),u.TgZ(52,"div",2),u.TgZ(53,"label",3),u._uU(54,"Ciudad "),u.qZA(),u.TgZ(55,"div",4),u.TgZ(56,"select",15),u.YNc(57,U,2,2,"option",8),u.qZA(),u.YNc(58,N,2,0,"small",6),u.qZA(),u.qZA(),u.TgZ(59,"div",2),u.TgZ(60,"label",3),u._uU(61,"Correo "),u.qZA(),u.TgZ(62,"div",4),u._UZ(63,"input",16),u.YNc(64,P,2,0,"small",6),u.qZA(),u.qZA(),u.TgZ(65,"div",2),u.TgZ(66,"label",3),u._uU(67,"Contrase\xf1a "),u.qZA(),u.TgZ(68,"div",4),u._UZ(69,"input",17),u.qZA(),u.qZA(),u.TgZ(70,"div",2),u.TgZ(71,"label",3),u._uU(72,"G\xe9nero "),u.qZA(),u.TgZ(73,"div",4),u.TgZ(74,"select",18),u.YNc(75,M,2,2,"option",8),u.qZA(),u.qZA(),u.qZA(),u.TgZ(76,"div",19),u.TgZ(77,"button",20),u._uU(78," Registrarse "),u.qZA(),u.qZA(),u.qZA(),u.qZA()),2&o&&(u.xp6(1),u.Q6J("formGroup",t.miFormulario),u.xp6(5),u.ekj("is-invalid",t.usuarioNoValido),u.xp6(1),u.Q6J("ngIf",t.usuarioNoValido),u.xp6(6),u.Q6J("ngForOf",t.tipoDocumento),u.xp6(1),u.Q6J("ngIf",t.usuarioNoValido),u.xp6(5),u.ekj("is-invalid",t.numDocumentoNoValido),u.xp6(1),u.Q6J("ngIf",t.numDocumentoNoValido),u.xp6(5),u.ekj("is-invalid",t.nombresNoValido),u.xp6(1),u.Q6J("ngIf",t.nombresNoValido),u.xp6(5),u.ekj("is-invalid",t.apellidosNoValido),u.xp6(1),u.Q6J("ngIf",t.apellidosNoValido),u.xp6(5),u.ekj("is-invalid",t.telefonoNoValido),u.xp6(1),u.Q6J("ngIf",t.telefonoNoValido),u.xp6(5),u.ekj("is-invalid",t.direccionNoValido),u.xp6(1),u.Q6J("ngIf",t.direccionNoValido),u.xp6(5),u.ekj("is-invalid",t.provinciaNoValido),u.xp6(1),u.Q6J("ngForOf",t.provincias),u.xp6(1),u.Q6J("ngIf",t.provinciaNoValido),u.xp6(5),u.ekj("is-invalid",t.ciudadNoValido),u.xp6(1),u.Q6J("ngForOf",t.ciudades),u.xp6(1),u.Q6J("ngIf",t.ciudadNoValido),u.xp6(5),u.ekj("is-invalid",t.correoNoValido),u.xp6(1),u.Q6J("ngIf",t.correoNoValido),u.xp6(11),u.Q6J("ngForOf",t.generos))},directives:[e._Y,e.JL,e.sg,e.Fj,e.JJ,e.u,n.O5,e.EJ,n.sg,e.YN,e.Kr],styles:['*[_ngcontent-%COMP%]{box-sizing:border-box;margin:2px}input[type=text][_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{width:100%;padding:8px;border:1px solid #ccc;border-radius:4px;resize:vertical}label[_ngcontent-%COMP%]{padding:8px 8px 0 0;display:inline-block}input[type=submit][_ngcontent-%COMP%]{background-color:#77d4fd;width:50%;color:#fff;padding:12px 20px;border:none;border-radius:4px;margin-right:300px;margin-left:auto;margin-top:20px;cursor:pointer;float:right;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px}#lower[_ngcontent-%COMP%]{background:#ecf2f5;width:100%;height:69px;margin-top:20px;box-shadow:inset 0 1px 1px #fff;border-top:1px solid #ccc;border-bottom-right-radius:3px;border-bottom-left-radius:3px}input[type=submit][_ngcontent-%COMP%]:hover{background-color:#77d4fd}#container[_ngcontent-%COMP%]{width:auto;height:auto;top:auto;left:auto;margin:20px;background:#fff;border:1px solid #ccc;box-shadow:0 1px 2px #0000001a;border-radius:5px;background-color:#f2f2f2;padding:20px;-webkit-border-radius:5px;-moz-border-radius:5px;-ms-border-radius:5px;-o-border-radius:5px}.col-25[_ngcontent-%COMP%]{width:25%}.col-25[_ngcontent-%COMP%], .col-75[_ngcontent-%COMP%]{float:left;margin-top:6px}.col-75[_ngcontent-%COMP%]{width:75%}.row[_ngcontent-%COMP%]:after{content:"";display:table;clear:both}@media screen and (max-width: 600px){.col-25[_ngcontent-%COMP%], .col-75[_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%]{width:100%;margin-top:0}}']}),o})(),F=(()=>{class o{constructor(o){this.httpClient=o,this.getAspirantessolicitados()}getAspirantessolicitados(){return this.httpClient.get("https://agencialaboralproyecto.pythonanywhere.com/api/aspirantessolicitados/")}}return o.\u0275fac=function(t){return new(t||o)(u.LFG(g.eN))},o.\u0275prov=u.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),Y=(()=>{class o{constructor(o){this.httpClient=o,this.getSolicitudes()}getSolicitudes(){return this.httpClient.get("https://agencialaboralproyecto.pythonanywhere.com/api/solicitudes/")}loginUsuario(){return this.httpClient.get("https://agencialaboralproyecto.pythonanywhere.com/api/userusuario/",{withCredentials:!0})}}return o.\u0275fac=function(t){return new(t||o)(u.LFG(g.eN))},o.\u0275prov=u.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();const J=["empleos"];let j=(()=>{class o{constructor(o,t){this._aspirantessolicitadosService=o,this._solicitudesService=t,this.aspirantessolicitados=[],this.aspirantessolicitados2=[],this.idAspirante="",this.inner=""}ngOnInit(){this._aspirantessolicitadosService.getAspirantessolicitados().subscribe(o=>{this.aspirantessolicitados=o,this.aspirantessolicitados2=o,this._solicitudesService.loginUsuario().subscribe(o=>{this.byid(o),this.addhtml()})})}addhtml(){for(let o=0;o<this.aspirantessolicitados2.length;o++)this.aspirantessolicitados2[o].aspirante_idaspirante.idaspirante==this.idAspirante&&(this.inner+=`\n        <div class="empleo" >\n        <h2 ><a >${this.aspirantessolicitados2[o].solicitud_idsolicitud.profesion}</a></h2>                \n        <p>Descripcion, Ciudad, Provincia</p>\n        <div class="card" style="width:400px">\n        <div class="card-body"> \n            <p class="card-text">${this.aspirantessolicitados2[o].solicitud_idsolicitud.descripcioncargo}</p>\n            <p class="card-text">${this.aspirantessolicitados2[o].solicitud_idsolicitud.representante_idrepresentante.empresa_idempresa.nombrecomercial}</p>\n            <button type="button">Aceptar</button>            \n            <button type="button">Eliminar</button>\n        </div>\n        </div>\n    </div>\n  \n    `);this.aspirantessolicitadosHt.nativeElement.innerHTML=this.inner}byid(o){for(let t=0;t<this.aspirantessolicitados.length;t++)this.aspirantessolicitados[t].aspirante_idaspirante.usuario_idusuario.idusuario==o.idusuario&&(this.idAspirante=this.aspirantessolicitados[t].aspirante_idaspirante.idaspirante)}}return o.\u0275fac=function(t){return new(t||o)(u.Y36(F),u.Y36(Y))},o.\u0275cmp=u.Xpm({type:o,selectors:[["app-oferta-empleo"]],viewQuery:function(o,t){if(1&o&&u.Gf(J,5),2&o){let o;u.iGM(o=u.CRH())&&(t.aspirantessolicitadosHt=o.first)}},decls:10,vars:0,consts:[[1,"col-sm-9"],[1,"inner-addon","right-addon"],[1,"glyphicon","glyphicon-search"],["type","text","placeholder","Search",1,"form-control"],[1,"contenedor-empleo"],[1,"empleo"],["empleos",""]],template:function(o,t){1&o&&(u.TgZ(0,"div",0),u.TgZ(1,"h4"),u.TgZ(2,"small"),u._uU(3,"OFERTAS DE EMPLEO"),u.qZA(),u.qZA(),u.TgZ(4,"div",1),u._UZ(5,"i",2),u._UZ(6,"input",3),u.qZA(),u.TgZ(7,"div",4),u._UZ(8,"div",5,6),u.qZA(),u.qZA())},styles:[".inner-addon[_ngcontent-%COMP%]{position:relative}.inner-addon[_ngcontent-%COMP%]   .glyphicon[_ngcontent-%COMP%]{position:absolute;padding:10px;pointer-events:none}.left-addon[_ngcontent-%COMP%]   .glyphicon[_ngcontent-%COMP%]{left:0}.right-addon[_ngcontent-%COMP%]   .glyphicon[_ngcontent-%COMP%]{right:0}.left-addon[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding-left:30px}.right-addon[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding-right:30px}.empleo[_ngcontent-%COMP%]{border:30px;padding:20px;background-color:#ddeffa;border-radius:20px;-webkit-border-radius:20px;-moz-border-radius:20px;-ms-border-radius:20px;-o-border-radius:20px}"]}),o})();function V(o){this.message=o}(V.prototype=new Error).name="InvalidCharacterError";var E="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(o){var t=String(o).replace(/=+$/,"");if(t.length%4==1)throw new V("'atob' failed: The string to be decoded is not correctly encoded.");for(var i,e,n=0,r=0,a="";e=t.charAt(r++);~e&&(i=n%4?64*i+e:e,n++%4)?a+=String.fromCharCode(255&i>>(-2*n&6)):0)e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(e);return a};function z(o){var t=o.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!"}try{return function(o){return decodeURIComponent(E(o).replace(/(.)/g,function(o,t){var i=t.charCodeAt(0).toString(16).toUpperCase();return i.length<2&&(i="0"+i),"%"+i}))}(t)}catch(o){return E(t)}}function S(o){this.message=o}(S.prototype=new Error).name="InvalidTokenError";let D=(()=>{class o{constructor(o,t,i,e){this.fb=o,this.http=t,this.rutaActiva=i,this.router=e,this.id="",this.httpOptions={headers:new g.WM({"Content-Type":"Application/json"})}}ngOnInit(){this.miFormulario=this.fb.group({correo:["",e.kI.required],contrasenia:["",[e.kI.required]]})}getDecodedAccessToken(o){try{return function(o,t){if("string"!=typeof o)throw new S("Invalid token specified");var i=!0===(t=t||{}).header?0:1;try{return JSON.parse(z(o.split(".")[i]))}catch(o){throw new S("Invalid token specified: "+o.message)}}(o)}catch(Error){return null}}login(){console.log(this.miFormulario.value),this.http.post("https://agencialaboralproyecto.pythonanywhere.com/api/loginusuario/",this.miFormulario.getRawValue(),{withCredentials:!0}).subscribe(o=>{console.log(o.jwt),console.log(this.getDecodedAccessToken(o.jwt)),this.id=this.getDecodedAccessToken(o.jwt).id,this.router.navigate(["/aspirante/sesionAspirante/perfilAspirante"])})}logout(){localStorage.removeItem("currentUser")}}return o.\u0275fac=function(t){return new(t||o)(u.Y36(e.qu),u.Y36(g.eN),u.Y36(d.gz),u.Y36(d.F0))},o.\u0275cmp=u.Xpm({type:o,selectors:[["app-registro-aspirante"]],decls:17,vars:1,consts:[["id","container"],["type","button","routerLink","/register","aria-label","Close",1,"close"],["aria-hidden","true"],["autocomplete","off","enctype","multipart/form-data",3,"formGroup"],["for","name"],["type","name","formControlName","correo"],["for","username"],["href","#"],["type","password","formControlName","contrasenia"],["id","lower"],["type","submit","value","Login ",3,"click"],["type","submit","routerLink","/aspirante/registroFullAspirante","value","Register"]],template:function(o,t){1&o&&(u.TgZ(0,"div",0),u.TgZ(1,"button",1),u.TgZ(2,"span",2),u._uU(3,"\xd7"),u.qZA(),u.qZA(),u.TgZ(4,"form",3),u.TgZ(5,"label",4),u._uU(6,"Correo electr\xf3nico:"),u.qZA(),u._UZ(7,"input",5),u.TgZ(8,"label",6),u._uU(9,"Contrase\xf1a:"),u.qZA(),u.TgZ(10,"p"),u.TgZ(11,"a",7),u._uU(12,"Olvidaste tu contrase\xf1a?"),u.qZA(),u._UZ(13,"input",8),u.qZA(),u.TgZ(14,"div",9),u.TgZ(15,"input",10),u.NdJ("click",function(){return t.login()}),u.qZA(),u._UZ(16,"input",11),u.qZA(),u.qZA(),u.qZA()),2&o&&(u.xp6(4),u.Q6J("formGroup",t.miFormulario))},directives:[d.rH,e._Y,e.JL,e.sg,e.Fj,e.JJ,e.u],styles:["body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{width:100%;height:100%;font-family:sans-serif;color:#444;-webkit-font-smoothing:antialiased;background:#f0f0f0}#container[_ngcontent-%COMP%]{position:fixed;width:340px;height:280px;top:50%;left:50%;margin-top:-140px;margin-left:-170px;background:#fff;border-radius:3px;border:1px solid #ccc;box-shadow:0 1px 2px #0000001a;-webkit-animation-name:bounceIn;-webkit-animation-fill-mode:both;-webkit-animation-duration:1s;-webkit-animation-iteration-count:1;-webkit-animation-timing-function:linear;-moz-animation-name:bounceIn;-moz-animation-fill-mode:both;-moz-animation-duration:1s;-moz-animation-iteration-count:1;-moz-animation-timing-function:linear;animation-name:bounceIn;animation-fill-mode:both;animation-duration:1s;animation-iteration-count:1;animation-timing-function:linear}form[_ngcontent-%COMP%]{margin:20px auto 0}label[_ngcontent-%COMP%]{color:#555;display:inline-block;margin-left:18px;padding-top:10px;font-size:14px}p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:11px;color:#aaa;float:right;margin-top:-13px;margin-right:20px;transition:all .4s ease}p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#555}input[_ngcontent-%COMP%]{font-family:sans-serif;font-size:12px;outline:none}input[type=name][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%]{color:#777;padding-left:10px;margin:12px 10px 10px 18px;width:290px;height:35px;border:1px solid #c7d0d2;border-radius:2px;box-shadow:inset 0 1.5px 3px #bebebe66,0 0 0 5px #f5f7f8;transition:all .4s ease}input[type=name][_ngcontent-%COMP%]:hover, input[type=password][_ngcontent-%COMP%]:hover{border:1px solid #b6bfc0;box-shadow:inset 0 1.5px 3px #bebebeb3,0 0 0 5px #f5f7f8}input[type=name][_ngcontent-%COMP%]:focus, input[type=password][_ngcontent-%COMP%]:focus{border:1px solid #a8c9e4;box-shadow:inset 0 1.5px 3px #bebebe66,0 0 0 5px #e6f2f9}#lower[_ngcontent-%COMP%]{background:#ecf2f5;width:100%;height:69px;margin-top:20px;box-shadow:inset 0 1px 1px #fff;border-top:1px solid #ccc;border-bottom-right-radius:3px;border-bottom-left-radius:3px}input[type=checkbox][_ngcontent-%COMP%]{margin-left:20px;margin-top:30px}.check[_ngcontent-%COMP%]{margin-left:3px;font-size:11px;color:#444;text-shadow:0 1px 0 #fff}input[type=submit][_ngcontent-%COMP%]{float:right;margin-right:20px;margin-top:20px;width:80px;height:30px;font-size:14px;font-weight:700;color:#77d4fd;background-image:linear-gradient(top left 90deg,#77d4fd 0,#6ec2e8);border-radius:30px;border:1px solid #66add6;box-shadow:0 1px 2px #0000004d,inset 0 1px 0 #77d4fd80;cursor:pointer}input[type=submit][_ngcontent-%COMP%]:hover{background-image:linear-gradient(top left 90deg,#b6e2ff 0,#6ec2e8)}input[type=submit][_ngcontent-%COMP%]:active{background-image:linear-gradient(top left 90deg,#6ec2e8 0,#b6e2ff)}"]}),o})();function Q(o,t){if(1&o&&(u.TgZ(0,"div"),u.TgZ(1,"a",9),u._uU(2),u.qZA(),u.qZA()),2&o){const o=u.oxw().$implicit;u.xp6(1),u.MGl("href","https://agencialaboralproyecto.pythonanywhere.com",o.archivo,"",u.LSH),u.xp6(1),u.hij(" ",o.nombredocumento,"")}}function L(o,t){if(1&o&&(u.TgZ(0,"div"),u.YNc(1,Q,3,2,"div",4),u.qZA()),2&o){const o=t.$implicit,i=u.oxw(2).$implicit;u.xp6(1),u.Q6J("ngIf",i.idaspirante==o.aspirante_idaspirante)}}function $(o,t){if(1&o&&(u.TgZ(0,"div"),u.TgZ(1,"p"),u._uU(2),u.qZA(),u.TgZ(3,"p"),u._uU(4),u.qZA(),u.TgZ(5,"p"),u._uU(6),u.qZA(),u.TgZ(7,"p"),u._uU(8),u.qZA(),u.TgZ(9,"p"),u._uU(10),u.qZA(),u.TgZ(11,"p"),u._uU(12),u.qZA(),u.TgZ(13,"div",5),u.TgZ(14,"div",6),u._UZ(15,"video",7),u.qZA(),u.qZA(),u._UZ(16,"br"),u._UZ(17,"br"),u.YNc(18,L,2,1,"div",8),u._UZ(19,"br"),u._UZ(20,"br"),u.qZA()),2&o){const o=u.oxw().$implicit,t=u.oxw();u.xp6(2),u.hij("N\xfamero de hijos: ",o.numerohijos,""),u.xp6(2),u.hij("Experiencia Laboral: ",o.experiencialaboral,""),u.xp6(2),u.hij("Experticia: ",o.experticia,""),u.xp6(2),u.hij("A\xf1os de experiencia: ",o.aniosexperiencia,""),u.xp6(2),u.hij("Fecha de Nacimiento: ",o.fechanacimiento,""),u.xp6(2),u.hij("Posibilidad de viajar: ",o.posibilidadviajar,""),u.xp6(3),u.MGl("src","https://agencialaboralproyecto.pythonanywhere.com",o.videopresentacion,"",u.LSH),u.xp6(3),u.Q6J("ngForOf",t.archivos)}}function G(o,t){if(1&o&&(u.TgZ(0,"div",3),u.YNc(1,$,21,8,"div",4),u.qZA()),2&o){const o=t.$implicit,i=u.oxw();u.xp6(1),u.Q6J("ngIf",o.usuario_idusuario==i.usuarioActual.idusuario)}}function H(o,t){1&o&&(u.TgZ(0,"span",11),u._uU(1," Campo Requerido "),u.qZA())}function R(o,t){1&o&&(u.TgZ(0,"span",11),u._uU(1," Campo Requerido "),u.qZA())}function X(o,t){1&o&&(u.TgZ(0,"span",11),u._uU(1," Campo Requerido "),u.qZA())}const B=[{path:"",children:[{path:"sesionAspirante",component:x,children:[{path:"aspiranteProfesional",component:i(8476).A},{path:"ofertaEmpleo",component:j},{path:"perfilAspirante",component:(()=>{class o{constructor(o,t,i){this.http=o,this.fb=t,this.rutaActiva=i,this.id="",this.message="",this.aspirantes=[],this.usuarios=[],this.archivos=[],this.miFormulario=this.fb.group({numerohijos:["",[e.kI.required]],experiencialaboral:["",[e.kI.required]],campolaboral:["",[e.kI.required]],experticia:["",[e.kI.required]],videopresentacion:["",[e.kI.required]],aniosexperiencia:["",[e.kI.required]],fechanacimiento:["",[e.kI.required]],posibilidadviajar:["",[e.kI.required]],profesiones_idprofesiones:["",[e.kI.required]],usuario_idusuario:this.id})}ngOnInit(){this.http.get("https://agencialaboralproyecto.pythonanywhere.com/api/userusuario/",{withCredentials:!0}).subscribe(o=>{this.message=`Hi ${o.idusuario}`,this.id=o.idusuario,this.usuarioActual=o,f.Y.authEmitter.emit(!0)},o=>{this.message="You are not logged in",f.Y.authEmitter.emit(!1)}),this.getAspirantes(),this.getUsuarios(),this.getAspirantes(),this.getArchivos()}getAspirantes(){this.http.get("https://agencialaboralproyecto.pythonanywhere.com/api/aspirantes/").subscribe(o=>{this.aspirantes=o,console.log(this.aspirantes)})}getUsuarios(){this.http.get("https://agencialaboralproyecto.pythonanywhere.com/api/usuarios/").subscribe(o=>{this.usuarios=o,console.log(this.usuarios)})}getArchivos(){this.http.get("https://agencialaboralproyecto.pythonanywhere.com/api/archivosaspirante/").subscribe(o=>{this.archivos=o,console.log(this.archivos)})}}return o.\u0275fac=function(t){return new(t||o)(u.Y36(g.eN),u.Y36(e.qu),u.Y36(d.gz))},o.\u0275cmp=u.Xpm({type:o,selectors:[["app-perfil-aspirante"]],decls:19,vars:7,consts:[[1,"contenedor"],[1,"imgperfil"],["class","contenedorInformacion",4,"ngFor","ngForOf"],[1,"contenedorInformacion"],[4,"ngIf"],[1,"mb-3","row"],[1,"col-sm-9"],["controls","",3,"src"],[4,"ngFor","ngForOf"],["download","A.pdf",3,"href"]],template:function(o,t){1&o&&(u.TgZ(0,"p"),u._uU(1,"perfil-aspirante works!"),u.qZA(),u.TgZ(2,"div",0),u._UZ(3,"div",1),u.TgZ(4,"p"),u._uU(5),u.qZA(),u.TgZ(6,"h1"),u._uU(7,"Datos Personales"),u.qZA(),u.TgZ(8,"p"),u._uU(9),u.qZA(),u.TgZ(10,"p"),u._uU(11),u.qZA(),u.TgZ(12,"p"),u._uU(13),u.qZA(),u.TgZ(14,"p"),u._uU(15),u.qZA(),u.TgZ(16,"h1"),u._uU(17,"Datos Profesionales"),u.qZA(),u.YNc(18,G,2,1,"div",2),u.qZA()),2&o&&(u.xp6(5),u.AsE(" ",t.usuarioActual.nombre," ",t.usuarioActual.apellido,""),u.xp6(4),u.hij("N\xfamero documento: ",t.usuarioActual.nodocumento,""),u.xp6(2),u.hij("Correo: ",t.usuarioActual.correo,""),u.xp6(2),u.hij("Tel\xe9fono: ",t.usuarioActual.telefono,""),u.xp6(2),u.hij("Direcci\xf3n: ",t.usuarioActual.direccion,""),u.xp6(3),u.Q6J("ngForOf",t.aspirantes))},directives:[n.sg,n.O5],styles:[".contenedor[_ngcontent-%COMP%]{border:1px solid #000}.imgperfil[_ngcontent-%COMP%]{width:100px;height:100px;border-radius:50%;background:#5cb855}.contenedorInformacion[_ngcontent-%COMP%]{border:1px solid #000}"]}),o})()},{path:"sugerencias",component:(()=>{class o{constructor(o,t,i){this.fb=o,this.http=t,this.rutaActiva=i,this.sugerencias=[],this.correo="",this.message="",this.miFormulario=this.fb.group({titulo:["",e.kI.required],descripcion:["",e.kI.required],usuario_idusuario:1,imagen:["",e.kI.required]})}ngOnInit(){this.http.get("https://agencialaboralproyecto.pythonanywhere.com/api/userusuario/",{withCredentials:!0}).subscribe(o=>{this.message=`Hi ${o.idusuario}`,this.id=o.idusuario,f.Y.authEmitter.emit(!0)},o=>{this.message="You are not logged in",f.Y.authEmitter.emit(!1)})}campoEsValido(o){return this.miFormulario.controls[o].errors&&this.miFormulario.controls[o].touched}handleFileInput(o){this.file=o.target.files[0],console.log("archivo",this.file)}createSugerencia(){console.log(this.miFormulario.value),console.log(this.miFormulario.controls.imagen.value);let o={headers:new g.WM({Accept:"application/json"})},t=new FormData;t.append("titulo",this.miFormulario.controls.titulo.value),t.append("descripcion",this.miFormulario.controls.descripcion.value),t.append("imagen",this.file),t.append("usuario_idusuario",this.id),this.http.post("https://agencialaboralproyecto.pythonanywhere.com/api/sugerencias/",t,o).subscribe(o=>console.log(o),o=>console.log(o)),alert("SUGERENCIA ENVIADA"),this.miFormulario.reset()}}return o.\u0275fac=function(t){return new(t||o)(u.Y36(e.qu),u.Y36(g.eN),u.Y36(d.gz))},o.\u0275cmp=u.Xpm({type:o,selectors:[["app-sugerencias-comentarios"]],decls:27,vars:5,consts:[[1,"row"],[1,"col"],["autocomplete","off","enctype","multipart/form-data",3,"formGroup"],[1,"mb-3","row"],[1,"col-sm-3","col-form-label"],[1,"col-sm-9"],["type","text","formControlName","titulo","placeholder","t\xedtulo",1,"form-control"],["class","form-text text-danger",4,"ngIf"],["type","text","formControlName","descripcion","placeholder","Ingresa la sugerencia...","name","","id","","cols","30","rows","10","maxlength","30",1,"form-control",3,"maxlength"],["type","file","id","cambioImagen","formControlName","imagen","placeholder","Nombres Completos",1,"form-control",3,"change"],["type","submit",1,"btn","btn-primary","float-end",3,"click"],[1,"form-text","text-danger"]],template:function(o,t){1&o&&(u.TgZ(0,"div",0),u.TgZ(1,"div",1),u.TgZ(2,"form",2),u.TgZ(3,"div",3),u.TgZ(4,"h1"),u._uU(5,"Sugerencias y Comentarios"),u.qZA(),u.qZA(),u.TgZ(6,"div",3),u.TgZ(7,"label",4),u._uU(8,"T\xedtulo"),u.qZA(),u.TgZ(9,"div",5),u._UZ(10,"input",6),u.YNc(11,H,2,0,"span",7),u.qZA(),u.qZA(),u.TgZ(12,"div",3),u.TgZ(13,"div",5),u.TgZ(14,"textarea",8),u._uU(15,"                    "),u.qZA(),u.YNc(16,R,2,0,"span",7),u.qZA(),u.qZA(),u.TgZ(17,"div",3),u.TgZ(18,"label",4),u._uU(19,"Suba una imagen"),u.qZA(),u.TgZ(20,"div",5),u.TgZ(21,"input",9),u.NdJ("change",function(o){return t.handleFileInput(o)}),u.qZA(),u.YNc(22,X,2,0,"span",7),u.qZA(),u.qZA(),u.TgZ(23,"div",0),u.TgZ(24,"div",1),u.TgZ(25,"button",10),u.NdJ("click",function(){return t.createSugerencia()}),u._uU(26," Guardar "),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA(),u.qZA()),2&o&&(u.xp6(2),u.Q6J("formGroup",t.miFormulario),u.xp6(9),u.Q6J("ngIf",t.campoEsValido("titulo")),u.xp6(3),u.Q6J("maxlength",30),u.xp6(2),u.Q6J("ngIf",t.campoEsValido("descripcion")),u.xp6(6),u.Q6J("ngIf",t.campoEsValido("imagen")))},directives:[e._Y,e.JL,e.sg,e.Fj,e.JJ,e.u,n.O5,e.nD],styles:['*[_ngcontent-%COMP%]{box-sizing:border-box;margin:2px}input[type=text][_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{width:100%;padding:8px;border:1px solid #ccc;border-radius:4px;resize:vertical}label[_ngcontent-%COMP%]{padding:8px 8px 0 0;display:inline-block}input[type=submit][_ngcontent-%COMP%]{background-color:#77d4fd;width:50%;color:#fff;padding:12px 20px;border:none;border-radius:4px;margin-right:300px;margin-left:auto;margin-top:20px;cursor:pointer;float:right;-webkit-border-radius:4px;-moz-border-radius:4px;-ms-border-radius:4px;-o-border-radius:4px}#lower[_ngcontent-%COMP%]{background:#ecf2f5;width:100%;height:69px;margin-top:20px;box-shadow:inset 0 1px 1px #fff;border-top:1px solid #ccc;border-bottom-right-radius:3px;border-bottom-left-radius:3px}input[type=submit][_ngcontent-%COMP%]:hover{background-color:#77d4fd}#container[_ngcontent-%COMP%]{width:auto;height:auto;top:auto;left:auto;margin:20px;background:#fff;border:1px solid #ccc;box-shadow:0 1px 2px #0000001a;border-radius:5px;background-color:#f2f2f2;padding:20px;-webkit-border-radius:5px;-moz-border-radius:5px;-ms-border-radius:5px;-o-border-radius:5px}.col-25[_ngcontent-%COMP%]{width:25%}.col-25[_ngcontent-%COMP%], .col-75[_ngcontent-%COMP%]{float:left;margin-top:6px}.col-75[_ngcontent-%COMP%]{width:75%}.row[_ngcontent-%COMP%]:after{content:"";display:table;clear:both}@media screen and (max-width: 600px){.col-25[_ngcontent-%COMP%], .col-75[_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%]{width:100%;margin-top:0}}']}),o})()}]},{path:"registroAspirante",component:D},{path:"registroFullAspirante",component:I},{path:"**",redirectTo:"sesionAspirante"}]}];let W=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=u.oAB({type:o}),o.\u0275inj=u.cJS({imports:[[d.Bz.forChild(B)]]}),o})(),K=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=u.oAB({type:o}),o.\u0275inj=u.cJS({imports:[[n.ez,e.UX,r.xu,a.g0,s.ot,c.SJ,p.Ps,l.ie,W,d.Bz]]}),o})()}}]);