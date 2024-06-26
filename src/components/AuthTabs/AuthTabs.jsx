import React, { useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { NavLink, useLocation } from 'react-router-dom';

import { AuthTabsContainer } from './AuthTabs.styled';
import LoginForm from 'components/LoginForm/LoginForm';
import RegisterForm from 'components/RegisterForm/RegisterForm';

const AuthTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const location = useLocation();

  const handleTabChange = index => {
    setActiveTab(index);
  };

  useEffect(() => {
    const { pathname } = location;
    if (pathname === '/authentication/register') {
      setActiveTab(0);
    } else if (pathname === '/authentication/login') {
      setActiveTab(1);
    }
  }, [location]);

  return (
    <AuthTabsContainer>
      <Tabs selectedIndex={activeTab} onSelect={handleTabChange}>
        <TabList>
          <Tab>
            <NavLink to="/authentication/register">Реєстрація</NavLink>
          </Tab>
          <Tab>
            <NavLink to="/authentication/login">Увійти</NavLink>
          </Tab>
        </TabList>

        <TabPanel>
          <RegisterForm />
        </TabPanel>

        <TabPanel>
          <LoginForm />
        </TabPanel>
      </Tabs>
    </AuthTabsContainer>
  );
};

export default AuthTabs;
