import React from 'react';
import { Container, Content, Dropdown, Header, Nav, Navbar, Sidebar, Sidenav } from 'rsuite';
import { BrowserRouter, Link } from 'react-router-dom';
import Page1 from '../pages/Page-1';

import Dashboard from '@rsuite/icons/Dashboard';
import AngleLeft from '@rsuite/icons/legacy/AngleLeft';
import AngleRight from '@rsuite/icons/legacy/AngleRight';
import Cog from '@rsuite/icons/legacy/Cog';
import GearCircle from '@rsuite/icons/legacy/GearCircle';
import Group from '@rsuite/icons/legacy/Group';
import LogoAnalytics from '@rsuite/icons/legacy/LogoAnalytics';
import Magic from '@rsuite/icons/legacy/Magic';
import AppRoutes from '../routes';

const headerStyles = {
  padding: 18,
  fontSize: 16,
  height: 56,
  background: '#34c3ff',
  color: ' #fff',
  whiteSpace: 'nowrap',
  overflow: 'hidden'
};

const iconStyles = {
  width: 56,
  height: 56,
  padding: 18,
  lineHeight: '56px',
  textAlign: 'center'
};

const NavALink = React.forwardRef(({ href, children, ...rest }, ref) => (
  <Link role='link' ref={ref} to={href} {...rest}>
    {children}
  </Link>
));

const NavToggle = ({ expand, onChange }) => {
  return (
    <Navbar appearance="subtle" className="nav-toggle">
      <Navbar.Body>
        {/* <Nav>
          <Dropdown
            placement="topStart"
            trigger="click"
            renderTitle={children => {
              return <Cog style={iconStyles} />;
            }}
          >
            <Dropdown.Item>Help</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </Nav> */}

        <Nav pullRight>
          <Nav.Item onClick={onChange} style={{ width: 56, textAlign: 'center' }}>
            {expand ? <AngleLeft /> : <AngleRight />}
          </Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};

const Layout = () => {
  const [expand, setExpand] = React.useState(true);
    
  return (
    <div className="show-fake-browser sidebar-page">
    <BrowserRouter>
      <Container>
        <Sidebar
          style={{ display: 'flex', flexDirection: 'column' }}
          width={expand ? 260 : 56}
          collapsible
        >
          <Sidenav.Header>
            <div style={headerStyles}>
              <LogoAnalytics style={{ fontSize: 20 }} />
              <span style={{ marginLeft: 12 }}> BRAND</span>
            </div>
          </Sidenav.Header>
          <Sidenav expanded={expand} defaultOpenKeys={['3']} appearance="default">
            <Sidenav.Body className="navBodyStyle">
              <Nav>
                <Nav.Item as={NavALink} href="/dashboard" icon={<Dashboard />}>
                  Dashboard
                </Nav.Item>
                <Nav.Item as={NavALink} href="/page1" eventKey="2" icon={<Group />}>
                  User Group
                </Nav.Item>
                <Dropdown
                  eventKey="3"
                  trigger="hover"
                  title="Masters"
                  icon={<Magic />}
                  placement="rightStart"
                >
                <Dropdown.Item as={NavALink} href="/customer-list">Customers</Dropdown.Item>
                  <Dropdown.Item eventKey="3-2">Devices</Dropdown.Item>
                  <Dropdown.Item eventKey="3-3">Brand</Dropdown.Item>
                  <Dropdown.Item eventKey="3-4">Loyalty</Dropdown.Item>
                  <Dropdown.Item eventKey="3-5">Visit Depth</Dropdown.Item>
                </Dropdown>
                <Dropdown
                  eventKey="4"
                  trigger="hover"
                  title="Settings"
                  icon={<GearCircle />}
                  placement="rightStart"
                >
                  <Dropdown.Item eventKey="4-1">Applications</Dropdown.Item>
                  <Dropdown.Item eventKey="4-2">Websites</Dropdown.Item>
                  <Dropdown.Item eventKey="4-3">Channels</Dropdown.Item>
                  <Dropdown.Item eventKey="4-4">Tags</Dropdown.Item>
                  <Dropdown.Item eventKey="4-5">Versions</Dropdown.Item>
                </Dropdown>
              </Nav>
            </Sidenav.Body>
          </Sidenav>
          <NavToggle expand={expand} onChange={() => setExpand(!expand)} />
        </Sidebar>

        <Container className="mainContainer"> 
          <Header>
            <Navbar appearance="inverse">
              <Navbar.Brand >
                <a className="navbar-brand logo">Brand</a>
              </Navbar.Brand >
              <Nav pullRight>
                {/* <Nav.Item icon={<Cog />}>Settings</Nav.Item> */}
                <Dropdown title="Settings" icon={<Cog />} placement="bottomEnd">
                  <Dropdown.Item>My Account</Dropdown.Item>
                  <Dropdown.Item divider />
                  <Dropdown.Item>Help</Dropdown.Item>
                  <Dropdown.Item style={{ width: 160 }}>About</Dropdown.Item>
                  <Dropdown.Item divider />
                  <Dropdown.Item>Sign out</Dropdown.Item>
                </Dropdown>
              </Nav>
            </Navbar>
          </Header>
          
          <Content>
            <AppRoutes/>
          </Content>
          
        </Container>
      </Container>
      </BrowserRouter>
    </div>
  );
};

export default Layout;