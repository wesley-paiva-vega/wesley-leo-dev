import * as Styled from './styles'

export function Tooltip ({open}) {
    return (
        <>
            {open && (
                <Styled.Tooltip>This is A better Tooltip of The World</Styled.Tooltip>
            )}
        </>
    )
}