import indexPageContext from './indexPage';


const pageContext = {
    "/index.html": indexPageContext,
    
}


const globalContext = {
    "title": "Portafolio"
}

const getContext = (contextKey) => {
    const _pageContext = pageContext[contextKey] || {};
    return Object.assign({}, globalContext, _pageContext);
}

export default getContext;