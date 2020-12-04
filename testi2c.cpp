#include "pxt.h"
#if MICROBIT_CODAL
#include "Pin.h"
#define PinCompat codal::Pin
#else
#define PinCompat MicroBitPin
#endif

namespace testi2c {
//%
  uint32_t testi2cr(int32_t ad)
  {
	char buf[2];
    return uBit.i2c.read(ad << 1,buf,0,false);
  }
//%
  uint32_t testi2cw(int32_t ad)
  {
	char buf[2];
    return uBit.i2c.write(ad << 1,(const char *)buf,0,false);
  }
}
