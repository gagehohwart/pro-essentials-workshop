# Using TypeScript As A Linter

## Learning Goals

- Understand how TypeScript is used in most modern frontend apps

## Problem

You'll notice that our `dist` folder has disappeared. When you run this exercise, we're not appearing to generate any JavaScript code.

Try cd-ing to the directory and running `tsc`. You'll notice that no JavaScript code is being emitted. Why is that?

- Take a look at the `tsconfig.json`
- Take a look at the options there. See if you can find one that decides whether TypeScript emits JavaScript code or not.

## Solution

noEmit: true causes this, and the reason is to ignore the bundling since vite is already doing that on its own. vite however does not do any type checking. that is handled by ts cli still, which is making it work _as_ typescript.
