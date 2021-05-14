import{R as e,c as t,g as n,u as a,A as l,I as c,a as i,b as r}from"./vendor.ff817e02.js";function m({pageSection:t}){return e.createElement("div",{className:"cta-container"},e.createElement("div",{className:"cta-photo"},e.createElement("img",{src:t.photo.url})),e.createElement("div",{className:"cta-text"},e.createElement("div",{className:"cta-text-content"},e.createElement("div",{className:"cta-comments"},t.comment),e.createElement("div",{className:"cta-line1"},t.line1),e.createElement("div",{className:"cta-line2"},t.line2),e.createElement("div",{className:"cta-line3"},t.line3),e.createElement("div",null,e.createElement("button",{className:"cta-button"},t.buttonText)))))}function s({children:t}){return e.createElement("div",{className:"section-item"},t)}function o({pageSection:n}){return e.createElement("div",{className:t({inverted:n.inverted,"text-container":!0})},e.createElement(s,null,e.createElement("div",{className:t({"text-image-container":n.image})},e.createElement("div",{className:"text-list"},e.createElement("div",{className:"text-line-1"},n.line1),e.createElement("div",{className:"text-line-2"},n.line2)),n.image&&e.createElement("div",null,e.createElement("img",{src:n.image.url})))))}function d({tile:t}){return e.createElement("div",{className:"tile"},e.createElement("div",null,e.createElement("img",{src:t.image.url})),e.createElement("div",{className:"tile__text"},t.line1),e.createElement("div",{className:"tile__text2"},t.line2))}function u({pageSection:n}){return e.createElement("div",{className:t({inverted:n.inverted,"tile-container":!0})},e.createElement(s,null,e.createElement("div",{className:"tile-list"},n.tiles.map((t=>e.createElement(d,{tile:t,key:t.id}))))))}function E({sections:t}){return e.createElement("div",null,t.map((t=>function(t){switch(t.componentType){case"Tiles":return e.createElement(u,{pageSection:t,key:t.id});case"Text":return e.createElement(o,{pageSection:t,key:t.id});case"CallToAction":return e.createElement(m,{pageSection:t,key:t.id});default:return e.createElement("div",{key:t.id},t.componentType)}}(t))))}function v(){const{loading:t,error:n,data:l}=a(p);return t?e.createElement("p",null,"Loading..."):n?e.createElement("p",null,"Error :("):e.createElement(E,{sections:l.pages[0].sections})}const p=n`
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
          photo {
            url(transformation: { image: { resize: { width: 1200 } } })
          }
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
`;const g=new l({uri:"https://api-us-east-1.graphcms.com/v2/ckjlxpvg9epv701z0b07kfgqc/master",cache:new c});i.render(e.createElement(e.StrictMode,null,e.createElement(r,{client:g},e.createElement(v,null))),document.getElementById("root"));
