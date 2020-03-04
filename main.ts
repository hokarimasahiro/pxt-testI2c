//% weight=70 color=#1eb0f0 icon="\uf0ad" block="i2c"
namespace testi2c {

    //% shim=testi2c::testi2cr
    function testi2cr(n: number): number {
        return -1;
    }
    //% shim=testi2c::testi2cw
    function testi2cw(n: number,d:number): number {
        return -1;
    }
    /**
      * test read i2c device
      * @param ad i2c address, eg: 0x32
      */
    //% blockId=test_read_i2c_device block="test read i2c device %ad"
    export function testReadI2c(ad: number): number {
        return (testi2cr(ad));
    }
    /**
      * test write i2c device
      * @param ad i2c address, eg: 0x32
      */
    //% blockId=test_write_i2c_device block="test write i2c device %ad"
    export function testWriteI2c(ad: number,dt:number): number {
        return (testi2cw(ad,dt));
    }
}