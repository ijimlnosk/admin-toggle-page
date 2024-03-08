import styled from "styled-components";

const Main = () => {
    return (
        <Container>
            <div>메인 페이지입니다</div>
        </Container>
    );
};
export default Main;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2b2b2b;
`;
