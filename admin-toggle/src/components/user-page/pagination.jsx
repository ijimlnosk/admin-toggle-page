import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
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
const Pagination = ({ curPage, setCurpage, userPerPage, userData }) => {
    const location = useLocation();
    const [currentPage, setCurrentPage] = useState(1);
    const perPageGroup = 5;

    // ?page=1&per_page=20 --- queryString
    const queryParams = new URLSearchParams(location.search);

    // queryParams의 key값 (page)의 value
    const params = Number(queryParams.get("page"));

    useEffect(() => {
        if (params <= perPageGroup) {
            setCurrentPage(1);
        }
        if (params > perPageGroup) {
            setCurrentPage(2);
        }
    }, [params]);

    // userData.length를 userPerPage로 나누어서 올림
    const pageCount = Math.ceil(userData.length / userPerPage);

    const paginate = (page) => {
        curPage.set("page", page);
        setCurpage(curPage);
    };

    const pageNumbers = () => {
        const startPage = (currentPage - 1) * perPageGroup + 1;
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
            const newPage = params - 1;
            paginate(newPage);
        }
    };

    const prevGroup = () => {
        paginate(1);
        setCurrentPage(1);
    };

    const nextPage = () => {
        if (params < pageCount) {
            const newPage = params + 1;
            paginate(newPage);
        }
    };

    const nextGroup = () => {
        paginate(1 + perPageGroup);
    };

    return (
        <Wrapper>
            <UserList userData={userData} userPerPage={userPerPage} />
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
        props.$isActive ? "#171010" : "transparent"};
    color: ${(props) => (props.$isActive ? "#fff" : "#000")};
    border: ${(props) => (props.$isActive ? "1px solid #171010" : "#ddd")};
    border-radius: 4px;

    &:hover {
        background-color: ${(props) =>
            props.$isActive ? "#362222" : "#423f3e"};
    }
`;
