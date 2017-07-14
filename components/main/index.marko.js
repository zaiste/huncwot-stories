// Compiled using marko@4.4.18 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_component = {
        onMount: function() {
          const routes = [
                  {
                      path: "/",
                      component: require("../home")
                    },
                  {
                      path: "/top",
                      component: require("../story-list")
                    },
                  {
                      path: "/new",
                      component: require("../story-add")
                    },
                  {
                      path: "/story/:id",
                      component: require("../story-show")
                    }
                ];

          const render = Router.renderSync({
                  routes: routes,
                  initialRoute: "/"
                });

          render.appendTo(this.getEl("router-container")).getComponent();
        }
      },
    components_helpers = require("marko/src/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/huncwot$0.0.1/components/main/index.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    markoPathRouter_module = require("marko-path-router"),
    Router = markoPathRouter_module.Router,
    store = require("../../store"),
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    router_link_template = marko_loadTemplate(require.resolve("marko-path-router/src/components/router-link/index.marko")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    router_link_tag = marko_loadTag(router_link_template),
    marko_attr = marko_helpers.a;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<header class=\"header\"" +
    marko_attr("id", __component.elId("_r0")) +
    "><nav class=\"inner\">");

  router_link_tag({
      path: "/",
      renderBody: function renderBody(out) {
        out.w("Home");
      }
    }, out);

  router_link_tag({
      path: "/top",
      renderBody: function renderBody(out) {
        out.w("Top");
      }
    }, out);

  router_link_tag({
      path: "/new",
      renderBody: function renderBody(out) {
        out.w("New");
      }
    }, out);

  out.w("<a class=\"github\" href=\"#\" target=\"_blank\" rel=\"noopener\">Built with Huncwot </a></nav></header><section class=\"section\"" +
    marko_attr("id", __component.elId("_r1")) +
    "><div class=\"container view\"><div" +
    marko_attr("id", __component.elId("router-container")) +
    "></div></div></section>");
}

marko_template._ = marko_renderer(render, {
    type: marko_componentType,
    roots: [
      "_r0",
      "_r1"
    ]
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    deps: [
      {
          type: "css",
          code: "body {\n\t\tfont-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n\t\tbackground-color: #f2f3f5;\n\t\tmargin: 0;\n\t\tpadding-top: 55px;\n\t\tcolor: #34495e;\n\t\toverflow-y: scroll;\n\t}\n\n\ta {\n\t\tcolor: #34495e;\n\t\ttext-decoration: none;\n\t}\n\n\t.header {\n\t\tbackground-color: #f60;\n\t\tposition: fixed;\n\t\tz-index: 999;\n\t\theight: 55px;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tright: 0;\n\t}\n\n\t.header .inner {\n\t\tmax-width: 800px;\n\t\tbox-sizing: border-box;\n\t\tmargin: 0px auto;\n\t\tpadding: 15px 5px;\n\t}\n\n\t.header a {\n\t\tcolor: rgba(255,255,255,0.8);\n\t\tline-height: 24px;\n\t\ttransition: color 0.15s ease;\n\t\tdisplay: inline-block;\n\t\tvertical-align: middle;\n\t\tfont-weight: 300;\n\t\tletter-spacing: 0.075em;\n\t\tmargin-right: 1.8em;\n\t}\n\n\t.header a:hover {\n\t\tcolor: #fff;\n\t}\n\n\t.header a.router-link-active {\n\t\tcolor: #fff;\n\t\tfont-weight: 400;\n\t}\n\n\t.logo {\n\t\twidth: 24px;\n\t\tmargin-right: 10px;\n\t\tdisplay: inline-block;\n\t\tvertical-align: middle;\n\t}\n\n\t.view {\n\t\tmax-width: 800px;\n\t\tmargin: 0 auto;\n\t\tposition: relative;\n\t}",
          virtualPath: "./index.marko.css",
          path: "./index.marko"
        },
      {
          type: "require",
          path: "./"
        }
    ],
    tags: [
      "marko-path-router/src/components/router-link/index.marko"
    ]
  };
