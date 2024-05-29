import { convertAnnotatedSourceToFailureCase } from '@angular-eslint/test-utils';
import type { MessageIds } from '../../../src/rules/cyclomatic-complexity';

const messageId: MessageIds = 'cyclomaticComplexity';

export const valid = [
  {
    code: `
        <div *ngIf="a === '1'">
          <div>{{ person.name }}</div>
        </div>
      `,
    options: [{ maxComplexity: 1 }],
  },
  {
    code: `
        <div *ngIf="a === '1'">
          <div *ngFor="let person of persons; trackBy: trackByFn">
            {{ person.name }}
          </div>
        </div>
      `,
    options: [{ maxComplexity: 2 }],
  },
  {
    code: `
        <div *ngIf="a === '1'">
          <div *ngFor="let person of persons; trackBy: trackByFn">
            {{ person.name }}
            <div [ngSwitch]="person.emotion">
              <app-happy-hero    *ngSwitchCase="'happy'" [hero]="currentHero"></app-happy-hero>
              <app-sad-hero      *ngSwitchCase="'sad'"   [hero]="currentHero"></app-sad-hero>
              <app-unknown-hero  *ngSwitchDefault        [hero]="currentHero"></app-unknown-hero>
            </div>
          </div>
        </div>
      `,
    options: [{ maxComplexity: 5 }],
  },
];

export const invalid = [
  convertAnnotatedSourceToFailureCase({
    description:
      'it should fail if the cyclomatic complexity is higher than the maximum defined',
    annotatedSource: `
        <div *ngIf="a === '1'">
          <div *ngFor="let person of persons; trackBy: trackByFn">
            <div *ngIf="a === '1'">{{ person.name }}</div>
            <div [ngSwitch]="person.emotion">
              <app-happy-hero    *ngSwitchCase="'happy'"    [hero]="currentHero"></app-happy-hero>
              <app-sad-hero      *ngSwitchCase="'sad'"      [hero]="currentHero"></app-sad-hero>
              <app-confused-hero *ngSwitchCase="'confused'" [hero]="currentHero"></app-confused-hero>
                                  ~~~~~~~~~~~~~~~~~~~~~~~~
              <app-unknown-hero  *ngSwitchDefault           [hero]="currentHero"></app-unknown-hero>
                                  ^^^^^^^^^^^^^^^
            </div>
          </div>
        </div>
      `,
    messages: [
      {
        char: '~',
        messageId,
        data: { maxComplexity: 5, totalComplexity: 6 },
      },
      {
        char: '^',
        messageId,
        data: { maxComplexity: 5, totalComplexity: 7 },
      },
    ],
    options: [{ maxComplexity: 5 }],
  }),
  convertAnnotatedSourceToFailureCase({
    description:
      'it should fail if the cyclomatic complexity is higher than the maximum defined, using directives with ng-template',
    annotatedSource: `
        <div [fakeDirective]="'test'"></div>
        <ng-template ngFor let-person [ngForOf]="persons" let-i="index">
          {{ person.name }}
        </ng-template>
        <ng-template [ngIf]="a === '1'">
          something here
        </ng-template>
        <div *ngIf="a === '1'">
          <div *ngFor="let person of persons; trackBy: trackByFn">
            <div *ngIf="a === '1'">{{ person.name }}</div>
            <div [ngSwitch]="person.emotion">
              <app-happy-hero    *ngSwitchCase="'happy'"    [hero]="currentHero"></app-happy-hero>
              <app-sad-hero      *ngSwitchCase="'sad'"      [hero]="currentHero"></app-sad-hero>
                                  ~~~~~~~~~~~~~~~~~~~
              <app-confused-hero *ngSwitchCase="'confused'" [hero]="currentHero"></app-confused-hero>
                                  ^^^^^^^^^^^^^^^^^^^^^^^^
              <app-unknown-hero  *ngSwitchDefault           [hero]="currentHero"></app-unknown-hero>
                                  ###############
            </div>
          </div>
        </div>
      `,
    messages: [
      {
        char: '~',
        messageId,
        data: { maxComplexity: 6, totalComplexity: 7 },
      },
      {
        char: '^',
        messageId,
        data: { maxComplexity: 6, totalComplexity: 8 },
      },
      {
        char: '#',
        messageId,
        data: { maxComplexity: 6, totalComplexity: 9 },
      },
    ],
    options: [{ maxComplexity: 6 }],
  }),
];
