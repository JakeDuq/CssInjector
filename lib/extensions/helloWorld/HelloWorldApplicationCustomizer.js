var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Log } from '@microsoft/sp-core-library';
import { BaseApplicationCustomizer } from '@microsoft/sp-application-base';
import * as strings from 'HelloWorldApplicationCustomizerStrings';
var LOG_SOURCE = 'HelloWorldApplicationCustomizer';
/** A Custom Action which can be run during execution of a Client Side Application */
var HelloWorldApplicationCustomizer = /** @class */ (function (_super) {
    __extends(HelloWorldApplicationCustomizer, _super);
    function HelloWorldApplicationCustomizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HelloWorldApplicationCustomizer.prototype.onInit = function () {
        Log.info(LOG_SOURCE, "Initialized " + strings.Title);
        var cssUrl = this.properties.cssurl;
        if (cssUrl) {
            // inject the style sheet
            var head = document.getElementsByTagName("head")[0] || document.documentElement;
            var customStyle = document.createElement("link");
            customStyle.href = cssUrl;
            customStyle.rel = "stylesheet";
            customStyle.type = "text/css";
            head.insertAdjacentElement("beforeEnd", customStyle);
        }
        return Promise.resolve();
    };
    return HelloWorldApplicationCustomizer;
}(BaseApplicationCustomizer));
export default HelloWorldApplicationCustomizer;
//# sourceMappingURL=HelloWorldApplicationCustomizer.js.map