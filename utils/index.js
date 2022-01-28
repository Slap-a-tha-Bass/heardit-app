export const BASE_URL = 'https://reddit.com';
export const HEARDIT_PATH = '/r/';
export const ALL_POSTS = 'all';
export const SUFFIX = '.json';

export const isNil = (obj) => {
    return obj === null || typeof obj === undefined;
}

export const isEmpty = (obj) => {
    return obj === '' || isNil(obj) || obj === undefined;
}

export const isObject = (obj) => {
    return obj != null && typeof obj === 'object';
}

export const isArray = (obj) => {
    return Object.prototype.toString.call(obj) === '[object Array]';
}

export const serializeQuery = (obj) => {
    let queryString = '';

    if(!isObject(obj)){
        return queryString;
    }
    
    const queryArray = [];

    for (const p in obj){
        queryArray.push(`${p}=${obj[p]}`);
    }

    if(queryArray.length > 0) {
        queryString += `?${queryArray.join('&')}`;
    }
    console.log({queryString});
    return queryString;
}