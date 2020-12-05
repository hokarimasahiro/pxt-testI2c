//% weight=70 color=#1eb0f0 icon="\uf0ad" block="i2c"
namespace testi2c {

    /**
      * test read i2c device
      * @param ad i2c address, eg: 0x32
      */
    //% blockId=test_read_i2c_device block="test read i2c device %ad"
    //% shim=testi2c::testi2cr
    export function testRead(ad: number): number {
        return (testi2cr(ad));
    }
    /**
      * test write i2c device
      * @param ad i2c address, eg: 0x32
      */
    //% blockId=test_write_i2c_device block="test write i2c device %ad"
    //% shim=testi2c::testi2cw
    export function testWrite(ad: number): number {
        return (testi2cw(ad));
    }
}
