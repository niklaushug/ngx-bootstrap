"use strict";(self.webpackChunkngx_bootstrap_docs=self.webpackChunkngx_bootstrap_docs||[]).push([[86],{86086:(d,i,s)=>{s.r(i),s.d(i,{DemoSortableModule:()=>R,SortableSectionComponent:()=>f});var m=s(52382),c=s(69808),_=s(17678),e=s(14893),Z=s(77579);function S(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"div",4),e.NdJ("dragover",function(a){return e.CHM(t),e.oxw().onItemDragover(a,0)})("dragenter",function(a){return e.CHM(t),e.oxw().cancelEvent(a)}),e._uU(1),e.qZA()}if(2&n){const t=e.oxw();e.Q6J("ngClass",t.placeholderClass)("ngStyle",t.placeholderStyle),e.xp6(1),e.Oqu(t.placeholderItem)}}function x(n,l){}const A=function(n,l){return[n,l]},I=function(n,l){return{item:n,index:l}};function D(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"div",5),e.NdJ("dragstart",function(a){const r=e.CHM(t),u=r.$implicit,T=r.index;return e.oxw().onItemDragstart(a,u,T)})("dragend",function(a){return e.CHM(t),e.oxw().resetActiveItem(a)})("dragover",function(a){const u=e.CHM(t).index;return e.oxw().onItemDragover(a,u)})("dragenter",function(a){return e.CHM(t),e.oxw().cancelEvent(a)}),e.YNc(1,x,0,0,"ng-template",6),e.qZA()}if(2&n){const t=l.$implicit,o=l.index,a=e.oxw(),r=e.MAs(4);e.Q6J("ngClass",e.WLB(5,A,a.itemClass,o===a.activeItem?a.itemActiveClass:""))("ngStyle",a.getItemStyle(o===a.activeItem)),e.uIk("aria-grabbed",o===a.activeItem),e.xp6(1),e.Q6J("ngTemplateOutlet",a.itemTemplate||r)("ngTemplateOutletContext",e.WLB(8,I,t,o))}}function y(n,l){1&n&&e._uU(0),2&n&&e.Oqu(l.item.value)}let h=(()=>{class n{constructor(){this.onCapture=new Z.x}dragStart(t){this.draggableItem=t}getItem(){return this.draggableItem}captureItem(t,o){return this.draggableItem&&this.draggableItem.overZoneIndex!==t&&(this.draggableItem.lastZoneIndex=this.draggableItem.overZoneIndex,this.draggableItem.overZoneIndex=t,this.onCapture.next(this.draggableItem),this.draggableItem=Object.assign({},this.draggableItem,{overZoneIndex:t,i:o})),this.draggableItem}onCaptureItem(){return this.onCapture}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"platform"}),n})(),g=(()=>{class n{constructor(t){this.wrapperClass="",this.wrapperStyle={},this.itemClass="",this.itemStyle={},this.itemActiveClass="",this.itemActiveStyle={},this.placeholderClass="",this.placeholderStyle={},this.placeholderItem="",this.onChange=new e.vpe,this.showPlaceholder=!1,this.activeItem=-1,this.onTouched=Function.prototype,this.onChanged=Function.prototype,this._items=[],this.transfer=t,this.currentZoneIndex=n.globalZoneIndex++,this.transfer.onCaptureItem().subscribe(o=>this.onDrop(o))}get items(){return this._items}set items(t){this._items=t;const o=this.items.map(a=>a.initData);this.onChanged(o),this.onChange.emit(o)}onItemDragstart(t,o,a){this.initDragstartEvent(t),this.onTouched(),this.transfer.dragStart({event:t,item:o,i:a,initialIndex:a,lastZoneIndex:this.currentZoneIndex,overZoneIndex:this.currentZoneIndex})}onItemDragover(t,o){if(!this.transfer.getItem())return;t.preventDefault();const a=this.transfer.captureItem(this.currentZoneIndex,this.items.length);let r=[];!a||(r=this.items.length?a.i>o?[...this.items.slice(0,o),a.item,...this.items.slice(o,a.i),...this.items.slice(a.i+1)]:[...this.items.slice(0,a.i),...this.items.slice(a.i+1,o+1),a.item,...this.items.slice(o+1)]:[a.item],this.items=r,a.i=o,this.activeItem=o,this.updatePlaceholderState())}cancelEvent(t){!this.transfer.getItem()||!t||t.preventDefault()}onDrop(t){t&&t.overZoneIndex!==this.currentZoneIndex&&t.lastZoneIndex===this.currentZoneIndex&&(this.items=this.items.filter((o,a)=>a!==t.i),this.updatePlaceholderState()),this.resetActiveItem()}resetActiveItem(t){this.cancelEvent(t),this.activeItem=-1}registerOnChange(t){this.onChanged=t}registerOnTouched(t){this.onTouched=t}writeValue(t){this.items=t?t.map((o,a)=>({id:a,initData:o,value:this.fieldName?o[this.fieldName]:o})):[],this.updatePlaceholderState()}updatePlaceholderState(){this.showPlaceholder=!this._items.length}getItemStyle(t){return t?Object.assign({},this.itemStyle,this.itemActiveStyle):this.itemStyle}initDragstartEvent(t){var o;null===(o=t.dataTransfer)||void 0===o||o.setData("Text","placeholder")}}return n.globalZoneIndex=0,n.\u0275fac=function(t){return new(t||n)(e.Y36(h))},n.\u0275cmp=e.Xpm({type:n,selectors:[["bs-sortable"]],inputs:{fieldName:"fieldName",wrapperClass:"wrapperClass",wrapperStyle:"wrapperStyle",itemClass:"itemClass",itemStyle:"itemStyle",itemActiveClass:"itemActiveClass",itemActiveStyle:"itemActiveStyle",placeholderClass:"placeholderClass",placeholderStyle:"placeholderStyle",placeholderItem:"placeholderItem",itemTemplate:"itemTemplate"},outputs:{onChange:"onChange"},exportAs:["bs-sortable"],features:[e._Bn([{provide:m.JU,useExisting:(0,e.Gpc)(()=>n),multi:!0}])],decls:5,vars:4,consts:[[3,"ngClass","ngStyle","dragover","dragenter","drop","mouseleave"],[3,"ngClass","ngStyle","dragover","dragenter",4,"ngIf"],["draggable","true","aria-dropeffect","move",3,"ngClass","ngStyle","dragstart","dragend","dragover","dragenter",4,"ngFor","ngForOf"],["defItemTemplate",""],[3,"ngClass","ngStyle","dragover","dragenter"],["draggable","true","aria-dropeffect","move",3,"ngClass","ngStyle","dragstart","dragend","dragover","dragenter"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.NdJ("dragover",function(r){return o.cancelEvent(r)})("dragenter",function(r){return o.cancelEvent(r)})("drop",function(r){return o.resetActiveItem(r)})("mouseleave",function(r){return o.resetActiveItem(r)}),e.YNc(1,S,2,3,"div",1),e.YNc(2,D,2,11,"div",2),e.qZA(),e.YNc(3,y,1,1,"ng-template",null,3,e.W1O)),2&t&&(e.Q6J("ngClass",o.wrapperClass)("ngStyle",o.wrapperStyle),e.xp6(1),e.Q6J("ngIf",o.showPlaceholder),e.xp6(1),e.Q6J("ngForOf",o.items))},directives:[c.mk,c.PC,c.O5,c.sg,c.tP],encapsulation:2}),n})(),M=(()=>{class n{static forRoot(){return{ngModule:n,providers:[h]}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[c.ez]]}),n})();var p=s(21639);let v=(()=>{class n{constructor(){this.itemStringsLeft=["Windstorm","Bombasto","Magneta","Tornado"],this.itemStringsRight=["Mr. O","Tomato"]}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["basic-demo"]],decls:14,vars:8,consts:[[1,"row"],[1,"col-xs-6","col-6","col-md-5","col-lg-3"],["itemClass","sortable-item","itemActiveClass","sortable-item-active","placeholderItem","Drag here","placeholderClass","placeholderStyle text-center","wrapperClass","sortable-wrapper",3,"ngModel","ngModelChange"],[1,"code-preview"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"bs-sortable",2),e.NdJ("ngModelChange",function(r){return o.itemStringsLeft=r}),e.qZA(),e.qZA(),e.TgZ(3,"div",1),e.TgZ(4,"bs-sortable",2),e.NdJ("ngModelChange",function(r){return o.itemStringsRight=r}),e.qZA(),e.qZA(),e.qZA(),e.TgZ(5,"div",0),e.TgZ(6,"div",1),e.TgZ(7,"pre",3),e._uU(8),e.ALo(9,"json"),e.qZA(),e.qZA(),e.TgZ(10,"div",1),e.TgZ(11,"pre",3),e._uU(12),e.ALo(13,"json"),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(2),e.Q6J("ngModel",o.itemStringsLeft),e.xp6(2),e.Q6J("ngModel",o.itemStringsRight),e.xp6(4),e.hij("model: ",e.lcZ(9,4,o.itemStringsLeft),""),e.xp6(4),e.hij("model: ",e.lcZ(13,6,o.itemStringsRight),""))},directives:[g,m.JJ,m.On],pipes:[c.Ts],encapsulation:2}),n})(),b=(()=>{class n{constructor(){this.itemObjectsLeft=[{id:1,name:"Windstorm"},{id:2,name:"Bombasto"},{id:3,name:"Magneta"}],this.itemObjectsRight=[{id:4,name:"Tornado"},{id:5,name:"Mr. O"},{id:6,name:"Tomato"}]}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["complex-datamodel-demo"]],decls:14,vars:8,consts:[[1,"row"],[1,"col-xs-6","col-6","col-md-5","col-lg-3"],["fieldName","name","itemClass","sortable-item","itemActiveClass","sortable-item-active","placeholderItem","Drag here","placeholderClass","placeholderStyle text-center","wrapperClass","sortable-wrapper",3,"ngModel","ngModelChange"],[1,"code-preview"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"bs-sortable",2),e.NdJ("ngModelChange",function(r){return o.itemObjectsLeft=r}),e.qZA(),e.qZA(),e.TgZ(3,"div",1),e.TgZ(4,"bs-sortable",2),e.NdJ("ngModelChange",function(r){return o.itemObjectsRight=r}),e.qZA(),e.qZA(),e.qZA(),e.TgZ(5,"div",0),e.TgZ(6,"div",1),e.TgZ(7,"pre",3),e._uU(8),e.ALo(9,"json"),e.qZA(),e.qZA(),e.TgZ(10,"div",1),e.TgZ(11,"pre",3),e._uU(12),e.ALo(13,"json"),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(2),e.Q6J("ngModel",o.itemObjectsLeft),e.xp6(2),e.Q6J("ngModel",o.itemObjectsRight),e.xp6(4),e.hij("model: ",e.lcZ(9,4,o.itemObjectsLeft),""),e.xp6(4),e.hij("model: ",e.lcZ(13,6,o.itemObjectsRight),""))},directives:[g,m.JJ,m.On],pipes:[c.Ts],encapsulation:2}),n})();function w(n,l){if(1&n&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&n){const t=l.item,o=l.index;e.xp6(1),e.AsE("",o,": ",t.value,"")}}let C=(()=>{class n{constructor(){this.itemStringsLeft=["Windstorm","Bombasto","Magneta","Tornado"],this.itemStringsRight=["Mr. O","Tomato"]}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["custom-item-template-demo"]],decls:16,vars:9,consts:[["itemTemplate",""],[1,"row"],[1,"col-xs-6","col-6","col-md-5","col-lg-3"],["itemClass","sortable-item","itemActiveClass","sortable-item-active","placeholderItem","Drag here","placeholderClass","placeholderStyle text-center","wrapperClass","sortable-wrapper",3,"ngModel","itemTemplate","ngModelChange"],["itemClass","sortable-item","itemActiveClass","sortable-item-active","placeholderItem","Drag here","placeholderClass","placeholderStyle text-center","wrapperClass","sortable-wrapper",3,"ngModel","ngModelChange"],[1,"code-preview"]],template:function(t,o){if(1&t&&(e.YNc(0,w,2,2,"ng-template",null,0,e.W1O),e.TgZ(2,"div",1),e.TgZ(3,"div",2),e.TgZ(4,"bs-sortable",3),e.NdJ("ngModelChange",function(r){return o.itemStringsLeft=r}),e.qZA(),e.qZA(),e.TgZ(5,"div",2),e.TgZ(6,"bs-sortable",4),e.NdJ("ngModelChange",function(r){return o.itemStringsRight=r}),e.qZA(),e.qZA(),e.qZA(),e.TgZ(7,"div",1),e.TgZ(8,"div",2),e.TgZ(9,"pre",5),e._uU(10),e.ALo(11,"json"),e.qZA(),e.qZA(),e.TgZ(12,"div",2),e.TgZ(13,"pre",5),e._uU(14),e.ALo(15,"json"),e.qZA(),e.qZA(),e.qZA()),2&t){const a=e.MAs(1);e.xp6(4),e.Q6J("ngModel",o.itemStringsLeft)("itemTemplate",a),e.xp6(2),e.Q6J("ngModel",o.itemStringsRight),e.xp6(4),e.hij("model: ",e.lcZ(11,5,o.itemStringsRight),""),e.xp6(4),e.hij("model: ",e.lcZ(15,7,o.itemStringsRight),"")}},directives:[g,m.JJ,m.On],pipes:[c.Ts],encapsulation:2}),n})(),O=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["demo-accessibility"]],decls:26,vars:0,consts:[["href","https://www.w3.org/TR/wai-aria-1.1/#aria-dropeffect"],[1,"highlighter-rouge"]],template:function(t,o){1&t&&(e.TgZ(0,"p"),e._uU(1,"You can use "),e.TgZ(2,"code"),e._uU(3,'aria-dropeffect="..."'),e.qZA(),e._uU(4," and "),e.TgZ(5,"code"),e._uU(6,"aria-grabbed"),e.qZA(),e._uU(7," for "),e.TgZ(8,"code"),e._uU(9,".sortable-item"),e.qZA(),e._uU(10,". When you start drag item "),e.TgZ(11,"code"),e._uU(12,"aria-grabbed"),e.qZA(),e._uU(13," must have "),e.TgZ(14,"code"),e._uU(15,"true"),e.qZA(),e._uU(16," state. "),e.TgZ(17,"code"),e._uU(18,"aria-dropeffect"),e.qZA(),e._uU(19," property is defined depending on the grabbed object."),e.qZA(),e.TgZ(20,"p"),e._uU(21,"But be careful, these attributes are "),e.TgZ(22,"a",0),e.TgZ(23,"code",1),e._uU(24,"deprecated"),e.qZA(),e.qZA(),e._uU(25,"."),e.qZA())},encapsulation:2}),n})();const U=[{name:"Overview",anchor:"overview",tabName:"overview",outlet:p.ke,content:[{title:"Basic",anchor:"basic",component:s(57681),html:s(72010),outlet:v},{title:"Complex data model",anchor:"complexDatamodel",component:s(62672),html:s(37832),outlet:b},{title:"Custom item template",anchor:"itemTemplate",component:s(48063),html:s(54711),outlet:C},{title:"Accessibility",anchor:"accessibility",outlet:O}]},{name:"Installation",anchor:"api-reference",tabName:"api",outlet:p.s$,usage:s(82944),importInfo:'<span class="pln">ng add ngx</span><span class="pun">-</span><span class="pln">bootstrap </span> --component <span class="pln">sortable</span>',content:[{title:"SortableComponent",anchor:"sortable-component",outlet:p.Wh}]},{name:"Examples",anchor:"examples",tabName:"examples",outlet:p.ke,content:[{title:"Basic",anchor:"basic-ex",outlet:v},{title:"Complex data model",anchor:"complexDatamodel-ex",outlet:b},{title:"Custom item template",anchor:"itemTemplate-ex",outlet:C}]}];var j=s(22289),E=s(33505);let f=(()=>{class n{constructor(){this.name="Sortable",this.src="https://github.com/valor-software/ngx-bootstrap/blob/development/src/sortable",this.componentContent=U}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["sortable-section"]],decls:15,vars:4,consts:[[3,"name","src","componentContent"],[3,"content"]],template:function(t,o){1&t&&(e.TgZ(0,"demo-section",0),e.TgZ(1,"p"),e._uU(2,"The "),e.TgZ(3,"strong"),e._uU(4,"sortable component"),e.qZA(),e._uU(5," represents a list of items, with ability to sort them or move to another container via drag&drop. Input collection isn't mutated by the component, so events "),e.TgZ(6,"code"),e._uU(7,"ngModelChange"),e.qZA(),e._uU(8,", "),e.TgZ(9,"code"),e._uU(10,"onChange"),e.qZA(),e._uU(11," are using new collections."),e.qZA(),e.TgZ(12,"p"),e._uU(13,"The easiest way to add the sortable component to your app (will be added to the root module)"),e.qZA(),e._UZ(14,"docs-section",1),e.qZA()),2&t&&(e.Q6J("name",o.name)("src",o.src)("componentContent",o.componentContent),e.xp6(14),e.Q6J("content",o.componentContent))},directives:[j.Z,E.Z],styles:["\n    .sortable-item {\n      padding: 6px 12px;\n      margin-bottom: 4px;\n      font-size: 14px;\n      line-height: 1.4em;\n      text-align: center;\n      cursor: grab;\n      border: 1px solid transparent;\n      border-radius: 4px;\n      border-color: #adadad;\n    }\n\n    .sortable-item-active {\n      background-color: #e6e6e6;\n      box-shadow: inset 0 3px 5px rgba(0,0,0,.125);\n    }\n\n    .sortable-wrapper {\n      min-height: 150px;\n    }\n  "],encapsulation:2,changeDetection:0}),n})();const L=[{path:"",component:f}];let R=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[c.ez,m.u5,p.Gz,M.forRoot(),_.Bz.forChild(L)]]}),n})()},72010:(d,i,s)=>{s.r(i),s.d(i,{default:()=>m});const m='<div class="row">\n  <div class="col-xs-6 col-6 col-md-5 col-lg-3">\n    <bs-sortable\n      [(ngModel)]="itemStringsLeft"\n      itemClass="sortable-item"\n      itemActiveClass="sortable-item-active"\n      placeholderItem="Drag here"\n      placeholderClass="placeholderStyle text-center"\n      wrapperClass="sortable-wrapper"\n    ></bs-sortable>\n  </div>\n  <div class="col-xs-6 col-6 col-md-5 col-lg-3">\n    <bs-sortable\n      [(ngModel)]="itemStringsRight"\n      itemClass="sortable-item"\n      itemActiveClass="sortable-item-active"\n      placeholderItem="Drag here"\n      placeholderClass="placeholderStyle text-center"\n      wrapperClass="sortable-wrapper"\n    ></bs-sortable>\n  </div>\n</div>\n\n<div class=\'row\'>\n  <div class="col-xs-6 col-6 col-md-5 col-lg-3">\n    <pre class="code-preview">model: {{ itemStringsLeft | json }}</pre>\n  </div>\n\n  <div class="col-xs-6 col-6 col-md-5 col-lg-3">\n    <pre class="code-preview">model: {{ itemStringsRight | json }}</pre>\n  </div>\n</div>\n\n\n'},57681:(d,i,s)=>{s.r(i),s.d(i,{default:()=>m});const m="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'basic-demo',\n  templateUrl: './basic.component.html'\n})\nexport class DemoBasicComponent {\n  itemStringsLeft = [\n    'Windstorm',\n    'Bombasto',\n    'Magneta',\n    'Tornado'\n  ];\n\n  itemStringsRight = ['Mr. O', 'Tomato'];\n}\n"},37832:(d,i,s)=>{s.r(i),s.d(i,{default:()=>m});const m='<div class="row">\n  <div class="col-xs-6 col-6 col-md-5 col-lg-3">\n    <bs-sortable\n      [(ngModel)]="itemObjectsLeft"\n      fieldName="name"\n      itemClass="sortable-item"\n      itemActiveClass="sortable-item-active"\n      placeholderItem="Drag here"\n      placeholderClass="placeholderStyle text-center"\n      wrapperClass="sortable-wrapper"\n    ></bs-sortable>\n  </div>\n  <div class="col-xs-6 col-6 col-md-5 col-lg-3">\n    <bs-sortable\n      [(ngModel)]="itemObjectsRight"\n      fieldName="name"\n      itemClass="sortable-item"\n      itemActiveClass="sortable-item-active"\n      placeholderItem="Drag here"\n      placeholderClass="placeholderStyle text-center"\n      wrapperClass="sortable-wrapper"\n    ></bs-sortable>\n  </div>\n</div>\n\n<div class=\'row\'>\n  <div class="col-xs-6 col-6 col-md-5 col-lg-3">\n    <pre class="code-preview">model: {{ itemObjectsLeft | json }}</pre>\n  </div>\n\n  <div class="col-xs-6 col-6 col-md-5 col-lg-3">\n    <pre class="code-preview">model: {{ itemObjectsRight | json }}</pre>\n  </div>\n</div>\n'},62672:(d,i,s)=>{s.r(i),s.d(i,{default:()=>m});const m="import { Component } from '@angular/core';\n\ninterface IItemObject {\n  id: number;\n  name: string;\n}\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'complex-datamodel-demo',\n  templateUrl: './complex-datamodel.component.html'\n})\nexport class ComplexDatamodelDemoComponent {\n  itemObjectsLeft: IItemObject[] = [\n    { id: 1, name: 'Windstorm' },\n    { id: 2, name: 'Bombasto' },\n    { id: 3, name: 'Magneta' }\n  ];\n\n  itemObjectsRight: IItemObject[] = [\n    { id: 4, name: 'Tornado' },\n    { id: 5, name: 'Mr. O' },\n    { id: 6, name: 'Tomato' }\n  ];\n}\n"},54711:(d,i,s)=>{s.r(i),s.d(i,{default:()=>m});const m='<ng-template #itemTemplate let-item="item" let-index="index"><span>{{index}}: {{item.value}}</span></ng-template>\n\n<div class="row">\n  <div class="col-xs-6 col-6 col-md-5 col-lg-3">\n    <bs-sortable\n      [(ngModel)]="itemStringsLeft"\n      [itemTemplate]="itemTemplate"\n      itemClass="sortable-item"\n      itemActiveClass="sortable-item-active"\n      placeholderItem="Drag here"\n      placeholderClass="placeholderStyle text-center"\n      wrapperClass="sortable-wrapper"\n    ></bs-sortable>\n  </div>\n  <div class="col-xs-6 col-6 col-md-5 col-lg-3">\n    <bs-sortable\n      [(ngModel)]="itemStringsRight"\n      itemClass="sortable-item"\n      itemActiveClass="sortable-item-active"\n      placeholderItem="Drag here"\n      placeholderClass="placeholderStyle text-center"\n      wrapperClass="sortable-wrapper"\n    ></bs-sortable>\n  </div>\n</div>\n\n<div class=\'row\'>\n  <div class="col-xs-6 col-6 col-md-5 col-lg-3">\n    <pre class="code-preview">model: {{ itemStringsRight | json }}</pre>\n  </div>\n\n  <div class="col-xs-6 col-6 col-md-5 col-lg-3">\n    <pre class="code-preview">model: {{ itemStringsRight | json }}</pre>\n  </div>\n</div>\n\n'},48063:(d,i,s)=>{s.r(i),s.d(i,{default:()=>m});const m="import { Component } from '@angular/core';\n\n@Component({\n  // eslint-disable-next-line @angular-eslint/component-selector\n  selector: 'custom-item-template-demo',\n  templateUrl: './custom-item-template.html'\n})\nexport class CustomItemTemplateDemoComponent {\n  itemStringsLeft: string[] = [\n    'Windstorm',\n    'Bombasto',\n    'Magneta',\n    'Tornado'\n  ];\n\n  itemStringsRight: string[] = ['Mr. O', 'Tomato'];\n}\n"},82944:(d,i,s)=>{s.r(i),s.d(i,{default:()=>m});const m="import { SortableModule } from 'ngx-bootstrap/sortable';\n\n@NgModule({\n  imports: [SortableModule.forRoot(),...]\n})\nexport class AppModule(){}\n"}}]);