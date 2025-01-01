import {
    delay,
    animate,
    scroll,
    inView,
    stagger,
    frame
} from 'motion';

const header = document.querySelector('.header') as HTMLElement;

const heroSection = document.querySelector('.section-hero') as HTMLElement;
const heroSectionWrapper = heroSection.querySelector('.section-hero__wrapper') as HTMLDivElement;
const heroSectionTitle = heroSectionWrapper.querySelector('.section-hero__title') as HTMLHeadingElement;
const heroSectionAccentWord = heroSectionWrapper.querySelector('.section-hero__accent-word') as HTMLHeadingElement;
const heroSectionMotto = heroSectionWrapper.querySelector('.section-hero__motto') as HTMLParagraphElement;

const sectionsTitle = document.querySelectorAll('.section-title_animation') as NodeListOf<HTMLHeadingElement>;

const sectionBenefits = document.querySelector('.section-benefits') as HTMLElement;

const accordionItems = document.querySelectorAll('.accordion__item') as NodeListOf<HTMLLIElement>;

const decoElementBefore = document.querySelector('.section-reviews__deco-element_before') as HTMLDivElement;
const decoElementAfter = document.querySelector('.section-reviews__deco-element_after') as HTMLDivElement;

const heroSectionSequence = [
    [heroSectionWrapper, { transform: ['scale(1.5)', 'scale(1)'] }],
    [heroSectionTitle, { opacity: [0, 1], transform: ['translateY(-25%)', 'none'] }],
    [heroSectionAccentWord, { opacity: [0, 1], transform: ['translateX(100%)', 'none'] }],
    [heroSectionMotto, { opacity: [0, 1] }],
    [header, { opacity: [0, 1] }]
];

// @ts-expect-error due to docs nothing is wrong
const animateHero = () => animate(heroSectionSequence);

delay(() => {
    const { scrollY } = window;
    const t = heroSection.offsetHeight;

    frame.render(() => {
        if (scrollY < t) {
            animateHero();
        } else {
            animateHero().cancel();
        }
    });
}, 5);

sectionsTitle.forEach((title) => {
    scroll(
        animate(title, {
            opacity: [1, 0], transform: ['none', 'translateY(100%)']
        },
        { ease: 'easeInOut' }
        ), {
            target: title,
            offset: ['start center', 'center end']
        }
    );
});

inView(sectionBenefits, ({ target }) => {
    animate(
        (target.querySelectorAll('.section-benefits__list-item') as NodeListOf<HTMLLIElement>),
        // @ts-expect-error due to docs nothing is wrong
        { opacity: [0, 1], transform: ['translateY(100%)', 'none'] },
        { delay: stagger(0.4), duration: 0.22, easing: [0.22, 0.03, 0.26, 0.24, 0.07, 1] }
    );
});

scroll(
    animate(
        decoElementBefore,
        { transform: ['translateX(0)', 'translateX(-105%) rotate(-9deg)'] },
        { ease: 'easeInOut' }), {
        target: decoElementBefore,
        offset: ['start end', 'end end']
    }
);

scroll(
    animate(
        decoElementAfter,
        { transform: ['translateX(0)', 'translateX(105%) rotate(9deg)']},
        { ease: 'easeInOut' }), {
        target: decoElementAfter,
        offset: ['start end', 'end end']
    }
);

accordionItems.forEach((item) => {
    scroll(
        animate(
            item, { opacity: [0, 1], transform: ['translateY(25%)', 'none'] },
            { ease: 'easeInOut' }), {
            target: item,
            offset: ['center end', 'start center']
        }
    );
});
