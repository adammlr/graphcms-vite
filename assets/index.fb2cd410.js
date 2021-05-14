import{R as e,c as t,g as n,u as i,A as l,I as a,a as c,b as r}from"./vendor.ff817e02.js";function m({children:t}){return e.createElement("div",{className:"section-item"},t)}function s({pageSection:n}){return e.createElement("div",{className:t({inverted:n.inverted,"text-container":!0})},e.createElement(m,null,e.createElement("div",{className:t({"text-image-container":n.image})},e.createElement("div",{className:"text-list"},e.createElement("div",{className:"text-line-1"},n.line1),e.createElement("div",{className:"text-line-2"},n.line2)),n.image&&e.createElement("div",null,e.createElement("img",{src:n.image.url})))))}function o({tile:t}){return e.createElement("div",{className:"tile"},e.createElement("div",null,e.createElement("img",{src:t.image.url})),e.createElement("div",{className:"tile__text"},t.line1),e.createElement("div",{className:"tile__text2"},t.line2))}function d({pageSection:n}){return e.createElement("div",{className:t({inverted:n.inverted,"tile-container":!0})},e.createElement(m,null,e.createElement("div",{className:"tile-list"},n.tiles.map((t=>e.createElement(o,{tile:t,key:t.id}))))))}function u({sections:t}){return e.createElement("div",null,t.map((t=>function(t){switch(t.componentType){case"Tiles":return e.createElement(d,{pageSection:t,key:t.id});case"Text":return e.createElement(s,{pageSection:t,key:t.id});default:return e.createElement("div",{key:t.id},t.componentType)}}(t))))}function E(){const{loading:t,error:n,data:l}=i(p);return t?e.createElement("p",null,"Loading..."):n?e.createElement("p",null,"Error :("):e.createElement(u,{sections:l.pages[0].sections})}const p=n`
  query PageData {
    pages {
      title
      sections {
        ... on TileSection {
          id
          componentType
          inverted
          tiles {
            id
            line1
            line2
            image {
              url
            }
          }
        }
        ... on CallToActionSection {
          id
          componentType
          line1
          line2
          line3
          buttonText
          comment
        }
        ... on TextSection {
          id
          componentType
          inverted
          line1
          line2
          image {
            url
          }
        }
      }
    }
  }
`;const v=new l({uri:"https://api-us-east-1.graphcms.com/v2/ckjlxpvg9epv701z0b07kfgqc/master",cache:new a});c.render(e.createElement(e.StrictMode,null,e.createElement(r,{client:v},e.createElement(E,null))),document.getElementById("root"));
