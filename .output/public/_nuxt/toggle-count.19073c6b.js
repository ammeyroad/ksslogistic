import{s as r,o as a,c as n,a as e,F as c,b as o}from"./entry.c97e2f8f.js";const i={class:"flex justify-end mb-3"},g=["id"],u=["for"],f=e("span",{class:"inline-block relative z-10 text-sm font-medium text-gray-800 cursor-pointer dark:text-gray-200"}," Monthly ",-1),p=["id","name"],_=["for"],h=e("span",{class:"inline-block relative z-10 text-sm font-medium text-gray-800 cursor-pointer dark:text-gray-200"}," Annual ",-1),b=["id","name"],x={class:"grid grid-cols-3 lg:items-center border border-gray-200 rounded-xl dark:border-gray-700"},m={class:"flex flex-col p-4"},y=e("h4",{class:"text-gray-800 mb-1 dark:text-gray-200"},"Startup",-1),k={class:"flex gap-x-1"},v=e("span",{class:"text-xl font-normal text-gray-800 dark:text-gray-200"},"$",-1),$=["data-hs-toggle-count"],I={class:"flex flex-col p-4"},w=e("div",{class:"flex justify-between"},[e("h4",{class:"text-gray-800 mb-1 dark:text-gray-200"},"Team")],-1),C={class:"flex gap-x-1"},T=e("span",{class:"text-xl font-normal text-gray-800 dark:text-gray-200"},"$",-1),B=["data-hs-toggle-count"],j={class:"flex flex-col p-4"},z=e("h4",{class:"text-gray-800 mb-1 dark:text-gray-200"},"Enterprise",-1),E={class:"flex gap-x-1"},F=e("span",{class:"text-xl font-normal text-gray-800 dark:text-gray-200"},"$",-1),N=["data-hs-toggle-count"],s=r({__name:"ToggleCountItem",props:{groupId:{}},setup(l){return(t,d)=>(a(),n(c,null,[e("div",i,[e("div",{id:t.groupId,class:"p-0.5 inline-block bg-gray-100 rounded-lg dark:bg-gray-700"},[e("label",{for:`${t.groupId}-monthly`,class:"relative inline-block py-2 px-3"},[f,e("input",{id:`${t.groupId}-monthly`,name:t.groupId,type:"radio",class:"absolute top-0 end-0 w-full h-full border-transparent bg-transparent bg-none text-transparent rounded-lg cursor-pointer before:absolute before:inset-0 before:w-full before:h-full before:rounded-lg focus:ring-offset-0 checked:before:bg-white checked:before:shadow-sm checked:bg-none focus:ring-transparent dark:checked:before:bg-gray-800 dark:focus:ring-offset-transparent"},null,8,p)],8,u),e("label",{for:`${t.groupId}-annual`,class:"relative inline-block py-2 px-3"},[h,e("input",{id:`${t.groupId}-annual`,name:t.groupId,type:"radio",class:"absolute top-0 end-0 w-full h-full border-transparent bg-transparent bg-none text-transparent rounded-lg cursor-pointer before:absolute before:inset-0 before:w-full before:h-full before:rounded-lg focus:ring-offset-0 checked:before:bg-white checked:before:shadow-sm checked:bg-none focus:ring-transparent dark:checked:before:bg-gray-800 dark:focus:ring-offset-transparent",checked:""},null,8,b)],8,_)],8,g)]),e("div",x,[e("div",m,[y,e("div",k,[v,e("p",{"data-hs-toggle-count":`{
            "target": "#${t.groupId}",
            "min": 19,
            "max": 29
          }`,class:"text-gray-800 font-semibold text-3xl dark:text-gray-200"}," 19 ",8,$)])]),e("div",I,[w,e("div",C,[T,e("p",{"data-hs-toggle-count":`{
            "target": "#${t.groupId}",
            "min": 89,
            "max": 99
          }`,class:"text-gray-800 font-semibold text-3xl dark:text-gray-200"}," 89 ",8,B)])]),e("div",j,[z,e("div",E,[F,e("p",{"data-hs-toggle-count":`{
            "target": "#${t.groupId}",
            "min": 129,
            "max": 149
          }`,class:"text-gray-800 font-semibold text-3xl dark:text-gray-200"}," 129 ",8,N)])])])],64))}}),V={class:"mb-10"},A=e("h2",{class:"mb-2"},"Toggle Count 1",-1),M={class:"mb-10"},S=e("h2",{class:"mb-2"},"Toggle Count 2",-1),D=r({__name:"toggle-count",setup(l){return(t,d)=>(a(),n("div",null,[e("div",V,[A,o(s,{groupId:"first-group"})]),e("div",M,[S,o(s,{groupId:"second-group"})])]))}});export{D as default};
