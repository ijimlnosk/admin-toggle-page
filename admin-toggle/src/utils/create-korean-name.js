import { koreanFirstNames, koreanLastNames } from "../contants/korean-name";

/**
 * @function
 * @returns {string} 랜덤 생성된 한국 이름을 반환
 *
 * @description 한국이름을 랜덤으로 생성해주는 함수
 */
export const createKoreanName = () => {
    const firstName =
        koreanFirstNames[Math.floor(Math.random() * koreanFirstNames.length)];
    const lastName =
        koreanLastNames[Math.floor(Math.random() * koreanLastNames.length)];

    return `${firstName}${lastName}`;
};
