// middleware
import { appMiddleware } from './../middleware/appMiddleware';

const allMiddleware = [
    appMiddleware
    // logger // uncomment when be needed debug actions
];

export default allMiddleware;
