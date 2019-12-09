//token加密key
const secretOrPrivateKey = "~!@#$(*&^%$&";


exports.jwt = () => {
    return {
    	secretOrPrivateKey:secretOrPrivateKey
    }
}