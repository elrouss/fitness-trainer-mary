"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["main"],{

/***/ 3686:
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 9378:
/*!********************************************************************!*\
  !*** ./src/components/accordion/components/accordion/accordion.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Accordion: () => (/* binding */ Accordion)
/* harmony export */ });
/* harmony import */ var services_init_component_init_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! services/init-component/init-component */ 8560);

const classNames = {
    accordion: 'accordion',
    accordionItem: 'accordion__item',
    accordionItemPanel: 'accordion-item__panel',
    accordionItemPanelHidden: 'accordion-item__panel_hidden',
    accordionItemPanelAnimation: 'accordion-item__panel_animation',
    accordionItemIconButton: 'accordion-item__icon-button',
    accordionItemIconButtonAnimation: 'accordion-item__icon-button_animation'
};
class Accordion extends services_init_component_init_component__WEBPACK_IMPORTED_MODULE_0__.InitComponent {
    root;
    constructor(root) {
        super();
        this.root = root;
        this.root?.addEventListener('click', this.onAccordionHandler);
        this.root?.addEventListener('keydown', this.onAccordionHandler);
    }
    onAccordionHandler = (event) => {
        event.stopPropagation();
        if (event instanceof KeyboardEvent && !['Space, Enter'].includes(event.key)) {
            return;
        }
        const { target } = event;
        if (!(target instanceof HTMLElement || target instanceof SVGElement)) {
            return;
        }
        const item = target.closest(`.${classNames.accordionItem}`);
        if (!item) {
            return;
        }
        const panel = item.querySelector(`.${classNames.accordionItemPanel}`);
        const iconButton = item.querySelector(`.${classNames.accordionItemIconButton}`);
        iconButton.classList.toggle(classNames.accordionItemIconButtonAnimation);
        if (panel.classList.contains(classNames.accordionItemPanelHidden)) {
            panel.classList.remove(classNames.accordionItemPanelHidden);
            panel.classList.add(classNames.accordionItemPanelAnimation);
        }
        else {
            panel.classList.remove(classNames.accordionItemPanelAnimation);
            setTimeout(() => panel.classList.add(classNames.accordionItemPanelHidden), 300);
        }
    };
    static init = () => {
        services_init_component_init_component__WEBPACK_IMPORTED_MODULE_0__.InitComponent.init(`.${classNames.accordion}`, (root) => new Accordion(root));
    };
}
Accordion.init();


/***/ }),

/***/ 1540:
/*!*******************************************!*\
  !*** ./src/components/accordion/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_accordion_accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/accordion/accordion */ 9378);



/***/ }),

/***/ 1440:
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ 3686);
/* harmony import */ var _services_init_component_init_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/init-component/init-component */ 8560);
/* harmony import */ var _components_accordion_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/accordion/index */ 1540);

// SERVICES

// PAGES
// MODULES
// COMPONENTS

// UI


/***/ }),

/***/ 8560:
/*!*******************************************************!*\
  !*** ./src/services/init-component/init-component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InitComponent: () => (/* binding */ InitComponent)
/* harmony export */ });
class InitComponent {
    static init = (className, createComponent) => {
        const nodes = document.querySelectorAll(className);
        if (!nodes.length) {
            return;
        }
        nodes.forEach((node) => createComponent(node));
    };
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__(7461), __webpack_exec__(1440)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.5bd63e1bf769ebd8b1cd.js.map