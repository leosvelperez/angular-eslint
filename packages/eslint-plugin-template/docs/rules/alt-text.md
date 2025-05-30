<!--

  DO NOT EDIT.

  This markdown file was autogenerated using a mixture of the following files as the source of truth for its data:
  - ../../src/rules/alt-text.ts
  - ../../tests/rules/alt-text/cases.ts

  In order to update this file, it is therefore those files which need to be updated, as well as potentially the generator script:
  - ../../../../tools/scripts/generate-rule-docs.ts

-->

<br>

# `@angular-eslint/template/alt-text`

[Accessibility] Enforces alternate text for elements which require the alt, aria-label, aria-labelledby attributes.

- Type: suggestion

<br>

## Rule Options

The rule does not have any configuration options.

<br>

## Usage Examples

> The following examples are generated automatically from the actual unit tests within the plugin, so you can be assured that their behavior is accurate based on the current commit.

<br>

<details>
<summary>❌ - Toggle examples of <strong>incorrect</strong> code for this rule</summary>

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/template/alt-text": [
      "error"
    ]
  }
}
```

<br>

#### ❌ Invalid Code

```html
<ng-template>
  <div>
    <img src="foo">
    ~~~~~~~~~~~~~~~
  </div>
</ng-template>
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/template/alt-text": [
      "error"
    ]
  }
}
```

<br>

#### ❌ Invalid Code

```html
<object></object>
~~~~~~~~~~~~~~~~~
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/template/alt-text": [
      "error"
    ]
  }
}
```

<br>

#### ❌ Invalid Code

```html
<area />
~~~~~~~~
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/template/alt-text": [
      "error"
    ]
  }
}
```

<br>

#### ❌ Invalid Code

```html
<input type="image">
~~~~~~~~~~~~~~~~~~~~
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/template/alt-text": [
      "error"
    ]
  }
}
```

<br>

#### ❌ Invalid Code

```html
<input [type]="'image'">
~~~~~~~~~~~~~~~~~~~~~~~~
```

</details>

<br>

---

<br>

<details>
<summary>✅ - Toggle examples of <strong>correct</strong> code for this rule</summary>

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/template/alt-text": [
      "error"
    ]
  }
}
```

<br>

#### ✅ Valid Code

```html
<img src="foo" alt="Foo eating a sandwich.">
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/template/alt-text": [
      "error"
    ]
  }
}
```

<br>

#### ✅ Valid Code

```html
<img src="foo" [attr.alt]="altText">
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/template/alt-text": [
      "error"
    ]
  }
}
```

<br>

#### ✅ Valid Code

```html
<img src="foo" [attr.alt]="'Alt Text'">
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/template/alt-text": [
      "error"
    ]
  }
}
```

<br>

#### ✅ Valid Code

```html
<img src="foo" alt="">
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/template/alt-text": [
      "error"
    ]
  }
}
```

<br>

#### ✅ Valid Code

```html
<object aria-label="foo">
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/template/alt-text": [
      "error"
    ]
  }
}
```

<br>

#### ✅ Valid Code

```html
<object aria-labelledby="id1">
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/template/alt-text": [
      "error"
    ]
  }
}
```

<br>

#### ✅ Valid Code

```html
<object>Meaningful description</object>
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/template/alt-text": [
      "error"
    ]
  }
}
```

<br>

#### ✅ Valid Code

```html
<object title="An object">
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/template/alt-text": [
      "error"
    ]
  }
}
```

<br>

#### ✅ Valid Code

```html
<object aria-label="foo" id="bar"></object>
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/template/alt-text": [
      "error"
    ]
  }
}
```

<br>

#### ✅ Valid Code

```html
<area aria-label="foo" />
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/template/alt-text": [
      "error"
    ]
  }
}
```

<br>

#### ✅ Valid Code

```html
<area aria-labelledby="id1" />
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/template/alt-text": [
      "error"
    ]
  }
}
```

<br>

#### ✅ Valid Code

```html
<area alt="This is descriptive!" />
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/template/alt-text": [
      "error"
    ]
  }
}
```

<br>

#### ✅ Valid Code

```html
<area alt="desc" href="path">
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/template/alt-text": [
      "error"
    ]
  }
}
```

<br>

#### ✅ Valid Code

```html
<input type="text">
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/template/alt-text": [
      "error"
    ]
  }
}
```

<br>

#### ✅ Valid Code

```html
<input type="image" alt="This is descriptive!">
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/template/alt-text": [
      "error"
    ]
  }
}
```

<br>

#### ✅ Valid Code

```html
<input type="image" aria-label="foo">
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/template/alt-text": [
      "error"
    ]
  }
}
```

<br>

#### ✅ Valid Code

```html
<input type="image" aria-labelledby="id1">
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/template/alt-text": [
      "error"
    ]
  }
}
```

<br>

#### ✅ Valid Code

```html
<object [title]="title" [other]="val"></object>
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/template/alt-text": [
      "error"
    ]
  }
}
```

<br>

#### ✅ Valid Code

```html
<object [attr.aria-label]="desc" [custom]="x"></object>
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/template/alt-text": [
      "error"
    ]
  }
}
```

<br>

#### ✅ Valid Code

```html
<area [alt]="altText" [id]="itemId">
```

<br>

---

<br>

#### Default Config

```json
{
  "rules": {
    "@angular-eslint/template/alt-text": [
      "error"
    ]
  }
}
```

<br>

#### ✅ Valid Code

```html
<area [attr.aria-label]="label" [prop]="p">
```

</details>

<br>
