/**
 * @function
 * @returns {string} yyyy.mm.dd 형식으로 날짜를 반환
 *
 * @description yyyy.mm.dd의 형식으로 생년월일을 보여주는 함수입니다
 */
export const RandomBirthDay = () => {
    // 현재 시간에서 랜덤하게 생성된 값을 빼서 birthDate를 생성
    // 최대 100년 이전
    // 생성된 값을 split("T")[0]으로 "T" 이전만 가져옴
    const birthDate = new Date(
        Date.now() -
            Math.floor(Math.random() * (100 * 365 * 24 * 60 * 60 * 1000))
    )
        .toISOString()
        .split("T")[0];
    return birthDate;
};
