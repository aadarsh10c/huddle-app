import { styled } from "styled-components";

export const Flex = styled.div`
    display: flex;
    align-items: center;

    & > div,
    & > ul {
        flex: 1;
    }

    @media ( max-width: ${({ theme }) => theme.mobile.width}) {
        font-size: .8em;
        flex-direction: column;
        text-align: center;
    }
`