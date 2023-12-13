'use strict';

/**
 * localazy-demo service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::localazy-demo.localazy-demo');
