[![Build Status](https://travis-ci.org/stealjs/system-define.svg?branch=master)](https://travis-ci.org/stealjs/system-define)
[![npm version](https://badge.fury.io/js/system-define.svg)](http://badge.fury.io/js/system-define)

# system-define

A better version of the `System.define` function than what is currently available. Has the following advantages:

* Registers a `moduleName` as providing a given `source` and then returns that source when `moduleName` is imported.
  * Doesn't prematurely instantiate or execute the module like System.define.

This is implemented as an extension for [StealJS](http://stealjs.com/) currently.

## Usage

For backwards compatibility this extension does not overwrite System.define but instead creates a System._define. The goal is that when the new spec is released (without a System.define), this will be renamed to System.define (or System.loader.define or whatever).

## License

MIT
