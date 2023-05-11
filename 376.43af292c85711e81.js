"use strict";(self.webpackChunkbudgeting=self.webpackChunkbudgeting||[]).push([[376],{3376:(Zt,v,s)=>{s.r(v),s.d(v,{TrackerModule:()=>yt});var m=s(6895),y=s(3456),x=s(9751),g=s(3848),t=s(4650),T=s(4004),A=s(8505),S=s(7579),F=s(6063);class I extends S.x{constructor(a=1/0,n=1/0,o=F.l){super(),this._bufferSize=a,this._windowTime=n,this._timestampProvider=o,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=n===1/0,this._bufferSize=Math.max(1,a),this._windowTime=Math.max(1,n)}next(a){const{isStopped:n,_buffer:o,_infiniteTimeWindow:i,_timestampProvider:r,_windowTime:c}=this;n||(o.push(a),!i&&o.push(r.now()+c)),this._trimBuffer(),super.next(a)}_subscribe(a){this._throwIfClosed(),this._trimBuffer();const n=this._innerSubscribe(a),{_infiniteTimeWindow:o,_buffer:i}=this,r=i.slice();for(let c=0;c<r.length&&!a.closed;c+=o?1:2)a.next(r[c]);return this._checkFinalizedStatuses(a),n}_trimBuffer(){const{_bufferSize:a,_timestampProvider:n,_buffer:o,_infiniteTimeWindow:i}=this,r=(i?1:2)*a;if(a<1/0&&r<o.length&&o.splice(0,o.length-r),!i){const c=n.now();let p=0;for(let d=1;d<o.length&&o[d]<=c;d+=2)p=d;p&&o.splice(0,p+1)}}}var q=s(3099);function O(e,a,n){let o,i=!1;return e&&"object"==typeof e?({bufferSize:o=1/0,windowTime:a=1/0,refCount:i=!1,scheduler:n}=e):o=e??1/0,(0,q.B)({connector:()=>new I(o,a,n),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:i})}var w=s(529);let C=(()=>{class e{constructor(n){this.http=n,this.apiUrl="https://script.google.com/macros/s/AKfycbyZYx2pDfxFf-OgM-Gam8nDRnIiA5qphfO3ijcmXidvefD2SaRzUZgWOBavRfL2Lgip/exec"}readData(n="readTransactions"){return this.http.get(`${this.apiUrl}?action=${n}`)}createData(n){return this.http.post(`${this.apiUrl}?action=create`,JSON.stringify(n))}updateData(n,o){return n.rowIndex=o,this.http.post(`${this.apiUrl}?action=update`,{data:n})}deleteData(n){return this.http.post(`${this.apiUrl}?action=delete&rowIndex=${n}`,{})}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(w.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),Y=(()=>{class e{constructor(n){this.googleSheetsService=n,this.transactions=this.googleSheetsService.readData("readTransactions").pipe((0,T.U)(o=>(o.shift(),o.map(([i,r,c,p,d,f,Ct,bt,Mt])=>({id:i,amount:r,category:c,note:p,date:d,paymentMethod:f,paidBy:Ct,type:bt,isDeleted:Mt})))),(0,A.b)(o=>console.log(o)),O(1)),this.transactionsDates=this.transactions.pipe((0,T.U)(o=>o.map(i=>({date:i.date,total:this.getTotal(i.date,o)})).filter((i,r,c)=>r===c.findIndex(p=>p.date===i.date)).sort((i,r)=>new Date(r.date).getTime()-new Date(i.date).getTime())))}getTotal(n,o){return o.reduce((i,r)=>i+(r.date===n?r.amount:0),0)}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(C))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var $=s(1135),L=s(9646),N=s(9841),b=s(4859),M=s(7392),D=s(4144),_=s(9549),h=s(3546),u=s(6338),U=s(4850),l=s(4006);let P=(()=>{class e{constructor(){this.transactions=[],this.currency="EUR",this.inflow=0,this.outflow=0}ngOnChanges(n){[this.inflow,this.outflow]=[0,0],this.transactions?.forEach(o=>{this.inflow+="income"===o.type?o.amount:0,this.outflow+="expense"===o.type?o.amount:0})}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-monthly-inflow-outflow"]],inputs:{transactions:"transactions"},features:[t.TTD],decls:24,vars:15,consts:[[1,"mat-m-s"],["matListItemIcon",""],["matListItemTitle",""],["matListItemMeta",""]],template:function(n,o){1&n&&(t.TgZ(0,"mat-card",0)(1,"mat-card-content")(2,"mat-list")(3,"mat-list-item")(4,"mat-icon",1),t._uU(5,"3d_rotation"),t.qZA(),t.TgZ(6,"h3",2),t._uU(7,"Inflow"),t.qZA(),t.TgZ(8,"p",3),t._uU(9),t.ALo(10,"currency"),t.qZA()(),t.TgZ(11,"mat-list-item")(12,"mat-icon",1),t._uU(13,"3d_rotation"),t.qZA(),t.TgZ(14,"h3",2),t._uU(15,"Outflow"),t.qZA(),t.TgZ(16,"p",3),t._uU(17),t.ALo(18,"currency"),t.qZA()(),t._UZ(19,"mat-divider"),t.TgZ(20,"mat-list-item")(21,"p",3),t._uU(22),t.ALo(23,"currency"),t.qZA()()()()()),2&n&&(t.xp6(9),t.Oqu(t.Dn7(10,3,o.inflow,o.currency,"symbol")),t.xp6(8),t.Oqu(t.Dn7(18,7,o.outflow,o.currency,"symbol")),t.xp6(5),t.hij(" ",t.Dn7(23,11,o.inflow-o.outflow,o.currency,"symbol")," "))},dependencies:[M.Hw,h.a8,h.dn,u.i$,u.Tg,u.Yt,U.d,u.sL,u.ni,m.H9]}),e})();function Q(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"button",9),t.NdJ("click",function(){t.CHM(n);const i=t.oxw(2);return i.searchText="",t.KtG(i.doSearch(""))}),t.TgZ(1,"mat-icon"),t._uU(2,"close"),t.qZA()()}}const k=function(e){return{transaction:e}};function B(e,a){if(1&e&&t.GkF(0,0),2&e){const n=t.oxw().$implicit;t.oxw(3);const o=t.MAs(6);t.Q6J("ngTemplateOutlet",o)("ngTemplateOutletContext",t.VKq(2,k,n))}}function j(e,a){if(1&e&&(t.ynx(0),t.YNc(1,B,1,4,"ng-container",17),t.BQk()),2&e){const n=a.$implicit,o=t.oxw().$implicit;t.xp6(1),t.Q6J("ngIf",n.date===o.date)}}function G(e,a){if(1&e&&(t.TgZ(0,"mat-card",10)(1,"mat-card-header")(2,"mat-list-item",11)(3,"h1",12)(4,"span",13),t._uU(5),t.ALo(6,"date"),t.qZA()(),t.TgZ(7,"h3",14),t._uU(8),t.ALo(9,"date"),t.qZA(),t.TgZ(10,"p",15),t._uU(11),t.qZA()()(),t._UZ(12,"mat-divider"),t.TgZ(13,"mat-card-content")(14,"mat-list"),t.YNc(15,j,2,1,"ng-container",16),t.qZA()()()),2&e){const n=a.$implicit;t.xp6(5),t.hij(" ",t.xi3(6,4,n.date,"dd"),""),t.xp6(3),t.Oqu(t.xi3(9,7,n.date,"MMMM")),t.xp6(3),t.hij(" ",n.total," "),t.xp6(4),t.Q6J("ngForOf",n.transactionsOfTheDay)}}function R(e,a){if(1&e){const n=t.EpF();t._UZ(0,"app-monthly-inflow-outflow",4),t.ALo(1,"async"),t.TgZ(2,"mat-form-field",5)(3,"mat-label"),t._uU(4,"Search"),t.qZA(),t.TgZ(5,"input",6),t.NdJ("ngModelChange",function(i){t.CHM(n);const r=t.oxw();return t.KtG(r.searchText=i)})("ngModelChange",function(i){t.CHM(n);const r=t.oxw();return t.KtG(r.doSearch(i))}),t.qZA(),t.YNc(6,Q,3,0,"button",7),t.qZA(),t.TgZ(7,"div",2),t.YNc(8,G,16,10,"mat-card",8),t.qZA()}if(2&e){const n=a.dates,o=t.oxw();t.Q6J("transactions",t.lcZ(1,4,o.transactions$)),t.xp6(5),t.Q6J("ngModel",o.searchText),t.xp6(1),t.Q6J("ngIf",o.searchText),t.xp6(2),t.Q6J("ngForOf",n)}}function X(e,a){if(1&e&&(t.TgZ(0,"mat-list-item")(1,"mat-icon",12),t._uU(2,"3d_rotation"),t.qZA(),t.TgZ(3,"h3",14),t._uU(4),t.qZA(),t.TgZ(5,"p",18)(6,"span"),t._uU(7),t.qZA()(),t.TgZ(8,"p",15),t._uU(9),t.qZA()()),2&e){const n=a.transaction;t.xp6(4),t.Oqu(n.category),t.xp6(3),t.Oqu(n.note),t.xp6(2),t.hij(" ",n.amount," ")}}const W=function(e){return{dates:e}};let z=(()=>{class e{constructor(){this.searchSubject=new $.X(""),this.searchAction$=this.searchSubject.asObservable(),this.monthsTransaction=[],this.transactions=[],this.tabMonth="",this.filteredTransaction=[],this.searchText=""}doSearch(n){this.searchSubject.next(n)}ngOnChanges(n){this.transactions$=(0,L.of)(this.transactions).pipe((0,T.U)(o=>o?.filter(i=>{let r=new Date(i.date),c=new Date(this.tabMonth);return r.getMonth()===c.getMonth()&&r.getFullYear()===c.getFullYear()}))),this.searchedTransaction$=(0,N.a)([this.searchAction$,this.transactions$]).pipe((0,T.U)(([o,i])=>i?.filter(r=>r.note.toLowerCase().includes(o)))),this.transactionsDates$=this.searchedTransaction$.pipe((0,T.U)(o=>o?.map(i=>{const{total:r,transactionsOfTheDay:c}=this.getTotal(i.date,o);return{date:i.date,total:r,transactionsOfTheDay:c}}).filter((i,r,c)=>r===c.findIndex(p=>p.date===i.date)).sort((i,r)=>new Date(r.date).getTime()-new Date(i.date).getTime())))}getTotal(n,o){let i=o.filter(r=>r.date===n);return{total:o.reduce((r,c)=>r+(c.date===n?c.amount:0),0),transactionsOfTheDay:i}}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-monthly-transactions"]],inputs:{transactions:"transactions",tabMonth:"tabMonth"},features:[t.TTD],decls:7,vars:6,consts:[[3,"ngTemplateOutlet","ngTemplateOutletContext"],["cards",""],[1,"container"],["singleTransaction",""],[3,"transactions"],[1,"full-width"],["matInput","","type","text",3,"ngModel","ngModelChange"],["matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],["class","mat-m-s",4,"ngFor","ngForOf"],["matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"],[1,"mat-m-s"],[1,"header-list"],["matListItemIcon",""],[1,"rounded-date"],["matListItemTitle",""],["matListItemMeta",""],[4,"ngFor","ngForOf"],[3,"ngTemplateOutlet","ngTemplateOutletContext",4,"ngIf"],["matListItemLine",""]],template:function(n,o){if(1&n&&(t.GkF(0,0),t.ALo(1,"async"),t.YNc(2,R,9,6,"ng-template",null,1,t.W1O),t._UZ(4,"div",2),t.YNc(5,X,10,3,"ng-template",null,3,t.W1O)),2&n){const i=t.MAs(3);t.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",t.VKq(4,W,t.lcZ(1,2,o.transactionsDates$)))}},dependencies:[m.sg,m.O5,m.tP,b.RK,M.Hw,D.Nt,_.KE,_.hX,_.R9,h.a8,h.dn,h.dk,u.i$,u.Tg,u.Yt,U.d,u.WW,u.sL,u.ni,l.Fj,l.JJ,l.On,P,m.Ov,m.uU],styles:[".container[_ngcontent-%COMP%]{padding-bottom:2rem}.full-width[_ngcontent-%COMP%]{width:100%}.rounded-date[_ngcontent-%COMP%]{padding:.5rem;border:2px solid red;border-radius:50%}.header-list[_ngcontent-%COMP%]{padding-top:1rem}.float[_ngcontent-%COMP%]{position:fixed;bottom:6rem;right:3rem}.float[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:50px;width:100%;height:100%}"]}),e})();function K(e,a){1&e&&(t.ynx(0),t._uU(1," Loading tabs...\n"),t.BQk())}function H(e,a){if(1&e&&t._uU(0),2&e){const n=t.oxw().$implicit;t.Oqu(n.month+1+"/"+n.year)}}const E=function(e,a){return{transactions:e,tabMonth:a}};function V(e,a){if(1&e&&(t.GkF(0,7),t.ALo(1,"async")),2&e){const n=t.oxw().$implicit,o=t.oxw(),i=t.MAs(7);t.Q6J("ngTemplateOutlet",i)("ngTemplateOutletContext",t.WLB(4,E,t.lcZ(1,2,o.$transaction),n.date+"-"+n.month))}}function tt(e,a){1&e&&(t.TgZ(0,"mat-tab"),t.YNc(1,H,1,1,"ng-template",5),t.YNc(2,V,2,7,"ng-template",6),t.qZA())}function nt(e,a){if(1&e&&t._UZ(0,"app-monthly-transactions",8),2&e){const o=a.tabMonth;t.Q6J("transactions",a.transactions)("tabMonth",o)}}let et=(()=>{class e{constructor(n){this.dashBoardService=n,this.selectedMonth=2,this.data=[],this.addMonths=function(o,i){let r=o;return r.getDate(),r.setDate(1),r.setMonth(r.getMonth()+i),r},this.$transaction=this.dashBoardService.transactions,this.$transactionDates=this.dashBoardService.transactionsDates,this.asyncTabs=new x.y(o=>{(new Date).getMonth();let c=new Date,p=[];for(var d=0;d<3;d++){let f=this.subtractMonths(c,2-d);p.push({month:f.getMonth(),year:f.getFullYear(),date:f,content:`Content ${d}`})}setTimeout(()=>{o.next(p)},100)})}ngAfterViewInit(){setTimeout(()=>{this.tabGroup.selectedIndex=2},0)}filterDate(n,o){return n}inTheMonth(n,o){let i=new Date(n),r=i.getMonth()+"-"+i.getFullYear();return console.log({st:r,tabMonth:o}),r===o}selectionChanged(n){this.selectedMonth=n,console.log({$event:n})}ngOnInit(){this.selectedMonth=2}subtractMonths(n,o){const i=new Date(n);return i.setMonth(i.getMonth()-o),i}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(Y))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-dashboard"]],viewQuery:function(n,o){if(1&n&&t.Gf(g.SP,5),2&n){let i;t.iGM(i=t.CRH())&&(o.tabGroup=i.first)}},decls:8,vars:7,consts:[[4,"ngIf"],[3,"selectedIndex","selectedIndexChange"],["tabGroup",""],[4,"ngFor","ngForOf"],["monthlyTransactions",""],["mat-tab-label",""],["matTabContent",""],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"transactions","tabMonth"]],template:function(n,o){1&n&&(t.YNc(0,K,2,0,"ng-container",0),t.ALo(1,"async"),t.TgZ(2,"mat-tab-group",1,2),t.NdJ("selectedIndexChange",function(r){return o.selectionChanged(r)}),t.YNc(4,tt,3,0,"mat-tab",3),t.ALo(5,"async"),t.qZA(),t.YNc(6,nt,1,2,"ng-template",null,4,t.W1O)),2&n&&(t.Q6J("ngIf",null===t.lcZ(1,3,o.asyncTabs)),t.xp6(2),t.Q6J("selectedIndex",o.selectedMonth),t.xp6(2),t.Q6J("ngForOf",t.lcZ(5,5,o.asyncTabs)))},dependencies:[m.sg,m.O5,m.tP,g.Vc,g.uD,g.uX,g.SP,z,m.Ov],styles:[".container[_ngcontent-%COMP%]{padding:1rem}"]}),e})(),ot=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-reports"]],decls:2,vars:0,template:function(n,o){1&n&&(t.TgZ(0,"p"),t._uU(1,"reports works!"),t.qZA())}}),e})(),at=(()=>{class e{constructor(n){this.googleSheetsService=n,this.categories$=this.googleSheetsService.readData("readCategories").pipe((0,T.U)(o=>(o.shift(),o.map(([i,r,c,p,d,f])=>({id:i,name:r,icon:c,type:p,subType:d,isDeleted:f})))),(0,A.b)(o=>console.log(o)),O(1))}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(C))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var it=s(7009),rt=s(4385),st=s(3238),Z=s(9602);function ct(e,a){if(1&e&&(t.TgZ(0,"mat-option",16)(1,"mat-icon"),t._uU(2),t.qZA(),t._uU(3),t.ALo(4,"titlecase"),t.qZA()),2&e){const n=a.$implicit;t.Q6J("value",n),t.xp6(2),t.Oqu(n.icon),t.xp6(1),t.hij(" ",t.lcZ(4,3,n.name)," ")}}function lt(e,a){if(1&e&&(t.TgZ(0,"mat-option",16),t._uU(1),t.qZA()),2&e){const n=a.$implicit;t.Q6J("value",n),t.xp6(1),t.hij(" ",n," ")}}function mt(e,a){if(1&e&&(t.TgZ(0,"mat-option",16),t._uU(1),t.qZA()),2&e){const n=a.$implicit;t.Q6J("value",n),t.xp6(1),t.hij(" ",n," ")}}function ut(e,a){1&e&&(t.ynx(0),t._uU(1," Loading tabs...\n"),t.BQk())}function ht(e,a){if(1&e&&t._uU(0),2&e){const n=t.oxw().$implicit;t.Oqu(n.label)}}function gt(e,a){if(1&e&&(t.TgZ(0,"mat-tab"),t.YNc(1,ht,1,1,"ng-template",2),t._uU(2),t.qZA()),2&e){const n=a.$implicit;t.xp6(2),t.hij(" ",n.content," ")}}const ft=[{path:"",redirectTo:"/tracker/dashboard",pathMatch:"full"},{path:"dashboard",component:et},{path:"reports",component:ot},{path:"add-transaction",component:(()=>{class e{constructor(n,o,i,r,c,p){this.fb=n,this.sheetService=o,this.atService=i,this._snackBar=r,this.router=c,this.route=p,this.categories=["Category 1","Category 2","Category 3"],this.paymentMethods=["Debit Card","Credit Card","Bank Transfer","Cash"],this.payees=["Ai","As"],this.createForm(),this.allCategories$=this.atService.categories$}categorySelected(n){"new"!==n&&(console.log({$event:n}),this.selectedCategory=n)}goBack(){history.back()}openSnackBar(n,o){this._snackBar.open(n,o,{duration:2e3,horizontalPosition:"center",verticalPosition:"bottom"})}ngOnInit(){}createForm(){this.transactionForm=this.fb.group({amount:[null,l.kI.required],category:[null,l.kI.required],note:"",date:[null,l.kI.required],paymentMethod:[null,l.kI.required],paidBy:[null,l.kI.required]})}onSubmit(){console.log(this.transactionForm?.value);let n=this.transactionForm?.controls.date.value;this.transactionForm?.controls.date.setValue(`${n.getDate()}-${n.getMonth()+1}-${n.getFullYear()}`);let o=this.transactionForm?.value;o&&(o.type=this.selectedCategory.type,o.category=this.selectedCategory.name,this.sheetService.createData(o).subscribe(i=>{this.openSnackBar(i.message,"X"),this.router.navigate(["../dashboard"],{relativeTo:this.route})}))}onDateChange(n){}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(l.qu),t.Y36(C),t.Y36(at),t.Y36(it.ux),t.Y36(y.F0),t.Y36(y.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-add-transaction"]],decls:49,vars:9,consts:[[1,"form-card"],["mat-card-avatar",""],["mat-icon-button","",1,"",3,"click"],[1,"transaction-form",3,"formGroup","ngSubmit"],[1,"form-row"],[1,"form-field"],["matInput","","formControlName","amount","type","number","required",""],["formControlName","category","required","",3,"ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["matInput","","formControlName","note"],["matInput","","formControlName","date","required","",3,"matDatepicker"],["matSuffix","",3,"for"],["picker",""],["formControlName","paymentMethod","required",""],["formControlName","paidBy","required",""],["mat-raised-button","","color","primary","type","submit",3,"disabled"],[3,"value"]],template:function(n,o){if(1&n&&(t.TgZ(0,"mat-card",0)(1,"mat-card-header")(2,"div",1)(3,"button",2),t.NdJ("click",function(){return o.goBack()}),t.TgZ(4,"mat-icon"),t._uU(5,"arrow_back"),t.qZA()()(),t.TgZ(6,"mat-card-title"),t._uU(7,"Add Transaction"),t.qZA()(),t.TgZ(8,"form",3),t.NdJ("ngSubmit",function(){return o.onSubmit()}),t.TgZ(9,"div",4)(10,"mat-form-field",5)(11,"mat-label"),t._uU(12,"Amount"),t.qZA(),t._UZ(13,"input",6),t.qZA()(),t.TgZ(14,"div",4)(15,"mat-form-field",5)(16,"mat-label"),t._uU(17,"Category"),t.qZA(),t.TgZ(18,"mat-select",7),t.NdJ("ngModelChange",function(r){return o.categorySelected(r)}),t.YNc(19,ct,5,5,"mat-option",8),t.ALo(20,"async"),t.qZA()()(),t.TgZ(21,"div",4)(22,"mat-form-field",5)(23,"mat-label"),t._uU(24,"Transaction Note"),t.qZA(),t._UZ(25,"textarea",9),t.qZA()(),t.TgZ(26,"div",4)(27,"mat-form-field",5)(28,"mat-label"),t._uU(29,"Date"),t.qZA(),t._UZ(30,"input",10)(31,"mat-datepicker-toggle",11)(32,"mat-datepicker",null,12),t.qZA()(),t.TgZ(34,"div",4)(35,"mat-form-field",5)(36,"mat-label"),t._uU(37,"Payment Method"),t.qZA(),t.TgZ(38,"mat-select",13),t.YNc(39,lt,2,2,"mat-option",8),t.qZA()()(),t.TgZ(40,"div",4)(41,"mat-form-field",5)(42,"mat-label"),t._uU(43,"Paid By"),t.qZA(),t.TgZ(44,"mat-select",14),t.YNc(45,mt,2,2,"mat-option",8),t.qZA()()(),t.TgZ(46,"div",4)(47,"button",15),t._uU(48," Submit "),t.qZA()()()()),2&n){const i=t.MAs(33);t.xp6(8),t.Q6J("formGroup",o.transactionForm),t.xp6(11),t.Q6J("ngForOf",t.lcZ(20,7,o.allCategories$)),t.xp6(11),t.Q6J("matDatepicker",i),t.xp6(1),t.Q6J("for",i),t.xp6(8),t.Q6J("ngForOf",o.paymentMethods),t.xp6(6),t.Q6J("ngForOf",o.payees),t.xp6(2),t.Q6J("disabled",o.transactionForm.invalid)}},dependencies:[m.sg,b.lW,b.RK,M.Hw,D.Nt,_.KE,_.hX,_.R9,rt.gD,st.ey,h.a8,h.kc,h.dk,h.n5,Z.Mq,Z.hl,Z.nW,l._Y,l.Fj,l.wV,l.JJ,l.JL,l.Q7,l.sg,l.u,m.Ov,m.rS],styles:[".transaction-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;width:100%}.form-row[_ngcontent-%COMP%]{display:flex;width:100%;margin-bottom:16px}.form-field[_ngcontent-%COMP%]{width:100%}textarea[_ngcontent-%COMP%]{min-height:100px}button[_ngcontent-%COMP%]{margin-top:16px}.form-container[_ngcontent-%COMP%]{padding:2rem;border:1px solid grey}.form-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;padding:20px;width:90%;max-width:500px;margin:0 auto}.example-header-image[_ngcontent-%COMP%]{background-image:url(https://material.angular.io/assets/img/examples/shiba1.jpg);background-size:cover}.mat-mdc-card-header[_ngcontent-%COMP%]{align-items:center}"]}),e})()},{path:"planning",component:(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-planning"]],decls:2,vars:0,template:function(n,o){1&n&&(t.TgZ(0,"p"),t._uU(1,"planning works!"),t.qZA())}}),e})()},{path:"my-account",component:(()=>{class e{constructor(){this.asyncTabs=new x.y(n=>{setTimeout(()=>{n.next([{label:"First",content:"Content 1"},{label:"Second",content:"Content 2"},{label:"Third",content:"Content 3"}])},1e3)})}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-my-account"]],decls:7,vars:6,consts:[[4,"ngIf"],[4,"ngFor","ngForOf"],["mat-tab-label",""]],template:function(n,o){1&n&&(t.TgZ(0,"p"),t._uU(1,"my-account works!"),t.qZA(),t.YNc(2,ut,2,0,"ng-container",0),t.ALo(3,"async"),t.TgZ(4,"mat-tab-group"),t.YNc(5,gt,3,1,"mat-tab",1),t.ALo(6,"async"),t.qZA()),2&n&&(t.xp6(2),t.Q6J("ngIf",null===t.lcZ(3,2,o.asyncTabs)),t.xp6(3),t.Q6J("ngForOf",t.lcZ(6,4,o.asyncTabs)))},dependencies:[m.sg,m.O5,g.uD,g.uX,g.SP,m.Ov]}),e})()}];let Tt=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[y.Bz.forChild(ft),y.Bz]}),e})();var _t=s(793);let yt=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[m.ez,Tt,_t.q,l.UX,w.JF,l.u5]}),e})()}}]);