var $ftYVS$handlebarsdisthandlebarsruntime = require("handlebars/dist/handlebars.runtime");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $cf57e1a372268782$export$2e2bcd8739ae039);

const $cf57e1a372268782$var$templateFunction = ($parcel$interopDefault($ftYVS$handlebarsdisthandlebarsruntime)).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return "id: \"root\" \n---\n<html>\n    <head>\n        <script src=\"src/index.js\" type=\"module\"></script>\n    </head>\n    <body>\n        <div id=\"" + container.escapeExpression((helper = (helper = lookupProperty(helpers, "id") || (depth0 != null ? lookupProperty(depth0, "id") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {
        }, {
            "name": "id",
            "hash": {
            },
            "data": data,
            "loc": {
                "start": {
                    "line": 8,
                    "column": 17
                },
                "end": {
                    "line": 8,
                    "column": 25
                }
            }
        }) : helper)) + "\">123</div>\n    </body>\n</html> ";
    },
    "useData": true
});
var $cf57e1a372268782$export$2e2bcd8739ae039 = $cf57e1a372268782$var$templateFunction;


//# sourceMappingURL=index.js.map
