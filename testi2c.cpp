#include "pxt.h"

namespace testi2c {
//%
  uint32_t testi2cr(int32_t ad)
  {
	char buf[1];
    return uBit.i2c.read((ad << 1) + 1,buf,0,false);
  }
//%
  uint32_t testi2cw(int32_t ad,int32_t dt)
  {
	char buf[1];
    buf[0]=dt
    return uBit.i2c.write((ad << 1) + 0,buf,1,false);
  }
}
