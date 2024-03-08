/**
 * @function
 * @returns {string} yyyy.MM.dd.hh.mm.ss 형태로 반환
 *
 * @description yyyy.MM.dd.hh.mm.ss의 형태로 현재와 100일전까지의 시간을 년월일시간을 보여주는 함수입니다
 */
export const RandomLastLogin = () => {
    // 현재 시간에서 랜덤하게 생성된 값을 빼서 lastLoginData를 생성
    // 최대 100일 이전
    const lastLoginData = new Date(
        Date.now() - Math.floor(Math.random() * (100 * 24 * 60 * 60 * 1000))
    );

    // 받아온 data를 문자열로 변환 후 최소한 2자리로 보이도록 해주는 함수
    const toStringPadStart = (data) => {
        return data.toString().padStart(2, "0");
    };

    const year = lastLoginData.getFullYear();
    const month = toStringPadStart(lastLoginData.getMonth() + 1);
    const day = toStringPadStart(lastLoginData.getDate());
    const hour = toStringPadStart(lastLoginData.getHours());
    const minutes = toStringPadStart(lastLoginData.getMinutes());
    const seconds = toStringPadStart(lastLoginData.getSeconds());

    const formattedLastLogin = `${year}.${month}.${day}.${hour}.${minutes}.${seconds}`;

    return formattedLastLogin;
};
