import Header from '../Header';
import Button from '../Button';
import { useHistory } from 'react-router';

export default function Contato() {

    const history = useHistory();
    const handleClickRouter = (path) => {
        history.push(`/${path}`)
    }

    return (
        <>
            <Header>
                <p>Welcome to My Contact Page</p>
                <Button onClick={() => handleClickRouter("home")}>Go to Home Page</Button>
            </Header>

        </>
    )
}