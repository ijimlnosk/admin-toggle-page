import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SideMenu = () => {
    const [open, setOpen] = useState(localStorage.getItem("openMenu"));
    const [active, setActive] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem("openMenu", open);
    }, [open]);

    const manageMent = [
        {
            name: "main",
            title: "홈",
            items: [{ title: "메인으로", url: "" }],
        },
        {
            name: "user_manager",
            title: "회원관리",
            items: [
                { title: "회원목록", url: "user-list" },
                { title: "회원등록", url: "user-add" },
            ],
        },
        {
            name: "product_manager",
            title: "상품관리",
            items: [
                { title: "상품목록", url: "product-list" },
                { title: "상품등록", url: "product-add" },
            ],
        },
    ];

    const toggleMenu = (name) => {
        setOpen(open === name ? null : name);
    };

    const onClickNavi = (url) => {
        setActive(url);
        navigate(`${url}`);
    };

    return (
        <Container>
            {manageMent.map((item, i) => (
                <div key={i}>
                    <Title onClick={() => toggleMenu(item.name)}>
                        {item?.title}
                    </Title>
                    {open === item.name && (
                        <Toggle>
                            {item.items?.map((data, index) => (
                                <SelectToggle
                                    key={index}
                                    onClick={() => onClickNavi(data.url)}
                                    disabled={active === data.url}
                                    $isActive={active === data.url}
                                >
                                    {data.title}
                                </SelectToggle>
                            ))}
                        </Toggle>
                    )}
                </div>
            ))}
        </Container>
    );
};
export default SideMenu;

const Container = styled.div`
    width: 100px;
    height: 200px;
    position: fixed;
    top: 100px;
    right: 30px;
    box-shadow: 1px 1px 1px 2px #171010;
    border-radius: 4px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 20px;
    z-index: 999;
    background-color: #423f3e;
`;

const ToMain = styled.div`
    padding-bottom: 4px;
    color: #aaa;
    background-color: #423f3e;
    cursor: pointer;
`;

const Title = styled.div`
    cursor: pointer;
    padding-bottom: 5px;
    color: #aaa;
`;

const Toggle = styled.div`
    overflow: hidden;
    padding-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const SelectToggle = styled.button`
    padding: 5px;
    background-color: ${(props) => (props.$isActive ? "#171010" : "#423f3e")};
    color: ${(props) => (props.$isActive ? "#888" : "#aaa")};
    border: none;
    border-radius: 4px;
    cursor: ${(props) => (props.$isActive ? "default" : "pointer")};

    &:disabled {
        opacity: 0.5;
    }
`;
