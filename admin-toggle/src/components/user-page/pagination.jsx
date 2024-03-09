import styled from "styled-components";
import UserList from "./user-list";

/**
 * @component
 * @parameter userPerPage: number - 현재 페이지의 번호를 받아옵니다
 * @parameter userData: Array<Object> - 전체 유저의 데이터를 받아옵니다
 * @parameter sort: string - 현재 정렬의 값을 받아옵니다
 * @returns {JSX.Element}
 *
 * @description pagination을 하게해주는 페이지입니다
 */
const Pagination = ({ curPage, setCurPage, userPerPage, userData }) => {
    const perPageGroup = 5;
    // userData.length를 userPerPage로 나누어서 올림
    const pageCount = Math.ceil(userData.length / userPerPage);

    // queryParams의 key값 (page)의 value
    const params = Number(curPage.get("page"));

    const paginate = (page) => {
        curPage.set("page", page);
        setCurPage(curPage);
    };

    const pageNumbers = () => {
        const startPage =
            Math.floor((params - 1) / perPageGroup) * perPageGroup + 1;
        const endPage = Math.min(startPage + perPageGroup - 1, pageCount);

        return Array.from({ length: endPage - startPage + 1 }, (_, index) => (
            <Li key={index}>
                <Button
                    onClick={() => {
                        paginate(index + startPage);
                    }}
                    $isActive={params === index + startPage}
                >
                    {index + startPage}
                </Button>
            </Li>
        ));
    };

    const prevPage = () => {
        if (params > 1) {
            paginate(params - 1);
        }
    };

    const prevGroup = () => {
        const prevPageGroup =
            (Math.ceil(params / perPageGroup) - 2) * perPageGroup + 1;
        if (prevPageGroup < 1) return;
        if (prevPageGroup <= pageCount) {
            paginate(prevPageGroup);
        }
    };

    const nextPage = () => {
        if (params < pageCount) {
            paginate(params + 1);
        }
    };

    const nextGroup = () => {
        const nextPageGroup =
            Math.ceil(params / perPageGroup) * perPageGroup + 1;
        console.log(nextPageGroup, "nextPageGroup");
        console.log(pageCount, "pageCount");
        if (nextPageGroup <= pageCount) {
            paginate(nextPageGroup);
        }
    };

    return (
        <Wrapper>
            <UserList
                userData={userData}
                userPerPage={userPerPage}
                curPage={curPage}
            />
            <PageNumber>
                <Ul>
                    <Li>
                        <Button onClick={prevGroup}>&lt;&lt;</Button>
                    </Li>
                    <Li>
                        <Button onClick={prevPage}>&lt;</Button>
                    </Li>
                    {pageNumbers()}
                    <Li>
                        <Button onClick={nextPage}>&gt;</Button>
                    </Li>
                    <Li>
                        <Button onClick={nextGroup}>&gt;&gt;</Button>
                    </Li>
                </Ul>
            </PageNumber>
        </Wrapper>
    );
};
export default Pagination;

const Wrapper = styled.div`
    padding-top: 30px;
`;

const PageNumber = styled.div`
    display: flex;
    justify-content: center;
`;

const Ul = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
`;

const Li = styled.li`
    padding: 0 4px;
`;

const Button = styled.button`
    cursor: pointer;
    background-color: ${(props) =>
        props.$isActive ? "#747264" : "transparent"};
    color: ${(props) => (props.$isActive ? "#eeedeb" : "#e0ccbe")};
    border: ${(props) => (props.$isActive ? "1px solid #3c3633" : "#ddd")};
    border-radius: 4px;
    font-size: 20px;

    &:hover {
        background-color: ${(props) =>
            props.$isActive ? "#362222" : "#423f3e"};
    }
`;
