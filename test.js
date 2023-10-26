const checkVAT = require('./').checkVAT;
const { france } = require('./');

console.log({
  test: checkVAT('FRAB 123456789|||L7 123456789', [france]),
  test1: checkVAT('FRXX123456789', [france]),
  test2: checkVAT('FRX1234567891', [france]),
  test3: checkVAT('FR02338297229', [france])
});
