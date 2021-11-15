/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import type {ReportHandler} from 'web-vitals';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const reportWebVitals = (onPerfEntry?: ReportHandler) => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises, import/dynamic-import-chunkname, @typescript-eslint/typedef
        import('web-vitals').then(({
            getCLS, getFID, getFCP, getLCP, getTTFB,
        }) => {
            getCLS(onPerfEntry);
            getFID(onPerfEntry);
            getFCP(onPerfEntry);
            getLCP(onPerfEntry);
            getTTFB(onPerfEntry);
        });
    }
};

export default reportWebVitals;
