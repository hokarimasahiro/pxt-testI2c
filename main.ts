//% weight=70 color=#1eb0f0 icon="\uf0ad" block="i2c"
namespace testi2c {

    /**
      * test read i2c device
      * @param ad i2c address, eg: 0x32
      */
    //% blockId=test_read_i2c_device block="test read i2c device %ad"
    export function testRead(ad: number): number {
        let buf=pins.i2cReadBuffer(ad, 8)
        for (let i=0;i<8;i++){
            if(buf[i]>0) return (0);
        }
        return (-1);
    }
    /**
      * test write i2c device
      * @param ad i2c address, eg: 0x32
      */
    //% blockId=test_write_i2c_device block="test write i2c device %ad"
    export function testWrite(ad: number): number {
        let buf=pins.i2cReadBuffer(ad, 8)
        for (let i=0;i<8;i++){
            if(buf[i]>0) return (0);
        }
        return (-1);
    }
}
