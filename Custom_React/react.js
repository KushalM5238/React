function customRender(reactEle, container){
    /*
    const domElement=document.createElement(reactEle.type)
    domElement.innerHTML=  reactEle.children
    domElement.setAttribute('href',reactEle.props.href)
    domElement.setAttribute('Target',reactEle.props.target)

    container.appendChild(domElement) 
    */

    //modern type

    const domElement=document.createElement(reactEle.type)
    domElement.innerHTML=reactEle.children
    for(const prop in reactEle.props){
        if(prop==="childern") continue;
        domElement.setAttribute(prop, reactEle.props[prop])
    }
    container.appendChild(domElement)
}
const reactEle= {
    type:'a',
    props:{
        href: 'https://google.com',
        target:'_blank'
    },
    children:'Google'
}

const mainContainer=document.querySelector("#root");

customRender(reactEle,mainContainer)