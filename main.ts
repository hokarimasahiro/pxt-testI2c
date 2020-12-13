//% weight=70 color=#1eb0f0 icon="\uf0ad" block="i2c"
namespace testi2c {

    /**
      * test read i2c device
      * @param ad i2c address, eg: 0x32
      */
    //% blockId=test_read_i2c_device block="test read i2c device %ad"
    //% shim=testi2c::testi2cr
    export function testRead(ad: number): number {
        basic.pause(100);
        if(ad>>4==(ad & 0xf)) return (0);
        else return (-1);
    }
    /**
      * test write i2c device
      * @param ad i2c address, eg: 0x32
      */
    //% blockId=test_write_i2c_device block="test write i2c device %ad"
    //% shim=testi2c::testi2cw
    export function testWrite(ad: number): number {
        basic.pause(50);
        if(ad>>4==((ad & 0xf)-2)) return (0);
        else return (-1);
    }
}
