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

/***/ 1565:
/*!********************************************************************************************!*\
  !*** ./src/components/flip-card-primary/components/flip-card-primary/flip-card-primary.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlipCardPrimary: () => (/* binding */ FlipCardPrimary)
/* harmony export */ });
/* harmony import */ var services_init_component_init_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! services/init-component/init-component */ 8560);
/* harmony import */ var ui_outline_button_outline_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ui/outline-button/outline-button */ 6176);
/* harmony import */ var helpers_formatPrice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/formatPrice */ 6526);



class FlipCardPrimary extends services_init_component_init_component__WEBPACK_IMPORTED_MODULE_0__.InitComponent {
    rootClassName;
    constructor(rootClassName) {
        super();
        this.rootClassName = rootClassName;
    }
    render = ({ theme, title, img, services, icon }) => {
        try {
            const template = document.querySelector(this.rootClassName);
            if (!(template instanceof HTMLTemplateElement)) {
                throw new Error('Не найден шаблон карточки');
            }
            const templateContent = template.content.cloneNode(true);
            const card = templateContent.querySelector('.flip-card-primary');
            const frontSide = card.querySelector('.flip-card-primary__front');
            const frontSideTitle = frontSide.querySelector('.flip-card-primary__title');
            const frontSideImg = frontSide.querySelector('.flip-card-primary__img');
            const frontSideServices = frontSide.querySelector('.flip-card-primary__services-list');
            const backSide = card.querySelector('.flip-card-primary__back');
            const backSideTitle = backSide.querySelector('.flip-card-primary__title-back');
            const backSideServices = backSide.querySelector('.flip-card-primary__price-list');
            card.classList.add(`flip-card-primary_theme_${theme}`);
            frontSideTitle.textContent = title;
            frontSideImg.src = img;
            frontSideImg.alt = title;
            frontSideServices.append(this.renderFrontSideServices(services));
            backSideTitle.textContent = title;
            backSideServices.append(this.renderBackSideServices(services, theme));
            this.hideIcon(frontSide, icon);
            return card;
        }
        catch (error) {
            console.error(error);
            return null;
        }
    };
    renderFrontSideServices = (services) => {
        const fragment = document.createDocumentFragment();
        services.forEach((service) => {
            const li = document.createElement('li');
            li.classList.add('flip-card-primary__services-list-item');
            li.textContent = service.title;
            fragment.append(li);
        });
        return fragment;
    };
    renderBackSideServices = (services, theme) => {
        const fragment = document.createDocumentFragment();
        services.forEach((service) => {
            const li = document.createElement('li');
            const title = document.createElement('h4');
            const price = document.createElement('p');
            const buttonTemplate = new ui_outline_button_outline_button__WEBPACK_IMPORTED_MODULE_1__.OutlineButton('.outline-button-template');
            const button = buttonTemplate.render({ text: 'Выбрать', theme: theme === 'brand' ? 'light' : 'dark' });
            li.classList.add('flip-card-primary__price-list-item');
            title.classList.add('flip-card-primary__price-list-item-title', 't1');
            price.classList.add('flip-card-primary__price', 'h2');
            title.textContent = service.title;
            price.textContent = (0,helpers_formatPrice__WEBPACK_IMPORTED_MODULE_2__.formatPrice)(service.price);
            li.append(title, price, button);
            fragment.append(li);
        });
        return fragment;
    };
    // Костыль
    hideIcon = (frontSide, icon) => {
        frontSide.querySelectorAll('svg').forEach((ico) => {
            if (!ico.classList.contains(`flip-card-primary__icon_${icon}`)) {
                ico.style.display = 'none';
            }
        });
    };
}


/***/ }),

/***/ 9557:
/*!***************************************************!*\
  !*** ./src/components/flip-card-primary/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_flip_card_primary_flip_card_primary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/flip-card-primary/flip-card-primary */ 1565);



/***/ }),

/***/ 5465:
/*!**************************************************************************************************!*\
  !*** ./src/components/flip-card-secondary/components/flip-card-secondary/flip-card-secondary.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlipCardSecondary: () => (/* binding */ FlipCardSecondary)
/* harmony export */ });
/* harmony import */ var services_init_component_init_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! services/init-component/init-component */ 8560);
/* harmony import */ var ui_outline_button_outline_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ui/outline-button/outline-button */ 6176);
/* harmony import */ var helpers_formatPrice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/formatPrice */ 6526);



