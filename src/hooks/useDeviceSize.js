import {useMedia} from './useMedia';

export const DeviceSizes = {
    DEFAULT: 'DEFAULT',
    SMALL: 'SMALL',
    MEDIUM: 'MEDIUM',
    LARGE: 'LARGE',
    XLARGE: 'XLARGE'
};

export const useDeviceSize = (sizeObj) => {
    const sm = useMedia('(min-width: 576px)');
    const md = useMedia('(min-width: 760px)');
    const lg = useMedia('(min-width: 992px)');
    const xl = useMedia('(min-width: 1200px)');

    let deviceSize = DeviceSizes.DEFAULT;

    if (xl) {
        deviceSize = DeviceSizes.XLARGE;
    } else if (lg) {
        deviceSize = DeviceSizes.LARGE;
    } else if (md) {
        deviceSize = DeviceSizes.MEDIUM;
    } else if (sm) {
        deviceSize = DeviceSizes.SMALL;
    }

    if (sizeObj) {
        let result = sizeObj.default;

        switch (deviceSize) {
            case DeviceSizes.XLARGE:
                if (sizeObj.xl) {
                    result = sizeObj.xl;
                    break;
                }
            //fall through
            case DeviceSizes.LARGE:
                if (sizeObj.lg) {
                    result = sizeObj.lg;
                    break;
                }
            //fall through
            case DeviceSizes.MEDIUM:
                if (sizeObj.md) {
                    result = sizeObj.md;
                    break;
                }
            //fall through
            case DeviceSizes.SMALL:
                if (sizeObj.sm) {
                    result = sizeObj.sm;
                    break
                }
            //fall through
            default:
                break;
        }

        return result;
    }

    return deviceSize;
};

