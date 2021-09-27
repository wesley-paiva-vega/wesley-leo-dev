import Header from '../Header';
import Button from '../Button';
import { useHistory } from 'react-router';

export default function Portifolio() {

    const history = useHistory();
    const handleClickRouter = (path) => {
        history.push(`/${path}`)
    }

    return (
        <>
            <Header>
                <p>Welcome to My Portifolio Page</p>
                <Button onClick={() => handleClickRouter("home")}>Go to Home Page</Button>
            </Header>
        </>
    )
}