class FlipCardSecondary extends services_init_component_init_component__WEBPACK_IMPORTED_MODULE_0__.InitComponent {
    rootClassName;
    constructor(rootClassName) {
        super();
        this.rootClassName = rootClassName;
    }
    render = ({ theme, title, details, img, services }) => {
        try {
            const template = document.querySelector(this.rootClassName);
            if (!(template instanceof HTMLTemplateElement)) {
                throw new Error('Не найден шаблон карточки');
            }
            const templateContent = template.content.cloneNode(true);
            const card = templateContent.querySelector('.flip-card-secondary');
            const frontSide = card.querySelector('.flip-card-secondary__front');
            const frontSideTitle = frontSide.querySelector('.flip-card-secondary__title');
            const frontSideImg = frontSide.querySelector('.flip-card-secondary__img');
            const frontSideAdditionalInfo = frontSide.querySelector('.flip-card-secondary__details');
            const backSide = card.querySelector('.flip-card-secondary__back');
            const backSideTitle = backSide.querySelector('.flip-card-secondary__title-back');
            const backSidePrice = backSide.querySelector('.flip-card-secondary__price');
            const buttonTemplate = new ui_outline_button_outline_button__WEBPACK_IMPORTED_MODULE_1__.OutlineButton('.outline-button-template');
            const button = buttonTemplate.render({ text: 'Выбрать', theme: theme === 'brand' ? 'light' : 'dark' });
            card.classList.add(`flip-card-secondary_theme_${theme}`);
            frontSideTitle.textContent = title;
            frontSideAdditionalInfo.textContent = details || '';
            frontSideImg.src = img;
            frontSideImg.alt = title;
            backSideTitle.textContent = title;
            backSidePrice.textContent = (0,helpers_formatPrice__WEBPACK_IMPORTED_MODULE_2__.formatPrice)(services[0].price);
            backSide.append(button);
            return card;
        }
        catch (error) {
            console.error(error);
            return null;
        }
    };
}


/***/ }),

/***/ 6526:
/*!************************************!*\
  !*** ./src/helpers/formatPrice.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatPrice: () => (/* binding */ formatPrice)
/* harmony export */ });
const formatPrice = (price) => `${price.toLocaleString().replace(/\s/g, '.')} руб.`;


/***/ }),

/***/ 1440:
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ 3686);
/* harmony import */ var _services_init_component_init_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/init-component/init-component */ 8560);
/* harmony import */ var _pages_home_components_home_components_section_workout_section_workout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/components/home/components/section-workout/section-workout */ 1352);
/* harmony import */ var _components_accordion_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/accordion/index */ 1540);
/* harmony import */ var _components_flip_card_primary_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/flip-card-primary/index */ 9557);

// SERVICES

// PAGES

// MODULES
// COMPONENTS


// UI


/***/ }),

/***/ 1757:
/*!*******************************************************************!*\
  !*** ./src/pages/home/components/home/components/mock/workout.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MOCK_WORKOUT: () => (/* binding */ MOCK_WORKOUT)
/* harmony export */ });
/* harmony import */ var assets_images_mary_1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/images/mary-1.jpg */ 2411);
/* harmony import */ var assets_images_mary_2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/images/mary-2.jpg */ 5964);
/* harmony import */ var assets_images_mary_3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/images/mary-3.jpg */ 3753);



const MOCK_WORKOUT = [
    {
        type: 'secondary',
        theme: 'calm',
        title: 'Онлайн сопровождение',
        details: 'Уровень подготовки любой',
        img: assets_images_mary_3_jpg__WEBPACK_IMPORTED_MODULE_2__,
        services: [
            {
                title: 'Онлайн сопровождение',
                price: 10000
            }
        ],
        icon: 'online'
    },
    {
        type: 'primary',
        theme: 'brand',
        title: 'Сплит тренировки\n(2 человека)',
        img: assets_images_mary_2_jpg__WEBPACK_IMPORTED_MODULE_1__,
        services: [
            {
                title: 'Разовая',
                price: 5000
            },
            {
                title: 'Блок из 10 тренировок',
                price: 45000
            }
        ],
        icon: 'people'
    },
    {
        type: 'primary',
        theme: 'calm',
        title: 'Персональные тренировки\n(в зале)',
        img: assets_images_mary_1_jpg__WEBPACK_IMPORTED_MODULE_0__,
        services: [
            {
                title: 'Разовая',
                price: 3000
            },
            {
                title: 'Блок из 10 тренировок',
                price: 25000
            }
        ],
        icon: 'person'
    }
];


