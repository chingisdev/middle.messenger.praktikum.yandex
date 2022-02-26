const rootPath = '#app';
enum HTTP_METHODS {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE'
}

enum LIFECYCLE_EVENTS {
    INIT = 'init',
    FLOW_CDM = 'flow:component-did-mount',
    FLOW_CDU = 'flow:component-did-update',
    FLOW_RENDER = 'flow:render'
}

export { rootPath, HTTP_METHODS, LIFECYCLE_EVENTS };
