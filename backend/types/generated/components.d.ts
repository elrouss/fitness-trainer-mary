import type { Struct, Schema } from '@strapi/strapi';

export interface SectionsSections extends Struct.ComponentSchema {
  collectionName: 'components_sections_sections';
  info: {
    displayName: 'sections';
    description: '';
  };
  attributes: {
    activities: Schema.Attribute.Component<'sections.activities', false> &
      Schema.Attribute.Required;
    about: Schema.Attribute.Component<'sections.about', false> &
      Schema.Attribute.Required;
  };
}

export interface SectionsActivities extends Struct.ComponentSchema {
  collectionName: 'components_sections_activities';
  info: {
    displayName: 'Activities';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    tabs: Schema.Attribute.Component<'activities.tab', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 2;
        },
        number
      >;
  };
}

export interface SectionsAbout extends Struct.ComponentSchema {
  collectionName: 'components_sections_abouts';
  info: {
    displayName: 'About';
  };
  attributes: {
    image1: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    image2: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    cards: Schema.Attribute.Component<'about.card', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 3;
          max: 3;
        },
        number
      >;
  };
}

export interface AboutCard extends Struct.ComponentSchema {
  collectionName: 'components_about_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ActivitiesTab extends Struct.ComponentSchema {
  collectionName: 'components_activities_tabs';
  info: {
    displayName: 'Tab';
    description: '';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    cards: Schema.Attribute.Component<'activities.card', true>;
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface ActivitiesCard extends Struct.ComponentSchema {
  collectionName: 'components_activities_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    place: Schema.Attribute.String & Schema.Attribute.Required;
    peopleCount: Schema.Attribute.Integer & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    startDate: Schema.Attribute.Date & Schema.Attribute.Required;
    endDate: Schema.Attribute.Date & Schema.Attribute.Required;
    price: Schema.Attribute.Decimal & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sections.sections': SectionsSections;
      'sections.activities': SectionsActivities;
      'sections.about': SectionsAbout;
      'about.card': AboutCard;
      'activities.tab': ActivitiesTab;
      'activities.card': ActivitiesCard;
    }
  }
}
