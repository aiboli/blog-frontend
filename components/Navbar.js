import { Nav } from 'react-bootstrap';

export default function Navbar() {
    return (
        <Nav
            activeKey="/"
        >
            <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/blogs" eventKey="link-1">Blogs</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/contact" eventKey="link-2">Contact</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}
