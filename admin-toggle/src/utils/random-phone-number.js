/**
 * @function
 * @returns {string}
 *
 * @description 랜덤한 전화번호를 생성해주는 함수입니다.
 */
export const RandomPhoneNumber = () => {
    const firstNum = Math.floor(1000 + Math.random() * 9000);
    const lastNum = Math.floor(1000 + Math.random() * 9000);
    const phoneNumber = `010-${firstNum}-${lastNum}`;

    return phoneNumber;
};
