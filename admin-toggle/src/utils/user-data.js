import { createKoreanName } from "./create-korean-name";
import { RandomBirthDay } from "./random-birthdaty";
import { RandomLastLogin } from "./random-last-login";
import { RandomPhoneNumber } from "./random-phone-number";

/**
 * @function
 * @parameter userDataNum: number - 생성될 user data의 개수를 받아옵니다
 * @returns {Array<Obect>}
 *
 * @description 랜덤하게 생성된 데이터를 하나의 객체로 만들어 userData의 개수만큼 생성하여 배열로 보여주는 함수입니다.
 */
export const CreateUserData = ({ userDataNum }) => {
    const users = [];

    for (let i = 0; i < userDataNum; i++) {
        // users에 추가
        users.push({
            user_id: i + 1, // 겹치지 않게 1부터 하나씩 증가하면서 생성
            name: createKoreanName(), // 랜덤하게 생성된 한국이름
            birthday: RandomBirthDay(), // 랜덤하게 생성된 생년월일
            phone_number: RandomPhoneNumber(), // 랜덤하게 생성된 전화번호
            last_login: RandomLastLogin(), // 랜덤하게 생성된 마지막 로그인일자
        });
    }
    return users;
};
