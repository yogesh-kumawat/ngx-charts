/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../../build/common/tooltip/tooltip.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '@angular/core/src/linker/element_ref';
import * as import10 from './tooltip.component.css.ngstyle';
import * as import11 from '@angular/core/src/linker/view_container';
import * as import12 from '../../../node_modules/@angular/common/src/directives/ng_template_outlet.ngfactory';
import * as import13 from '@angular/core/src/linker/template_ref';
import * as import14 from '@angular/common/src/directives/ng_template_outlet';
import * as import15 from '@angular/core/src/security';
import * as import16 from '@angular/core/src/linker/query_list';
import * as import17 from '../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import18 from '@angular/common/src/directives/ng_if';
export class Wrapper_TooltipContentComponent {
  /*private*/ _eventHandler:Function;
  context:import0.TooltipContentComponent;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  constructor(p0:any,p1:any) {
    this._changed = false;
    this.context = new import0.TooltipContentComponent(p0,p1);
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
    this._expr_4 = import1.UNINITIALIZED;
    this._expr_5 = import1.UNINITIALIZED;
    this._expr_6 = import1.UNINITIALIZED;
    this._expr_7 = import1.UNINITIALIZED;
    this._expr_8 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  check_host(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.host = currValue;
      this._expr_0 = currValue;
    }
  }
  check_showCaret(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.showCaret = currValue;
      this._expr_1 = currValue;
    }
  }
  check_type(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.type = currValue;
      this._expr_2 = currValue;
    }
  }
  check_placement(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_3,currValue))) {
      this._changed = true;
      this.context.placement = currValue;
      this._expr_3 = currValue;
    }
  }
  check_alignment(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_4,currValue))) {
      this._changed = true;
      this.context.alignment = currValue;
      this._expr_4 = currValue;
    }
  }
  check_spacing(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_5,currValue))) {
      this._changed = true;
      this.context.spacing = currValue;
      this._expr_5 = currValue;
    }
  }
  check_cssClass(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_6,currValue))) {
      this._changed = true;
      this.context.cssClass = currValue;
      this._expr_6 = currValue;
    }
  }
  check_title(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_7,currValue))) {
      this._changed = true;
      this.context.title = currValue;
      this._expr_7 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
    const currVal_8:any = this.context.cssClasses;
    if (import3.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      view.renderer.setElementProperty(el,'className',currVal_8);
      this._expr_8 = currVal_8;
    }
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    if ((eventName == 'window:resize')) {
      const pd_sub_0:any = ((<any>this.context.onWindowResize()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_TooltipContentComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_TooltipContentComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.TooltipContentComponent>;
  _TooltipContentComponent_0_3:Wrapper_TooltipContentComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_TooltipContentComponent_Host0,renderType_TooltipContentComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'ngx-tooltip-content',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_TooltipContentComponent0(this.viewUtils,this,0,this._el_0);
    this._TooltipContentComponent_0_3 = new Wrapper_TooltipContentComponent(new import9.ElementRef(this._el_0),this.renderer);
    this.compView_0.create(this._TooltipContentComponent_0_3.context);
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray2(2,'resize','window'),this.eventHandler(this.handleEvent_0));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),[disposable_0]);
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._TooltipContentComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.TooltipContentComponent) && (0 === requestNodeIndex))) { return this._TooltipContentComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._TooltipContentComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this._TooltipContentComponent_0_3.checkHost(this,this.compView_0,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._TooltipContentComponent_0_3.context.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.compView_0.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._TooltipContentComponent_0_3.handleEvent(eventName,$event) && result);
    return result;
  }
}
export const TooltipContentComponentNgFactory:import8.ComponentFactory<import0.TooltipContentComponent> = new import8.ComponentFactory<import0.TooltipContentComponent>('ngx-tooltip-content',View_TooltipContentComponent_Host0,import0.TooltipContentComponent);
const styles_TooltipContentComponent:any[] = [import10.styles];
class View_TooltipContentComponent2 extends import2.AppView<any> {
  _text_0:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import11.ViewContainer) {
    super(View_TooltipContentComponent2,renderType_TooltipContentComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._text_0 = this.renderer.createText((null as any),'\n          ',(null as any));
    this.init(this._text_0,((<any>this.renderer).directRenderer? (null as any): [this._text_0]),(null as any));
    return (null as any);
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._text_0,ctx);
  }
}
class View_TooltipContentComponent1 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  _anchor_2:any;
  /*private*/ _vc_2:import11.ViewContainer;
  _TemplateRef_2_5:any;
  _NgTemplateOutlet_2_6:import12.Wrapper_NgTemplateOutlet;
  _text_3:any;
  _map_7:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import11.ViewContainer) {
    super(View_TooltipContentComponent1,renderType_TooltipContentComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._map_7 = import3.pureProxy1((p0:any):{[key: string]:any} => {
      return {model: p0};
    });
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'span',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n          ',(null as any));
    this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._vc_2 = new import11.ViewContainer(2,0,this,this._anchor_2);
    this._TemplateRef_2_5 = new import13.TemplateRef_(this,2,this._anchor_2);
    this._NgTemplateOutlet_2_6 = new import12.Wrapper_NgTemplateOutlet(this._vc_2.vcRef);
    this._text_3 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._anchor_2,
      this._text_3
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import13.TemplateRef) && (2 === requestNodeIndex))) { return this._TemplateRef_2_5; }
    if (((token === import14.NgTemplateOutlet) && (2 === requestNodeIndex))) { return this._NgTemplateOutlet_2_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2_0_0:any = this._map_7(this.parentView.context.context);
    this._NgTemplateOutlet_2_6.check_ngOutletContext(currVal_2_0_0,throwOnChange,false);
    const currVal_2_0_1:any = this.parentView.context.template;
    this._NgTemplateOutlet_2_6.check_ngTemplateOutlet(currVal_2_0_1,throwOnChange,false);
    this._NgTemplateOutlet_2_6.ngDoCheck(this,this._anchor_2,throwOnChange);
    this._vc_2.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_2.destroyNestedViews();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 2)) { return new View_TooltipContentComponent2(this.viewUtils,this,2,this._anchor_2,this._vc_2); }
    return (null as any);
  }
}
class View_TooltipContentComponent3 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import11.ViewContainer) {
    super(View_TooltipContentComponent3,renderType_TooltipContentComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_2 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'span',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2:any = this.parentView.context.title;
    if (import3.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementProperty(this._el_0,'innerHTML',this.viewUtils.sanitizer.sanitize(import15.SecurityContext.HTML,currVal_2));
      this._expr_2 = currVal_2;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
var renderType_TooltipContentComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,styles_TooltipContentComponent,{});
export class View_TooltipContentComponent0 extends import2.AppView<import0.TooltipContentComponent> {
  _viewQuery_caretElm_0:import16.QueryList<any>;
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _anchor_8:any;
  /*private*/ _vc_8:import11.ViewContainer;
  _TemplateRef_8_5:any;
  _NgIf_8_6:import17.Wrapper_NgIf;
  _text_9:any;
  _anchor_10:any;
  /*private*/ _vc_10:import11.ViewContainer;
  _TemplateRef_10_5:any;
  _NgIf_10_6:import17.Wrapper_NgIf;
  _text_11:any;
  _text_12:any;
  _text_13:any;
  /*private*/ _expr_21:any;
  /*private*/ _expr_22:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_TooltipContentComponent0,renderType_TooltipContentComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
    this._expr_21 = import1.UNINITIALIZED;
    this._expr_22 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._viewQuery_caretElm_0 = new import16.QueryList<any>();
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,this._el_1,'span',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'\n      ',(null as any));
    this._text_5 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._el_6 = import3.createRenderElement(this.renderer,this._el_1,'div',new import3.InlineArray2(2,'class','tooltip-content'),(null as any));
    this._text_7 = this.renderer.createText(this._el_6,'\n        ',(null as any));
    this._anchor_8 = this.renderer.createTemplateAnchor(this._el_6,(null as any));
    this._vc_8 = new import11.ViewContainer(8,6,this,this._anchor_8);
    this._TemplateRef_8_5 = new import13.TemplateRef_(this,8,this._anchor_8);
    this._NgIf_8_6 = new import17.Wrapper_NgIf(this._vc_8.vcRef,this._TemplateRef_8_5);
    this._text_9 = this.renderer.createText(this._el_6,'\n        ',(null as any));
    this._anchor_10 = this.renderer.createTemplateAnchor(this._el_6,(null as any));
    this._vc_10 = new import11.ViewContainer(10,6,this,this._anchor_10);
    this._TemplateRef_10_5 = new import13.TemplateRef_(this,10,this._anchor_10);
    this._NgIf_10_6 = new import17.Wrapper_NgIf(this._vc_10.vcRef,this._TemplateRef_10_5);
    this._text_11 = this.renderer.createText(this._el_6,'\n      ',(null as any));
    this._text_12 = this.renderer.createText(this._el_1,'\n    ',(null as any));
    this._text_13 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    this._viewQuery_caretElm_0.reset([new import9.ElementRef(this._el_3)]);
    this.context.caretElm = this._viewQuery_caretElm_0.first;
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._anchor_8,
      this._text_9,
      this._anchor_10,
      this._text_11,
      this._text_12,
      this._text_13
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import13.TemplateRef) && (8 === requestNodeIndex))) { return this._TemplateRef_8_5; }
    if (((token === import18.NgIf) && (8 === requestNodeIndex))) { return this._NgIf_8_6.context; }
    if (((token === import13.TemplateRef) && (10 === requestNodeIndex))) { return this._TemplateRef_10_5; }
    if (((token === import18.NgIf) && (10 === requestNodeIndex))) { return this._NgIf_10_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_8_0_0:boolean = !this.context.title;
    this._NgIf_8_6.check_ngIf(currVal_8_0_0,throwOnChange,false);
    this._NgIf_8_6.ngDoCheck(this,this._anchor_8,throwOnChange);
    const currVal_10_0_0:any = this.context.title;
    this._NgIf_10_6.check_ngIf(currVal_10_0_0,throwOnChange,false);
    this._NgIf_10_6.ngDoCheck(this,this._anchor_10,throwOnChange);
    this._vc_8.detectChangesInNestedViews(throwOnChange);
    this._vc_10.detectChangesInNestedViews(throwOnChange);
    const currVal_21:boolean = !this.context.showCaret;
    if (import3.checkBinding(throwOnChange,this._expr_21,currVal_21)) {
      this.renderer.setElementProperty(this._el_3,'hidden',currVal_21);
      this._expr_21 = currVal_21;
    }
    const currVal_22:any = import3.inlineInterpolate(1,'tooltip-caret position-',this.context.placement,'');
    if (import3.checkBinding(throwOnChange,this._expr_22,currVal_22)) {
      this.renderer.setElementProperty(this._el_3,'className',currVal_22);
      this._expr_22 = currVal_22;
    }
  }
  destroyInternal():void {
    this._vc_8.destroyNestedViews();
    this._vc_10.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 8)) { return new View_TooltipContentComponent1(this.viewUtils,this,8,this._anchor_8,this._vc_8); }
    if ((nodeIndex == 10)) { return new View_TooltipContentComponent3(this.viewUtils,this,10,this._anchor_10,this._vc_10); }
    return (null as any);
  }
}