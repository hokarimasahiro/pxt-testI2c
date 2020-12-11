#include "pxt.h"
namespace testi2c {
  uint32_t testi2cr(int32_t ad)
  {
      Buffer buf = createBuffer(2);
      return uBit.i2c.read(address << 1, (BUFFER_TYPE)buf->data, 0, false);
  }
  uint32_t testi2cw(int32_t ad)
  {
      Buffer buf = createBuffer(2);
      return uBit.i2c.write(address << 1, (BUFFER_TYPE)buf->data, 0, false);
  }
}