/***/ }),

/***/ 1352:
/*!**************************************************************************************!*\
  !*** ./src/pages/home/components/home/components/section-workout/section-workout.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var services_init_component_init_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! services/init-component/init-component */ 8560);
/* harmony import */ var components_flip_card_primary_components_flip_card_primary_flip_card_primary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/flip-card-primary/components/flip-card-primary/flip-card-primary */ 1565);
/* harmony import */ var components_flip_card_secondary_components_flip_card_secondary_flip_card_secondary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/flip-card-secondary/components/flip-card-secondary/flip-card-secondary */ 5465);
/* harmony import */ var _mock_workout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mock/workout */ 1757);




const classNames = {
    root: 'section-workout__cards-list',
    primaryFlipCard: 'flip-card-primary-template',
    secondaryFlipCard: 'flip-card-secondary-template'
};
class SectionWorkout extends services_init_component_init_component__WEBPACK_IMPORTED_MODULE_0__.InitComponent {
    root;
    constructor(root) {
        super();
        this.root = root;
    }
    renderSection = (data) => {
        const fragment = document.createDocumentFragment();
        data.forEach((item) => {
            const flipCardTemplate = item.type === 'primary'
                ? new components_flip_card_primary_components_flip_card_primary_flip_card_primary__WEBPACK_IMPORTED_MODULE_1__.FlipCardPrimary('.flip-card-primary-template')
                : new components_flip_card_secondary_components_flip_card_secondary_flip_card_secondary__WEBPACK_IMPORTED_MODULE_2__.FlipCardSecondary('.flip-card-secondary-template');
            const flipCard = flipCardTemplate.render(item);
            const li = document.createElement('li');
            if (flipCard) {
                li.classList.add('section-workout__cards-list-item');
                li.append(flipCard);
                fragment.prepend(li);
            }
        });
        this.root?.prepend(fragment);
    };
    static init = () => {
        services_init_component_init_component__WEBPACK_IMPORTED_MODULE_0__.InitComponent.init(`.${classNames.root}`, (root) => new SectionWorkout(root).renderSection(_mock_workout__WEBPACK_IMPORTED_MODULE_3__.MOCK_WORKOUT));
    };
}
SectionWorkout.init();


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
    static init(className, createComponent) {
        const nodes = document.querySelectorAll(className);
        if (!nodes.length) {
            return;
        }
        nodes.forEach((node) => createComponent(node));
    }
}


/***/ }),

/***/ 6176:
/*!*************************************************!*\
  !*** ./src/ui/outline-button/outline-button.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OutlineButton: () => (/* binding */ OutlineButton)
/* harmony export */ });
/* harmony import */ var services_init_component_init_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! services/init-component/init-component */ 8560);

class OutlineButton extends services_init_component_init_component__WEBPACK_IMPORTED_MODULE_0__.InitComponent {
    rootClassName;
    constructor(rootClassName) {
        super();
        this.rootClassName = rootClassName;
    }
    render = ({ text, theme }) => {
        try {
            const template = document.querySelector(this.rootClassName);
            if (!(template instanceof HTMLTemplateElement)) {
                throw new Error('Не найден шаблон кнопки');
            }
            const templateContent = template.content.cloneNode(true);
            const button = templateContent.querySelector('.outline-button');
            const buttonText = button.querySelector('.outline-button__text');
            button.classList.add(`outline-button_theme_${theme}`);
            buttonText.textContent = text;
            return button;
        }
        catch (error) {
            console.error(error);
            return null;
        }
    };
}


/***/ }),

/***/ 2411:
/*!**************************************!*\
  !*** ./src/assets/images/mary-1.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/mary-1.07559813249e4657f78e..jpg";

/***/ }),

/***/ 5964:
/*!**************************************!*\
  !*** ./src/assets/images/mary-2.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/mary-2.29c495ae9a1b949dc271..jpg";

/***/ }),

/***/ 3753:
/*!**************************************!*\
  !*** ./src/assets/images/mary-3.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/mary-3.fbe77101e9c85c48f60c..jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__(7461), __webpack_exec__(1440)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.8856801b67f82e43f75a.js.map