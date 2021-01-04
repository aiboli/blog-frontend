import { Nav } from 'react-bootstrap';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
    return (
        <Nav
            activeKey="/"
            className={styles.myNav}
        >
            <Nav.Item>
                <Nav.Link href="/"><h5>Home</h5></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/articles" eventKey="link-1"><h5>Articles</h5></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/contact" eventKey="link-2"><h5>Contact</h5></Nav.Link>
            </Nav.Item>
        </Nav>
    )
}
