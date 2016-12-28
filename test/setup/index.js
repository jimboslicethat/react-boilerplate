const chai = require('chai')
const sinonChai = require('sinon-chai')
import { expect } from 'chai'

chai.use(sinonChai)
chai.should()

global.expect = expect

// Add addiiton methods here if needed:
