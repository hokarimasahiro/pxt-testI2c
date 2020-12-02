#include "pxt.h"

//% weight=70 color=#1eb0f0 icon="\uf0ad" block="i2c"
namespace testi2c {
    /**
      * test read i2c device
      * @param ad i2c address, eg: 0x32
      */
    //% blockId=test_read_i2c_device block="test read i2c device %ad"
  uint32_t testi2cr(int32_t ad)
  {
	char buf[2];
    return uBit.i2c.read((ad << 1) + 1,buf,0,false);
  }
    /**
      * test write i2c device
      * @param ad i2c address, eg: 0x32
      */
    //% blockId=test_write_i2c_device block="test write i2c device %ad"
  uint32_t testi2cw(int32_t ad)
  {
	char buf[2];
    return uBit.i2c.read((ad << 1) + 0,buf,0,false);
  }
}
