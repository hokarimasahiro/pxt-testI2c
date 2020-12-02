// Auto-generated. Do not edit.



    //% weight=70 color=#1eb0f0 icon="\uf0ad" block="i2c"
declare namespace testi2c {

    /**
     * test read i2c device
     * @param ad i2c address, eg: 0x32
     */
    //% blockId=test_read_i2c_device block="test read i2c device %ad" shim=testi2c::testReadI2c
    function testReadI2c(ad: int32): uint32;

    /**
     * test write i2c device
     * @param ad i2c address, eg: 0x32
     */
    //% blockId=test_write_i2c_device block="test write i2c device %ad" shim=testi2c::testWriteI2c
    function testWriteI2c(ad: int32): uint32;
}

// Auto-generated. Do not edit. Really.
