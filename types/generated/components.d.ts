import type { Schema, Attribute } from '@strapi/strapi';

export interface RestaurantsGallery extends Schema.Component {
  collectionName: 'components_restaurants_galleries';
  info: {
    displayName: 'Gallery';
    icon: '';
  };
  attributes: {
    Title: Attribute.String;
    Pictures: Attribute.Media;
  };
}

export interface RestaurantsTextBlock extends Schema.Component {
  collectionName: 'components_restaurants_text_blocks';
  info: {
    displayName: 'Text Block';
  };
  attributes: {
    Title: Attribute.String;
    Content: Attribute.RichText;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'restaurants.gallery': RestaurantsGallery;
      'restaurants.text-block': RestaurantsTextBlock;
    }
  }
}
