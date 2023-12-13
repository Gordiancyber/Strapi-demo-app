import type { Schema, Attribute } from '@strapi/strapi';

export interface CategoryCategory extends Schema.Component {
  collectionName: 'components_category_categories';
  info: {
    displayName: 'Category';
    icon: 'chartBubble';
    description: '';
  };
  attributes: {
    localazy_demos: Attribute.Relation<
      'category.category',
      'oneToMany',
      'api::localazy-demo.localazy-demo'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'category.category': CategoryCategory;
    }
  }
}
