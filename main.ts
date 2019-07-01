//% weight=70 color=#1eb0f0 icon="\u3041" block="i2c"
namespace testi2c {

    //% shim=testi2c::test
    function test(n: number): number {
        return 0;
    }
    /**
      * test i2c device
      * @param ad i2c address, eg: 0x32
      */
    //% blockId=test_i2c_device block="test i2c device %ad"
    export function testi2c(ad: number): number {
        return (test(ad));
    }
}