import type { Schema, Struct } from '@strapi/strapi';

export interface SharedNavigationItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_navigation_items';
  info: {
    displayName: 'Navigation Item';
  };
  attributes: {
    label: Schema.Attribute.String;
    openInNewTab: Schema.Attribute.Boolean;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'shared.navigation-item': SharedNavigationItem;
    }
  }
}
