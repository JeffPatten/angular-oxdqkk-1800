import 'zone.js/dist/zone';
import { App } from './app.component';
import { bootstrapApplication } from '@angular/platform-browser';

/**
 * TODO: Find and fix the following bugs.
 *
 * 1. Some prescriptions are listed as invalid when they are valid.
 * 2. Some prescriptions are not displayed.
 *
 * NOTE: Prescriptions are considered valid if their expiration date is in the future.
 */

bootstrapApplication(App);
