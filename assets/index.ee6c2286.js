import{R as e,c as t,g as n,u as i,A as a,I as l,a as c,b as r}from"./vendor.0900d38a.js";function m({tile:t}){return e.createElement("div",{className:"tile"},e.createElement("div",{className:"tile__image"},e.createElement("img",{src:t.image.url})),e.createElement("div",{className:"tile__text"},t.line1),e.createElement("div",{className:"tile__text2"},t.line2))}function s({children:t}){return e.createElement("div",{className:"sectionItem"},t)}function o({pageSection:n}){return e.createElement("div",{className:t({inverted:n.inverted,"tile-container":!0})},e.createElement(s,null,e.createElement("div",{className:"tile-list"},n.tiles.map((t=>e.createElement(m,{tile:t,key:t.id}))))))}function d({pageSection:n}){return e.createElement("div",{className:t({inverted:n.inverted,textContainer:!0})},e.createElement(s,null,e.createElement("div",{className:t({textImageContainer:n.image})},e.createElement("div",{className:"textList"},e.createElement("div",{className:"textLine1"},n.line1),e.createElement("div",{className:"textLine2"},n.line2)),n.image&&e.createElement("div",null,e.createElement("img",{src:n.image.url})))))}function u({sections:t}){return e.createElement("div",null,t.map((t=>function(t){switch(t.componentType){case"Tiles":return e.createElement(o,{pageSection:t,key:t.id});case"Text":return e.createElement(d,{pageSection:t,key:t.id});default:return e.createElement("div",{key:t.id},t.componentType)}}(t))))}const E=n`
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
`;function p(){const{loading:t,error:n,data:a}=i(E);return t?e.createElement("p",null,"Loading..."):n?e.createElement("p",null,"Error :("):e.createElement(u,{sections:a.pages[0].sections})}const v=new a({uri:"https://api-us-east-1.graphcms.com/v2/ckjlxpvg9epv701z0b07kfgqc/master",cache:new l});c.render(e.createElement(e.StrictMode,null,e.createElement(r,{client:v},e.createElement(p,null))),document.getElementById("root"));
