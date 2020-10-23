import styled from 'styled-components'

export const Div = styled.div`
    display: grid;
    grid-template-columns: 1.14fr 1fr;
    height: 100%;
`
export const LeftSide = styled.div`
    background: #201932 0% 0% no-repeat padding-box;
    padding: 0.9375rem 1.25rem;
`
export const RighSide = styled.div`
    box-shadow: 0px 0px 40px #00000096;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 3.3125rem;
    align-items: center;
`
export const Title = styled.p`
    font-size: 1.0625rem;
    font-weight: medium;
    margin: 0;
`
export const Detail = styled.div`
    margin-top: 2.6875rem;
    & div:nth-child(n) {
        border-top: 1px solid #312946;
    }
`

export const Box = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1.5rem 0;

`

export const Desc = styled.p`
    margin: 0;
    font-weight: medium;
    font-size: 0.9375rem;
`

export const Time = styled.p`
    margin: 0;
    font-weight: medium;
    font-size: 0.9375rem;
    letter-spacing: 0px;
    color: #FFE926;
`

export const FooterText = styled.p`
    margin: 0;
    margin-top: 4.375rem;
    margin-bottom: 5.6875rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #B2AAC5;
    font-size: 0.8125rem;
    font-weight: medium;
`

export const PrizeImg = styled.img`
    width: 90%;
    height: 75%;
`
export const PrizeDetail = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Prize = styled.p`
    margin: 0;
    font-weight: 600;
    font-size: 2.5rem;
    line-height: 1;
    color: #FFE926;
    opacity: 1;
    margin-bottom: 1.25rem;
`

export const Type = styled.span`
    font-size: 0.9375rem;
    margin-left: 5px;
`

export const PrizeBox = styled.div`
    width: 14.0625rem;
    height: 2.1875rem;
    background: #413858;
    border-radius: 1.125rem;
    display: flex;
    align-items: center;
    padding: 0 1.125rem;
    justify-content: space-between;
    margin-bottom: 5px;
`
export const Place = styled.div`
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    font-weight: medium;
    & > svg {
        width: 1.125rem;
        height: 1.125rem;
        margin-right: 0.625rem;
    }
`
export const Text = styled.p`
    margin: 0;
`

export const PlacePrize = styled.p`
    margin: 0;
`

export const StartButton = styled.button`
    border: none;
    &:focus {
        outline: none;
    };
    width: 8.4375rem;
    height: 3.875rem;
    background: #2DBFB5 0% 0% no-repeat padding-box;
    border-radius: 5px;
    opacity: 1;
    font-size: 1.1875rem;
    font-weight: medium;
    align-self: flex-end;
    margin: 0.625rem;
    color: white;
`
