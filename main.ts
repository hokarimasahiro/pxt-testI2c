    //% weight=70 color=#1eb0f0 icon="\uf0ad" block="i2c"
declare namespace testi2c {

    /**
     * test read i2c device
     * @param ad i2c address, eg: 0x32
     */
    //% blockId=test_read_i2c_device block="test read i2c device %ad" shim=testi2c::testRead
    export function testRead(ad: int32): uint32;

    /**
     * test write i2c device
     * @param ad i2c address, eg: 0x32
     */
    //% blockId=test_write_i2c_device block="test write i2c device %ad" shim=testi2c::testWrite
    export function testWrite(ad: int32): uint32;
}
