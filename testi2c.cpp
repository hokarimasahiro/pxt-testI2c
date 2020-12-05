#include "pxt.h"

namespace testi2c {
  /**
    * test read i2c device
    * @param ad i2c address, eg: 0x32
    */
    //% blockId=test_read_i2c_device block="test read i2c device %ad"
  uint32_t testi2cr(int32_t ad)
  {
    char buf[2];
    return uBit.i2c.read(ad << 1,buf,0,false);
  }
  /**
    * test read i2c device
    * @param ad i2c address, eg: 0x32
    */
    //% blockId=test_write_i2c_device block="test write i2c device %ad"
  uint32_t testi2cw(int32_t ad)
  {
    char buf[2];
    return uBit.i2c.write(ad << 1,(const char *)buf,0,false);
  }
}
