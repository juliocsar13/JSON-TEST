var chai = require('chai');


chai.config.includeStack =  true;
global.except = chai.except;
global.AssertionError = chai.AssertionError;
global.Assertion = chai.Assertion;
global.assert = chai.assert; 