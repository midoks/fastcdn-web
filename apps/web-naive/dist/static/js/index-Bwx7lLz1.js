import{N as D,i as K}from"./Input-DQRjCqMm.js";import{j as t,t as e,l as n,n as m,a3 as R,p as g,B as b,q as B,a4 as I}from"./bootstrap-15weX-M7.js";import{d as h,h as d,c as u}from"./index-index-BuHJYOY4.js";import"./use-locale-BgRBzq9J.js";import"./use-merged-state-DJXW4lDa.js";import"./Suffix-BMBfb079.js";import"./Eye-DaE3yCJ1.js";const L=t("input-group",`
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`,[e(">",[t("input",[e("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),e("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]),t("button",[e("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[n("state-border, border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]),e("&:not(:first-child)",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[n("state-border, border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]),e("*",[e("&:not(:last-child)",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `,[e(">",[t("input",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),t("base-selection",[t("base-selection-label",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),t("base-selection-tags",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `),n("box-shadow, border, state-border",`
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]),e("&:not(:first-child)",`
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `,[e(">",[t("input",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),t("base-selection",[t("base-selection-label",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),t("base-selection-tags",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `),n("box-shadow, border, state-border",`
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]),G={},V=h({name:"InputGroup",props:G,setup(r){const{mergedClsPrefixRef:o}=m(r);return R("-input-group",L,o),{mergedClsPrefix:o}},render(){const{mergedClsPrefix:r}=this;return d("div",{class:`${r}-input-group`},this.$slots)}}),$=t("input-group-label",`
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 box-sizing: border-box;
 padding: 0 12px;
 display: inline-block;
 border-radius: var(--n-border-radius);
 background-color: var(--n-group-label-color);
 color: var(--n-group-label-text-color);
 font-size: var(--n-font-size);
 line-height: var(--n-height);
 height: var(--n-height);
 flex-shrink: 0;
 white-space: nowrap;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[n("border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-group-label-border);
 transition: border-color .3s var(--n-bezier);
 `)]),k=Object.assign(Object.assign({},g.props),{size:{type:String,default:"medium"},bordered:{type:Boolean,default:void 0}}),E=h({name:"InputGroupLabel",props:k,setup(r){const{mergedBorderedRef:o,mergedClsPrefixRef:i,inlineThemeDisabled:s}=m(r),c=g("Input","-input-group-label",$,I,r,i),l=u(()=>{const{size:p}=r,{common:{cubicBezierEaseInOut:f},self:{groupLabelColor:v,borderRadius:x,groupLabelTextColor:z,lineHeight:C,groupLabelBorder:w,[b("fontSize",p)]:y,[b("height",p)]:P}}=c.value;return{"--n-bezier":f,"--n-group-label-color":v,"--n-group-label-border":w,"--n-border-radius":x,"--n-group-label-text-color":z,"--n-font-size":y,"--n-line-height":C,"--n-height":P}}),a=s?B("input-group-label",u(()=>r.size[0]),l,r):void 0;return{mergedClsPrefix:i,mergedBordered:o,cssVars:s?void 0:l,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){var r,o,i;const{mergedClsPrefix:s}=this;return(r=this.onRender)===null||r===void 0||r.call(this),d("div",{class:[`${s}-input-group-label`,this.themeClass],style:this.cssVars},(i=(o=this.$slots).default)===null||i===void 0?void 0:i.call(o),this.mergedBordered?d("div",{class:`${s}-input-group-label__border`}):null)}});export{D as NInput,V as NInputGroup,E as NInputGroupLabel,k as inputGroupLabelProps,G as inputGroupProps,K as inputProps};
