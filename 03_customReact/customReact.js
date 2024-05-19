function customRendor(reactElement,container){
  /*  const newele=document.createElement(reactElement.type)
    newele.innerHTML=reactElement.children
     newele.setAttribute('href',reactElement.props.href)
     newele.setAttribute('target',reactElement.props.target)
     container.appendChild(newele)
     */


     const domElement=document.createElement(reactElement.type)
     domElement.innerHTML=reactElement.children

     for(prop in reactElement.props){
        if(prop==='children')continue;
        domElement.setAttribute(prop,reactElement.props[prop])
     }

     container.appendChild(domElement)
}

const reactElement={
    type:'a',
    props:{
        href:'https//:google.com',
        target:'_blank'
    },
    children:'click me to visit google'
};




const container = document.querySelector('#root')

customRendor(reactElement,container)