import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDisplay } from './displaySlice';
import { setLogin } from '../../loginSlice';
import { Menu, Avatar, Affix, Button } from 'antd';
import {
  ExperimentOutlined,
  ShoppingCartOutlined,
  SettingOutlined,
  UserOutlined,
  ToolOutlined,
  DatabaseOutlined,
  DeploymentUnitOutlined,
  PaperClipOutlined,
  BellOutlined,
  HeartOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';

const { SubMenu } = Menu;

const StyledMenu = styled(Menu)`
  width: 20vw;
  height: 150vh;
  position: sticky;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  color: #e4e4e4;
  margin: 2rem 1.5rem;
  font-family: 'MuseoModerno', cursive;
  font-weight: 600;
  /* text-align: center; */
  letter-spacing: 0.2rem;
`;

const SignOutButton = styled(Button)`
  background: none;
  color: #1890ff;
  border-color: #1890ff;
  /* margin: 19rem 2rem 0 2rem; */
  position: absolute;
  top: 93vh;
  left: 25px;
  width: 10vw;
`;

const NavContainer = (props) => {
  const dispatch = useDispatch();

  // Set state for current selection highlighting
  const [current, setCurrent] = useState(1);

  // Change display state depending on category button click
  const handleClick = (e) => {
    setCurrent(e.key);
    dispatch(setDisplay(e.key));
  };

  const handleSignOut = () => {
    dispatch(setLogin(false));
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  };

  return (
    <>
      <Affix offsetTop={0}>
        <StyledMenu
          theme={'dark'}
          onClick={handleClick}
          // style={{ width: '20vw', height: '100vh', position: 'sticky' }}
          defaultOpenKeys={['sub1']}
          selectedKeys={[current]}
          mode="inline">
          <Title
            onClick={() => {
              dispatch(setDisplay('default'));
            }}>
            storeroom
          </Title>
          <SubMenu key="sub1" icon={<DatabaseOutlined />} title="Inventory">
            <Menu.Item key="consumables" icon={<PaperClipOutlined />}>
              Consumables
            </Menu.Item>
            <Menu.Item key="reagents" icon={<ExperimentOutlined />}>
              Reagents
            </Menu.Item>
            <Menu.Item key="cells" icon={<DeploymentUnitOutlined />}>
              Cell Lines
            </Menu.Item>
            <Menu.Item key="equipment" icon={<ToolOutlined />}>
              Equipment
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<ShoppingCartOutlined />} title="Order">
            <Menu.Item key="5">VWR</Menu.Item>
            <Menu.Item key="6">ThermoFisher</Menu.Item>
            <Menu.Item key="7">Barker Hall</Menu.Item>
          </SubMenu>
          <SubMenu icon={<UserOutlined />} key="sub4" title="Profile">
            <Menu.Item icon={<HeartOutlined />} key="9">
              Favorites
            </Menu.Item>
            <Menu.Item icon={<SettingOutlined />} key="10">
              Settings
            </Menu.Item>
            <Menu.Item icon={<BellOutlined />} key="11">
              Reminders
            </Menu.Item>
          </SubMenu>
          <SignOutButton type="round" onClick={handleSignOut}>
            Sign out
          </SignOutButton>
        </StyledMenu>
      </Affix>
    </>
  );
};

export default NavContainer;
