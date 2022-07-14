export const init = (callback : () => void) : void => {
    console.log('default intialization finished');
    callback();
    console.log('all initialization finished');
}