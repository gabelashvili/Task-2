import styled from 'styled-components'

export const Header = styled.nav`
    width: 100%;
    height: 3.75rem;
    background: #3D2F60 0% 0% no-repeat padding-box;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.625rem;
`

export const Tabs = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-auto-flow: column;
    width: max-content;
    grid-column-gap: 2.3125rem;
       align-items: center;
    justify-content: center;
    height: 100%;
    margin-left: 0.625rem;
    cursor: pointer;
`
export const ActiveBorder = styled.div`
    width: 100%;
    height: 0.25rem;
    background: #FF00B2 0% 0% no-repeat padding-box;
    border-radius: 4px 4px 0px 0px;
    opacity: 1;
    position: absolute;
    bottom: 0;
    display: none;
`

export const Tab = styled.li`
    min-width: 6.625rem;
    color: ${({ isActive }) => (isActive ? '#FFFF00' : '#FFFFFF')};
    font-weight: medium;
    font-size: 0.9375rem;
    letter-spacing: 0px;
    position: relative;
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
    & ${ActiveBorder}{
        display: ${({ isActive }) => isActive && 'block'}
    }
`

export const Online = styled.div`
    display: flex;
    align-items: center;
    & svg {
        fill: #95ee9d;
        width: 1.0625rem;
        height: 1.0625rem;
    }
    margin-right: 1.3125rem;
`

export const OnlinePlayer = styled.p`
    font-size: 14px;
    font-weight: medium;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    margin: 0;
    margin-left: 0.4375rem;
`
