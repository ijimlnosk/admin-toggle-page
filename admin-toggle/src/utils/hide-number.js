/**
 * @function
 * @parameter phoneNumber: string - 000-0000-0000 형식의 전화번호
 * @returns {string} 000-****-0000 형식으로 변환된 전화번호를 반환
 *
 * @description 전화번호를 받아와 000-****-0000의 형태로 변환시켜주는 함수입니다.
 */
export const HideNumber = (phoneNumber) => {
    const phone = phoneNumber.replace(/\D/g, "");

    const result = `${phone.slice(0, 3)}-****-${phone.slice(7)}`;
    return result;
};
